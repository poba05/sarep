import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBuilding, faCar, faCheck, faCity, faGem, faHouse, faCarSide } from "@fortawesome/free-solid-svg-icons"
import { faMap } from "@fortawesome/free-regular-svg-icons"

// Import assets
import livingRoomImg from "../../assets/living_room.jpg"
import balconyImg from "../../assets/balcony.jpg"
import kitchenImg from "../../assets/kitchen.jpg"
import bedroomImg from "../../assets/bedroom.jpg"
import car1Img from "../../assets/car_1.jpg"
import car2Img from "../../assets/car_2.jpg"
import car4Img from "../../assets/car_4.jpg"
import heroImg from "../../assets/hero_image.jpg"
import realEstate1Img from "../../assets/real_estate_1.jpg"
import realEstate2Img from "../../assets/real_estate_2.jpg"

export default function SubwebServices() {
    const list = [
        {
            id: 1,
            title: "Airbnb Rentals",
            text: "Premium short-term accommodations with luxury amenities and exceptional service.",
            icon: faHouse,
            color: "bg-yellow-500/50",
            border_color: "border-yellow-500",
            icon_color: "text-yellow-500"
        },
        {
            id: 2,
            title: "Car Rentals",
            text: "Exclusive fleet of luxury vehicles for business and leisure travel needs.",
            icon: faCar,
            color: "bg-gray-500/50",
            border_color: "border-gray-500",
            icon_color: "text-gray-500"
        },
        {
            id: 3,
            title: "Real Estate",
            text: "Prime properties and land investments across Nigeria's most desirable locations.",
            icon: faBuilding,
            color: "bg-yellow-500/50",
            border_color: "border-yellow-500",
            icon_color: "text-yellow-500"
        }
    ]
    return(
        <section className="relative pt-20 animate-fade-in">
            <div className="w-full px-4 py-12 bg-gray-900 text-center animate-slide-up">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-white font-serif font-bold text-4xl md:text-6xl mb-4">Our Services</h1>
                    <p className="text-white text-sm md:text-base">Comprehensive solutions for luxury living, premium accommodations, and exclusive vehicle experiences tailored to your lifestyle.</p>
                </div>
            </div>
            <div className="bg-white py-20 animate-slide-up-delay">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {list.map((item) => (
                            <div key={item.id} className={` border-t-4 ${item.border_color} rounded-lg p-6 flex flex-col items-center text-center bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                                <div className={`text-4xl mb-4 ${item.color} rounded-full h-16 w-16 flex items-center justify-center mt-10`}>
                                    <FontAwesomeIcon icon={item.icon} className={` ${item.icon_color}`}/>
                                </div>
                                <h3 className="text-xl font-bold mb-2 mt-3">{item.title}</h3>
                                <p className="text-gray-600 mt-3">{item.text}</p>
                                <button className="mt-6 w-full text-yellow-500 font-serif font-medium py-3 rounded-lg flex flex-row items-center justify-center space-x-2">
                                    <span >Learn More</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="text-yellow-500"/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Airbnb Rentals Section */}
            <div className="w-full bg-gray-100 py-20 animate-slide-up-delay-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-yellow-500 text-2xl font-serif">Premium Accommodations</h4>
                            <h1 className="text-gray-800 font-serif font-bold text-3xl md:text-4xl mt-2">Airbnb & Short-Term Rentals</h1>
                            <p className="text-gray-600 mt-4">Experience luxury living with our carefully curated collection of premium apartments and homes. Each property is meticulously maintained and equipped with modern amenities to ensure your comfort and satisfaction.</p>
                            <div className="flex flex-col">
                                <div className="flex items-start mt-6">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                                        <FontAwesomeIcon icon={faCheck} className="text-yellow-500"/>
                                    </div>
                                    <div>
                                        <span className="text-gray-800 font-bold text-lg block">Fully Furnished Apartments</span>
                                        <p className="text-gray-600 text-sm">Modern furniture, high-speed WiFi, smart TVs, and premium bedding.</p>
                                    </div>
                                </div>
                                <div className="flex items-start mt-6">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                                        <FontAwesomeIcon icon={faCheck} className="text-yellow-500"/>
                                    </div>
                                    <div>
                                        <span className="text-gray-800 font-bold text-lg block">Prime Locations</span>
                                        <p className="text-gray-600 text-sm">Stay in the heart of Victoria Island, Ikoyi, and other high-end districts.</p>
                                    </div>
                                </div>
                                <div className="flex items-start mt-6">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4">
                                        <FontAwesomeIcon icon={faCheck} className="text-yellow-500"/>
                                    </div>
                                    <div>
                                        <span className="text-gray-800 font-bold text-lg block">24/7 Security & Support</span>
                                        <p className="text-gray-600 text-sm">Your safety is our priority with round-the-clock security and concierge.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg mt-10 transition-colors">View Available Apartments</button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src={livingRoomImg} alt="Living room" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"/>
                                <img src={balconyImg} alt="Balcony" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"/>
                            </div>
                            <div className="space-y-4 pt-8">
                                <img src={kitchenImg} alt="Kitchen" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"/>
                                <img src={bedroomImg} alt="Bedroom" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Car Rentals Section */}
            <div className="w-full bg-white py-20 animate-slide-up-delay-3">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 w-full">
                                    <img src={car1Img} alt="car-1" className="w-1/2 h-48 md:h-56 object-cover rounded-lg shadow-lg"/>
                                    <img src={car2Img} alt="car-2" className="w-1/2 h-48 md:h-56 object-cover rounded-lg shadow-lg"/>
                                </div>
                                <div className="w-full">
                                    <img src={car4Img} alt="car-4" className="w-full h-64 md:h-80 object-cover object-center rounded-lg shadow-lg"/>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h4 className="text-yellow-500 text-2xl font-serif">Luxury Fleet</h4>
                            <h1 className="text-gray-800 font-serif font-bold text-3xl md:text-4xl mt-2">Premium Car Rentals</h1>
                            <p className="text-gray-600 mt-6">Drive in style with our exclusive collection of luxury and exotic vehicles. Whether for business meetings, special events, or leisure travel, we have the perfect vehicle for every occasion.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col">
                                    <FontAwesomeIcon icon={faCarSide} className="text-yellow-500 text-2xl mb-4"/>
                                    <span className="text-gray-800 font-bold text-lg">Sedans & SUVs</span>
                                    <p className="text-gray-600 text-sm mt-1">Mercedes, BMW, Range Rover</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col">
                                    <FontAwesomeIcon icon={faGem} className="text-yellow-500 text-2xl mb-4"/>
                                    <span className="text-gray-800 font-bold text-xl">Exotic Cars</span>
                                    <p className="text-gray-600 text-sm mt-1">Ferrari, Lamborghini, Porsche</p>
                                </div>
                            </div>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg mt-8 transition-colors">View Our Fleet</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Real Estate Section */}
            <div className="w-full bg-gray-100 py-20 animate-slide-up-delay-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-yellow-500 text-2xl font-serif">Property Investment</h4>
                            <h1 className="text-gray-800 font-serif font-bold text-3xl mt-2">Real Estate Sales & Development</h1>
                            <p className="text-gray-600 mt-4 mb-8">Invest in Nigeria's most promising real estate opportunities. From residential plots to commercial estates, we offer prime properties with verified documentation and excellent ROI potential.</p>
                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                                <h4 className="font-bold text-gray-800 mb-6 border-b pb-4">Property Types Available</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faMap} className="text-yellow-500"/>
                                        </div>
                                        <span className="text-gray-700 font-medium">Residential Land & Plots</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCity} className="text-yellow-500"/>
                                        </div>
                                        <span className="text-gray-700 font-medium">Commercial Properties</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faHouse} className="text-yellow-500"/>
                                        </div>
                                        <span className="text-gray-700 font-medium">Luxury Estates & Villas</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-gray-800 hover:bg-black text-white font-bold py-4 px-8 rounded-lg transition-colors">Browse Properties</button>
                        </div>
                        <div className="flex flex-col gap-4">
                                <div className="w-full">
                                    <img src={heroImg} alt="real-estate" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"/>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <img src={realEstate1Img} alt="real-estate-1" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"/>
                                    <img src={realEstate2Img} alt="real-estate-2" className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}