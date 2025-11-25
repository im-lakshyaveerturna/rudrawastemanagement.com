import './AboutUs.css'
import FuzzyText from '../components/FuzzyText'

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <FuzzyText 
            className="page-title"
            fontSize="5.5rem"
            fontWeight={700}
            color="#ffffff"
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
          >
            About Us
          </FuzzyText>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Rudra Waste Management was founded with a singular mission: to provide healthcare facilities with reliable, compliant, and environmentally responsible medical waste disposal solutions. Since our inception, we have grown to become a trusted partner for hospitals, clinics, and healthcare organizations across the region.
            </p>
            <p>
              Our state-of-the-art facility combines cutting-edge technology with strict regulatory compliance to ensure that medical waste is handled, treated, and disposed of with the highest standards of safety and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive, compliant, and sustainable medical waste management solutions that protect public health and the environment while enabling healthcare providers to focus on patient care.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading medical waste management company recognized for innovation, reliability, and environmental stewardship in every community we serve.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💚</div>
              <h3>Our Values</h3>
              <p>
                Safety first, environmental responsibility, regulatory compliance, transparency, continuous improvement, and unwavering commitment to our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why-choose">
        <div className="container">
          <h2>Why Choose Rudra?</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <h4>Certified & Compliant</h4>
              <p>Fully licensed and compliant with all Bio-Medical Waste Management Rules and environmental regulations.</p>
            </div>
            <div className="why-card">
              <h4>Advanced Technology</h4>
              <p>State-of-the-art treatment facilities including autoclaving, shredding, and high-temperature incineration systems.</p>
            </div>
            <div className="why-card">
              <h4>Digital Tracking</h4>
              <p>Complete chain-of-custody documentation with digital manifesting and real-time tracking systems.</p>
            </div>
            <div className="why-card">
              <h4>Experienced Team</h4>
              <p>Trained professionals with extensive expertise in medical waste handling and treatment protocols.</p>
            </div>
            <div className="why-card">
              <h4>24/7 Service</h4>
              <p>Round-the-clock emergency response and flexible collection schedules to meet your facility's needs.</p>
            </div>
            <div className="why-card">
              <h4>Environmental Focus</h4>
              <p>Commitment to sustainable practices, emission monitoring, and minimizing environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Our Commitment</h2>
          <div className="commitment-content">
            <p>
              At Rudra Waste Management, we understand that proper medical waste disposal is critical to public health and environmental protection. Our team is dedicated to providing reliable, safe, and compliant services that exceed regulatory requirements and client expectations.
            </p>
            <p>
              We invest continuously in technology, training, and infrastructure to ensure we remain at the forefront of the industry. Our comprehensive approach combines operational excellence with environmental stewardship, making us the partner of choice for healthcare facilities that demand the highest standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
