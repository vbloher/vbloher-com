import * as React from "react"
import IconButton from "@mui/material/IconButton"
import GitHub from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"
import Box from "@mui/material/Box"
import { links } from "Data"

const SocialLinks = () => (
  <Box
    display="flex"
    alignItems="center"
  >
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
  </Box>
)

export default SocialLinks
