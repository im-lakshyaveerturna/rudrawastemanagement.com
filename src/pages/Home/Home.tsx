import wasteCollectionImg from '../../assets/home/waste_collection.png'
import wasteTreatmentImg from '../../assets/home/waste_treatment.png'
import consultancyImg from '../../assets/home/consultancy.png'
import homeBg from '../../assets/home/home_bg.png'
import CountUp from '../../components/CountUp'

interface HomeProps {
  onContactClick: () => void
}

function Home({ onContactClick }: HomeProps) {
  const sectionTitle = 'relative px-8 pb-12 pt-20 text-center text-4xl font-extrabold tracking-[-1.5px] text-[#1a1a1a] after:absolute after:bottom-6 after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded after:bg-gradient-to-r after:from-[#0b6e16] after:to-[#029e12] sm:text-5xl'
  const featureBadge = 'flex items-center gap-3 rounded-lg border-l-[3px] border-[#029e12] bg-[rgba(2,158,18,0.08)] px-5 py-4 transition hover:translate-x-1 hover:bg-[rgba(2,158,18,0.12)]'

  return (
    <div className="w-full">
      <section className="relative flex min-h-screen items-center justify-start bg-cover bg-center bg-no-repeat bg-fixed px-8 pt-[calc(80px+2rem)]" style={{ backgroundImage: `url(${homeBg})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-[950px] text-left">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-[-2px] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] md:text-7xl">Biomedical Waste Management Solutions</h1>
          <div className="mb-6 mt-2 flex flex-wrap gap-3" aria-label="Compliance badges">
            {['CPCB', 'SPCB Authorized', 'BMWM Rules Compliant'].map((badge) => (
              <span key={badge} className="inline-flex items-center rounded-full border-2 border-white/40 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25 hover:border-white/60">
                {badge}
              </span>
            ))}
          </div>
          <p className="mb-10 max-w-[700px] text-2xl font-light leading-[1.7] text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.2)]">
            We provide reliable, sustainable, and environmentally responsible biomedical waste collection and disposal services for your community.
          </p>
          <button
            className="relative inline-block overflow-hidden rounded-[50px] bg-gradient-to-br from-[#029e12] to-[#0b6e16] px-14 py-5 text-[1.1rem] font-extrabold text-white shadow-[0_8px_24px_rgba(2,158,18,0.4)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,158,18,0.5)] active:translate-y-px"
            onClick={onContactClick}
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-full">
          <h2 className={sectionTitle}>Our Services</h2>

          <section id="waste-collection" className="flex min-h-screen w-full flex-col items-center justify-center border-t-4 border-[#029e12] bg-[#f0f8f1] lg:flex-row">
            <div className="relative flex h-[50vh] min-h-[300px] w-full items-center justify-center p-8 lg:h-screen lg:w-1/2 lg:p-12">
              <img src={wasteCollectionImg} alt="Biomedical waste collection technicians handling medical waste with proper safety equipment in Muzaffarnagar" className="h-full max-h-[85vh] w-full rounded-[4rem] object-cover shadow-[0.4rem_0.4rem_0_#029e12] transition hover:scale-[1.02] hover:shadow-[0.6rem_0.6rem_0_#029e12]" loading="lazy" />
            </div>
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-14 w-14 min-w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#029e12] to-[#0b6e16] shadow-[0_4px_12px_rgba(2,158,18,0.25)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-white"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 13h6M9 17h6" /><circle cx="7" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a1a] md:text-[2.5rem]">Door to Door Collection</h3>
              </div>
              <p className="mb-6 text-[1.1rem] leading-8 text-[#444]">We provide comprehensive biomedical waste collection services designed for hospitals, nursing homes, clinics, dispensaries, veterinary institutions, pathological laboratories, and blood banks across Muzaffarnagar and surrounding regions. Our collection system ensures full compliance with the Bio-Medical Waste (Management & Handling) Rules enacted under the Environment (Protection) Act, 1986.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
                {['Color-coded containers per Schedule II', 'Authorized vehicles with GPS tracking', 'Digital manifesting & chain-of-custody', 'Zero-compromise safety practices'].map((feature) => (
                  <div key={feature} className={featureBadge}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 min-w-5 text-[#029e12]"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[0.95rem] font-semibold leading-6 text-[#333]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="waste-treatment" className="flex min-h-screen w-full flex-col items-center justify-center border-t-4 border-[#0b6e16] bg-[#f0f8f1] lg:flex-row">
            <div className="order-2 flex w-full flex-col justify-center px-6 py-12 lg:order-1 lg:w-1/2 lg:px-16">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-14 w-14 min-w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#029e12] to-[#0b6e16] shadow-[0_4px_12px_rgba(2,158,18,0.25)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-white"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a1a] md:text-[2.5rem]">Comprehensive Waste Treatment</h3>
              </div>
              <p className="mb-6 text-[1.1rem] leading-8 text-[#444]">Our state-of-the-art treatment facility in Muzaffarnagar operates under strict compliance with Bio-Medical Waste Management Rules and Schedule V treatment standards. From the moment waste arrives, each container undergoes barcode verification against its digital manifest, weighing, and inspection to confirm proper segregation per Schedule I waste categories.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
                {['High-temperature incineration system', 'Autoclave steam sterilization', 'Advanced shredding for volume reduction', 'Emission control scrubber systems'].map((feature) => (
                  <div key={feature} className={featureBadge}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 min-w-5 text-[#029e12]"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[0.95rem] font-semibold leading-6 text-[#333]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 relative flex h-[50vh] min-h-[300px] w-full items-center justify-center p-8 lg:order-2 lg:h-screen lg:w-1/2 lg:p-12">
              <img src={wasteTreatmentImg} alt="Biomedical waste treatment facility with autoclave and incineration equipment for safe medical waste disposal" className="h-full max-h-[85vh] w-full rounded-[4rem] object-cover shadow-[-0.4rem_0.4rem_0_#029e12] transition hover:scale-[1.02] hover:shadow-[-0.6rem_0.6rem_0_#029e12]" loading="lazy" />
            </div>
          </section>

          <section id="consultancy-services" className="flex min-h-screen w-full flex-col items-center justify-center border-t-4 border-[#1b8f2a] bg-[#f0f8f1] lg:flex-row">
            <div className="relative flex h-[50vh] min-h-[300px] w-full items-center justify-center p-8 lg:h-screen lg:w-1/2 lg:p-12">
              <img src={consultancyImg} alt="Professional waste management consultancy and compliance support for healthcare facilities" className="h-full max-h-[85vh] w-full rounded-[4rem] object-cover shadow-[0.4rem_0.4rem_0_#029e12] transition hover:scale-[1.02] hover:shadow-[0.6rem_0.6rem_0_#029e12]" loading="lazy" />
            </div>
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-14 w-14 min-w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#029e12] to-[#0b6e16] shadow-[0_4px_12px_rgba(2,158,18,0.25)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-white"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a1a] md:text-[2.5rem]">Consultancy Services</h3>
              </div>
              <p className="mb-6 text-[1.1rem] leading-8 text-[#444]">Our consultancy division assists healthcare organizations, entrepreneurs, and municipalities in establishing their own compliant medical-waste management facilities. We begin with a comprehensive feasibility assessment covering regulatory requirements, site selection, waste-volume forecasting, technology options, and estimated capital and operational costs.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
                {['Feasibility assessment & system design', 'Regulatory licensing guidance', 'Staff training & SOP development', 'Ongoing compliance monitoring'].map((feature) => (
                  <div key={feature} className={featureBadge}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 min-w-5 text-[#029e12]"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[0.95rem] font-semibold leading-6 text-[#333]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#f0f8f1] to-[#e8f5ea] px-8 py-24">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className={sectionTitle}>Why Choose Rudra?</h2>
          <p className="mx-auto mb-16 max-w-[850px] text-center text-xl font-normal leading-[1.9] text-[#333]">With years of experience in biomedical waste management, we provide reliable and sustainable solutions that help keep your community clean and healthy. Our commitment to environmental responsibility sets us apart in the industry.</p>
          <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-[20px] border-2 border-transparent bg-white px-8 py-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:border-[#029e12] hover:shadow-[0_12px_32px_rgba(2,158,18,0.15)]">
              <div className="mb-3 text-6xl font-extrabold leading-none text-[#029e12] md:text-[4rem]"><CountUp from={0} to={10} duration={2} />+</div>
              <div className="text-[1.15rem] font-semibold tracking-[0.5px] text-[#555]">Years Experience</div>
            </div>
            <div className="relative overflow-hidden rounded-[20px] border-2 border-transparent bg-white px-8 py-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:border-[#029e12] hover:shadow-[0_12px_32px_rgba(2,158,18,0.15)]">
              <div className="mb-3 text-6xl font-extrabold leading-none text-[#029e12] md:text-[4rem]"><CountUp from={0} to={500} duration={2} separator="," />+</div>
              <div className="text-[1.15rem] font-semibold tracking-[0.5px] text-[#555]">Happy Clients</div>
            </div>
            <div className="relative overflow-hidden rounded-[20px] border-2 border-transparent bg-white px-8 py-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:border-[#029e12] hover:shadow-[0_12px_32px_rgba(2,158,18,0.15)]">
              <div className="mb-3 text-6xl font-extrabold leading-none text-[#029e12] md:text-[4rem]">24/7</div>
              <div className="text-[1.15rem] font-semibold tracking-[0.5px] text-[#555]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#ececec] bg-[#f7f7f7] px-4 pb-6 pt-5">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-3 md:justify-between" aria-label="Compliance and certifications">
          {[
            ['CPCB', 'Central Pollution Control Board'],
            ['SPCB', 'State Pollution Control Board'],
            ['BMWM Rules', 'Biomedical Waste Management']
          ].map(([title, subtitle]) => (
            <div key={title} className="flex items-center gap-3 rounded-xl border border-[#e7e7e7] bg-white px-4 py-2.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="h-7 w-7 stroke-current text-[#029e12]" fill="none" strokeWidth="2">
                <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <strong className="block text-[0.95rem] text-[#111]">{title}</strong>
                <span className="block text-[0.82rem] text-[#555]">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
