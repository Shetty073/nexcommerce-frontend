import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.component'
import SideBar from './components/sidebar.component'
import { ThemeProvider } from '@emotion/react'
import { purpleSkyTheme } from './themes/themes'


const NAV_ENABLED_ROUTES = ['/']
const SIDEBAR_ENABLED_ROUTES = ['/orders', '/inventory', '/invoices', '/logistics', '/promotions', '/servicing']

function App() {
  const location = useLocation()

  const currentPath = (location.pathname !== '/' && location.pathname.endsWith('/')) ? location.pathname.slice(0, -1) : location.pathname

  const showNavbar = NAV_ENABLED_ROUTES.includes(currentPath)

  const showSidebar = SIDEBAR_ENABLED_ROUTES.includes(currentPath)
  
  return (
    <ThemeProvider theme={purpleSkyTheme}>
      <Navbar showNavbar={showNavbar} />

      <SideBar showSidebar={showSidebar} />

    </ThemeProvider>
  )
}

export default App
