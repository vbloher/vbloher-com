import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import GitHub from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"

const Footer = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    padding={3}
  >
    <Typography variant="body1">
      vbloher
    </Typography>
    <Box
      display="flex"
      alignItems="center"
    >
      <IconButton>
        <GitHub />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
    </Box>
  </Box>
)

export default Footer
