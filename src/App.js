import * as React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Header from "Components/Header"
import Footer from "Components/Footer"
import ChainGrid from "Components/ChainGrid"
import Achievements from "Components/Achievements"
import DvsBlock from "Components/DvsBlock"
import Greeting from "Components/Greeting"
import { mainnetChains } from "Data"
import Typography from "@mui/material/Typography"

export default function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Header />

      <Greeting />

      <Container maxWidth="lg">
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

        <ChainGrid
          title="Mainnets"
          subtitle="You can delegate your tokens to our trusted validators in Mainnet."
          chains={mainnetChains}
        />

        <Achievements />

        <DvsBlock />
      </Container>

      <Footer />
    </Box>
  )
}
