import { mainnetChains } from "Services/data"
import { getValidatorInfo } from "Services/chainApi"
import { getPrice } from "Services/coingeckoApi"

const getTotalStaked = async () => {
  const results = await Promise.all(
    mainnetChains.map(async (chain) => {
      const validatorInfo = await getValidatorInfo(chain.registryName, chain.valoper, chain.exponent)
      const bondedTokens = validatorInfo.bondedTokens
      const price = chain.coinId ? await getPrice(chain.coinId) : 0
      return bondedTokens * price
    })
  )
  return Math.round(results.reduce((prev, curr) => prev + curr))
}

export default getTotalStaked
