import './Header.css'
import logo from '../assets/rudra-removebg-preview.png'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="company-name">
          <img src={logo} alt="Rudra Waste Management logo" className="company-logo" />
          <h1>Rudra Waste Management</h1>
        </div>
        <nav className="nav-buttons">
          <button
            className={currentPage === 'Home' ? 'active' : ''}
            onClick={() => onNavigate('Home')}
          >
            Home
          </button>
          <button
            className={currentPage === 'About Us' ? 'active' : ''}
            onClick={() => onNavigate('About Us')}
          >
            About Us
          </button>
          <button
            className={currentPage === 'Contact Us' ? 'active' : ''}
            onClick={() => onNavigate('Contact Us')}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
