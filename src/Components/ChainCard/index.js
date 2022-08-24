import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

const ChainCard = ({ name, logo, apr, stakeLink }) => (
  <Box
    component={Paper}
    display="flex"
    flexDirection="column"
    alignItems="center"
    padding={3}
    elevation={3}
  >
    <Box
      component="img"
      src={logo}
      height={120}
      width={120}
      borderRadius={1}
    />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingY={2}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
        }}
      >
        {name}
      </Typography>
      {apr && <Typography>{`APR: ${apr}%`}</Typography>}
    </Box>
    <Box display="flex">
      <Button
        variant="outlined"
        href={stakeLink}
        target="_blank"
      >
        Stake!
      </Button>
    </Box>
  </Box>
)

export default ChainCard
