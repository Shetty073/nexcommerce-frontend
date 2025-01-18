import { Grid2, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ServicingPage() {
  const theme = useTheme()

  // Styles
  const styles = {
    link: {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
    }
  }

  return (
    <Grid2 container spacing={2} direction='column' alignItems='center' margin={2}>
      {/* Message Section */}
      <Grid2>
        <Typography variant='h6'>
          The Servicing section is under development. Let us take you back to{' '}
          <Link style={styles.link} to='/'>
            home
          </Link>
          .
        </Typography>
      </Grid2>
    </Grid2>
  )
}
