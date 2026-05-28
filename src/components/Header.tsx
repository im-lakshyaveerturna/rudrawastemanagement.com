import logo from '../assets/whoweare/rudra_pnglogo.png'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const baseButton = 'rounded-[15px] border border-white/15 px-6 py-3 text-[0.95rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-b hover:from-[#079c17] hover:via-[#067611] hover:to-[#02540b] hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]'
const activeButton = 'bg-gradient-to-b from-[#079c17] via-[#067611] to-[#02540b] text-white shadow-[0_6px_16px_rgba(0,0,0,0.18)]'

function Header({ currentPage, onNavigate }: HeaderProps) {
  const aboutActive = ['Who We Are', 'Laws & Regulations'].includes(currentPage)

  return (
    <header className="absolute inset-x-0 top-0 z-[1000] bg-gradient-to-t from-transparent to-[#1d1d1d] px-4 py-5 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div
          className="flex cursor-pointer items-center gap-3"
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
          onClick={() => onNavigate('Home')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onNavigate('Home')
            }
          }}
        >
          <img src={logo} alt="Rudra Waste Management logo" className="h-[2.9rem] w-auto object-contain" />
          <h1 className="text-2xl font-bold tracking-[-0.5px] text-[#f9f8f8] md:text-[2rem]">Rudra Waste Management</h1>
        </div>

        <nav className="flex flex-wrap gap-2">
          <button className={`${baseButton} ${currentPage === 'Home' ? activeButton : ''}`} onClick={() => onNavigate('Home')}>
            Home
          </button>

          <div className="group relative flex">
            <button className={`${baseButton} ${aboutActive ? activeButton : ''}`}>About Us ▾</button>
            <div className="invisible absolute left-0 top-full z-[1100] mt-1 flex min-w-[180px] flex-col rounded-xl bg-black/85 p-1 opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <button
                className={`w-full rounded-md px-4 py-2.5 text-left text-sm font-semibold text-white transition hover:bg-gradient-to-b hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4c1d95] ${currentPage === 'Who We Are' ? 'bg-gradient-to-b from-[#079c17] via-[#067611] to-[#02540b]' : ''}`}
                onClick={() => onNavigate('Who We Are')}
              >
                Who We Are
              </button>
              <button
                className={`w-full rounded-md px-4 py-2.5 text-left text-sm font-semibold text-white transition hover:bg-gradient-to-b hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4c1d95] ${currentPage === 'Laws & Regulations' ? 'bg-gradient-to-b from-[#079c17] via-[#067611] to-[#02540b]' : ''}`}
                onClick={() => onNavigate('Laws & Regulations')}
              >
                Laws & Procedures
              </button>
            </div>
          </div>

          <button className={`${baseButton} ${currentPage === 'Gallery' ? activeButton : ''}`} onClick={() => onNavigate('Gallery')}>
            Gallery
          </button>
          <button className={`${baseButton} ${currentPage === 'Services' ? activeButton : ''}`} onClick={() => onNavigate('Services')}>
            Services
          </button>
          <button className={`${baseButton} ${currentPage === 'Contact Us' ? activeButton : ''}`} onClick={() => onNavigate('Contact Us')}>
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
