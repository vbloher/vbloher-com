import * as React from "react"
import { useTheme } from "@mui/material"
import vbloherLogo from "Assets/img/vbloher.svg"
import GitHub from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { links } from "Data"

const Header = () => {
  const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ marginRight: 1 }}
          >
            <Box
              component="img"
              src={vbloherLogo}
              alt="Stake with vbloher!"
              width={theme.spacing(5)}
              height={theme.spacing(5)}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            vbloher
          </Typography>
          <IconButton
            href={links.github}
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton
            href={links.twitter}
            target="_blank"
          >
            <Twitter />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
