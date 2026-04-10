import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationPin, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function SubwebContactUs() {
    const list = [
        {
            id: 1,
            icon: faPhone,
            title: "Call Us",
            description: "Mon-fri 9am-6am, sat-sun 9am-4pm",
            contact: "+234 801 234 5678"
        },
        {
            id: 2,
            icon: faEnvelope,
            title: "Email Us",
            description: "We respond within 24 hours",
            contact:"contact@sarep.com"
        },
        {
            id: 3,
            icon: faLocationPin,
            title: "Visit Us",
            description: "Our office location",
            contact: "1234 SAREP St, Lagos, Nigeria"
        }
    ]
    return(
        <section className="relative pt-20 animate-fade-in">
            <div className="w-full px-4 py-12 bg-gray-900 text-center animate-slide-up">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-white font-serif font-bold text-6xl mb-4">Get In Touch</h1>
                    <p className="text-white">Have questions? We're here to help. Reach out to us through any of the channels below.</p>
                </div>
            </div>
            <div className="w-full bg-slate-100 py-12 animate-slide-up-delay">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {list.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="rounded-full h-16 w-16 items-center justify-center bg-yellow-500/20 flex mb-4">
                                        <FontAwesomeIcon icon={item.icon} className="text-yellow-500 text-2xl"/>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                                </div>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <p className="text-yellow-500 font-semibold">{item.contact}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                        <h1 className="text-4xl font-black font-serif text-gray-800">Send Us a Message</h1>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-3">FirstName*</label>
                                    <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"></input>
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-3">LastName*</label>
                                    <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Email Address*</label>
                                <textarea  itemType="email" rows={1} required className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                            </div>
                            <div>
                                <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700 mb-3">Phone Number*</label>
                                <textarea  itemType="tel" rows={1} required className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Catefigori*</label>
                                <select required className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand-gold transition-colors">
                                    <option value="" disabled selected>Select Subject</option>
                                    <option value="airbnb">Airbnb rentals</option>
                                    <option value="cars">Car rentals</option>
                                    <option value="realestate">Real Estate</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">Message*</label>
                                <textarea rows={5} required className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-sm transition-colors">
                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center justify-center items-center">
                        <h1 className="text-4xl font-black font-serif text-gray-800 mb-6">Find us</h1>
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1234567890123!2d3.379205315345678!3d6.524379895123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSAREP%20Headquarters!5e0!3m2!1sen!2sng!4v1616161616161!5m2!1sen!2sng"
                            width="100%"
                            height="55%"
                            frameBorder="0"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="bg-indigo-950 text-white rounded-lg p-8 mt-6">
                            <h2 className="text-white font-semibold p-4">Office Hours</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                                    <span className="text-gray-300">Monday - Friday</span>
                                    <span className="text-gray-300">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                                    <span className="text-gray-300">Saturday</span>
                                    <span className="text-gray-300">9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                                    <span className="text-gray-300">Sunday</span>
                                    <span className="text-gray-300">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}