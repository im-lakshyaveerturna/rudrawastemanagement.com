import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#e8f5e9] p-8">
      <div className="max-w-[600px] rounded-[20px] bg-white p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:p-12">
        <div className="mx-auto mb-8 h-20 w-20 text-[#029e12]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="mb-4 text-6xl font-bold leading-none tracking-[-2px] text-[#029e12] md:text-[6rem]">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-[#1a1a1a] md:text-[2rem]">Page Not Found</h2>
        <p className="mb-10 text-[1.1rem] leading-7 text-[#666]">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            className="inline-block rounded-xl bg-gradient-to-br from-[#0b6e16] to-[#029e12] px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_12px_rgba(2,158,18,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(2,158,18,0.4)]"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
          <button
            className="inline-block rounded-xl border-2 border-[#029e12] bg-white px-8 py-3.5 text-base font-bold text-[#029e12] transition hover:-translate-y-0.5 hover:bg-[#f0f8f1]"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
