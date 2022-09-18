import * as React from "react"
import MainLayout from "Components/MainLayout"
import Greeting from "Components/Greeting"
import Container from "@mui/material/Container"
import { mainnetChains } from "Services/data"
import Achievements from "Components/Achievements"
import StakedFundsCounter from "Components/StakedCounter"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import ChainCard from "Components/ChainCard"

const Home = () => (
  <MainLayout>
    <Greeting />
    <StakedFundsCounter />

    <Container maxWidth="lg">
      <Box>
        <Box
          paddingTop={2}
          paddingBottom={3}
        >
          <Typography variant="h3">Networks</Typography>
          <Typography variant="h5">
            You can delegate your tokens with auto compound feature with my validators
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
        >
          {mainnetChains.map((chain) => (
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
    </Container>

    <Achievements />
  </MainLayout>
)

export default Home
