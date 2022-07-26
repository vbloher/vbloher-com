import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useEffect, useRef, useState } from "react"
import { getNominalApr } from "Services/chainApi"
import { Collapse, useTheme } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import * as ChainLogos from "Components/Logo"
import { makeStyles } from "@mui/styles"

const RESTAKE_URL_PREFIX = "https://restake.app"

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    minHeight: 150,
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
  const [hover, setHover] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const containerRef = useRef()

  const logo = getLogo(name)
  const apr = nominalApr !== undefined ? `~${nominalApr}%` : <CircularProgress size="1rem" />
  const link = stakeLink ? stakeLink : `${RESTAKE_URL_PREFIX}/${registryName}/${valoper}`

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

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
    <Box
      className={classes.card}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
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
        ref={containerRef}
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
        <Collapse
          orientation="vertical"
          in={hover}
          collapsedSize={0}
        >
          <Button
            variant="outlined"
            href={link}
            target="_blank"
            sx={{
              textTransform: "none",
            }}
            className={classes.blabla}
          >
            Stake!
          </Button>
        </Collapse>
      </Box>
    </Box>
  )
}

export default ChainCard
