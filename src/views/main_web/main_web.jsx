import Hero from "./hero";
import Mservices from "./mainweb_services";
import Mlistings from "./mainweb_listings";
import MainWebAbout from "./mainweb_about";
import MainWebGetStarted from "./mainweb_getstarted";

export default function MainWeb() {
  return (
    <div className="min-h-screen bg-gray-100">
        {/* Main content goes here */}
        <Hero />
        <Mservices />
        <Mlistings />
        <MainWebAbout />
        <MainWebGetStarted />
    </div>
  );
}