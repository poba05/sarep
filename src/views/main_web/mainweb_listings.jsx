import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBathtub, faBed, faCar, faFile, faGasPump, faGear, faUsers, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
import { faRuler } from "@fortawesome/free-solid-svg-icons/faRuler";
import { faRoad } from "@fortawesome/free-solid-svg-icons/faRoad";
import { useNavigate } from "react-router-dom";
import airbnbImg from "../../assets/airbnb.jpg";
import carImg from "../../assets/car_image.jpg";
import heroImg from "../../assets/hero_image.jpg";

export default function Mlistings() {
    const navigate = useNavigate();
    return(
       <div className="bg-gray-100 py-24 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 animate-slide-up">
                    <span className="text-xl text-yellow-500 font-medium font-serif">Premium selection</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-4">Featured Listings</h2>
                    <p className="font-serif text-black text-lg font-light max-w-3xl mx-auto">Discover our handpicked collection of premium properties, luxury vehicles, and exclusive accommodations.</p>
                </div>
                {/* Listings content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up-delay">
                    {/* first listing card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={airbnbImg} alt="" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl text-black font-serif font-bold mt-4">Luxury 3BR Apartment</h3>
                            <div className="mt-2 flex flex-row items-center">
                                <FontAwesomeIcon icon={faLocationPin} className="text-yellow-400 text-xs mr-2"/>
                                <p className="text-gray-600 font-serif">Victoria Island, Lagos</p>
                            </div>
                            <div className="ml-auto mt-4 text-lg flex flex-row items-center space-x-2">
                                <span className="text-black font-serif font-bold text-2xl">₦85,000</span>
                                <span className="text-gray-500 font-serif font-light text-xl">/night</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 mt-4">
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faBed} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">3 beds</span>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faBathtub} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">2 baths</span>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faWifi} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">Wifi</span>
                                </div>
                            </div>
                            <button onClick={() => navigate("/subweb_listings")} className="mt-6 w-full bg-yellow-500 text-white font-serif font-medium py-3 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300">
                                <span>View Details</span>
                            </button>
                        </div>
                    </div>
                    {/* second listing card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={carImg} alt="" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl text-black font-serif font-bold mt-4">Mercedes-Benz S-Class</h3>
                            <div className="mt-2 flex flex-row items-center">
                                <FontAwesomeIcon icon={faCar} className="text-yellow-400 text-xs mr-2"/>
                                <p className="text-gray-600 font-serif">2023 model</p>
                            </div>
                            <div className="ml-auto mt-4 text-lg flex flex-row items-center space-x-2">
                                <span className="text-black font-serif font-bold text-2xl">₦120,000</span>
                                <span className="text-gray-500 font-serif font-light text-xl">/day</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 mt-4">
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faUsers} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">5 seats</span>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faGear} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">Auto</span>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faGasPump} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">Petrol</span>
                                </div>
                            </div>
                            <button onClick={() => navigate("/subweb_listings")} className="mt-6 w-full bg-yellow-500 text-white font-serif font-medium py-3 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300">
                                <span>View Details</span>
                            </button>
                        </div>
                    </div>
                    {/* third listing card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="h-64 overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={heroImg} alt="" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl text-black font-serif font-bold mt-4">Prime Estate Land</h3>
                            <div className="mt-2 flex flex-row items-center">
                                <FontAwesomeIcon icon={faLocationPin} className="text-yellow-400 text-xs mr-2"/>
                                <p className="text-gray-600 font-serif">Lekki phase 2, Lagos</p>
                            </div>
                            <div className="ml-auto mt-4 text-lg flex flex-row items-center space-x-2">
                                <span className="text-black font-serif font-bold text-2xl">₦25M</span>
                                <span className="text-gray-500 font-serif font-light text-xl">/plot</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 mt-4">
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faRuler} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">600sqm</span>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faFile} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">C of O</span>
                                </div>
                                <div className="flex flex-row items-center space-x-2">
                                    <FontAwesomeIcon icon={faRoad} className="text-gray-600 text-xs"/>
                                    <span className="text-gray-600 font-serif">Tarred</span>
                                </div>
                            </div>
                            <button onClick={() => navigate("/subweb_listings")} className="mt-6 w-full bg-yellow-500 text-white font-serif font-medium py-3 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300">
                                <span>View Details</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12 animate-slide-up-delay-2">
                    <button onClick={() => navigate("/subweb_listings")} className="bg-black text-white font-serif font-medium py-4 px-12 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300 text-lg">
                        <span>View All Listings</span>
                    </button>
                </div>
            </div>
       </div>
    );
}