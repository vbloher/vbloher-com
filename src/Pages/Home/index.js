import * as React from "react"
import MainLayout from "Components/MainLayout"
import Greeting from "Components/Greeting"
import Container from "@mui/material/Container"
import ChainGrid from "Components/ChainGrid"
import { mainnetChains } from "Services/data"
import Achievements from "Components/Achievements"
import StakedFundsCounter from "Components/StakedCounter"

const Home = () => (
  <MainLayout>
    <Greeting />
    <StakedFundsCounter />
    <Container maxWidth="lg">
      <ChainGrid
        title="Mainnets"
        subtitle="You can delegate your tokens to our trusted validators in Mainnet."
        chains={mainnetChains}
      />
    </Container>
    <Achievements />
  </MainLayout>
)

export default Home
