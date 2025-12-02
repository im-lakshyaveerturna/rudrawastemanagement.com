import './Home.css'
import wasteCollectionImg from '../../assets/home/waste_collection.png'
import wasteTreatmentImg from '../../assets/home/waste_treatment.png'
import consultancyImg from '../../assets/home/consultancy.png'
 
import CountUp from '../../components/CountUp'

// Gallery removed from Home page per request

interface HomeProps {
  onContactClick: () => void
}

function Home({ onContactClick }: HomeProps) {

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Biomedical Waste Management Solutions</h1>
          <div className="hero-badges" aria-label="Compliance badges">
            <span className="badge">CPCB</span>
            <span className="badge">SPCB Authorized</span>
            <span className="badge">BMWM Rules Compliant</span>
          </div>
          <p className="hero-description">
            We provide reliable, sustainable, and environmentally responsible biomedical waste collection and disposal services for your community.
          </p>
          <button
            className="cta-button"
            onClick={onContactClick}
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="features-section">
        <div className="container services-vertical">
          <h2 className="section-title">Our Services</h2>
          {/* Waste Collection Section */}
          <section className="service-block" id="waste-collection">
            <div className="service-image-placeholder" aria-label="Biomedical waste collection service">
              <img src={wasteCollectionImg} alt="Biomedical waste collection technicians handling medical waste with proper safety equipment in Muzaffarnagar" className="service-image" loading="lazy" />
            </div>
            <div className="service-content">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6M9 13h6M9 17h6" />
                    <circle cx="7" cy="19" r="1.5" />
                    <circle cx="17" cy="19" r="1.5" />
                  </svg>
                </div>
                <h3>Door to Door Collection</h3>
              </div>
              <p>
                We provide comprehensive biomedical waste collection services designed for hospitals, nursing homes, clinics, dispensaries, veterinary institutions, pathological laboratories, and blood banks across Muzaffarnagar and surrounding regions. Our collection system ensures full compliance with the Bio-Medical Waste (Management & Handling) Rules enacted under the Environment (Protection) Act, 1986.
              </p>
              <div className="service-features">
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Color-coded containers per Schedule II</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Authorized vehicles with GPS tracking</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Digital manifesting & chain-of-custody</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Zero-compromise safety practices</span>
                </div>
              </div>
            </div>
          </section>
          {/* Waste Treatment Section */}
          <section className="service-block" id="waste-treatment">
            <div className="service-content">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Comprehensive Waste Treatment</h3>
              </div>
              <p>
                Our state-of-the-art treatment facility in Muzaffarnagar operates under strict compliance with Bio-Medical Waste Management Rules and Schedule V treatment standards. From the moment waste arrives, each container undergoes barcode verification against its digital manifest, weighing, and inspection to confirm proper segregation per Schedule I waste categories.
              </p>
              <div className="service-features">
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>High-temperature incineration system</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Autoclave steam sterilization</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Advanced shredding for volume reduction</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Emission control scrubber systems</span>
                </div>
              </div>
            </div>
            <div className="service-image-placeholder" aria-label="Biomedical waste treatment facility">
              <img src={wasteTreatmentImg} alt="Biomedical waste treatment facility with autoclave and incineration equipment for safe medical waste disposal" className="service-image" loading="lazy" />
            </div>
          </section>
          {/* Consultancy Services Section */}
          <section className="service-block" id="consultancy-services">
            <div className="service-image-placeholder" aria-label="Waste management consultancy services">
              <img src={consultancyImg} alt="Professional waste management consultancy and compliance support for healthcare facilities" className="service-image" loading="lazy" />
            </div>
            <div className="service-content">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Consultancy Services</h3>
              </div>
              <p>
                Our consultancy division assists healthcare organizations, entrepreneurs, and municipalities in establishing their own compliant medical-waste management facilities. We begin with a comprehensive feasibility assessment covering regulatory requirements, site selection, waste-volume forecasting, technology options, and estimated capital and operational costs.
              </p>
              <div className="service-features">
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Feasibility assessment & system design</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Regulatory licensing guidance</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Staff training & SOP development</span>
                </div>
                <div className="feature-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Ongoing compliance monitoring</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Why Choose Rudra?</h2>
            <p className="about-text">
              With years of experience in biomedical waste management, we provide reliable and sustainable solutions
              that help keep your community clean and healthy. Our commitment to environmental responsibility
              sets us apart in the industry.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp from={0} to={10} duration={2} />+
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp from={0} to={500} duration={2} separator="," />+
                </div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications strip above footer */}
      <section className="certifications-bar">
        <div className="container certs-container" aria-label="Compliance and certifications">
          <div className="cert-item">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="cert-text">
              <strong>CPCB</strong>
              <span>Central Pollution Control Board</span>
            </div>
          </div>
          <div className="cert-item">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="cert-text">
              <strong>SPCB</strong>
              <span>State Pollution Control Board</span>
            </div>
          </div>
          <div className="cert-item">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="cert-text">
              <strong>BMWM Rules</strong>
              <span>Biomedical Waste Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery removed per request */}
    </div>
  )
}

export default Home
