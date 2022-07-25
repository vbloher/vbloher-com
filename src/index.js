import * as React from "react"
import { createRoot } from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "App"
import theme from "theme"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

console.log("🎨", theme)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
