import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faBuilding, faCar, faHome } from "@fortawesome/free-solid-svg-icons";

export default function Mservices() {
    return(
        <div className="bg-white py-24 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 animate-slide-up">
                    <span className="text-xl text-yellow-500 font-medium font-serif">What we offer</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-4">Our Premium Services</h2>
                    <p className="font-serif text-slate-600 text-lg font-light max-w-3xl mx-auto">Comprehensive solutions for luxury living, premium accommodations, and exclusive experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up-delay">
                    <div className="service-card bg-slate-50 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="src/assets/airbnb.jpg" alt="" />
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden">
                                <FontAwesomeIcon icon={faHome} className="text-yellow-400 text-2xl"/>
                            </div>
                            <h3 className="text-2xl text-black font-serif font-bold mt-4">Airbnb Rentals</h3>
                            <p className="text-gray-600 mt-4 font-serif">Luxury apartments and homes for short-term stays with premium amenities and 24/7 concierge service.</p>
                            <a className="flex text-yellow-400 text-xl font-serif mt-4 items-center space-x-3" href="">
                                learn more
                                <FontAwesomeIcon icon={faArrowRight} className="text-yellow-400 text-xs"/>
                            </a>
                        </div>
                    </div>
                    <div className="service-card bg-slate-50 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="src/assets/car_image.jpg" alt="" />
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center overflow-hidden">
                                <FontAwesomeIcon icon={faCar} className="text-gray-800 text-2xl"/>
                            </div>
                            <h3 className="text-2xl text-black font-serif font-bold mt-4">Car Rentals</h3>
                            <p className="text-gray-600 mt-4 font-serif">Exclusive fleet of luxury vehicles including sedans, SUVs, and exotic cars with professional chauffeur options.</p>
                            <a className="flex text-yellow-400 text-xl font-serif mt-4 items-center space-x-3" href="">
                                learn more
                                <FontAwesomeIcon icon={faArrowRight} className="text-yellow-400 text-xs"/>
                            </a>
                        </div>
                    </div>
                    <div className="service-card bg-slate-50 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="src/assets/hero_image.jpg" alt="" />
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden">
                                <FontAwesomeIcon icon={faBuilding} className="text-yellow-400 text-2xl"/>
                            </div>
                            <h3 className="text-2xl text-black font-serif font-bold mt-4">Real Estate</h3>
                            <p className="text-gray-600 mt-4 font-serif">Prime properties and land investments across Nigeria's most desirable locations with flexible payment plans.</p>
                            <a className="flex text-yellow-400 text-xl font-serif mt-4 items-center space-x-3" href="">
                                learn more
                                <FontAwesomeIcon icon={faArrowRight} className="text-yellow-400 text-xs"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}