import axios from "axios"

const api = axios.create({
  baseURL: `https://api.coingecko.com/api/v3`,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  timeout: 5000,
})

const getPrice = async (coinId) => {
  const response = await api.get(`/simple/price?ids=${coinId}&vs_currencies=usd`)

  return response.data[coinId]["usd"]
}

export { getPrice }
