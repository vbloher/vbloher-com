import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

const Footer = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    padding={3}
    bgcolor="#FBFBFA"
    sx={{ boxShadow: 3 }}
  >
    <Box display="flex">
      <Link href="https://vbloher.com/">vbloher</Link>
      <Typography variant="body1">&nbsp;|&nbsp;</Typography>
      <Link
        href="https://nodejumper.io/"
        target="_blank"
      >
        Nodejumper
      </Link>
      <Typography variant="body1">&nbsp;|&nbsp;</Typography>
      <Link
        href="https://validators.network/"
        target="_blank"
      >
        Distributed Validators Synctems
      </Link>
    </Box>
  </Box>
)

export default Footer
