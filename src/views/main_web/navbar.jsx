import {faSearch, faUserShield} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (

 <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-7">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-2 items-center space-x-3 animate-slide-up">
            <div className="h-12 w-12 bg-black rounded-lg items-center justify-center flex">
              <h1 className="text-yellow-500 font-serif text-4xl font-bold text-center mb-1">s</h1>
            </div>
            <h1 className="text-2xl font-bold font-serif">SAREP</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 animate-slide-up-delay">
              <a href="/" className="text-gray-800 hover:text-yellow-500 px-4 py-3 rounded-md text-base font-normal">Home</a>
              <a href="/subweb_services" className="text-gray-800 hover:text-yellow-500 px-4 py-3 rounded-md text-base font-normal">Services</a>
              <a href="/subweb_listings" className="text-gray-800 hover:text-yellow-500 px-4 py-3 rounded-md text-base font-normal">Listings</a>
              <a href="/subweb_aboutus" className="text-gray-800 hover:text-yellow-500 px-4 py-3 rounded-md text-base font-normal">About us</a>
              <a href="/subweb_contactus" className="text-gray-800 hover:text-yellow-500 px-4 py-3 rounded-md text-base font-normal">Contact</a>
              <div className="h-10 w-30 bg-yellow-500 flex flex-row items-center justify-center rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faUserShield} className="text-black mt-1 ml-3"/>
                <span className="text-black font-semibold ml-2">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}