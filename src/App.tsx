import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import WhoWeAre from './pages/WhoWeAre'
import LawsRegulations from './pages/LawsRegulations'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'Home' && (
          <Home onContactClick={() => setCurrentPage('Contact Us')} />
        )}
        {/* About Us page removed; About Us acts as dropdown only */}
        {currentPage === 'Who We Are' && <WhoWeAre />}
        {currentPage === 'Laws & Regulations' && <LawsRegulations />}
        {currentPage === 'Gallery' && <Gallery />}
        {currentPage === 'Contact Us' && <ContactUs />}
      </main>
    </div>
  )
}

export default App
