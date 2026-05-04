export default function MainWebGetStarted() {
    return(
        <div className="bg-yellow-500 py-24 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 animate-slide-up">
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-gray-900 mt-4 px-2">Ready To Get Started?</h2>
                    <p className="text-base md:text-xl text-gray-900 max-w-3xl px-4">
                        Explore our premium services and find the perfect solution for your needs.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 justify-center items-center animate-slide-up-delay">
                    <button className="w-full sm:w-auto bg-gray-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-yellow-600 transition duration-300">Explore Listings</button>
                    <button className="w-full sm:w-auto bg-slate-50 text-gray-900 font-semibold px-8 py-3 rounded-md hover:bg-black hover:text-white transition duration-300">Contact Us</button>
                </div>
                </div>
            </div>
    );
}