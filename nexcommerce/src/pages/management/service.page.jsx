import { Grid2, Typography, useTheme, Stack, Divider } from '@mui/material'
import servicing_header from '../../assets/images/page_headers/servicing_header.svg'

export default function ServicingPage() {
  const theme = useTheme()

  // Styles
  const styles = {
    link: {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
    },
    headerImage: {
      height: 60,
    },
    headerText: (theme) => ({
      mr: 2,
      display: 'flex',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: theme.palette.primary.main,
      textDecoration: 'none',
    }),
  }

  return (
    <Grid2 container spacing={2} direction='column'>
      {/* Message Section */}
      <div>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack justifyContent={'flex-end'}>
            <Typography
              variant='h3'
              noWrap
              component='div'
              sx={{ ...styles.headerText(theme) }}
            >
              Customer service management
            </Typography>

          </Stack>

          <img src={servicing_header} alt='Customer servicing page header image' style={styles.headerImage} />

        </Stack>
      </div>

      <Divider />

      <Typography variant='h6'>
        This page has customer service and support tools required for managing issues raised by customers
      </Typography>
    </Grid2>
  )
}
