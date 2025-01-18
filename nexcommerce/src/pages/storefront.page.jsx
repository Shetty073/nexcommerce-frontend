import { Grid2, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function StorefrontPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Item>size=8</Item>
          </Grid2>

          <Grid2 size={4}>
            <Item>size=4</Item>
          </Grid2>

          <Grid2 size={4}>
            <Item>size=4</Item>
          </Grid2>

          <Grid2 size={8}>
            <Item>size=8</Item>
          </Grid2>

        </Grid2>

      </Box>
    </>
  )
}

