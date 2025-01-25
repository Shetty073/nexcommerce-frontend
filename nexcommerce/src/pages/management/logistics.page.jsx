import { Grid2, Typography, useTheme, Stack, Divider } from '@mui/material'
import logistics_header from '../../assets/images/page_headers/logistics_header.svg'

export default function LogisticsPage() {
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
              Logistics management
            </Typography>

          </Stack>

          <img src={logistics_header} alt='Logistics page header image' style={styles.headerImage} />

        </Stack>
      </div>

      <Divider />

      <Typography variant='h6'>
        Track your deliveries from this page
      </Typography>
    </Grid2>
  )
}
