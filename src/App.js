import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Header from "Components/Header"
import Footer from "Components/Footer"
import ChainGrid from "Components/ChainGrid"
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
      </Container>

      <Footer />
    </Box>
  )
}
