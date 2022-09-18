import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { useTheme } from "@mui/material"

const Achievements = () => {
  const theme = useTheme()

  return (
    <Box
      bgcolor="#FBFBFA"
      marginTop={5}
    >
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          paddingY={4}
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingRight={3}
            xs={12}
            sm={8}
          >
            <Box
              component={Typography}
              variant="h3"
              paddingBottom={3}
            >
              My achievements
            </Box>
            <Box
              component={Typography}
              variant="subtitle1"
              paddingBottom={3}
            >
              I have successfully passed the school of validators. Now I participate in the development of the school
              and support of the validator community.
            </Box>
            <Typography variant="h5">Wanna be a validator, too?</Typography>
            <Link
              href="https://github.com/Distributed-Validators-Synctems/Validator-School"
              target="_blank"
            >
              Join the Validator School >>>
            </Link>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              component="img"
              src={"https://r.mobirisesite.com/161869/assets/images/first-flow-gif.gif?v=1NEFty"}
              height={300}
              width={300}
              borderRadius={theme.shape.borderRadius}
              alignSelf="right"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Achievements
