import React from "react"
import Cactus from "Assets/img/background.jpeg"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Greeting = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="flex-end"
    width="100%"
    height={600}
    zIndex={-1}
    sx={{
      background: `url(${Cactus})`,
      backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      backgroundPositionY: "-120px",
    }}
  >
    <Box
      paddingY={1}
      paddingLeft={1}
      paddingRight={5}
      borderRadius="borderRadius"
      sx={{
        backdropFilter: "blur(8px)",
      }}
    >
      <Typography variant="h2">Hi, I'm vbloher</Typography>
      <Typography variant="h5">Validator, software engineer, open source contributor</Typography>
    </Box>
  </Box>
)

export default Greeting
