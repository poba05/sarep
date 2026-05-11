import { useState, useEffect } from 'react';
import { FaHome, FaBuilding, FaCar, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { getListings, iconMap } from '../../utils/listingsData';

export default function SubwebListings() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = [
        { name: 'all', icon: null },
        { name: 'airbnb', icon: FaHome },
        { name: 'real estate', icon: FaBuilding },
        { name: 'cars', icon: FaCar }
    ];

    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const data = await getListings();
            setListings(data);
        };
        fetchListings();
    }, []);

    const filteredListings = activeFilter === 'all' 
        ? listings 
        : listings.filter(listing => listing.category === activeFilter);

    return(
       <section className="relative mt-10 animate-fade-in">
        <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-900 animate-slide-up">
            <h1 className="text-white font-serif font-bold text-3xl md:text-5xl mt-8 md:mt-10 mb-4 text-center md:text-left">Browse Our Listings</h1>
            <p className="text-white mx-auto text-center md:text-left text-sm md:text-base">Discover premium properties, luxury vehicles, and exclusive accommodations.</p>
        </div>
        <div className="bg-slate-50 border-b border-gray-300 shadow-2xl animate-slide-up-delay">
            <div className="container mx-auto px-4 py-6">
                <div className="flex gap-4 flex-wrap items-center justify-between">
                    <div className="flex gap-4 flex-wrap">
                        {filters.map((filter) => {
                            const IconComponent = filter.icon;
                            return (
                                <button
                                    key={filter.name}
                                    onClick={() => setActiveFilter(filter.name)}
                                    className={`flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg font-semibold capitalize transition-all text-sm md:text-base ${
                                        activeFilter === filter.name
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-600'
                                    }`}
                                >
                                    {IconComponent && <IconComponent />}
                                    {filter.name}
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-2 bg-white border-2 border-gray-300 rounded-lg px-4 py-2 w-full md:w-auto">
                        <FaSearch className="text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search listings..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="outline-none flex-1 text-gray-800 placeholder-gray-500 bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredListings?.map((listing) => (
                        <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="h-56 md:h-64 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={listing.image} alt={listing.title} />
                            </div>
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl text-black font-serif font-bold mt-4">{listing.title}</h3>
                                <div className="mt-2 flex flex-row items-center">
                                    <FontAwesomeIcon icon={faLocationPin} className="text-yellow-400 text-xs mr-2"/>
                                    <p className="text-gray-600 font-serif">{listing.location}</p>
                                </div>
                                <div className="ml-auto mt-4 text-lg flex flex-row items-center space-x-2">
                                    <span className="text-black font-serif font-bold text-2xl">
                                        {listing.price?.startsWith('₦') ? listing.price : `₦${listing.price}`}
                                    </span>
                                    <span className="text-gray-500 font-serif font-light text-xl">{listing.price_unit}</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 mt-4">
                                    {listing.features?.map((feature, idx) => (
                                        <div key={idx} className="flex flex-row items-center space-x-2">
                                            {feature.iconName && iconMap[feature.iconName] && (
                                                <FontAwesomeIcon icon={iconMap[feature.iconName]} className="text-gray-600 text-xs"/>
                                            )}
                                            <span className="text-gray-600 font-serif text-sm">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to={`/subweb_listings/${listing.id}`} className="mt-6 w-full bg-yellow-500 text-white font-serif font-medium py-3 rounded-lg flex flex-row items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors duration-300">
                                    <span>View Details</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {(!filteredListings || filteredListings.length === 0) && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No listings found. If you just added one, please refresh or check your database connection.</p>
                    </div>
                )}
            </div>
        </div>

       </section>
    );
}