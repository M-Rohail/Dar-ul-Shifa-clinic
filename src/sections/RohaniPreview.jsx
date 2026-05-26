import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaShieldAlt, FaHeart, FaMoon } from 'react-icons/fa'
import { GiScrollUnfurled } from 'react-icons/gi'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20need%20Rohani%20Ilaaj%20at%20Dar-ul-Shifa%20Clinic.'

const services = [
  { icon: GiScrollUnfurled, title: 'Quranic Healing',  desc: 'Ruqyah using authentic Quranic verses.' },
  { icon: FaMoon,           title: 'Nazar (Evil Eye)', desc: 'Protection & treatment from evil eye.' },
  { icon: FaHeart,          title: 'Emotional Healing', desc: 'Spiritual counseling for anxiety & grief.' },
  { icon: FaShieldAlt,      title: 'Spiritual Protection', desc: 'Wazaif & duas for general wellbeing.' },
]

export default function RohaniPreview() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #080c24 0%, #0c1545 35%, #0a1628 65%, #060d2a 100%)' }}>
      {/* Stars */}
      {Array.from({ length: 36 }).map((_, i) => (
        <motion.div key={i} className="absolute rounded-full bg-white pointer-events-none"
          style={{ top:`${Math.random()*100}%`, left:`${Math.random()*100}%`,
            width: Math.random()*2.5+0.5, height: Math.random()*2.5+0.5 }}
          animate={{ opacity: [0.15, 0.75, 0.15] }}
          transition={{ duration: 2.5+Math.random()*3, repeat: Infinity, delay: Math.random()*2 }} />
      ))}

      {/* Crescent */}
      <motion.div animate={{ rotate:[0,4,0] }} transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
        className="absolute top-12 right-16 text-[9rem] select-none pointer-events-none"
        style={{ color:'rgba(245,158,11,0.07)' }}>
        ☽
      </motion.div>

      {/* Blue glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.7 }}>
            <p className="section-tag !text-gold-400 before:bg-gold-400 after:bg-gold-400">Spiritual Healing</p>
            <h2 className="section-title-white mb-2">
              Rohani Ilaaj
              <span className="block text-gold-gradient font-arabic text-3xl mt-1">روحانی علاج</span>
            </h2>

            {/* Ayah */}
            <div className="my-7 bg-white/5 border border-gold-500/20 rounded-2xl p-6">
              <p className="font-arabic text-xl text-gold-400 text-center leading-loose mb-2">
                وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
              </p>
              <p className="text-slate-400 text-center text-xs italic">
                "And when I am ill, it is He who cures me." — Al-Quran 26:80
              </p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Dr. Abdul Moeed provides Rohani Ilaaj combining Quranic recitation, Islamic duas, and
              spiritual counseling. Completely confidential, compassionate care for spiritual, emotional,
              and psychological ailments.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {services.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, scale:0.92 }} whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }} transition={{ delay: i*0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors group">
                  <s.icon className="text-gold-400 text-xl mb-2.5 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold text-sm mb-1">{s.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <FaWhatsapp /> Get Rohani Ilaaj
              </a>
              <Link to="/rohani-ilaaj"
                className="border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:bg-gold-400/10
                           font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity:0, scale:0.92 }} whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true }} transition={{ duration:0.8, delay:0.2 }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=700&q=80"
                alt="Quran Islamic healing" className="w-full h-[440px] object-cover opacity-75" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-center">
                <p className="font-arabic text-2xl text-gold-400 mb-1">بسم الله الرحمن الرحيم</p>
                <p className="text-slate-300 text-xs">In the name of Allah, the Most Gracious, the Most Merciful</p>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0 70 L0 30 Q360 70 720 40 Q1080 10 1440 50 L1440 70 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
