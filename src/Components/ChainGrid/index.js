import React from "react"
import Grid from "@mui/material/Grid"
import ChainCard from "Components/ChainCard"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const ChainGrid = ({ title, subtitle, chains }) => (
  <Box>
    <Box paddingY={2}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
    <Grid
      container
      spacing={3}
    >
      {chains.map((chain) => (
        <Grid
          key={chain.name}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <ChainCard chain={chain} />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default ChainGrid
