import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaWhatsapp, FaTint, FaCheckCircle, FaExclamationTriangle, FaCalendarAlt, FaStar, FaMoon } from 'react-icons/fa'
import { GiBamboo } from 'react-icons/gi'
import { MdLocalDrink } from 'react-icons/md'
import AppointmentCTA from '../sections/AppointmentCTA'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20Cupping%20Therapy%20(Hijama)%20session.'

/* ── Data ─────────────────────────────────────────────────── */
const hadiths = [
  {
    arabic: 'إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ',
    translation: '"The best of what you treat yourselves with is Hijama (cupping)."',
    source: 'Sahih Bukhari & Muslim',
    narrator: 'Narrated by Ibn Abbas (رضي الله عنه)',
  },
  {
    arabic: 'الشِّفَاءُ فِي ثَلَاثَةٍ: شَرْبَةِ عَسَلٍ، وَشَرْطَةِ مِحْجَمٍ، وَكَيَّةِ نَارٍ',
    translation: '"Healing is in three things: a gulp of honey, cupping (Hijama), and cauterization (branding with fire)."',
    source: 'Sahih Bukhari 5680',
    narrator: 'Narrated by Ibn Abbas (رضي الله عنه)',
  },
  {
    arabic: 'احْتَجَمَ النَّبِيُّ ﷺ وَهُوَ مُحْرِمٌ فِي رَأْسِهِ',
    translation: '"The Prophet ﷺ was cupped on his head while he was in the state of Ihram."',
    source: 'Sahih Bukhari 1836',
    narrator: 'Narrated by Ibn Abbas (رضي الله عنه)',
  },
  {
    arabic: 'مَنِ احْتَجَمَ لِسَبْعَ عَشْرَةَ وَتِسْعَ عَشْرَةَ وَإِحْدَى وَعِشْرِينَ كَانَ شِفَاءً مِنْ كُلِّ دَاءٍ',
    translation: '"Whoever has himself cupped on the 17th, 19th or 21st day will be cured of every disease."',
    source: 'Abu Dawud 3861',
    narrator: 'Narrated by Abu Hurairah (رضي الله عنه)',
  },
]

const sunnahDates = [
  { day: '17th', arabic: '١٧', lunar: 'Lunar Month', note: 'Best day for Hijama', color: 'border-gold-500 bg-gold-500/10', textColor: 'text-gold-400' },
  { day: '19th', arabic: '١٩', lunar: 'Lunar Month', note: 'Highly recommended', color: 'border-gold-500 bg-gold-500/10', textColor: 'text-gold-400' },
  { day: '21st', arabic: '٢١', lunar: 'Lunar Month', note: 'Prophetic tradition', color: 'border-gold-500 bg-gold-500/10', textColor: 'text-gold-400' },
]

const sunnahDays = [
  { day: 'Monday', arabic: 'الاثنين', recommended: true },
  { day: 'Tuesday', arabic: 'الثلاثاء', recommended: true },
  { day: 'Wednesday', arabic: 'الأربعاء', recommended: false },
  { day: 'Thursday', arabic: 'الخميس', recommended: true },
  { day: 'Friday', arabic: 'الجمعة', recommended: false },
  { day: 'Saturday', arabic: 'السبت', recommended: false },
  { day: 'Sunday', arabic: 'الأحد', recommended: false },
]

const cupTypes = [
  { icon: FaTint,       name: 'Glass Cups',    border: 'border-blue-200',   bg: 'bg-blue-50',   iconClr: 'text-blue-600',   text: 'text-blue-800',
    desc: 'Traditional glass cups using fire or mechanical suction. Most common for wet and dry cupping.', ideal: 'Ideal for: Hijama (wet cupping)' },
  { icon: GiBamboo,     name: 'Bamboo Cups',   border: 'border-teal-200',   bg: 'bg-teal-50',   iconClr: 'text-teal-600',   text: 'text-teal-800',
    desc: 'Eco-friendly bamboo cups that retain heat well. Gentle and sustained suction.', ideal: 'Ideal for: Dry cupping, sensitive skin' },
  { icon: MdLocalDrink, name: 'Silicone Cups', border: 'border-purple-200', bg: 'bg-purple-50', iconClr: 'text-purple-600', text: 'text-purple-800',
    desc: 'Flexible silicone cups for sliding cupping massage across the skin.', ideal: 'Ideal for: Massage cupping, lymphatic drainage' },
]

const steps = [
  { n: '01', title: 'Consultation', desc: 'Initial assessment of your health, conditions, and cupping point selection.' },
  { n: '02', title: 'Preparation', desc: 'Sterilisation of all equipment. Skin cleaned and prepared.' },
  { n: '03', title: 'Application', desc: 'Cups applied to specific therapeutic points on the body.' },
  { n: '04', title: 'Session', desc: '20–30 minute therapeutic session for optimal benefit.' },
  { n: '05', title: 'Aftercare', desc: 'Post-treatment guidance on diet, rest, and follow-up timing.' },
]

const benefits = [
  'Deep blood purification & detox', 'Relief from chronic pain', 'Improved blood circulation',
  'Reduced inflammation', 'Enhanced immune function', 'Stress & anxiety relief',
  'Migraine & headache treatment', 'Skin conditions improvement', 'Fertility support',
  'Diabetes & BP management', 'Weight management support', 'Energy & vitality boost',
]

const cautions = [
  'Pregnancy (first trimester)', 'Blood thinners / blood disorders',
  'Open wounds at therapy site', 'Fever or acute infection',
  'Cancer at the site', 'Very fragile elderly skin',
]

/* ── Floating cup particle ─────────────────────────────────── */
function FloatingCup({ delay, x, size }) {
  return (
    <motion.div
      className="absolute rounded-full border-2 border-gold-400/30 bg-gold-400/5"
      style={{ left: `${x}%`, bottom: -60, width: size, height: size }}
      animate={{ y: [0, -900], opacity: [0, 0.6, 0.6, 0], rotate: [0, 180] }}
      transition={{ duration: 12 + delay, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

/* ── Hadith card ───────────────────────────────────────────── */
function HadithCard({ h, i }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      className="relative cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(f => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {/* Front */}
        <div className="backface-hidden rounded-2xl p-7 border border-gold-500/25 bg-white/5 backdrop-blur-sm
                        hover:bg-white/10 transition-colors group"
          style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-gold-500" />
            <FaStar className="text-gold-400 text-xs animate-pulse" />
            <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest">Hadith {i + 1}</span>
            <FaStar className="text-gold-400 text-xs animate-pulse" />
            <span className="w-6 h-px bg-gold-500" />
          </div>
          <p className="font-arabic text-xl md:text-2xl text-gold-300 leading-loose text-center mb-4 group-hover:text-gold-200 transition-colors">
            {h.arabic}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed text-center italic mb-4">{h.translation}</p>
          <div className="text-center">
            <span className="text-gold-500 text-[11px] font-bold">{h.source}</span>
          </div>
          <p className="text-center text-slate-500 text-[10px] mt-2">(Tap to see narrator)</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col items-center justify-center
                     bg-gradient-to-br from-gold-600/20 to-gold-500/10 border border-gold-400/40"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <FaStar className="text-gold-400 text-3xl mb-4" />
          <p className="text-white font-semibold text-center text-base mb-2">{h.narrator}</p>
          <p className="text-gold-400 text-sm text-center">{h.source}</p>
          <p className="text-slate-400 text-[11px] mt-4">(Tap to flip back)</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main component ────────────────────────────────────────── */
export default function CuppingPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOp  = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — Parallax + floating cups
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-navy-gradient">
        {/* Parallax bg image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1800&q=85"
            alt="Hijama cupping therapy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/30" />
        </motion.div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-hero-grid pointer-events-none" />

        {/* Floating cups */}
        {[...Array(8)].map((_, i) => (
          <FloatingCup key={i} delay={i * 1.5} x={10 + i * 11} size={20 + i * 8} />
        ))}

        {/* Gold glow orbs */}
        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-gold-500/8 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-32 left-20 w-64 h-64 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

        {/* Content */}
        <motion.div style={{ opacity: heroOp }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
          <div className="max-w-[680px] mx-auto md:mx-0 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
              className="flex items-center justify-center md:justify-start gap-3 mb-5"
            >
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-gold-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em]">
                Sunnah-Based Healing
              </span>
              <FaMoon className="text-gold-400 text-sm" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
            >
              Hijama &<br />
              <span className="text-gold-gradient">Cupping Therapy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="font-arabic text-xl sm:text-2xl text-gold-400/90 mb-4"
            >
              الحجامة — سنة النبي ﷺ — طريق الشفاء
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-[520px] mx-auto md:mx-0"
            >
              Professional Hijama, wet & dry cupping with glass and bamboo cups — authentic Sunnah therapy
              by Dr. Abdul Moeed since 1999. Sterile, safe, and deeply healing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3"
            >
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp text-sm sm:text-base px-6 sm:px-9 py-3.5 sm:py-4 justify-center">
                <FaWhatsapp className="text-lg sm:text-xl" /> Book Hijama Session
              </a>
              <a href="#sunnah-dates"
                className="inline-flex items-center justify-center gap-2 border border-gold-400/40 text-gold-400
                           hover:bg-gold-400/10 font-semibold px-6 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm">
                <FaCalendarAlt /> Sunnah Dates
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0 90 L0 45 Q360 0 720 35 Q1080 70 1440 20 L1440 90 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HADITH BANNER
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl opacity-10 select-none"
          >
            ☽
          </motion.div>
          <p className="font-arabic text-2xl text-gold-400 leading-loose mb-3">
            خَيْرُ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ
          </p>
          <p className="text-slate-300 text-base italic mb-1">
            "The best of what you treat yourselves with is Hijama (cupping)."
          </p>
          <p className="text-gold-500 text-sm font-semibold">— Sahih Bukhari · Narrated by Ibn Abbas رضي الله عنه</p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          HADITH CARDS — 3D flip
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #06091e 0%, #0c1545 50%, #06091e 100%)' }}>
        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-white pointer-events-none"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 0.5, height: Math.random() * 2 + 0.5 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <p className="section-tag justify-center !text-gold-400 before:bg-gold-400 after:bg-gold-400">
              Prophetic Guidance
            </p>
            <h2 className="section-title-white mb-3">
              What Prophet ﷺ Said
              <span className="block text-gold-gradient font-arabic text-2xl mt-1">أحاديث الحجامة</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Tap each card to reveal narrator details
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {hadiths.map((h, i) => <HadithCard key={i} h={h} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUNNAH DATES
      ══════════════════════════════════════════ */}
      <section id="sunnah-dates" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <p className="section-tag justify-center">Prophetic Calendar</p>
            <h2 className="section-title mb-3">
              Best Sunnah Dates for
              <span className="block text-gold-gradient">Hijama</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              According to authentic Hadith, the Prophet Muhammad ﷺ recommended specific dates of the
              Islamic lunar month for Hijama — these dates are when the blood is at its most active.
            </p>
          </motion.div>

          {/* Date cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {sunnahDates.map((d, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className={`relative text-center p-8 rounded-3xl border-2 ${d.color}
                            bg-navy-gradient shadow-navy overflow-hidden group cursor-default`}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Moon */}
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-4xl mb-2 opacity-20 select-none"
                >
                  ☽
                </motion.div>
                <p className="font-arabic text-5xl text-gold-400 mb-2 font-bold">{d.arabic}</p>
                <p className="text-white font-heading text-2xl font-bold mb-1">{d.day}</p>
                <p className="text-slate-400 text-xs mb-3 uppercase tracking-widest">{d.lunar}</p>
                <div className="flex items-center justify-center gap-1.5 bg-gold-500/20 rounded-full px-3 py-1.5">
                  <FaStar className="text-gold-400 text-[10px]" />
                  <span className="text-gold-300 text-[11px] font-semibold">{d.note}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Days of week */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-gradient rounded-3xl p-5 sm:p-8 border border-navy-700"
          >
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white text-center mb-2">
              Best Days of the Week for Hijama
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm text-center mb-6 sm:mb-8">
              Based on the Sunnah of Prophet Muhammad ﷺ — recommended days for optimal benefit
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {sunnahDays.map((d, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.08 }}
                  className={`flex flex-col items-center gap-1.5 py-3 sm:py-4 px-1 sm:px-2 rounded-xl sm:rounded-2xl transition-all duration-300
                    ${d.recommended
                      ? 'bg-gold-500/20 border border-gold-500/40'
                      : 'bg-white/5 border border-white/8 opacity-50'}`}
                >
                  {d.recommended
                    ? <FaCheckCircle className="text-gold-400 text-sm sm:text-base" />
                    : <FaExclamationTriangle className="text-slate-500 text-sm sm:text-base" />
                  }
                  <p className={`text-[10px] sm:text-[11px] font-bold text-center leading-tight ${d.recommended ? 'text-gold-300' : 'text-slate-500'}`}>
                    {d.day.slice(0, 3)}
                    <span className="hidden sm:inline">{d.day.slice(3)}</span>
                  </p>
                  <p className="font-arabic text-[9px] sm:text-[10px] text-slate-400 text-center leading-tight">{d.arabic}</p>
                  {d.recommended && (
                    <span className="text-[8px] sm:text-[9px] text-gold-400 font-bold uppercase tracking-wider">✓</span>
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-slate-500 text-[10px] sm:text-[11px] text-center mt-4 sm:mt-5 italic">
              Reference: Abu Dawud, Ibn Majah — cupping on the 17th, 19th, 21st of lunar month on Mon, Tue or Thu
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CUP TYPES — 3D hover cards
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <p className="section-tag justify-center">Equipment We Use</p>
            <h2 className="section-title">Types of Cupping Cups</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {cupTypes.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 36, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-7 rounded-3xl border-2 ${c.border} ${c.bg}
                            shadow-card hover:shadow-card-hover transition-all duration-400 cursor-default`}
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <c.icon className={`${c.iconClr} text-5xl mb-5`} />
                </motion.div>
                <h3 className={`font-heading font-bold text-2xl ${c.text} mb-3`}>{c.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className={`inline-flex items-center gap-2 text-[12px] font-bold ${c.text}`}>
                  <FaCheckCircle className="text-[11px]" /> {c.ideal}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS — animated steps
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <p className="section-tag justify-center">Step by Step</p>
            <h2 className="section-title">How the Session Works</h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-navy-gradient flex items-center justify-center
                               shadow-navy group-hover:shadow-[0_12px_40px_rgba(10,16,64,0.5)] transition-shadow"
                  >
                    <span className="text-white font-bold text-lg font-heading">{s.n}</span>
                  </motion.div>
                  <h4 className="font-heading font-bold text-navy-900 mb-2 text-lg">{s.title}</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BENEFITS & CAUTIONS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="section-tag">What It Treats</p>
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-7">Health Benefits</h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-100 hover:border-navy-200 hover:shadow-card transition-all duration-200"
                  >
                    <FaCheckCircle className="text-navy-600 text-[11px] mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-[13px] font-medium">{b}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cautions + CTA */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6">
              <div>
                <p className="section-tag">Safety First</p>
                <h3 className="font-heading text-2xl font-bold text-red-700 mb-5">Precautions</h3>
                <div className="space-y-3">
                  {cautions.map((c, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 p-3.5 bg-red-50 rounded-xl border border-red-100"
                    >
                      <FaExclamationTriangle className="text-red-400 text-sm flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-[13px]">{c}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs italic mt-4">
                  Always consult Dr. Abdul Moeed before starting if you have any medical condition.
                </p>
              </div>

              {/* Booking card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-navy-gradient rounded-3xl p-7 border border-navy-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold-500/8 blur-2xl" />
                <p className="font-arabic text-xl text-gold-400 mb-2">احجز الآن</p>
                <h4 className="font-heading text-xl font-bold text-white mb-2">Book Your Hijama Session</h4>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  Book on the Sunnah dates — 17th, 19th or 21st of the lunar month — for maximum benefit.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  <FaWhatsapp /> WhatsApp Appointment
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}
