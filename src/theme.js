import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#0b486b",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    borderRadius: 16,
  },
})

export default theme
