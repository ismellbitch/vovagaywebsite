import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Header from "./components/Header"
import Footer from "./components/Footer"

import Main from './pages/Main'
import PageTwo from './pages/PageTwo'
import LegalAssistancePage from './pages/LegalAssistancePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactsPage from './pages/ContactsPage'


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/second" element={<PageTwo />} />
          <Route path="/legal" element={<LegalAssistancePage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App