import { useState, useEffect } from 'react'
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Box, useTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { Routes, Route } from 'react-router-dom'
import StorefrontPage from '../pages/storefront.page'
import NotFoundPage from '../pages/notfound.page'
import InventoryPage from '../pages/management/inventory.page'
import InvoicePage from '../pages/management/invoice.page'
import LogisticsPage from '../pages/management/logistics.page'
import PromotionsPage from '../pages/management/promotions.page'
import ServicingPage from '../pages/management/service.page'

// Styled Sidebar for custom layout
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}))

const styles = {
  logo: (theme) => ({
    mr: 2,
    display: 'flex',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: theme.palette.background.main,
    textDecoration: 'none',
  }),
  menuItem: (theme) => ({
    color: theme.palette.primary.main,
  }),
}

export default function SideBar({ showSidebar }) {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900)
  const theme = useTheme()
  const location = useLocation()

  // Toggle sidebar state on mobile
  const toggleDrawer = () => {
    setOpen(!open)
  }

  // Check window size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {showSidebar && <div>
        {/* Button to open sidebar on mobile */}
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ marginLeft: 2, display: { xs: 'block', sm: 'block', md: 'none' } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        {/* Sidebar Drawer (permanent on desktop) */}
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
          variant={isDesktop ? 'permanent' : 'temporary'}  // Permanent on desktop, temporary on mobile
          anchor='left'
          open={open || isDesktop}  // Always open on desktop (>=600px)
          onClose={toggleDrawer}
        >
          <DrawerHeader>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#'
              sx={{ ...styles.logo(theme) }}
            >
              NexCommerce
            </Typography>
            {/* Close button visible only on mobile */}
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <CloseIcon />
            </IconButton>
          </DrawerHeader>

          <List>
            <ListItem component={Link} to='/inventory' sx={(location.pathname == '/inventory') ? styles.menuItem(theme) : {}}>
              <ListItemText primary='Inventory' />
            </ListItem>
            <ListItem component={Link} to='/invoices' sx={(location.pathname == '/invoices') ? styles.menuItem(theme) : {}}>
              <ListItemText primary='Invoices' />
            </ListItem>
            <ListItem component={Link} to='/logistics' sx={(location.pathname == '/logistics') ? styles.menuItem(theme) : {}}>
              <ListItemText primary='Logistics' />
            </ListItem>
            <ListItem component={Link} to='/promotions' sx={(location.pathname == '/promotions') ? styles.menuItem(theme) : {}}>
              <ListItemText primary='Promotions' />
            </ListItem>
            <ListItem component={Link} to='/servicing' sx={(location.pathname == '/servicing') ? styles.menuItem(theme) : {}}>
              <ListItemText primary='Servicing' />
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem component={Link} to='/'>
              <ListItemText primary='Storefront' />
            </ListItem>
          </List>
        </Drawer>
      </div>}

      {/* Main content area */}
      <Box
        sx={{
          marginLeft: (isDesktop && showSidebar) ? 24 : 0,  // Push content to the right of the sidebar (on desktop)
          padding: 3,
          transition: 'margin-left 0.3s',  // Smooth transition for margin adjustment
        }}
      >
        {/* Place your main page content here */}
        <Routes>

          {/* Customer / Storefront routes */}
          <Route exact path='/' element={<StorefrontPage />}></Route>

          {/* Management routes */}
          <Route exact path='/inventory' element={<InventoryPage />}></Route>
          <Route exact path='/invoices' element={<InvoicePage />}></Route>
          <Route exact path='/logistics' element={<LogisticsPage />}></Route>
          <Route exact path='/promotions' element={<PromotionsPage />}></Route>
          <Route exact path='/servicing' element={<ServicingPage />}></Route>

          {/* Catch-all route for unmatched paths */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
    </>
  )
}
