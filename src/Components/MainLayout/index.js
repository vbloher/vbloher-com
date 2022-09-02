import Header from "Components/Header"
import * as React from "react"
import Footer from "Components/Footer"
import Box from "@mui/material/Box"

const MainLayout = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
  >
    <Header />
    {children}
    <Footer />
  </Box>
)

export default MainLayout
