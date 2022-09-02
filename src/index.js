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

console.log("💻", process.env.PUBLIC_URL)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
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
