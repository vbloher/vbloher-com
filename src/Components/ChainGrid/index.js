import React from "react"
import Grid from "@mui/material/Grid"
import ChainCard from "Components/ChainCard"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import * as ChainLogos from "Components/Logo"

const getLogo = (chainName) => ChainLogos[chainName]

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
          <ChainCard
            name={chain.name}
            logo={getLogo(chain.name)}
            apr={chain.apr}
            commission={chain.commission}
            explorerLink={chain.explorerLink}
            stakeLink={chain.stakeLink}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default ChainGrid
