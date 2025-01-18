import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.component'
import SideBar from './components/sidebar.component'
import { ThemeProvider } from '@emotion/react'
import { purpleSkyTheme } from './themes/themes'


const NAV_ENABLED_ROUTES = ['/']
const SIDEBAR_ENABLED_ROUTES = ['/inventory', '/invoices', '/logistics', '/promotions', '/servicing']

function App() {
  const location = useLocation()

  const showNavbar = NAV_ENABLED_ROUTES.includes(location.pathname)

  const showSidebar = SIDEBAR_ENABLED_ROUTES.includes(location.pathname)

  return (
    <ThemeProvider theme={purpleSkyTheme}>
      {showNavbar && <Navbar />}

      {showSidebar && <SideBar />}

    </ThemeProvider>
  )
}

export default App
