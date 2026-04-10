import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return(
        <div className="bg-gray-900 py-24 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 space-y-8 md:space-y-0 gap-8 mb-12">
                    <div className="col-span-1">
                        <div className="flex flex-row">
                            <div className="bg-yellow-500 h-12 w-12 rounded-lg text-gray-900 flex items-center justify-center ">
                                <span className="text-4xl text-gray-900 font-serif font-bold">S</span>
                            </div>
                            <span className="text-white text-2xl font-serif font-bold ml-2 mt-2">SAREP</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-6 max-w-xs">Your premier partner for luxury real estate, car rentals, and short-term accommodations.</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-2">Services</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-slate-400 hover:text-white">Airbnb Apartments</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Luxury Car Rentals</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Real Estate sales</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><span className="text-slate-400">About us</span></li>
                            <li><span className="text-slate-400">Our listings</span></li>
                            <li><span className="text-slate-400">Contact Support</span></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-2">contact</h3>
                        <ul className="space-y-1">
                            <li><span className="text-slate-400"><FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" /> info@sarep.com</span></li>
                            <li><span className="text-slate-400"><FontAwesomeIcon icon={faPhone} className="text-yellow-500" /> +1 (555) 123 4567</span></li>
                            <li><span className="text-slate-400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500" /> 123 Main Street, City, Country</span></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="border-t border-slate-700 my-8"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-400">&copy; {new Date().getFullYear()} POBATECH. All rights reserved.</p>
            </div>
        </div>
    );
}