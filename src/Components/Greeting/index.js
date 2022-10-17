import React from "react"
import Cactus from "Assets/img/background.jpeg"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

const Greeting = () => (
  <Grid
    container
    height={600}
    zIndex={-1}
    sx={{
      background: `url(${Cactus})`,
      backgroundSize: "cover",
      backgroundPositionY: "-120px",
    }}
  >
    <Grid
      item
      md={4}
      lg={6}
    />
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingX={2}
      borderRadius={1}
      xs={4}
      sx={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Typography variant="h1">Hi, I'm vbloher</Typography>
      {/*<Box*/}
      {/*  component={Typography}*/}
      {/*  variant="h2"*/}
      {/*  paddingY={1}*/}
      {/*>*/}
      {/*  Trusted Validator*/}
      {/*</Box>*/}
      <Box
        component={Typography}
        variant="h5"
        paddingY={1}
      >
        Stake and earn via non-custodial staking with trusted validator
      </Box>
    </Grid>
  </Grid>
)

export default Greeting
