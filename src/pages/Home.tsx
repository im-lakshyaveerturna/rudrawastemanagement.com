import './Home.css'
import wasteCollectionImg from '../assets/Gemini_Generated_Image_410zbf410zbf410z.png'
import wasteTreatmentImg from '../assets/Waste_Treatment.png'
import consultancyImg from '../assets/Consultancy.png'
 
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
          <section className="service-block reveal-up" id="waste-collection">
            <div className="service-image-placeholder" aria-label="Biomedical waste collection service">
              <img src={wasteCollectionImg} alt="Biomedical waste collection technicians handling medical waste with proper safety equipment in Muzaffarnagar" className="service-image" loading="lazy" />
            </div>
            <div className="service-content">
              <h3>Door to Door Collection & Transport</h3>
              <p>
                We provide comprehensive biomedical waste collection services designed for hospitals, nursing homes, clinics, dispensaries, veterinary institutions, pathological laboratories, and blood banks across Muzaffarnagar and surrounding regions. Our collection system ensures full compliance with the Bio-Medical Waste (Management & Handling) Rules enacted under the Environment (Protection) Act, 1986.
              </p>
              <p>
                Each healthcare facility receives color-coded containers and bags per Schedule II requirements for proper waste segregation at the point of generation. Our trained collection team arrives in authorized vehicles, verifies container integrity and labeling per Schedule III, scans each unit into our digital manifesting system, and completes all handover documentation including Schedule IV transportation details. Waste is never mixed with general refuse and is transported through predefined routes to minimize risk while maintaining full chain-of-custody documentation.
              </p>
              <p>
                We serve healthcare facilities of all sizes—from large hospitals generating substantial volumes to smaller clinics treating fewer than 1000 patients per month. Our zero-compromise safety practices, documented standard operating procedures, and adherence to local regulations ensure that your facility remains compliant with authorization requirements while protecting healthcare workers, the public, and the environment from biomedical waste hazards.
              </p>
            </div>
          </section>
          {/* Waste Treatment Section */}
          <section className="service-block reveal-up" id="waste-treatment">
            <div className="service-content">
              <h3>Comprehensive Waste Treatment</h3>
              <p>
                Our state-of-the-art treatment facility in Muzaffarnagar operates under strict compliance with Bio-Medical Waste Management Rules and Schedule V treatment standards. From the moment waste arrives, each container undergoes barcode verification against its digital manifest, weighing, and inspection to confirm proper segregation per Schedule I waste categories. Waste streams are directed to dedicated processing zones to prevent cross-contamination, with trained technicians following documented SOPs and wearing appropriate personal protective equipment throughout every stage.
              </p>
              <p>
                <strong>Bio-medical Incinerator:</strong> Our high-temperature incineration system safely disposes of anatomical waste, pharmaceutical waste, and other hazardous categories requiring thermal destruction. The process renders waste non-infectious and unrecognizable while meeting emission standards.
              </p>
              <p>
                <strong>Autoclave & Shredding:</strong> Infectious biomedical waste undergoes steam sterilization in our autoclave system, effectively eliminating pathogens. Post-treatment, materials pass through advanced shredding equipment for volume reduction and to ensure complete destruction, preventing any potential reuse.
              </p>
              <p>
                <strong>Scrubber (Stack Emission Control):</strong> All emissions from our treatment processes pass through state-of-the-art scrubber systems that capture particulates and neutralize harmful gases before release, ensuring compliance with environmental safety standards and protecting air quality in the surrounding community.
              </p>
              <p>
                Treatment logs, emission monitoring results, and compliance reports are meticulously recorded and provided to clients, supporting their annual reporting requirements under Form II. Our systematic approach addresses the critical challenge of biomedical waste management—protecting healthcare workers, the public, and the environment from the potential health hazards that arise from improper handling of hospital waste generated during patient care.
              </p>
            </div>
            <div className="service-image-placeholder" aria-label="Biomedical waste treatment facility">
              <img src={wasteTreatmentImg} alt="Biomedical waste treatment facility with autoclave and incineration equipment for safe medical waste disposal" className="service-image" loading="lazy" />
            </div>
          </section>
          {/* Consultancy Services Section */}
          <section className="service-block reveal-up" id="consultancy-services">
            <div className="service-image-placeholder" aria-label="Waste management consultancy services">
              <img src={consultancyImg} alt="Professional waste management consultancy and compliance support for healthcare facilities" className="service-image" loading="lazy" />
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
              With years of experience in biomedical waste management, we provide reliable and sustainable solutions
              that help keep your community clean and healthy. Our commitment to environmental responsibility
              sets us apart in the industry.
            </p>
            <div className="stats-grid">
              <div className="stat-item reveal-up">
                <div className="stat-number">
                  <CountUp from={0} to={10} duration={2} />+
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item reveal-up">
                <div className="stat-number">
                  <CountUp from={0} to={500} duration={2} separator="," />+
                </div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item reveal-up">
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
          <div className="cert-item reveal-up">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="cert-text">
              <strong>CPCB</strong>
              <span>Central Pollution Control Board</span>
            </div>
          </div>
          <div className="cert-item reveal-up">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="cert-text">
              <strong>SPCB</strong>
              <span>State Pollution Control Board</span>
            </div>
          </div>
          <div className="cert-item reveal-up">
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
