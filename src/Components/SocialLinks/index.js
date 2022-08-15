import * as React from "react"
import IconButton from "@mui/material/IconButton"
import GitHub from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"
import Box from "@mui/material/Box"
import { ReactComponent as MediumIcon } from "Assets/img/medium.svg"
import { SvgIcon } from "@mui/material"

const SocialLinks = () => (
  <Box
    display="flex"
    alignItems="center"
  >
    <IconButton
      href="https://github.com/vbloher"
      target="_blank"
    >
      <GitHub />
    </IconButton>
    <IconButton
      href="https://medium.com/@vbloher"
      target="_blank"
    >
      <SvgIcon>
        <MediumIcon />
      </SvgIcon>
    </IconButton>
    <IconButton
      href="https://twitter.com/vbloher"
      target="_blank"
    >
      <Twitter />
    </IconButton>
  </Box>
)

export default SocialLinks
