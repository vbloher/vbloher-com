import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import { getNominalApr } from "Services/chain"
import { getCommissionRate } from "Services/validator"

const RESTAKE_URL_PREFIX = "https://restake.app"

const ChainCard = ({ logo, name, registryName, valoper, stakeLink }) => {
  const [nominalApr, setNominalApr] = useState(Number.NaN)
  const [commission, setCommission] = useState(Number.NaN)

  useEffect(() => {
    const fetchData = async () => {
      const nominalApr = await getNominalApr(registryName)
      setNominalApr(nominalApr)
    }
    fetchData().catch(console.error)
  }, [registryName, setNominalApr, getNominalApr])

  useEffect(() => {
    const fetchData = async () => {
      const commission = await getCommissionRate(registryName, valoper)
      setCommission(commission)
    }
    fetchData().catch(console.error)
  }, [registryName, valoper, setCommission])

  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={3}
      elevation={3}
    >
      <Box
        component="img"
        src={logo}
        height={120}
        width={120}
        borderRadius={1}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY={2}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
        <Typography>{`APR: ~${nominalApr}%`}</Typography>
        <Typography>{`Commission: ${commission}%`}</Typography>
      </Box>
      <Box display="flex">
        <Button
          variant="outlined"
          href={`${RESTAKE_URL_PREFIX}/${registryName}/${valoper}`}
          target="_blank"
        >
          Stake!
        </Button>
      </Box>
    </Box>
  )
}

export default ChainCard
