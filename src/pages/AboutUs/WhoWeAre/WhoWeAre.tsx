import logo from '../../../assets/whoweare/rudra_pnglogo.png'

export default function WhoWeAre() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full">
      <section className="bg-gradient-to-br from-[#0b6e16] via-[#029e12] to-[#1b8f2a] px-6 pb-16 pt-24 text-center text-white">
        <div className="mx-auto max-w-[1100px]">
          <img src={logo} alt="Rudra Waste Management" className="inline-block h-auto w-full max-w-[280px] md:max-w-[220px]" />
          <div className="mt-5" />
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-5 text-left text-4xl font-bold text-[#1a1a1a] md:text-[2.4rem]">Rudra Waste Management</h2>
            <p className="text-left text-[1.05rem] leading-8 text-[#444]">
              We are a dedicated waste-management company, based in Muzaffarnagar, Uttar Pradesh. We are committed to providing comprehensive, environmentally responsible solutions and specialize in scientific collection, transportation, treatment, recycling, and disposal of various categories of waste, with a strong emphasis on sanitary, regulatory-compliant procedures, and environmental protection.
            </p>
          </div>

          <aside className="rounded-[10px] border border-[#e6f4ea] bg-[#f9fffa] p-5">
            <ul className="m-0 list-none p-0">
              <li className="border-b border-dashed border-[#e6f4ea] py-4">
                <strong className="mb-1 block font-bold text-[#05640f]">Safety-first</strong>
                <span className="text-[0.95rem] text-[#444]">Zero-compromise safety practices</span>
              </li>
              <li className="border-b border-dashed border-[#e6f4ea] py-4">
                <strong className="mb-1 block font-bold text-[#05640f]">Regulatory Compliance</strong>
                <span className="text-[0.95rem] text-[#444]">Documented SOPs & manifests</span>
              </li>
              <li className="py-4">
                <strong className="mb-1 block font-bold text-[#05640f]">Local Knowledge</strong>
                <span className="text-[0.95rem] text-[#444]">Tailored solutions for regional rules</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="mb-5 text-center text-4xl font-bold text-[#1a1a1a] md:text-[2.2rem]">Biomedical Waste Management</h2>
          <div className="mx-auto max-w-[900px] space-y-5 text-center text-[1.1rem] leading-8 text-[#444]">
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
    </div>
  )
}
