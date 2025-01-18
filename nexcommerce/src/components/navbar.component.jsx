import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { useTheme } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const NAV_PAGES = ['Products', 'Today`s Deals', 'Your Orders']
const USER_SETTINGS = ['Your Account', 'Your Wish List', 'Logout']
const PRODUCT_SUBMENU_ITEMS = ['Electronics', 'Fashion', 'Home & Kitchen']

const styles = {
  appBar: (theme) => ({
    mb: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    color: theme.palette.primary.main,
  }),
  logo: (theme) => ({
    mr: 2,
    display: 'flex',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: theme.palette.primary.main,
    textDecoration: 'none',
  }),
  button: (theme) => ({
    my: 2,
    color: theme.palette.primary.main,
    display: 'block',
  }),
  menuItem: (theme) => ({
    color: theme.palette.primary.main,
  }),
}

const Submenu = ({ anchorEl, onClose, items, theme }) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  >
    {items.map((item) => (
      <MenuItem key={item} onClick={onClose} sx={styles.menuItem(theme)}>
        {item}
      </MenuItem>
    ))}
  </Menu>
)

const DrawerList = ({ pages, onClose, onSubmenuOpen, theme }) => (
  <Box role='presentation' onClick={onClose}>
    <List>
      {pages.map((page) => (
        <ListItem key={page} disablePadding>
          <ListItemButton onClick={page === 'Products' ? onSubmenuOpen : onClose}>
            <ListItemText primary={page} sx={styles.menuItem(theme)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </Box>
)

export default function ResponsiveAppBar({ showNavbar }) {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()

  const toggleDrawer = (isOpen) => () => setDrawerOpen(isOpen)

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = () => setAnchorElUser(null)
  const handleSubmenuOpen = (event) => setSubmenuAnchorEl(event.currentTarget)
  const handleSubmenuClose = () => setSubmenuAnchorEl(null)

  return (
    <>
      {showNavbar && <AppBar position='static' sx={styles.appBar(theme)}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* Mobile View: Hamburger menu on the left */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
              <IconButton
                size='large'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Logo */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#'
              sx={{ ...styles.logo(theme), display: { xs: 'none', md: 'flex' } }}
            >
              NexCommerce
            </Typography>

            {/* Mobile Logo */}
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#'
              sx={{
                ...styles.logo(theme),
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
            >
              NexCommerce
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {NAV_PAGES.map((page) => (
                <Button
                  key={page}
                  onClick={page === 'Products' ? handleSubmenuOpen : (page) => { console.log({ page }) }}
                  sx={styles.button(theme)}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* User Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='User' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {USER_SETTINGS.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu} sx={styles.menuItem(theme)}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>

        {/* Product Submenu */}
        <Submenu
          anchorEl={submenuAnchorEl}
          onClose={handleSubmenuClose}
          items={PRODUCT_SUBMENU_ITEMS}
          theme={theme}
        />

        {/* Mobile Drawer */}
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <DrawerList
            pages={NAV_PAGES}
            onClose={toggleDrawer(false)}
            onSubmenuOpen={handleSubmenuOpen}
            theme={theme}
          />
        </Drawer>
      </AppBar>}
    </>
  )
}
