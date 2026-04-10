import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBuilding, faCar, faCarRear, faCarSide, faCheck, faCity, faDiamond, faGem, faHome, faHouse } from "@fortawesome/free-solid-svg-icons"
import { faMap } from "@fortawesome/free-regular-svg-icons"

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
                    <h1 className="text-white font-serif font-bold text-6xl mb-4">Our Services</h1>
                    <p className="text-white">Comprehensive solutions for luxury living, premium accommodations, and exclusive vehicle experiences tailored to your lifestyle.</p>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-yellow-500 text-2xl font-serif">Premium Accommodations</h4>
                            <h1 className="text-gray-800 font-serif font-bold text-4xl mt-2">Airbnb & Short-Term Rentals</h1>
                            <p className="text-gray-600 mt-4">Experience luxury living with our carefully curated collection of premium apartments and homes. Each property is meticulously maintained and equipped with modern amenities to ensure your comfort and satisfaction.</p>
                            <div className="flex flex-col">
                                <div>
                                    <div className="flex items-center mt-5">
                                        <div className="h-11 w-11 rounded-full bg-yellow-500/25 items-center justify-center flex mb-4">
                                            <FontAwesomeIcon icon={faCheck} className="text-yellow-500 text-2xl"/>
                                        </div>
                                        <div className="flex flex-col space-x-2 ml-6">
                                            <span className="text-gray-800 font-bold text-xl">Fully Furnished Apartments</span>
                                            <p className="text-gray-600">Modern furniture, high-speed WiFi, smart TVs, and premium bedding.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center mt-5">
                                        <div className="h-11 w-11 rounded-full bg-yellow-500/25 items-center justify-center flex mb-4">
                                            <FontAwesomeIcon icon={faCheck} className="text-yellow-500 text-2xl"/>
                                        </div>
                                        <div className="flex flex-col space-x-2 ml-6">
                                            <span className="text-gray-800 font-bold text-xl">Fully Furnished Apartments</span>
                                            <p className="text-gray-600">Modern furniture, high-speed WiFi, smart TVs, and premium bedding.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center mt-5">
                                        <div className="h-11 w-11 rounded-full bg-yellow-500/25 items-center justify-center flex mb-4">
                                            <FontAwesomeIcon icon={faCheck} className="text-yellow-500 text-2xl"/>
                                        </div>
                                        <div className="flex flex-col space-x-2 ml-6">
                                            <span className="text-gray-800 font-bold text-xl">Fully Furnished Apartments</span>
                                            <p className="text-gray-600">Modern furniture, high-speed WiFi, smart TVs, and premium bedding.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-5 rounded mt-8 ml-25">View Available Apartments</button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="src/assets/living_room.jpg" alt="Living room" className="w-full h-48 object-cover rounded-lg shadow-lg"/>
                                <img src="src/assets/balcony.jpg" alt="Balcony" className="w-full h-48 object-cover rounded-lg shadow-lg"/>
                            </div>
                            <div className="space-y-4 pt-8">
                                <img src="src/assets/kitchen.jpg" alt="Kitchen" className="w-full h-48 object-cover rounded-lg shadow-lg"/>
                                <img src="src/assets/bedroom.jpg" alt="Bedroom" className="w-full h-48 object-cover rounded-lg shadow-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Car Rentals Section */}
            <div className="w-full bg-white py-20 animate-slide-up-delay-3">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="order-2 sm:order-1">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 w-full">
                                    <img src="src/assets/car_1.jpg" alt="car-1" className="w-1/2 h-55 object-cover rounded-lg shadow-lg"/>
                                    <img src="src/assets/car_2.jpg" alt="car-2" className="w-1/2 h-55 object-cover rounded-lg shadow-lg"/>
                                </div>
                                <div className="w-full text-center flex justify-center">
                                    <img src="src/assets/car_4.jpg" alt="car-4" className="w-full h-70 object-cover object-center rounded-lg shadow-lg"/>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 sm:order-2">
                            <h4 className="text-yellow-500 text-2xl font-serif mt-10">Luxury Fleet</h4>
                            <h1 className="text-gray-800 font-serif font-bold text-4xl mt-8">Premium Car Rentals</h1>
                            <p className="text-gray-600 mt-8">Drive in style with our exclusive collection of luxury and exotic vehicles. Whether for business meetings, special events, or leisure travel, we have the perfect vehicle for every occasion.</p>
                            <div className="flex flex-col">
                                <div>
                                    <div className="flex items-center mt-5 space-x-6">
                                        <div className="w-65 h-38 p-4 bg-gray-200/30 rounded-lg items-start justify-start flex flex-col mb-4">
                                            <FontAwesomeIcon icon={faCarSide} className="text-yellow-500 text-2xl mb-5 mt-2"/>
                                            <span className="text-gray-800 font-bold text-xl">Sedan & SUVs</span>
                                            <p className="text-gray-600">Mercedes, BMW, RangeRover</p>
                                        </div>
                                        <div className="w-65 h-38 p-4 bg-gray-200/30 rounded-lg items-start justify-start flex flex-col mb-4">
                                            <FontAwesomeIcon icon={faGem} className="text-yellow-500 text-2xl mb-5 mt-2"/>
                                            <span className="text-gray-800 font-bold text-xl">Exotic Cars</span>
                                            <p className="text-gray-600">Ferrari, Lamborghini, Porsche</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-5 rounded mt-3">View Our Fleet</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Real Estate Section */}
            <div className="w-full bg-gray-100 py-20 animate-slide-up-delay-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-yellow-500 text-2xl font-serif">Property Investment</h4>
                            <h1 className="text-gray-800 font-serif font-bold text-3xl mt-2">Real Estate Sales & Development</h1>
                            <p className="text-gray-600 mt-4 mb-6">Invest in Nigeria's most promising real estate opportunities. From residential plots to commercial estates, we offer prime properties with verified documentation and excellent ROI potential.</p>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-3">
                                <h4 className="font-bold text-gray-800 mb-4">Property Types Available</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faMap} className="text-yellow-500 text-xl"/>
                                        <span className="text-gray-600">Residential Land & Plots</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faCity} className="text-yellow-500 text-xl"/>
                                        <span className="text-gray-600">Commercial Properties</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={faHome} className="text-yellow-500 text-xl"/>
                                        <span className="text-gray-600">Luxury Estates & Villas</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-gray-800 hover:border-2 hover:border-white text-white font-bold py-4 px-5 rounded mt-8">Browse Properties</button>
                        </div>
                        <div className="flex flex-col gap-4">
                                <div className="w-full text-center flex justify-center">
                                    <img src="src/assets/hero_image.jpg" alt="real-estate" className="w-full h-70 object-cover object-center rounded-lg shadow-lg"/>
                                </div>
                                <div className="flex flex-row gap-4 w-full">
                                    <img src="src/assets/real_estate_1.jpg" alt="real-estate-1" className="w-1/2 h-55 object-cover rounded-lg shadow-lg"/>
                                    <img src="src/assets/real_estate_2.jpg" alt="real-estate-2" className="w-1/2 h-55 object-cover rounded-lg shadow-lg"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}