import { useNavigate } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="notfound-actions">
          <button className="btn-primary" onClick={() => navigate('/')}>
            Go Home
          </button>
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
