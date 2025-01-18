import not_found from '../assets/images/not_found.svg'
import { Grid2, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  const theme = useTheme()

  // Styles
  const styles = {
    link: {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
    },
    image: {
      width: 500,
      height: 600,
    },
  }

  return (
    <Grid2 container spacing={2} direction='column' alignItems='center' margin={2}>
      {/* Image Section */}
      <Grid2>
        <img src={not_found} alt='Page not found' style={styles.image} />
      </Grid2>

      {/* Message Section */}
      <Grid2>
        <Typography variant='h6'>
          Looks like you are lost. Let us get you back to{' '}
          <Link style={styles.link} to='/'>
            home
          </Link>
          .
        </Typography>
      </Grid2>
    </Grid2>
  )
}
