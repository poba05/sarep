import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBathtub, faBed, faCar, faFile, faGasPump, faGear, faUsers, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
import { faRuler } from "@fortawesome/free-solid-svg-icons/faRuler";
import { faRoad } from "@fortawesome/free-solid-svg-icons/faRoad";
import { useNavigate, Link } from "react-router-dom";
import { getRandomListings, iconMap } from '../../utils/listingsData';

export default function Mlistings() {
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandom = async () => {
            const data = await getRandomListings(3);
            setListings(data);
            setLoading(false);
        };
        fetchRandom();
    }, []);

    return(
       <div className="bg-gray-100 py-24 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 animate-slide-up">
                    <span className="text-xl text-yellow-500 font-medium font-serif">Premium selection</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-4">Featured Listings</h2>
                    <p className="font-serif text-black text-lg font-light max-w-3xl mx-auto">Discover our handpicked collection of premium properties, luxury vehicles, and exclusive accommodations.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up-delay">
                        {listings.map((listing) => (
                            <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                        src={listing.image} 
                                        alt={listing.title} 
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl text-black font-serif font-bold mt-4 line-clamp-1">{listing.title}</h3>
                                    <div className="mt-2 flex flex-row items-center">
                                        <FontAwesomeIcon icon={faLocationPin} className="text-yellow-400 text-xs mr-2"/>
                                        <p className="text-gray-600 font-serif text-sm truncate">{listing.location}</p>
                                    </div>
                                    <div className="ml-auto mt-4 text-lg flex flex-row items-center space-x-2">
                                        <span className="text-black font-serif font-bold text-2xl">{listing.price}</span>
                                        <span className="text-gray-500 font-serif font-light text-xl">{listing.priceUnit}</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 mt-4">
                                        {listing.features && listing.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex flex-row items-center space-x-2">
                                                {feature.iconName && iconMap[feature.iconName] && (
                                                    <FontAwesomeIcon icon={iconMap[feature.iconName]} className="text-gray-600 text-xs"/>
                                                )}
                                                <span className="text-gray-600 font-serif text-xs truncate">{feature.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link 
                                        to={`/subweb_listings/${listing.id}`}
                                        className="mt-6 w-full bg-yellow-500 text-white font-serif font-medium py-3 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300"
                                    >
                                        <span>View Details</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-center mt-12 animate-slide-up-delay-2">
                    <button onClick={() => navigate("/subweb_listings")} className="bg-black text-white font-serif font-medium py-4 px-12 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300 text-lg">
                        <span>View All Listings</span>
                    </button>
                </div>
            </div>
       </div>
    );
}