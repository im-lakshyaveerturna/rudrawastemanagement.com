import imgCollection from '../../assets/services/doortodoor.png'
import imgIncinerator from '../../assets/services/incinerator.png'
import imgAutoclave from '../../assets/services/autoclave.png'
import imgShredding from '../../assets/services/shredding.jpg'
import imgScrubber from '../../assets/services/SCRUB.png'

const services = [
  {
    image: imgCollection,
    alt: 'Door to door biomedical waste collection and GPS-tracked transport',
    title: 'Door to Door Collection & Transport',
    description:
      'Scheduled, traceable pickup for hospitals, clinics, labs and blood banks. We provide color‑coded containers per Schedule II, verify labeling per Schedule III, and document transport per Schedule IV.',
    points: ['Authorized vehicles with secure loading', 'Digital manifests and chain‑of‑custody logs', 'Predefined routes with rapid turnaround']
  },
  {
    image: imgIncinerator,
    alt: 'Biomedical waste high-temperature incinerator facility',
    title: 'Bio‑medical Incinerator',
    description:
      'Thermal treatment for anatomical and pharmaceutical waste. Waste is rendered non‑infectious and unrecognizable with emissions controlled per environmental standards.',
    points: ['High‑temperature thermal destruction', 'Continuous process monitoring', 'Emission reporting and logs']
  },
  {
    image: imgAutoclave,
    alt: 'Autoclave steam sterilization for infectious biomedical waste',
    title: 'Autoclave Sterilization',
    description:
      'Steam sterilization for infectious waste in line with Schedule V standards, followed by shredding to prevent reuse and reduce volume.',
    points: ['Validated cycles and biological indicators', 'Traceable batch documentation', 'Post‑treatment handling SOPs']
  },
  {
    image: imgShredding,
    alt: 'Shredding facility for biomedical waste volume reduction',
    title: 'Shredding Facility',
    description:
      'Secure mechanical shredding to reduce volume and ensure complete destruction of treated materials, eliminating any possibility of reuse.',
    points: ['High‑torque industrial shredders', 'Consistent particle size output', 'Integrated with autoclave workflow']
  },
  {
    image: imgScrubber,
    alt: 'Scrubber system for stack emission control in waste treatment',
    title: 'Scrubber (Stack Emission Control)',
    description:
      'Advanced emission control systems capture particulates and neutralize gases from treatment processes, protecting air quality and ensuring compliance.',
    points: ['Multi‑stage scrubbing and filtration', 'Periodic calibration and audits', 'Compliance with environmental norms']
  }
]

export default function Services() {
  return (
    <div className="w-full bg-white">
      <section className="bg-gradient-to-br from-[#0b6e16] via-[#029e12] to-[#1b8f2a] px-6 pb-16 pt-24 text-center text-white">
        <div className="mx-auto max-w-[1100px] px-5">
          <h1 className="text-4xl font-extrabold tracking-[-0.5px] md:text-5xl">Services</h1>
          <p className="mt-2 opacity-95">Compliant biomedical waste solutions from pickup to final disposal</p>
        </div>
      </section>

      <section className="px-0 py-12 pb-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-transparent bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_36px_rgba(0,0,0,0.10)]"
            >
              <img src={service.image} alt={service.alt} loading="lazy" className="h-[clamp(160px,22vw,220px)] w-full object-cover" />
              <div className="p-4 pb-5">
                <h3 className="mb-2 text-[1.22rem] font-extrabold tracking-[-0.2px] text-[#0f3b12]">{service.title}</h3>
                <div className="mb-3 h-[3px] w-12 rounded bg-gradient-to-r from-[#029e12] to-[#1b8f2a]" />
                <p className="mb-2.5 text-[0.98rem] leading-7 text-[#444]">{service.description}</p>
                <ul className="mt-1.5 space-y-1 text-[0.94rem] leading-6 text-[#2e2e2e]">
                  {service.points.map((point) => (
                    <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#029e12] before:shadow-[0_0_0_2px_rgba(2,158,18,0.12)]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
