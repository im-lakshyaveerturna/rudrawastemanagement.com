import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import Gallery from './pages/Gallery/Gallery'
import WhoWeAre from './pages/AboutUs/WhoWeAre/WhoWeAre'
import LawsRegulations from './pages/AboutUs/LawsRegulations/LawsRegulations'
import Services from './pages/Services/Services'
import NotFound from './pages/NotFound/NotFound'

// SEO: Page metadata configuration
const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Rudra Waste Management - Biomedical & Healthcare Waste Solutions | Muzaffarnagar',
    description: 'Professional biomedical waste management services in Muzaffarnagar, UP. Compliant collection, treatment, and disposal of healthcare waste.'
  },
  '/who-we-are': {
    title: 'About Us - Rudra Waste Management | Muzaffarnagar Waste Solutions',
    description: 'Learn about Rudra Waste Management, a trusted biomedical waste management company in Muzaffarnagar, UP. Expert services in waste collection, treatment, and disposal.'
  },
  '/laws-regulations': {
    title: 'Biomedical Waste Laws & Regulations | Rudra Waste Management',
    description: 'Comprehensive guide to biomedical waste management rules, regulations, and compliance requirements in India. Expert insights from Rudra Waste Management.'
  },
  '/gallery': {
    title: 'Gallery - Waste Management Facilities | Rudra Waste Management',
    description: 'View our state-of-the-art biomedical waste management facilities, equipment, and operations. Autoclaves, incinerators, and collection services.'
  },
  '/contact': {
    title: 'Contact Rudra Waste Management | Muzaffarnagar, UP',
    description: 'Get in touch with Rudra Waste Management for reliable biomedical waste management services in Muzaffarnagar and across Uttar Pradesh.'
  },
  '/services': {
    title: 'Services - Biomedical Waste Solutions | Rudra Waste Management',
    description: 'Door-to-door collection, autoclave sterilization, incineration, shredding, and emission control for compliant biomedical waste management.'
  }
}

// Map old state-based pages to routes
const routeMapping: Record<string, string> = {
  'Home': '/',
  'Who We Are': '/who-we-are',
  'Laws & Regulations': '/laws-regulations',
  'Gallery': '/gallery',
  'Services': '/services',
  'Contact Us': '/contact'
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  // Get current page name from route
  const getCurrentPage = (): string => {
    const path = location.pathname
    return Object.entries(routeMapping).find(([_, route]) => route === path)?.[0] || 'Home'
  }

  // Handle navigation with route support
  const handleNavigate = (page: string) => {
    const route = routeMapping[page]
    if (route) {
      navigate(route)
    }
  }

  // SEO: Update document title and meta description on route change
  useEffect(() => {
    const metadata = pageMetadata[location.pathname]
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

    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onContactClick={() => handleNavigate('Contact Us')} />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/laws-regulations" element={<LawsRegulations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
