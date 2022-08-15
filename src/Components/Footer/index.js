import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SocialLinks from "Components/SocialLinks"
import Link from "@mui/material/Link"

const Footer = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    padding={3}
    marginTop={3}
    bgcolor="#FBFBFA"
  >
    <Box display="flex">
      <Typography variant="body1">vbloher |&nbsp;</Typography>
      <Link
        href="https://validators.network/"
        target="_blank"
      >
        <Typography>DVS</Typography>
      </Link>
    </Box>
    <SocialLinks />
  </Box>
)

export default Footer
