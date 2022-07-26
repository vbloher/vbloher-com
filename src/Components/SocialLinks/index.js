import * as React from "react"
import IconButton from "@mui/material/IconButton"
import GitHub from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"
import Box from "@mui/material/Box"
import { ReactComponent as MediumIcon } from "Assets/img/medium.svg"
import { SvgIcon, useTheme } from "@mui/material"
import { YouTube } from "@mui/icons-material"

const SocialLinks = () => {
  const theme = useTheme()
  const color = theme.palette.getContrastText(theme.palette.primary.main)

  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <IconButton
        href="https://github.com/vbloher"
        target="_blank"
      >
        <GitHub sx={{ color: `${color}` }} />
      </IconButton>
      <IconButton
        href="https://medium.com/@vbloher"
        target="_blank"
      >
        <SvgIcon sx={{ color: `${color}` }}>
          <MediumIcon />
        </SvgIcon>
      </IconButton>
      <IconButton
        href="https://twitter.com/vbloher"
        target="_blank"
      >
        <Twitter sx={{ color: `${color}` }} />
      </IconButton>
      <IconButton
        href="https://www.youtube.com/channel/UCFwvzQ9Hbkwz3GJbncrD2xg"
        target="_blank"
      >
        <YouTube sx={{ color: `${color}` }} />
      </IconButton>
    </Box>
  )
}

export default SocialLinks
