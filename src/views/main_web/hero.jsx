import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <div className="relative bg-gray-100 h-screen bg-[url('src/assets/hero_image.jpg')] bg-cover bg-center flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 space-y-4 animate-slide-up">
                <h1 className="text-7xl font-black font-serif text-white mb-4">Welcome to SAREP</h1>
                <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">Your gateway to luxury real estate, premium car rentals, and exclusive short-term accommodations in Nigeria's finest locations.</p>
                <div className="flex flex-row space-x-5 animate-slide-up-delay">
                    <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">Explore Listings</button>
                    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black transition duration-300">Contact Us</button>
                </div>
                <div className="absolute bottom-10 animate-bounce animate-slide-up-delay-2">
                    <FontAwesomeIcon icon={faAngleDown} className="text-white text-3xl"/>
                </div>
            </div>
        </div>
    );
}