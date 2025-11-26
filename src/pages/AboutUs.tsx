import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Rudra Wastemanagement</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2>Who We Are</h2>
            <p>
              Rudra Waste Management is a dedicated waste-management company, based in Muzaffarnagar, Uttar Pradesh. We are committed to providing comprehensive, environmentally responsible solutions and specialize in scientific collection, transportation, treatment, recycling, and disposal of various categories of waste, with a strong emphasis on sanitary, regulatory-compliant procedures, and environmental protection.
            </p>
          </div>
        </div>
      </section>

      <section className="about-why-choose">
        <div className="container">
          <h2>Services We Offer</h2>
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
              <h4>Scrubber for Stack Emission Control</h4>
              <p>State-of-the-art emission control systems to ensure environmental safety.</p>
            </div>
          </div>
        </div>
      </section>

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
              Now it is a well established fact that there are many adverse and harmful effects to the environment including human beings which are caused by the Hospital waste generated during the patient care. Hospital waste is a potential health hazard to the health care workers, public and flora and fauna of the area. The problems of the waste disposal in the hospitals and other health-care institutions have become issues of increasing concern.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Regulatory Framework</h2>
          <div className="commitment-content">
            <p>
              According to Biomedical Waste (Management and Handling) Rules, 1998 of India: Any waste which is generated during the diagnosis, treatment or immunization of human beings or animals or in research activities pertaining thereto or in the production or testing of biological.
            </p>
            <p>
              The Government of India (notification, 1998) specifies that Hospital Waste Management is a part of hospital hygiene and maintenance activities. This involves management of range of activities, which are mainly engineering functions, such as collection, transportation, operation or treatment of processing systems, and disposal of wastes.
            </p>
            <p>
              One of India's major achievements has been to change the attitudes of the operators of health care facilities to incorporate good HCW management practices in their daily operations and to purchase on-site waste management services from the private sector.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Industry Statistics</h2>
          <div className="commitment-content">
            <p>
              World Health Organization states that 85% of hospital wastes are actually non-hazardous, whereas 10% are infectious and 5% are non-infectious but they are included in hazardous wastes. About 15% to 35% of Hospital waste is regulated as infectious waste. This range is dependent on the total amount of waste generated.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
