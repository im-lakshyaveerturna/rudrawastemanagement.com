import './LawsRegulations.css'

export default function LawsRegulations() {
  return (
    <div className="laws-page">
      <section className="laws-hero">
        <div className="laws-container">
          <h1 className="page-title">Compliance and Procedures</h1>
        </div>
      </section>

      <section className="laws-container">
        <h2 className="section-title">Overview</h2>
        <p className="lead tight">
          Under Sections 6, 8, and 25 of the Environment (Protection) Act, 1986, the Central Government enacted the Bio‑Medical Waste (Management & Handling) Rules to safeguard healthcare workers, the public, and the environment. Penalties align with the Environment (Protection) Act, 1986.
        </p>
        <div className="note">Centralized facilities enable effective monitoring and sustained compliance across healthcare providers.</div>
      </section>

      <section className="laws-container two-col">
        <div>
          <h2 className="section-title">Application</h2>
          <p className="lead tight">
            Rules apply to all who generate, collect, receive, store, transport, treat, dispose, or handle biomedical waste in any form.
          </p>
        </div>
        <div>
          <h2 className="section-title">Duty of Occupier</h2>
          <p className="lead tight">
            Each occupier (hospital, nursing home, clinic, dispensary, veterinary institution, animal house, pathological lab, blood bank, etc.) must ensure handling without adverse effects on health and environment.
          </p>
        </div>
      </section>

      <section className="laws-container">
        <h2 className="section-title">Key Definitions</h2>
        <ul className="law-list tight">
          <li><strong>Act</strong><span>Environment (Protection) Act, 1986 (29 of 1986)</span></li>
          <li><strong>Animal House</strong><span>Facility for rearing/keeping animals for experiments/testing</span></li>
          <li><strong>Authorization</strong><span>Permission by prescribed authority for BMW handling and operations</span></li>
          <li><strong>Authorized Person</strong><span>Occupier/operator authorized per rules and Central Government guidelines</span></li>
          <li><strong>Biomedical Waste</strong><span>Waste generated during diagnosis/treatment/immunization or research; Schedule I categories</span></li>
        </ul>
      </section>

      <section className="laws-container">
        <h2 className="section-title">Treatment and Disposal</h2>
        <div className="cards-grid">
          <div className="law-card">
            <h3>Standards</h3>
            <p>Treat and dispose per Schedule I categories and Schedule V standards.</p>
          </div>
          <div className="law-card">
            <h3>Facilities</h3>
            <p>Set up incinerator, autoclave, microwave, or use authorized common facilities.</p>
          </div>
          <div className="law-card">
            <h3>Documentation</h3>
            <p>Maintain logs, emissions, manifests; support annual reporting obligations.</p>
          </div>
        </div>
      </section>

      <section className="laws-container">
        <h2 className="section-title">Segregation, Packing, Transport & Storage</h2>
        <div className="cards-grid">
          <div className="law-card">
            <h3>Segregation</h3>
            <p>Do not mix biomedical waste with other wastes; segregate at source per Schedule II.</p>
          </div>
          <div className="law-card">
            <h3>Labeling</h3>
            <p>Label containers per Schedule III; include Schedule IV info for off‑premise transport.</p>
          </div>
          <div className="law-card">
            <h3>Transport</h3>
            <p>Transport untreated biomedical waste only in authorized vehicles.</p>
          </div>
        </div>
      </section>

      <section className="laws-container two-col">
        <div>
          <h2 className="section-title">Prescribed Authority</h2>
          <p className="lead tight">
            States/UTs establish a prescribed authority for authorization and implementation, designate chairpersons, and operate under State/UT supervision. Authorizations generally last three years after an initial one‑year period.
          </p>
        </div>
        <div>
          <h2 className="section-title">Authorization</h2>
          <p className="lead tight">
            Occupiers (except clinics/dispensaries/path labs/blood banks with &lt; 1000 patients/month) and all operators must apply in Form I with applicable fees.
          </p>
        </div>
      </section>

      <section className="laws-container two-col">
        <div>
          <h2 className="section-title">Advisory Committee</h2>
          <p className="lead tight">
            States/UTs constitute advisory committees including domain experts and SPCB/PCC representatives to guide implementation.
          </p>
        </div>
        <div>
          <h2 className="section-title">Annual Report</h2>
          <p className="lead tight">
            Occupiers/operators submit Form II by 31 January annually; prescribed authority compiles and submits to CPCB by 31 March.
          </p>
        </div>
      </section>

      <section className="laws-container">
        <div className="law-card">
          <h3>Accident Reporting</h3>
          <p className="lead tight">Accidents at any institution/facility/site or during transport must be reported forthwith in Form III to the prescribed authority.</p>
        </div>
      </section>

      <section className="laws-container">
        <div className="law-card">
          <h3>Appeal</h3>
          <p className="lead tight">Aggrieved persons may appeal within 30 days to the authority constituted by the State/UT Government. Appeals beyond 30 days may be entertained if sufficient cause is shown.</p>
        </div>
      </section>
    </div>
  )
}
