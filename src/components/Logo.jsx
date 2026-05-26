import { Link } from 'react-router-dom'

export default function Logo({ variant = 'dark', size = 'md' }) {
  // variant: 'dark' (white text) | 'light' (navy text)
  const isLight = variant === 'light'
  const textClr  = isLight ? 'text-navy-950' : 'text-white'
  const subClr   = isLight ? 'text-navy-700' : 'text-slate-300'
  const tagClr   = 'text-gold-500'
  const dim = size === 'sm' ? 44 : size === 'lg' ? 66 : 54

  return (
    <Link to="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Dar-ul-Shifa Home">
      {/* Logomark */}
      <div className="relative flex-shrink-0">
        <svg width={dim} height={dim} viewBox="0 0 80 80" fill="none"
          className="drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
          {/* Navy circle */}
          <circle cx="40" cy="40" r="38" fill="#080f3a"/>
          {/* Gold ring */}
          <circle cx="40" cy="40" r="34" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
          {/* Crescent */}
          <path d="M52 26C46 22 37 25 33 32c-4 7-1 15 5 19-7 0-13-5-15-12-2-7 2-15 9-19 7-4 15-1 18 6z" fill="#f59e0b"/>
          {/* Star */}
          <polygon points="57,20 58.4,24.3 63,24.3 59.3,27 60.6,31.3 57,28.5 53.4,31.3 54.7,27 51,24.3 55.6,24.3" fill="#fbbf24"/>
          {/* Cross / medicine bar */}
          <rect x="37.5" y="53" width="5" height="14" rx="2.5" fill="#60a5fa" opacity="0.8"/>
          <rect x="31" y="58.5" width="18" height="4" rx="2" fill="#60a5fa" opacity="0.8"/>
        </svg>
      </div>

      {/* Wordmark */}
      <div>
        <div className={`font-heading font-bold leading-none tracking-wide ${textClr}`}
          style={{ fontSize: size === 'sm' ? '0.88rem' : size === 'lg' ? '1.2rem' : '1rem' }}>
          Dar-ul-Shifa
        </div>
        <div className={`font-heading italic leading-tight ${subClr}`}
          style={{ fontSize: size === 'sm' ? '0.65rem' : size === 'lg' ? '0.82rem' : '0.72rem' }}>
          Homoeopathic Clinic
        </div>
        <div className={`font-sans font-bold uppercase tracking-[0.18em] ${tagClr}`}
          style={{ fontSize: '0.52rem' }}>
          Est. 1999
        </div>
      </div>
    </Link>
  )
}
