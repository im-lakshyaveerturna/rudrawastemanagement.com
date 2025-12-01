import './AboutUs.css'

export default function Services() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">Services</h1>
          <p className="page-subtitle">Comprehensive biomedical waste solutions, end to end</p>
        </div>
      </section>

      <section className="about-why-choose">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <h4>Door to Door Collection & Transport</h4>
              <p>Comprehensive biomedical waste collection and transport services.</p>
            </div>
            <div className="why-card">
              <h4>Bio-medical Incinerator</h4>
              <p>High-temperature incineration for safe disposal of hazardous medical waste.</p>
            </div>
            <div className="why-card">
              <h4>Autoclave</h4>
              <p>Steam sterilization system for treating infectious biomedical waste.</p>
            </div>
            <div className="why-card">
              <h4>Shredding Facility</h4>
              <p>Advanced shredding equipment for volume reduction and secure waste destruction.</p>
            </div>
            <div className="why-card">
              <h4>Scrubber (Stack Emission Control)</h4>
              <p>State-of-the-art emission control systems to ensure environmental safety.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
