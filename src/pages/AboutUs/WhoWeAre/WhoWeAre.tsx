import './WhoWeAre.css'
import logo from '../../../assets/whoweare/rudra_pnglogo.png'

export default function WhoWeAre() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <img src={logo} alt="Rudra Waste Management" className="page-logo" />
          <div className="hero-cta">
          </div>
        </div>
      </section>

      {/* Who We Are Intro */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2>Rudra Waste Management</h2>
              <p>
                We are a dedicated waste-management company, based in Muzaffarnagar, Uttar Pradesh. We are committed to providing comprehensive, environmentally responsible solutions and specialize in scientific collection, transportation, treatment, recycling, and disposal of various categories of waste, with a strong emphasis on sanitary, regulatory-compliant procedures, and environmental protection.
              </p>
            </div>

            <aside className="story-quick">
              <ul className="quick-features">
                <li><strong>Safety-first</strong><span>Zero-compromise safety practices</span></li>
                <li><strong>Regulatory Compliance</strong><span>Documented SOPs & manifests</span></li>
                <li><strong>Local Knowledge</strong><span>Tailored solutions for regional rules</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Biomedical Waste Management Section (moved above services) */}
      <section className="about-team">
        <div className="container">
          <h2>Biomedical Waste Management</h2>
          <div className="commitment-content">
            <p>
              Biomedical waste management has recently emerged as an issue of major concern not only to hospitals, nursing home authorities but also to the environment. The bio-medical wastes generated from health care units depend upon a number of factors such as waste management methods, type of health care units, occupancy of healthcare units, specialization of healthcare units, ratio of reusable items in use, availability of infrastructure and resources etc.
            </p>
            <p>
              The proper management of biomedical waste has become a worldwide humanitarian topic today. Although hazards of poor management of biomedical waste have aroused the concern world over, especially in the light of its far-reaching effects on human health and the environment.
            </p>
            <p>
              Now it is a well established fact that there are many adverse and harmful effects to the environment including human beings which are caused by the hospital waste generated during patient care. Hospital waste is a potential health hazard to healthcare workers, the public, and flora and fauna of the area. The problems of waste disposal in hospitals and other health-care institutions have become issues of increasing concern.
            </p>
          </div>
        </div>
      </section>

      {/* Services section moved to dedicated Services page */}
    </div>
  )
}
