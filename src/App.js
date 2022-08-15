import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Header from "Components/Header"
import Footer from "Components/Footer"
import ChainGrid from "Components/ChainGrid"
import Achievements from "Components/Achievements"
import DvsBlock from "Components/DvsBlock"
import { mainnetChains } from "Data"

export default function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Container maxWidth="lg">
        <ChainGrid
          title="Mainnets"
          subtitle="You can delegate your tokens to our trusted validators in Mainnet."
          chains={mainnetChains}
        />

        <ChainGrid
          title="Testnets"
          chains={mainnetChains}
        />

        <ChainGrid
          title="Finished testnets"
          chains={mainnetChains}
        />

        <Achievements />

        <DvsBlock />
      </Container>
      <Footer />
    </Box>
  )
}
