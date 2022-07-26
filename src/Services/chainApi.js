import axios from "axios"

const YEAR_MILLIS = 31536000000

const axiosMap = {}

const getAxios = (chainName) => {
  if (axiosMap[chainName]) {
    return axiosMap[chainName]
  } else {
    const chainAxios = axios.create({
      baseURL: `https://rest.cosmos.directory/${chainName}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      timeout: 5000,
    })
    axiosMap[chainName] = chainAxios

    return chainAxios
  }
}

const getChainParams = async (api) => {
  let response

  response = await api.get("/cosmos/mint/v1beta1/annual_provisions")
  const annualProvisions = Number(response.data.annual_provisions)

  response = await api.get("/cosmos/mint/v1beta1/params")
  const blocksPerYear = Number(response.data.params.blocks_per_year)

  response = await api.get("/cosmos/mint/v1beta1/inflation")
  const inflation = Number(response.data.inflation) //string

  response = await api.get("/cosmos/staking/v1beta1/pool")
  const bondedTokens = Number(response.data.pool.bonded_tokens)

  response = await api.get("/cosmos/distribution/v1beta1/params")
  const communityTax = Number(response.data.params.community_tax)

  return {
    annualProvisions,
    blocksPerYear,
    inflation,
    bondedTokens,
    communityTax,
  }
}

const calculateNominalAPR = (params) => {
  return (params.annualProvisions * (1 - params.communityTax)) / params.bondedTokens
}

const getBlocksPerYearReal = async (api) => {
  let response

  response = await api.get("/blocks/latest")
  const block1 = response.data.block.header
  const blockRange = Number(block1.height) > 10000 ? 10000 : 1

  response = await api.get("/blocks/" + (Number(block1.height) - blockRange))
  const block2 = response.data.block.header
  const blockMillis = (new Date(block1.time) - new Date(block2.time)) / blockRange

  return Math.ceil(YEAR_MILLIS / blockMillis)
}

const calculateRealAPR = (params, nominalApr, blocksYearReal) => {
  const blockProvision = params.annualProvisions / params.blocksPerYear
  const realProvision = blockProvision * blocksYearReal

  return nominalApr * (realProvision / params.annualProvisions)
}

const getNominalApr = async (chainName) => {
  let nominalApr = 0
  try {
    const api = getAxios(chainName)
    const params = await getChainParams(api)
    nominalApr = calculateNominalAPR(params)
  } catch (e) {
    console.warn("Cant get nominal APR for ", chainName)
  }

  return Math.round(nominalApr * 100)
}

const getActualApr = async (chainName) => {
  const api = getAxios(chainName)
  const params = await getChainParams(api)
  const blocksYearReal = await getBlocksPerYearReal(api)
  const nominalApr = calculateNominalAPR(params)
  const actualApr = calculateRealAPR(params, nominalApr, blocksYearReal)

  return Math.round(actualApr * 100)
}

const getValidatorInfo = async (chainName, valoper, exponent) => {
  const api = getAxios(chainName)

  let commissionRate = 0
  let bondedTokens = 0
  try {
    const response = await api.get(`/cosmos/staking/v1beta1/validators/${valoper}`)
    commissionRate = Number(response.data.validator.commission.commission_rates.rate) * 100
    bondedTokens = Number(response.data.validator.tokens) / Math.pow(10, exponent)
  } catch (e) {
    console.warn("Can't get validator info for ", chainName)
  }

  return {
    commissionRate,
    bondedTokens,
  }
}

export { getNominalApr, getActualApr, getValidatorInfo }
