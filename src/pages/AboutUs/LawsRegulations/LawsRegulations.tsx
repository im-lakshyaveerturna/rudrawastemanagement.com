export default function LawsRegulations() {
  return (
    <div className="w-full bg-white">
      <section className="bg-gradient-to-br from-[#0b6e16] via-[#029e12] to-[#1b8f2a] px-6 pb-16 pt-24 text-center text-white">
        <div className="mx-auto max-w-[1100px] px-6">
          <h1 className="m-0 text-4xl font-extrabold tracking-[-0.5px] md:text-5xl">Compliance and Procedures</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Overview</h2>
        <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">
          Under Sections 6, 8, and 25 of the Environment (Protection) Act, 1986, the Central Government enacted the Bio‑Medical Waste (Management & Handling) Rules to safeguard healthcare workers, the public, and the environment. Penalties align with the Environment (Protection) Act, 1986.
        </p>
        <div className="mt-4 rounded-xl border border-[#e3f1e6] bg-[#f8fcf9] p-4 text-[#245c2c]">Centralized facilities enable effective monitoring and sustained compliance across healthcare providers.</div>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-6 py-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Application</h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">Rules apply to all who generate, collect, receive, store, transport, treat, dispose, or handle biomedical waste in any form.</p>
        </div>
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Duty of Occupier</h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">Each occupier (hospital, nursing home, clinic, dispensary, veterinary institution, animal house, pathological lab, blood bank, etc.) must ensure handling without adverse effects on health and environment.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Key Definitions</h2>
        <ul className="mt-2 list-none p-0">
          {[
            ['Act', 'Environment (Protection) Act, 1986 (29 of 1986)'],
            ['Animal House', 'Facility for rearing/keeping animals for experiments/testing'],
            ['Authorization', 'Permission by prescribed authority for BMW handling and operations'],
            ['Authorized Person', 'Occupier/operator authorized per rules and Central Government guidelines'],
            ['Biomedical Waste', 'Waste generated during diagnosis/treatment/immunization or research; Schedule I categories']
          ].map(([title, text]) => (
            <li key={title} className="grid grid-cols-1 gap-3 border-b border-dashed border-[#e6e6e6] px-2 py-2.5 md:grid-cols-[120px_1fr]">
              <strong className="text-[#111827]">{title}</strong>
              <span className="text-[#444]">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Treatment and Disposal</h2>
        <div className="my-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            ['Standards', 'Treat and dispose per Schedule I categories and Schedule V standards.'],
            ['Facilities', 'Set up incinerator, autoclave, microwave, or use authorized common facilities.'],
            ['Documentation', 'Maintain logs, emissions, manifests; support annual reporting obligations.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-[14px] border border-[#e7e7e7] bg-white px-4 py-5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
              <h3 className="mb-2 text-[1.2rem] text-[#111827]">{title}</h3>
              <p className="m-0 text-[0.98rem] leading-7 text-[#444]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Segregation, Packing, Transport & Storage</h2>
        <div className="my-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            ['Segregation', 'Do not mix biomedical waste with other wastes; segregate at source per Schedule II.'],
            ['Labeling', 'Label containers per Schedule III; include Schedule IV info for off‑premise transport.'],
            ['Transport', 'Transport untreated biomedical waste only in authorized vehicles.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-[14px] border border-[#e7e7e7] bg-white px-4 py-5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
              <h3 className="mb-2 text-[1.2rem] text-[#111827]">{title}</h3>
              <p className="m-0 text-[0.98rem] leading-7 text-[#444]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-6 py-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Prescribed Authority</h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">States/UTs establish a prescribed authority for authorization and implementation, designate chairpersons, and operate under State/UT supervision. Authorizations generally last three years after an initial one‑year period.</p>
        </div>
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Authorization</h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">Occupiers (except clinics/dispensaries/path labs/blood banks with &lt; 1000 patients/month) and all operators must apply in Form I with applicable fees.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-6 py-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Advisory Committee</h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">States/UTs constitute advisory committees including domain experts and SPCB/PCC representatives to guide implementation.</p>
        </div>
        <div>
          <h2 className="mb-4 mt-8 text-3xl font-bold tracking-[-0.3px] text-[#1a1a1a] md:text-[2.2rem]">Annual Report</h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-[#333]">Occupiers/operators submit Form II by 31 January annually; prescribed authority compiles and submits to CPCB by 31 March.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <div className="rounded-[14px] border border-[#e7e7e7] bg-white px-4 py-5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
          <h3 className="mb-2 text-[1.2rem] text-[#111827]">Accident Reporting</h3>
          <p className="m-0 text-[0.98rem] leading-7 text-[#444]">Accidents at any institution/facility/site or during transport must be reported forthwith in Form III to the prescribed authority.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <div className="rounded-[14px] border border-[#e7e7e7] bg-white px-4 py-5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
          <h3 className="mb-2 text-[1.2rem] text-[#111827]">Appeal</h3>
          <p className="m-0 text-[0.98rem] leading-7 text-[#444]">Aggrieved persons may appeal within 30 days to the authority constituted by the State/UT Government. Appeals beyond 30 days may be entertained if sufficient cause is shown.</p>
        </div>
      </section>
    </div>
  )
}
