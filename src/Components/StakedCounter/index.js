import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { useEffect, useState } from "react"
import getTotalStaked from "Services/api"
import CircularProgress from "@mui/material/CircularProgress"
import Tooltip from "@mui/material/Tooltip"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import { makeStyles } from "@mui/styles"
import IconButton from "@mui/material/IconButton"

const useStyles = makeStyles((theme) => ({
  helpIconButton: {
    marginLeft: theme.spacing(1),
    opacity: 0.3,
    transition: theme.transitions.create("opacity"),

    "&:hover": {
      opacity: 1,
    },
  },
}))

const StakedFundsCounter = () => {
  const [totalStaked, setTotalStaked] = useState(null)
  const classes = useStyles()

  const stakedComponent =
    totalStaked !== null ? (
      <Typography variant="h3">${totalStaked.toLocaleString()}</Typography>
    ) : (
      <CircularProgress size={48} />
    )

  useEffect(() => {
    const fetchData = async () => {
      const staked = await getTotalStaked()
      setTotalStaked(staked)
    }
    fetchData().catch((error) => console.error("Can't get total staked amount"))
  }, [setTotalStaked])

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      paddingY={7}
      bgcolor="#FBFBFA"
    >
      <Box
        component={Typography}
        variant="h4"
        paddingBottom={2}
      >
        Total amount of staked assets with vbloher:
      </Box>
      <Box
        display="flex"
        alignItems="center"
      >
        {stakedComponent}
        <Tooltip title="*prices by CoinGecko">
          <IconButton className={classes.helpIconButton}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default StakedFundsCounter
