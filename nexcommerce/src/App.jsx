import './App.css'
import { Routes, Route } from 'react-router-dom'
import StorefrontPage from './pages/storefront.page'
import NotFoundPage from './pages/notfound.page'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>

        <Route path='/' element={<StorefrontPage />}></Route>

        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
