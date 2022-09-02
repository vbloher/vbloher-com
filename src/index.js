import * as React from "react"
import { createRoot } from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import theme from "theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Portfolio from "Pages/Portfolio"
import Home from "Pages/Home"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

console.log("🎨", theme)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
