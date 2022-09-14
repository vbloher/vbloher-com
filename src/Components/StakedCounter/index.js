import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { useEffect, useState } from "react"
import getTotalStaked from "Services/api"

const StakedFundsCounter = () => {
  const [totalStaked, setTotalStaked] = useState(Number.NaN)

  useEffect(() => {
    const fetchData = async () => {
      const staked = await getTotalStaked()
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
