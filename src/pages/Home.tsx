import './Home.css'
import wasteCollectionImg from '../assets/Gemini_Generated_Image_410zbf410zbf410z.png'
import wasteTreatmentImg from '../assets/Waste_Treatment.png'
import consultancyImg from '../assets/Consultancy.png'
import { SplitText } from '../components/SplitText'
// framer-motion not used for CTA anymore
import CountUp from '../components/CountUp'

// Gallery removed from Home page per request

interface HomeProps {
  onContactClick: () => void
}

function Home({ onContactClick }: HomeProps) {

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <SplitText text="Biomedical Waste Management Solutions" className="hero-title" />
          <SplitText 
            text="We provide reliable, sustainable, and environmentally responsible biomedical waste collection and disposal services for your community." 
            className="hero-description" 
            delay={0.05}
            as="p"
          />
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
            <div className="service-image-placeholder" aria-label="Waste Collection image placeholder">
              <img src={wasteCollectionImg} alt="Waste Collection" className="service-image" />
            </div>
            <div className="service-content">
              <h3>Waste Collection</h3>
              <p>
                Our facility operates a scheduled, compliant, and fully traceable medical-waste collection system designed for hospitals of all sizes. Each client is assigned colour-coded, UN-approved containers for segregated waste streams—including sharps, infectious waste, pathological waste, and pharmaceutical discards. Once containers are sealed by hospital staff, our certified collection team arrives in GPS-tracked vehicles, verifies container integrity, scans each unit into our digital manifesting system, and ensures all handover documentation is completed according to Bio-Medical Waste Management Rules.
              </p>
              <p>
                Collected waste is transported through predefined routes to minimise risk and ensure rapid turnaround. Throughout the journey, temperature-controlled storage (where applicable), secure loading protocols, and continuous monitoring maintain full chain-of-custody. Upon arrival at our treatment facility, the waste is processed using standard methods such as autoclaving, shredding, or incineration, and clients receive automated compliance reports for their records.
              </p>
            </div>
          </section>
          {/* Waste Treatment Section */}
          <section className="service-block" id="waste-treatment">
            <div className="service-content">
              <h3>Waste Treatment</h3>
              <p>
                Our facility follows a controlled, regulation-aligned workflow for handling and treating medical waste from the moment it arrives. Each container is bar-code–verified against its digital manifest, weighed, and inspected to confirm proper segregation. Waste streams are then directed to dedicated processing zones to avoid cross-contamination, and our trained technicians use PPE and standardized SOPs throughout every stage of handling.
              </p>
              <p>
                Treatment is carried out using approved technologies based on the waste category—autoclaving and shredding for infectious waste, high-temperature incineration for anatomical and pharmaceutical waste, and chemical disinfection for select liquid streams. Treated materials are rendered non-infectious and unrecognisable before being sent for safe disposal or recycling. All treatment data, including processing logs and emission-monitoring results, are recorded and shared with clients to ensure full environmental and regulatory compliance.
              </p>
            </div>
            <div className="service-image-placeholder" aria-label="Waste Treatment image placeholder">
              <img src={wasteTreatmentImg} alt="Waste Treatment" className="service-image" />
            </div>
          </section>
          {/* Consultancy Services Section */}
          <section className="service-block" id="consultancy-services">
            <div className="service-image-placeholder" aria-label="Consultancy Services image placeholder">
              <img src={consultancyImg} alt="Consultancy Services" className="service-image" />
            </div>
            <div className="service-content">
              <h3>Consultancy Services</h3>
              <p>
                Our consultancy division assists healthcare organizations, entrepreneurs, and municipalities in establishing their own compliant medical-waste management facilities. We begin with a comprehensive feasibility assessment covering regulatory requirements, site selection, waste-volume forecasting, technology options, and estimated capital and operational costs. Based on this assessment, we design end-to-end system architectures—including plant layout, workflow engineering, equipment specifications, staffing plans, and compliance frameworks.
              </p>
              <p>
                Once the project moves forward, we provide hands-on implementation support such as regulatory licensing guidance, vendor coordination, SOP development, staff training, digital tracking system setup, and readiness audits before commissioning. After the facility becomes operational, clients can opt for ongoing technical support, performance reviews, and compliance monitoring to ensure long-term efficiency and adherence to environmental and biomedical waste regulations.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Why Choose Rudra?</h2>
            <p className="about-text">
              With years of experience in waste management, we provide reliable and sustainable solutions
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

      {/* Gallery removed per request */}
    </div>
  )
}

export default Home
