import './ContactUs.css'
import FuzzyText from '../components/FuzzyText'
import locationIcon from '../assets/location.png'
import phoneIcon from '../assets/phone-call.png'
import emailIcon from '../assets/gmail.png'
import clockIcon from '../assets/clock.png'

function ContactUs() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
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
            Get in Touch
          </FuzzyText>

        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <img src={locationIcon} alt="Location" />
                  </div>
                  <div className="info-text">
                    <h3>Address</h3>
                    <p>Bhopa Road, Near Bindal Mill, Muzaffarnagar, Uttar Pradesh- 251001</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <img src={phoneIcon} alt="Phone" />
                  </div>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <p>+91 9927025877, +91 9012519000</p>
                     
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <img src={emailIcon} alt="Email" />
                  </div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>office@rudrawastemanagement.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <img src={clockIcon} alt="Hours" />
                  </div>
                  <div className="info-text">
                    <h3>Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 9876543210" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Tell us more about your needs..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
