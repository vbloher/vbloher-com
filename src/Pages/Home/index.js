import MainLayout from "Components/MainLayout"
import Greeting from "Components/Greeting"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import ChainGrid from "Components/ChainGrid"
import { mainnetChains } from "Services/data"
import Achievements from "Components/Achievements"
import * as React from "react"
import Advantages from "Components/Advantages"

const Home = () => (
  <MainLayout>
    <Greeting />
    <Advantages />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      paddingY={3}
      bgcolor="#FBFBFA"
    >
      <Box
        component={Typography}
        variant="h4"
        textAlign="center"
        paddingBottom={2}
      >
        Total amount of staked assets with vbloher:
      </Box>
      <Typography variant="h5">300,000$</Typography>
    </Box>
    <Container maxWidth="lg">
      <ChainGrid
        title="Mainnets"
        subtitle="You can delegate your tokens to our trusted validators in Mainnet."
        chains={mainnetChains}
      />
      <Achievements />
    </Container>
  </MainLayout>
)

export default Home
