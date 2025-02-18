import { useState } from 'react';
import Avvvatars from 'avvvatars-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const user = ''; // Replace with actual user data when available

  return (
    <nav className='bg-indigo-800 shadow-md relative'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Left - Brand Logo */}
        <h1 className='text-2xl font-bold text-white'>NexCommerce</h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8 items-center'>
          <div className='relative'>
            <button
              className='text-white hover:text-pink-700 transition'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products &#9662;
            </button>
            {dropdownOpen && (
              <div className='absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md p-2 z-50'>
                <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-indigo-100'>
                  Category 1
                </a>
                <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-indigo-100'>
                  Category 2
                </a>
              </div>
            )}
          </div>
          <a href='#' className='text-white hover:text-pink-700 transition'>
            Today’s Deals
          </a>
          <a href='#' className='text-white hover:text-pink-700 transition'>
            Your Orders
          </a>

          {/* User Info */}
          {user ? (
            <div className='flex items-center space-x-2'>
              <Avvvatars value={user.email} size={40} />
              <span className='text-white font-medium'>{user.name}</span>
            </div>
          ) : (
            <a href='/login' className='text-pink-700 font-medium hover:text-white transition'>
              Login
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-indigo-700 text-white p-4 space-y-4'>
          {/* Mobile Dropdown */}
          <div>
            <button
              className='w-full text-left py-2 flex justify-between items-center'
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Products
              <span>{mobileDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {mobileDropdownOpen && (
              <div className='ml-4 space-y-2'>
                <a href='#' className='block py-2 text-gray-200 hover:text-pink-400 transition'>
                  Category 1
                </a>
                <a href='#' className='block py-2 text-gray-200 hover:text-pink-400 transition'>
                  Category 2
                </a>
              </div>
            )}
          </div>
          <a href='#' className='block py-2 hover:text-pink-700 transition'>
            Today’s Deals
          </a>
          <a href='#' className='block py-2 hover:text-pink-700 transition'>
            Your Orders
          </a>
          <div className='border-t border-white pt-3'>
            {user ? (
              <div className='flex items-center space-x-2'>
                <Avvvatars value={user.email} size={40} />
                <span className='text-white'>{user.name}</span>
              </div>
            ) : (
              <a href='/login' className='block text-pink-500 font-medium hover:text-white transition'>
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
