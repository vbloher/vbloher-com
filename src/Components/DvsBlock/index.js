import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Logo from "Assets/img/vbloher.svg"

const DvsBlock = () => (
  <Grid
    container
    justifyContent="space-between"
    paddingY={4}
  >
    <Grid
      item
      alignItems="center"
    >
      <Box
        display="flex"
        component="img"
        src={Logo}
        height={150}
        width={150}
        alignSelf="left"
      />
    </Grid>
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingLeft={3}
    >
      <Typography variant="subtitle1">Let's validate & support the community</Typography>
      <Link
        href="https://validators.network/"
        target="_blank"
      >
        Distributed Validators Synctems
      </Link>
    </Grid>
  </Grid>
)

export default DvsBlock
