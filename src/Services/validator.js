import getAxios from "Services/axios"

const getCommissionRate = async (chainName, valoper) => {
  const api = getAxios(chainName)

  const response = await api.get(`/cosmos/staking/v1beta1/validators/${valoper}`)
  const commissionRate = Number(response.data.validator.commission.commission_rates.rate) * 100

  console.log(`chain name: ${chainName} ${valoper} ${commissionRate} %`)
  return commissionRate
}

export { getCommissionRate }
