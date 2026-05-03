import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainWeb from './views/main_web/main_web'
import SubwebListings from './views/sub_web/subweb_listings'
import SubwebContactUs from './views/sub_web/subweb_contactus'
import SubwebServices from './views/sub_web/subweb_services'
import Navbar from './views/main_web/navbar'
import Footer from './views/main_web/footer'
import SubwebAboutus from './views/sub_web/subweb_aboutus'
import AdminPage from './views/admin/AdminPage'
import ListingDetails from './views/sub_web/ListingDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-white">
        <Navbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<MainWeb />} />
            <Route path="/subweb_listings" element={<SubwebListings />} />
            <Route path="/subweb_listings/:id" element={<ListingDetails />} />
            <Route path="/subweb_contactus" element={<SubwebContactUs />} />
            <Route path='/subweb_services' element={<SubwebServices />} />
            <Route path='/subweb_aboutus' element={<SubwebAboutus />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
