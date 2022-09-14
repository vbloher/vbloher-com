import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import { getNominalApr } from "Services/chainApi"
import { CircularProgress } from "@mui/material"
import * as ChainLogos from "Components/Logo"

const RESTAKE_URL_PREFIX = "https://restake.app"

const getLogo = (chainName) => ChainLogos[chainName]

const ChainCard = ({ chain: { name, registryName, valoper, exponent } }) => {
  const [nominalApr, setNominalApr] = useState(null)
  const logo = getLogo(name)
  const apr = nominalApr != null ? `~${nominalApr}%` : <CircularProgress size="1rem" />

  useEffect(() => {
    const fetchData = async () => {
      const nominalApr = await getNominalApr(registryName)
      setNominalApr(nominalApr)
    }
    fetchData().catch(console.error)
  }, [registryName, setNominalApr, getNominalApr])

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
        <Box
          component={Typography}
          variant="body1"
          paddingTop={1}
          alignItems="center"
        >
          {`APR: `}
          {apr}
        </Box>
      </Box>
      <Box display="flex">
        <Button
          variant="outlined"
          href={`${RESTAKE_URL_PREFIX}/${registryName}/${valoper}`}
          target="_blank"
          sx={{
            textTransform: "none",
          }}
        >
          Stake!
        </Button>
      </Box>
    </Box>
  )
}

export default ChainCard
