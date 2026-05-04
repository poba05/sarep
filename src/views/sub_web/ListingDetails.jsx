import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faArrowLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getListingById, iconMap } from '../../utils/listingsData';

export default function ListingDetails() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

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
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading listing...</h2>
                <Link to="/subweb_listings" className="text-blue-600 hover:underline">
                    &larr; Back to listings
                </Link>
            </div>
        );
    }

    const gallery = listing.gallery && listing.gallery.length > 0 ? listing.gallery : [listing.image];

    const nextImage = () => {
        setActiveImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <section className="relative mt-10 animate-fade-in pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-5">
                <Link to="/subweb_listings" className="inline-flex items-center text-gray-600 hover:text-black mb-6 font-serif transition-colors">
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back to Listings
                </Link>
                
                {/* 3D-ish Premium Carousel */}
                <div className="relative mb-12 h-[300px] md:h-[500px] perspective-1000">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {gallery.map((img, index) => {
                            let position = index - activeImageIndex;
                            if (position < -Math.floor(gallery.length / 2)) position += gallery.length;
                            if (position > Math.floor(gallery.length / 2)) position -= gallery.length;

                            const isActive = position === 0;
                            const isPrev = position === -1;
                            const isNext = position === 1;

                            // Calculate visibility and transform based on position
                            const opacity = isActive ? 1 : (Math.abs(position) <= 1 ? 0.6 : 0);
                            const scale = isActive ? 1 : 0.8;
                            const translateX = position * 40; // Adjust for spread
                            const rotateY = position * -25;
                            const zIndex = 10 - Math.abs(position);

                            return (
                                <div 
                                    key={index}
                                    className={`absolute w-[80%] md:w-[60%] h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
                                    style={{
                                        transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        pointerEvents: isActive ? 'auto' : 'none'
                                    }}
                                    onClick={isActive ? undefined : () => setActiveImageIndex(index)}
                                >
                                    <img src={img} alt={`${listing.title} ${index}`} className="w-full h-full object-cover" />
                                    {!isActive && <div className="absolute inset-0 bg-black/40"></div>}
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    {gallery.length > 1 && (
                        <>
                            <button 
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-4 rounded-full shadow-lg transition-all"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button 
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-4 rounded-full shadow-lg transition-all"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </>
                    )}

                    {/* Indicators */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {gallery.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setActiveImageIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${activeImageIndex === i ? 'bg-yellow-500 w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mt-16">
                    <div className="p-6 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b pb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {listing.category}
                                    </span>
                                    <span className="text-gray-400 text-sm">ID: #{listing.id.slice(0, 8)}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">{listing.title}</h1>
                                <div className="mt-4 flex items-center text-gray-600">
                                    <FontAwesomeIcon icon={faLocationPin} className="text-yellow-500 text-xl mr-3" />
                                    <span className="text-lg">{listing.location}</span>
                                </div>
                            </div>
                            <div className="text-right bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-sm w-full md:w-auto">
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Total Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-serif font-bold text-gray-900">{listing.price}</span>
                                    <span className="text-xl text-gray-500 font-serif">{listing.priceUnit}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-8 h-1 bg-yellow-500 mr-3"></span>
                                    Property Description
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {listing.description || "No description provided for this listing. Contact us for more details."}
                                </p>
                            </div>
                            
                            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Key Features</h2>
                                <div className="space-y-4">
                                    {listing.features && listing.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                                            <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0">
                                                {feature.iconName && iconMap[feature.iconName] && (
                                                    <FontAwesomeIcon icon={iconMap[feature.iconName]} className="text-yellow-600 text-lg"/>
                                                )}
                                            </div>
                                            <span className="text-gray-800 font-medium">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-10 w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-yellow-600 transition-all duration-300 shadow-xl active:scale-95">
                                    Book Now / Inquire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
