import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaTint, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { GiBamboo } from 'react-icons/gi'
import { MdLocalDrink } from 'react-icons/md'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20cupping%20therapy%20session.'

const types = [
  { icon: FaTint,        color: 'bg-red-600',   name: 'Wet Cupping (Hijama)', desc: 'Deep detox & blood purification — authentic Sunnah therapy.' },
  { icon: MdLocalDrink,  color: 'bg-amber-600',  name: 'Dry Cupping',          desc: 'Non-invasive for muscle pain, tension & lymphatic drainage.' },
  { icon: GiBamboo,      color: 'bg-teal-700',   name: 'Bamboo Cups',          desc: 'Eco-friendly gentle therapy — relaxation & circulation.' },
]

const benefits = [
  'Pain Relief & Muscle Recovery',
  'Blood Purification & Detox',
  'Improved Circulation',
  'Stress & Anxiety Relief',
  'Skin Conditions Treatment',
  'Migraine & Headache Relief',
  'Digestive Health Improvement',
  'Immune System Boost',
]

export default function CuppingPreview() {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-hero-grid opacity-100" />
      {/* Glow blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-gold-500/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left */}
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <p className="section-tag !text-gold-400 before:bg-gold-400 after:bg-gold-400">Ancient Sunnah Therapy</p>
            <h2 className="section-title-white mb-2">
              Cupping Therapy
              <span className="block text-gold-gradient">Hijama & More</span>
            </h2>

            {/* Hadith */}
            <div className="my-6 pl-4 border-l-2 border-gold-500/50">
              <p className="font-arabic text-lg text-gold-400 leading-loose">
                الحجامة سنة النبي ﷺ
              </p>
              <p className="text-slate-400 text-xs italic mt-1">
                "Hijama (cupping) is the Sunnah of the Prophet ﷺ" — Hadith
              </p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Dr. Abdul Moeed performs authentic, hygienic cupping sessions with sterile equipment.
              Wet cupping (Hijama), dry cupping, bamboo cups, glass cups, and Fusud — all available
              at the clinic or as home service.
            </p>

            {/* Type cards */}
            <div className="space-y-3 mb-8">
              {types.map((t, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay: i * 0.12 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors">
                  <div className={`w-10 h-10 ${t.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <t.icon className="text-white text-base" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{t.name}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <FaWhatsapp /> Book Hijama Session
              </a>
              <Link to="/cupping-therapy"
                className="btn-white border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.15 }}
            className="space-y-5">
            {/* Image mosaic — cupping cups on back only */}
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1745327883389-17150e99dcf7?w=450&q=80"
                alt="Hijama cupping glass cups on back"
                className="rounded-2xl w-full h-52 object-cover shadow-xl"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1762392050946-685f2dec9da7?w=450&q=80"
                alt="Cupping therapy marks on patient back"
                className="rounded-2xl w-full h-52 object-cover shadow-xl mt-7"
                style={{ objectPosition: 'center top' }}
                loading="lazy"
              />
            </div>

            {/* Benefits card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Health Benefits</p>
              <div className="grid grid-cols-2 gap-2.5">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-[13px]">
                    <FaCheckCircle className="text-gold-400/80 text-[10px] flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0 70 L0 35 Q360 0 720 28 Q1080 55 1440 10 L1440 70 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
