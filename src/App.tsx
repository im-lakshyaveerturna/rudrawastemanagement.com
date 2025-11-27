import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import WhoWeAre from './pages/WhoWeAre'
import LawsRegulations from './pages/LawsRegulations'

// SEO: Page metadata configuration
const pageMetadata: Record<string, { title: string; description: string }> = {
  'Home': {
    title: 'Rudra Waste Management - Biomedical & Healthcare Waste Solutions | Muzaffarnagar',
    description: 'Professional biomedical waste management services in Muzaffarnagar, UP. Compliant collection, treatment, and disposal of healthcare waste.'
  },
  'Who We Are': {
    title: 'About Us - Rudra Waste Management | Muzaffarnagar Waste Solutions',
    description: 'Learn about Rudra Waste Management, a trusted biomedical waste management company in Muzaffarnagar, UP. Expert services in waste collection, treatment, and disposal.'
  },
  'Laws & Regulations': {
    title: 'Biomedical Waste Laws & Regulations | Rudra Waste Management',
    description: 'Comprehensive guide to biomedical waste management rules, regulations, and compliance requirements in India. Expert insights from Rudra Waste Management.'
  },
  'Gallery': {
    title: 'Gallery - Waste Management Facilities | Rudra Waste Management',
    description: 'View our state-of-the-art biomedical waste management facilities, equipment, and operations. Autoclaves, incinerators, and collection services.'
  },
  'Contact Us': {
    title: 'Contact Rudra Waste Management | Muzaffarnagar, UP',
    description: 'Get in touch with Rudra Waste Management for reliable biomedical waste management services in Muzaffarnagar and across Uttar Pradesh.'
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  // SEO: Update document title and meta description on page change
  useEffect(() => {
    const metadata = pageMetadata[currentPage]
    if (metadata) {
      document.title = metadata.title
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description)
      } else {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        metaDescription.setAttribute('content', metadata.description)
        document.head.appendChild(metaDescription)
      }
    }
  }, [currentPage])

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
