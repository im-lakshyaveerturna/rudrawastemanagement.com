import './Header.css'
import logo from '../assets/rudra-removebg-preview.png'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const aboutActive = ['Who We Are', 'Laws & Regulations'].includes(currentPage);
  return (
    <header className="header">
      <div className="header-content">
        <div
          className="company-name"
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
          onClick={() => onNavigate('Home')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate('Home');
            }
          }}
        >
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
          <div className={`dropdown ${aboutActive ? 'active-parent' : ''}`}>
            <button
              className={aboutActive ? 'active' : ''}
            >
              About Us ▾
            </button>
            <div className="dropdown-menu">
              <button
                className={currentPage === 'Who We Are' ? 'active' : ''}
                onClick={() => onNavigate('Who We Are')}
              >
                Who We Are
              </button>
              <button
                className={currentPage === 'Laws & Regulations' ? 'active' : ''}
                onClick={() => onNavigate('Laws & Regulations')}
              >
                Laws & Procedures
              </button>
            </div>
          </div>
          <button
            className={currentPage === 'Gallery' ? 'active' : ''}
            onClick={() => onNavigate('Gallery')}
          >
            Gallery
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
