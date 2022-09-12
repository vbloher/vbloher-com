import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

const Advantage = ({ title, description, img }) => (
  <Grid
    item
    display="flex"
    flexDirection="column"
    alignItems="center"
    xs={12}
    sm={6}
    md={4}
    lg={3}
  >
    <Typography variant="h4">{title}</Typography>
    <Box
      component="img"
      src={img}
      paddingX={2}
    />
    <Typography variant="body1">{description}</Typography>
  </Grid>
)

const Advantages = () => (
  <Grid
    container
    spacing={4}
    alignItems="center"
    justifyContent="center"
  >
    <Advantage title="Infrastructure" />
    <Advantage title="Experience" />
    <Advantage title="HIGH GAIN" />
  </Grid>
)

export default Advantages
