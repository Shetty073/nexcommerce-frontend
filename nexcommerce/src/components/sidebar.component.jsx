import { useState } from "react";
import { Link } from "react-router";
import Avvvatars from 'avvvatars-react';

export default function DashboardSidebar({ loc }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  const location = loc;

  const user = ''; // Replace with actual user data when available

  return (
    <div className="lg:w-64 w-full bg-indigo-800 text-white lg:h-screen p-4 flex flex-col float-left">
      {/* Hamburger Menu for Mobile */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={toggleAccordion} className="lg:hidden text-2xl">
          <span>{isOpen ? "✕" : "☰"}</span>
        </button>
        <h1 className="text-2xl font-bold text-white">NexCommerce</h1>
      </div>

      {/* Sidebar Menu Items */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} flex-grow space-y-4`}>
        <Link to="/org/inventory" className={`text-white hover:bg-indigo-600 px-4 py-2 rounded-lg block ${location.pathname.startsWith('/org/inventory') ? 'bg-indigo-600' : ''}`}>Inventory</Link>
        <Link to="/org/orders" className={`text-white hover:bg-indigo-600 px-4 py-2 rounded-lg block ${location.pathname.startsWith('/org/orders') ? 'bg-indigo-600' : ''}`}>Orders</Link>
        <Link to="/org/invoices" className={`text-white hover:bg-indigo-600 px-4 py-2 rounded-lg block ${location.pathname.startsWith('/org/invoices') ? 'bg-indigo-600' : ''}`}>Invoices</Link>
        <Link to="/org/logistics" className={`text-white hover:bg-indigo-600 px-4 py-2 rounded-lg block ${location.pathname.startsWith('/org/logistics') ? 'bg-indigo-600' : ''}`}>Logistics</Link>
        <Link to="/org/services" className={`text-white hover:bg-indigo-600 px-4 py-2 rounded-lg block ${location.pathname.startsWith('/org/services') ? 'bg-indigo-600' : ''}`}>Services</Link>
        <Link to="/org/promotions" className={`text-white hover:bg-indigo-600 px-4 py-2 rounded-lg block ${location.pathname.startsWith('/org/promotions') ? 'bg-indigo-600' : ''}`}>Promotions</Link>
      </div>

      {/* Sticky User Info / Login Button at the Bottom */}
      <div className={`mt-auto lg:block ${isOpen ? 'block' : 'hidden'}`}>
        {user ? (
          <div className="flex items-center space-x-2 px-4 py-2">
            <Avvvatars value={user.email} size={40} />
            <span className="text-white font-medium">{user.name}</span>
          </div>
        ) : (
          <Link to="/signin" className="block text-center text-pink-500 font-medium hover:text-white transition px-4 py-2">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}
