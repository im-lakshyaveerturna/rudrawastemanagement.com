import './Services.css'
import imgCollection from '../../assets/services/doortodoor.png'
import imgIncinerator from '../../assets/services/incinerator.png'
import imgAutoclave from '../../assets/services/autoclave.png'
import imgShredding from '../../assets/services/shredding.jpg'
import imgScrubber from '../../assets/services/SCRUB.png'

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-container">
          <h1 className="page-title">Services</h1>
          <p className="page-subtitle">Compliant biomedical waste solutions from pickup to final disposal</p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-container cards-grid">
          <article className="service-card">
            <img src={imgCollection} alt="Door to door biomedical waste collection and GPS-tracked transport" loading="lazy" />
            <div className="card-body">
              <h3>Door to Door Collection & Transport</h3>
              <p>
                Scheduled, traceable pickup for hospitals, clinics, labs and blood banks. We provide color‑coded containers per Schedule II, verify labeling per Schedule III, and document transport per Schedule IV.
              </p>
              <ul>
                <li>Authorized vehicles with secure loading</li>
                <li>Digital manifests and chain‑of‑custody logs</li>
                <li>Predefined routes with rapid turnaround</li>
              </ul>
            </div>
          </article>

          <article className="service-card">
            <img src={imgIncinerator} alt="Biomedical waste high-temperature incinerator facility" loading="lazy" />
            <div className="card-body">
              <h3>Bio‑medical Incinerator</h3>
              <p>
                Thermal treatment for anatomical and pharmaceutical waste. Waste is rendered non‑infectious and unrecognizable with emissions controlled per environmental standards.
              </p>
              <ul>
                <li>High‑temperature thermal destruction</li>
                <li>Continuous process monitoring</li>
                <li>Emission reporting and logs</li>
              </ul>
            </div>
          </article>

          <article className="service-card">
            <img src={imgAutoclave} alt="Autoclave steam sterilization for infectious biomedical waste" loading="lazy" />
            <div className="card-body">
              <h3>Autoclave Sterilization</h3>
              <p>
                Steam sterilization for infectious waste in line with Schedule V standards, followed by shredding to prevent reuse and reduce volume.
              </p>
              <ul>
                <li>Validated cycles and biological indicators</li>
                <li>Traceable batch documentation</li>
                <li>Post‑treatment handling SOPs</li>
              </ul>
            </div>
          </article>

          <article className="service-card">
            <img src={imgShredding} alt="Shredding facility for biomedical waste volume reduction" loading="lazy" />
            <div className="card-body">
              <h3>Shredding Facility</h3>
              <p>
                Secure mechanical shredding to reduce volume and ensure complete destruction of treated materials, eliminating any possibility of reuse.
              </p>
              <ul>
                <li>High‑torque industrial shredders</li>
                <li>Consistent particle size output</li>
                <li>Integrated with autoclave workflow</li>
              </ul>
            </div>
          </article>

          <article className="service-card">
            <img src={imgScrubber} alt="Scrubber system for stack emission control in waste treatment" loading="lazy" />
            <div className="card-body">
              <h3>Scrubber (Stack Emission Control)</h3>
              <p>
                Advanced emission control systems capture particulates and neutralize gases from treatment processes, protecting air quality and ensuring compliance.
              </p>
              <ul>
                <li>Multi‑stage scrubbing and filtration</li>
                <li>Periodic calibration and audits</li>
                <li>Compliance with environmental norms</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
