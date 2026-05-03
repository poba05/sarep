export default function SubwebAboutus(){
    return(
        <section className="about-us pt-28 pb-16 bg-gray-100 animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-slide-up">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Learn more about our company, our mission, and the vision behind SAREP.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-slide-up-delay">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2022, SAREP has been at the forefront of revolutionizing the real estate,
                            automotive, and hospitality industries in Nigeria. We started with a simple idea:
                            to make premium services accessible and beneficial for everyone.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Over the years, we've grown from a small team to a dedicated group of professionals
                            committed to delivering exceptional luxury real estate, premium car rentals, and
                            exclusive short-term accommodations.
                        </p>
                        <p className="text-gray-600">
                            Today, we continue to push boundaries and explore new possibilities, always with
                            our customers' needs at the heart of everything we do.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg animate-slide-in-right">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600 mb-4">
                            To empower individuals and businesses with access to Nigeria's finest luxury real estate,
                            premium transportation, and exclusive accommodations that drive success and create unforgettable experiences.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be the leading provider of premium lifestyle services in Nigeria, recognized
                            for our commitment to excellence, innovation, and customer satisfaction.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg mb-12 animate-slide-up-delay-2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Meet Our CEO</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <div className="w-48 h-48 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                                <span className="text-6xl font-bold text-black">CEO</span>
                            </div>
                        </div>
                        <div className="md:w-2/3 md:pl-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ayodele Oluwaseun</h3>
                            <p className="text-yellow-500 font-semibold mb-4">Chief Executive Officer & Founder</p>
                            <p className="text-gray-600 mb-4">
                                With over 5 years of experience in the luxury services industry, Oluwaseun founded SAREP
                                with a vision to transform how Nigerians access premium real estate, transportation, and accommodations.
                            </p>
                            <p className="text-gray-600 mb-4">
                                A graduate of Lagos Business School with a background in real estate development and
                                hospitality management, Oluwaseun brings unparalleled expertise and passion to every aspect of our operations.
                            </p>
                            <p className="text-gray-600">
                                "At SAREP, we don't just provide services – we create experiences that last a lifetime.
                                Our commitment to excellence drives everything we do, from sourcing the finest properties
                                to ensuring every client interaction exceeds expectations."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white p-8 rounded-lg shadow-lg animate-slide-up-delay-3">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose SAREP?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                            <p className="text-sm text-gray-300">We stay ahead of the curve with the latest technologies and trends in luxury services.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Quality</h3>
                            <p className="text-sm text-gray-300">We deliver only the highest quality properties, vehicles, and accommodations.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                            <p className="text-sm text-gray-300">Our team of experts ensures personalized service and attention to detail.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Passion</h3>
                            <p className="text-sm text-gray-300">We're passionate about creating exceptional experiences for our clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}