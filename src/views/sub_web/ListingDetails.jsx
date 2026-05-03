import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getListingById, iconMap } from '../../utils/listingsData';

export default function ListingDetails() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        const fetchListing = async () => {
            const data = await getListingById(id);
            setListing(data);
        };
        fetchListing();
    }, [id]);

    if (!listing) {
        return (
            <div className="container mx-auto px-4 py-20 text-center h-screen flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Listing not found</h2>
                <Link to="/subweb_listings" className="text-blue-600 hover:underline">
                    &larr; Back to listings
                </Link>
            </div>
        );
    }

    return (
        <section className="relative mt-10 animate-fade-in pb-20">
            <div className="container mx-auto px-4 py-5">
                <Link to="/subweb_listings" className="inline-flex items-center text-blue-600 hover:underline mb-6 font-serif">
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back to Listings
                </Link>
                
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="h-64 md:h-96 overflow-hidden relative">
                        <img 
                            src={listing.image.startsWith('src') ? `/${listing.image}` : listing.image} 
                            alt={listing.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg text-sm md:text-base">
                            {listing.category.toUpperCase()}
                        </div>
                    </div>
                    
                    <div className="p-6 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b pb-8">
                            <div>
                                <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900">{listing.title}</h1>
                                <div className="mt-4 flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={faLocationPin} className="text-yellow-500 text-xl mr-3" />
                                    <span className="text-lg">{listing.location}</span>
                                </div>
                            </div>
                            <div className="text-right bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-serif font-bold text-gray-900">{listing.price}</span>
                                    <span className="text-xl text-gray-500 font-serif">{listing.priceUnit}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Description</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {listing.description || "No description provided for this listing. Contact us for more details."}
                                </p>
                            </div>
                            
                            <div className="bg-slate-50 p-8 rounded-xl border border-gray-100">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Key Features</h2>
                                <div className="space-y-4">
                                    {listing.features && listing.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-50">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                                {feature.iconName && iconMap[feature.iconName] && (
                                                    <FontAwesomeIcon icon={iconMap[feature.iconName]} className="text-blue-600 text-lg"/>
                                                )}
                                            </div>
                                            <span className="text-gray-800 font-medium text-lg">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-8 w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                                    Contact Agent
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
