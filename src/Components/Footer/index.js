import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SocialLinks from "Components/SocialLinks"

const Footer = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    padding={3}
    marginTop={3}
    bgcolor="#FBFBFA"
  >
    <Typography variant="body1">vbloher</Typography>
    <SocialLinks />
  </Box>
)

export default Footer
