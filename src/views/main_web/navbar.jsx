import { useState } from 'react';
import { faSearch, faUserShield, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 animate-slide-up">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-black rounded-lg items-center justify-center flex">
              <h1 className="text-yellow-500 font-serif text-2xl md:text-4xl font-bold text-center mb-1">s</h1>
            </div>
            <h1 className="text-xl md:text-2xl font-bold font-serif">SAREP</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 animate-slide-up-delay">
              <Link to="/" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/subweb_services" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium">Services</Link>
              <Link to="/subweb_listings" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium">Listings</Link>
              <Link to="/subweb_aboutus" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium">About us</Link>
              <Link to="/subweb_contactus" className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              <Link to="/admin" className="h-10 px-4 bg-yellow-500 flex items-center justify-center rounded-md cursor-pointer hover:bg-yellow-600 transition-colors">
                <FontAwesomeIcon icon={faUserShield} className="text-black"/>
                <span className="text-black font-semibold ml-2">Admin</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-yellow-500 focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-yellow-500 px-3 py-4 rounded-md text-base font-medium border-b border-gray-50">Home</Link>
            <Link to="/subweb_services" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-yellow-500 px-3 py-4 rounded-md text-base font-medium border-b border-gray-50">Services</Link>
            <Link to="/subweb_listings" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-yellow-500 px-3 py-4 rounded-md text-base font-medium border-b border-gray-50">Listings</Link>
            <Link to="/subweb_aboutus" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-yellow-500 px-3 py-4 rounded-md text-base font-medium border-b border-gray-50">About us</Link>
            <Link to="/subweb_contactus" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-yellow-500 px-3 py-4 rounded-md text-base font-medium border-b border-gray-50">Contact</Link>
            <Link to="/admin" onClick={() => setIsOpen(false)} className="flex items-center text-gray-800 hover:text-yellow-500 px-3 py-4 rounded-md text-base font-medium">
              <FontAwesomeIcon icon={faUserShield} className="mr-2" />
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}