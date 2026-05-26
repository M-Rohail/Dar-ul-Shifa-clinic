import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import Logo from './Logo'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dar-ul-Shifa%20Clinic.'

const links = [
  { label: 'Home',            to: '/' },
  { label: 'Services',        to: '/services' },
  { label: 'Cupping Therapy', to: '/cupping-therapy' },
  { label: 'Rohani Ilaaj',    to: '/rohani-ilaaj' },
  { label: 'About Doctor',    to: '/about' },
  { label: 'Contact',         to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => { setOpen(false) }, [loc])

  return (
    <>
      {/* ── Topbar ─────────────────────────────────────── */}
      <div className="hidden md:block bg-navy-950 text-slate-300 text-[11px] py-2 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MdLocationOn className="text-gold-400 text-sm" />
              H.No. S/85, Chaklala Railway Scheme 1, Chaklala Cantt., Rawalpindi
            </span>
            <span className="flex items-center gap-1.5">
              <FaPhone className="text-gold-400 text-xs" />
              +92 341 5412125
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">PHC Reg: <span className="text-gold-400 font-semibold">R-90753</span></span>
            <span className="text-slate-500">NCHP Reg: <span className="text-gold-400 font-semibold">116249</span></span>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-green-400 font-semibold transition-colors">
              <FaWhatsapp /> Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ───────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-navy-950 py-3 border-b border-navy-800 shadow-[0_2px_16px_rgba(8,15,58,0.4)]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          <Logo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => {
              const active = loc.pathname === l.to
              return (
                <Link key={l.to} to={l.to}
                  className={`relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200
                    ${active
                      ? 'text-gold-400'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
                  {l.label}
                  {active && (
                    <motion.span layoutId="nav-pill"
                      className="absolute inset-x-2 bottom-0 h-[2px] bg-gold-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp className="text-base" />
              Book Appointment
            </a>
          </div>

          {/* Burger */}
          <button onClick={() => setOpen(o => !o)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu">
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-[calc(48px+52px)] md:top-[52px] inset-x-0 z-40
                       bg-navy-950/98 backdrop-blur-xl border-b border-navy-800 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-5 space-y-1">
              {links.map((l, i) => (
                <motion.div key={l.to}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}>
                  <Link to={l.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                      ${loc.pathname === l.to
                        ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-navy-800">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  <FaWhatsapp /> WhatsApp Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
