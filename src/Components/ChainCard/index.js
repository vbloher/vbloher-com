import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useEffect, useState } from "react"
import { getNominalApr } from "Services/chainApi"
import { CircularProgress, useTheme } from "@mui/material"
import * as ChainLogos from "Components/Logo"
import { makeStyles } from "@mui/styles"

const RESTAKE_URL_PREFIX = "https://restake.app"

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    transition: theme.transitions.create("all"),
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[4],
    },
  },
}))

const getLogo = (chainName) => ChainLogos[chainName]

const ChainCard = ({ chain: { name, registryName, valoper, apr: chainApr, stakeLink } }) => {
  const [nominalApr, setNominalApr] = useState(chainApr)
  const classes = useStyles()
  const theme = useTheme()

  const logo = getLogo(name)
  const apr = nominalApr !== undefined ? `~${nominalApr}%` : <CircularProgress size="1rem" />
  const link = stakeLink ? stakeLink : `${RESTAKE_URL_PREFIX}/${registryName}/${valoper}`

  useEffect(() => {
    const fetchData = async () => {
      if (registryName && !chainApr) {
        const nominalApr = await getNominalApr(registryName)
        setNominalApr(nominalApr)
      }
    }
    fetchData().catch((error) => console.error("Can't get APR for ", name))
  }, [registryName, setNominalApr, getNominalApr])

  return (
    <Box className={classes.card}>
      <Box
        component="img"
        src={logo}
        height={80}
        width={80}
        borderRadius={`${theme.shape.borderRadius}px`}
        marginRight={2}
      />
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
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
          variant="h6"
          alignItems="center"
          paddingY={1}
          color={theme.palette.success.dark}
        >
          {`APR: `}
          {apr}
        </Box>
        <Button
          variant="outlined"
          href={link}
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
