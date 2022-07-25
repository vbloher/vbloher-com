import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const ChainCard = ({ name, logo, apr, commission, stakeLink, explorerLink }) => (
  <Paper
    elevation={3}
    sx={{ minHeight: 250, minWidth: 270 }}
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={4}
    >
      <Box
        component="img"
        src={logo}
        height={80}
        width={80}
      />
      <Box
        paddingY={2}
        alignSelf="start"
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            paddingBottom: 1,
          }}
        >
          {name}
        </Typography>
        {apr && <Typography>{`APR: ${apr}%`}</Typography>}
        {commission && <Typography>{`Commission: ${commission}%`}</Typography>}
      </Box>
      <Box display="flex">
        <Button
          href={explorerLink}
          target="_blank"
        >
          Explorer
        </Button>
        {stakeLink && (
          <Button
            variant="contained"
            href={stakeLink}
            target="_blank"
            sx={{ marginLeft: 1 }}
          >
            Stake!
          </Button>
        )}
      </Box>
    </Box>
  </Paper>
)

export default ChainCard
