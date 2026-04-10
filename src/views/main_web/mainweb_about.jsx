import { faAward, faCertificate, faHandHoldingDollar, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainWebAbout() {
    return (
        <div className="bg-gray-900 py-24 h-130 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-white mt-4">Why Choose SAREP?</h2>
                    <p className="text-lg md:text-xl text-slate-50 max-w-3xl">
                        We deliver excellence across all our services with unmatched professionalism and attention to detail.
                    </p>
                </div>
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-up-delay">
                    {/* Feature 1 */}
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-yellow-500/20 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faAward} className="text-yellow-500 text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Trusted Brand</h3>
                        <p className="text-slate-300">10+ years of excellence in service delivery</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-yellow-500/20 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faHeadset} className="text-yellow-500 text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">24/7 Support</h3>
                        <p className="text-slate-300">Round-the-clock customer service</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-yellow-500/20 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faCertificate} className="text-yellow-500 text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Quality Assured</h3>
                        <p className="text-slate-300">Premium standards across all offerings</p>
                    </div>
                    {/* Feature 4 */}
                     <div className="p-6 flex flex-col items-center text-center">
                        <div className="bg-yellow-500/20 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faHandHoldingDollar} className="text-yellow-500 text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Best value</h3>
                        <p className="text-slate-300">Competitive pricing with no hidden fees</p>
                    </div>
                </div>
            </div>
        </div>
    );
}