import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"

const Achievements = () => (
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
      <Typography variant="h3">My achievements</Typography>
      <Typography variant="subtitle1">
        I have successfully passed the school of validators. Now I participate in the development of the school and
        support of the validator community.
      </Typography>
      <Typography variant="h5">Wanna be a validator, too?</Typography>
      <Link
        href="https://github.com/Distributed-Validators-Synctems/Validator-School"
        target="_blank"
      >
        Join the Validator School
      </Link>
    </Grid>
    <Grid item>
      <Box
        display="flex"
        component="img"
        src={"https://r.mobirisesite.com/161869/assets/images/first-flow-gif.gif?v=1NEFty"}
        height={300}
        width={300}
        borderRadius="borderRadius"
        alignSelf="right"
      />
    </Grid>
  </Grid>
)

export default Achievements
