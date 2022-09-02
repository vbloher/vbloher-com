import Typography from "@mui/material/Typography"
import MainLayout from "Components/MainLayout"
import Box from "@mui/material/Box"
import { MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import Button from "@mui/material/Button"

const chains = [
  {
    label: "Rizon",
    id: "rizon-chain-id",
  },
  {
    label: "Kichain",
    id: "kid-1",
  },
  {
    label: "bitcanna",
    id: "bitcanna-1",
  },
]

const Portfolio = () => {
  const [addresses, setAddresses] = useState([])
  const [chainIdValue, setChainIdValue] = useState("")
  const [addressValue, setAddressValue] = useState("")

  const handleChainValueChange = (event) => {
    setChainIdValue(event.target.value)
  }

  const handleAddressValueChange = (event) => {
    setAddressValue(event.target.value)
  }

  const handleRemove = (index) => {
    setAddresses((oldAddresses) => [...oldAddresses.splice(index, 1)])
  }

  const handleAdd = () => {
    setAddresses((oldAddresses) => [
      ...oldAddresses,
      {
        chainId: chainIdValue,
        value: addressValue,
      },
    ])
    setAddressValue("")
  }

  return (
    <MainLayout>
      <Typography variant="h2">Portfolio</Typography>

      {addresses.map((address, index) => (
        <Box
          key={address.value}
          paddingY={3}
        >
          <Typography>{address.chainId}</Typography>
          <Typography>{address.value}</Typography>
          <Button
            variant="contained"
            onClick={() => handleRemove(index)}
          >
            remove
          </Button>
        </Box>
      ))}

      <Box>
        <Select
          label="Chain"
          value={chainIdValue}
          onChange={handleChainValueChange}
        >
          {chains.map((chain) => (
            <MenuItem
              key={chain.id}
              value={chain.id}
            >
              {chain.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          value={addressValue}
          onChange={handleAddressValueChange}
        />
        <Button
          variant="outlined"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>
    </MainLayout>
  )
}

export default Portfolio
