import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Header from "Components/Header"
import Footer from "Components/Footer"

export default function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Header />

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
          >
            vbloher site
          </Typography>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
