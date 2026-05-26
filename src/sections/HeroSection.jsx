import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaArrowRight, FaShieldAlt } from 'react-icons/fa'
import { MdVerified, MdHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router-dom'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dar-ul-Shifa%20Clinic.'

const slides = [
  {
    bg:    'https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?w=1800&q=85&auto=format&fit=crop',
    tag:   'Homeopathic Excellence',
    title: 'Natural Healing\nFor Every Condition',
    sub:   'Safe, gentle and effective homeopathic treatment for all ages — backed by 25+ years of practice.',
  },
  {
    bg:    'https://images.unsplash.com/photo-1745327883389-17150e99dcf7?w=1800&q=85&auto=format&fit=crop',
    tag:   'Authentic Sunnah Therapy',
    title: 'Hijama & Cupping\nTherapy',
    sub:   'Professional wet & dry cupping using bamboo and glass cups — Sunnah-based healing since 1999.',
  },
  {
    bg:    'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1800&q=85&auto=format&fit=crop',
    tag:   'Faith-Based Spiritual Healing',
    title: 'Rohani Ilaaj &\nSpiritual Wellness',
    sub:   'Quranic healing, ruqyah, and spiritual counseling — holistic care for body and soul.',
  },
  {
    bg:    'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1800&q=85&auto=format&fit=crop',
    tag:   'Clinic At Your Door',
    title: 'Professional Home\nService Available',
    sub:   'Complete homeopathic consultations and cupping therapy at your home across Rawalpindi.',
  },
]

const INTERVAL = 5500

export default function HeroSection() {
  const [cur,  setCur]  = useState(0)
  const [prev, setPrev] = useState(null)

  const advance = useCallback(() => {
    setPrev(cur)
    setCur(c => (c + 1) % slides.length)
  }, [cur])

  useEffect(() => {
    const t = setInterval(advance, INTERVAL)
    return () => clearInterval(t)
  }, [advance])

  const goTo = (i) => { setPrev(cur); setCur(i) }

  return (
    <section className="relative h-[100svh] min-h-[600px] max-h-[980px] overflow-hidden bg-navy-950">

      {/* Background images */}
      <AnimatePresence initial={false}>
        <motion.div key={cur}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0">
          <img src={slides[cur].bg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/20" />
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-hero-grid opacity-100 pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-24 right-12 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/3 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400"
            style={{ left: `${8 + i * 9}%`, bottom: -8, opacity: 0 }}
            animate={{ y: [0, -700], opacity: [0, 0.6, 0] }}
            transition={{ duration: 8 + i * 0.7, delay: i * 0.9, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Slide content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-[680px] mx-auto md:mx-0 text-center md:text-left">

            {/* Slide tag */}
            <AnimatePresence mode="wait">
              <motion.div key={`tag-${cur}`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                  {slides[cur].tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Heading */}
            <AnimatePresence mode="wait">
              <motion.h1 key={`h1-${cur}`}
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="font-heading text-[2.1rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
                {slides[cur].title.split('\n').map((line, i) => (
                  <span key={i} className={`block ${i === 1 ? 'text-gold-gradient' : ''}`}>
                    {line}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Arabic tagline */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="font-arabic text-lg sm:text-xl text-gold-400/90 mb-3"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
              دار الشفاء — شِفَاءٌ وَعَافِيَة
            </motion.p>

            {/* Sub */}
            <AnimatePresence mode="wait">
              <motion.p key={`sub-${cur}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-slate-300 text-sm sm:text-base leading-relaxed mb-7 max-w-[540px] mx-auto md:mx-0">
                {slides[cur].sub}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 mb-8">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                <FaWhatsapp className="text-lg sm:text-xl" />
                Book Appointment
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 text-white border border-white/25
                           hover:border-gold-400 hover:text-gold-400 font-semibold px-6 sm:px-8 py-3.5 sm:py-4
                           rounded-full transition-all duration-300 bg-white/5 backdrop-blur-sm text-sm hover:-translate-y-0.5">
                Our Services <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                { icon: MdHealthAndSafety, label: 'PHC Reg. R-90753' },
                { icon: MdVerified,       label: 'NCHP Reg. 116249' },
                { icon: FaShieldAlt,      label: 'Est. Since 1999' },
              ].map(({ icon: Icon, label }) => (
                <div key={label}
                  className="flex items-center gap-1.5 bg-white/8 backdrop-blur-md border border-white/15
                             rounded-full px-3 py-1.5">
                  <Icon className="text-gold-400 text-xs sm:text-sm flex-shrink-0" />
                  <span className="text-white/90 text-[10px] sm:text-xs font-medium whitespace-nowrap">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-6 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === cur ? 'w-8 h-1.5 bg-gold-400' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`} />
        ))}
        <span className="ml-1 text-white/30 text-[10px] font-mono tabular-nums hidden sm:inline">
          {String(cur + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll hint — desktop only */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 right-6 z-20 hidden md:flex flex-col items-center gap-1">
        <span className="text-white/30 text-[10px] uppercase tracking-widest rotate-90 mb-1">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-10 sm:h-16 md:h-20">
          <path d="M0 90 L0 45 Q360 0 720 35 Q1080 70 1440 20 L1440 90 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
