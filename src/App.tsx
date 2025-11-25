import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'Home' ? (
          <Home onContactClick={() => setCurrentPage('Contact Us')} />
        ) : currentPage === 'About Us' ? (
          <AboutUs />
        ) : (
          <ContactUs />
        )}
      </main>
    </div>
  )
}

export default App
