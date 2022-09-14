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
      sx={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Typography variant="h1">Hi, I'm vbloher</Typography>
      <Box
        component={Typography}
        variant="h2"
        paddingY={1}
      >
        Trusted Validator
      </Box>
    </Grid>
  </Grid>
)

export default Greeting
