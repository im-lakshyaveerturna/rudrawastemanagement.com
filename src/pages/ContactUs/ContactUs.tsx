import FuzzyText from '../../components/FuzzyText'
import locationIcon from '../../assets/contact/location.png'
import phoneIcon from '../../assets/contact/phone_call.png'
import emailIcon from '../../assets/contact/gmail.png'
import clockIcon from '../../assets/contact/clock.png'

function ContactUs() {
  const inputClasses = 'w-full rounded-lg border border-[#ddd] bg-[#fafafa] px-4 py-4 text-base transition focus:border-black focus:bg-white focus:outline-none'

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-white">
      <section className="bg-gradient-to-br from-[#0b6e16] via-[#029e12] to-[#1b8f2a] px-6 pb-12 pt-24 text-center text-white">
        <div className="mx-auto max-w-[1200px]">
          <FuzzyText
            className="mx-auto block h-auto w-full max-w-[700px]"
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

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="h-fit rounded-2xl bg-[#f8f8f8] p-8">
            <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.5px] text-[#1a1a1a]">Contact Information</h2>
            <div className="flex flex-col gap-10">
              {[
                { icon: locationIcon, title: 'Address', text: 'Bhopa Road, Near Bindal Mill, Muzaffarnagar, Uttar Pradesh- 251001' },
                { icon: phoneIcon, title: 'Phone', text: '+91 9927025877, +91 9012519000' },
                { icon: emailIcon, title: 'Email', text: 'office@rudrawastemanagement.com' },
                { icon: clockIcon, title: 'Hours', text: 'Monday - Saturday: 9:00 AM - 5:00 PM' }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <img src={item.icon} alt={item.title} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[1.1rem] font-semibold text-[#1a1a1a]">{item.title}</h3>
                    <p className="m-0 leading-relaxed text-[#666]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-8">
            <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.5px] text-[#1a1a1a]">Send Us a Message</h2>
            <form className="flex flex-col gap-7">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-[0.95rem] font-semibold text-[#1a1a1a]">Full Name</label>
                <input className={inputClasses} type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-[0.95rem] font-semibold text-[#1a1a1a]">Email Address</label>
                <input className={inputClasses} type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="phone" className="text-[0.95rem] font-semibold text-[#1a1a1a]">Phone Number</label>
                <input className={inputClasses} type="tel" id="phone" name="phone" placeholder="+91 9876543210" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="subject" className="text-[0.95rem] font-semibold text-[#1a1a1a]">Subject</label>
                <input className={inputClasses} type="text" id="subject" name="subject" placeholder="How can we help?" required />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-[0.95rem] font-semibold text-[#1a1a1a]">Message</label>
                <textarea className={`${inputClasses} min-h-[140px] resize-y`} id="message" name="message" rows={5} placeholder="Tell us more about your needs..." required />
              </div>
              <button
                type="submit"
                className="mt-4 w-fit rounded-[50px] bg-gradient-to-b from-[#7c3aed] via-[#6d28d9] to-[#4c1d95] px-12 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
