import axios from "axios"

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

export default getAxios
