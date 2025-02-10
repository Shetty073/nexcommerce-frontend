import { Routes, Route } from 'react-router';
import StorefrontPage from './pages/storefront.page';
import NotFoundPage from './pages/notfound.page';
import NavBar from './components/navbar.component';
import Footer from './components/footer.component';

function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route exact path='/' element={<StorefrontPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
