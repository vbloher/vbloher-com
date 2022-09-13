import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { useEffect, useState } from "react"
import { mainnetChains } from "Services/data"
import { getValidatorInfo } from "Services/chainApi"
import { getPrice } from "Services/coingeckoApi"

const StakedFundsCounter = () => {
  const [totalStaked, setTotalStaked] = useState(Number.NaN)

  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        mainnetChains.map(async (chain) => {
          const validatorInfo = await getValidatorInfo(chain.registryName, chain.valoper, chain.exponent)
          const bondedTokens = validatorInfo.bondedTokens
          const price = chain.coinId ? await getPrice(chain.coinId) : 0

          console.log("coin: ", chain.coinId, "; tokens: ", bondedTokens, "; price: ", price)

          return bondedTokens * price
        })
      )
      const staked = Math.round(results.reduce((prev, curr) => prev + curr))
      setTotalStaked(staked)
    }
    fetchData().catch(console.error)
  }, [setTotalStaked])

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      paddingY={3}
      bgcolor="#FBFBFA"
    >
      <Box
        component={Typography}
        variant="h4"
        textAlign="center"
        paddingBottom={2}
      >
        Total amount of staked assets with vbloher:
      </Box>
      <Typography variant="h5">{totalStaked}$</Typography>
    </Box>
  )
}

export default StakedFundsCounter
