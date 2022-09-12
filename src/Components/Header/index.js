import * as React from "react"
import vbloherLogo from "Assets/img/vbloher.svg"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import SocialLinks from "Components/SocialLinks"
import { Link } from "react-router-dom"

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Link to={"/"}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
        >
          <Box
            component="img"
            src={vbloherLogo}
            alt="Stake with vbloher!"
            width={40}
            height={40}
          />
        </IconButton>
      </Link>
      <Typography
        variant="h6"
        component="div"
        flexGrow={1}
        paddingLeft={1}
      >
        vbloher
      </Typography>

      {/*<Box*/}
      {/*  component={Link}*/}
      {/*  width="100%"*/}
      {/*  paddingLeft={3}*/}
      {/*  to={"/portfolio"}*/}
      {/*>*/}
      {/*  <Typography>Portfolio</Typography>*/}
      {/*</Box>*/}

      <SocialLinks />
    </Toolbar>
  </AppBar>
)

export default Header
