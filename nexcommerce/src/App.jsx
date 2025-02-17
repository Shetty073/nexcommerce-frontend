import { Routes, Route, useLocation } from 'react-router';
import DashboardSidebar from './components/sidebar.component';
import Footer from './components/footer.component';
import NavBar from './components/navbar.component';
import StorefrontPage from './pages/public/storefront.page';
import NotFoundPage from './pages/common/notfound.page';
import SignupPage from './pages/common/signup.page';
import SignInPage from './pages/common/signin.page';

import InventoryPage from './pages/org/inventory.page';
import InvoicesPage from './pages/org/invoices.page';
import LogisticsPage from './pages/org/logistics.page';
import OrdersPage from './pages/org/orders.page';
import PromotionsPage from './pages/org/promotions.page';
import ServicesPage from './pages/org/services.page';

function App() {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/org');

  return (
    <div className={`flow-root ${isDashboardRoute ? 'bg-indigo-50' : ''} min-h-screen`}>
      {/* Show Navbar and Footer on non-dashboard routes */}
      {!isDashboardRoute && <NavBar />}

      <div className="flex-grow">
        {/* Only show Sidebar on dashboard routes */}
        {isDashboardRoute && <DashboardSidebar loc={location} />}

        {/* Main Content */}
        <main className={`flex-grow ${isDashboardRoute ? 'p-4' : ''}`}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<StorefrontPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />

            {/* Organization only routes */}
            <Route path="/org/inventory" element={<InventoryPage />} />
            <Route path="/org/invoices" element={<InvoicesPage />} />
            <Route path="/org/logistics" element={<LogisticsPage />} />
            <Route path="/org/orders" element={<OrdersPage />} />
            <Route path="/org/promotions" element={<PromotionsPage />} />
            <Route path="/org/services" element={<ServicesPage />} />
          </Routes>
        </main>
      </div>

      {/* Footer is only shown on public routes */}
      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default App;
