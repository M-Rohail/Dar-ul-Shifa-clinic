import { motion } from 'framer-motion'
import { FaWhatsapp, FaShieldAlt, FaHeart, FaMoon } from 'react-icons/fa'
import { GiScrollUnfurled, GiMeditation } from 'react-icons/gi'
import { MdPrivacyTip } from 'react-icons/md'
import AppointmentCTA from '../sections/AppointmentCTA'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20need%20Rohani%20Ilaaj%20at%20Dar-ul-Shifa%20Clinic.'

const conditions = [
  { icon:FaShieldAlt,     title:'Nazar (Evil Eye)',       desc:'Protection & treatment from evil eye using Quranic verses and Islamic duas.' },
  { icon:GiScrollUnfurled,title:'Sihr (Black Magic)',     desc:'Ruqyah treatment for those afflicted by black magic using the Quran & Sunnah.' },
  { icon:FaMoon,          title:'Jinn Issues',             desc:'Islamic treatment for jinn-related problems as described in Quran & Hadith.' },
  { icon:FaHeart,         title:'Depression & Anxiety',   desc:'Spiritual counseling & healing for depression, anxiety, and emotional difficulty.' },
  { icon:GiMeditation,    title:'Family Disharmony',      desc:'Spiritual guidance & duas for improving family relationships and marital harmony.' },
  { icon:FaShieldAlt,     title:'General Protection',     desc:'Protective wazaif and duas for general wellbeing and peace of mind.' },
]

const verses = [
  { ar:'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ', tr:'"We send down of the Quran that which is a healing and a mercy to those who believe." — Al-Isra 17:82' },
  { ar:'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ',                                           tr:'"And when I am ill, it is He who cures me." — Ash-Shu\'ara 26:80' },
  { ar:'بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ',                       tr:'"In the name of Allah I perform Ruqyah on you, from every thing that harms you." — Hadith' },
]

export default function RohaniPage() {
  return (
    <>
      {/* Hero — starfield */}
      <div className="relative min-h-[520px] flex items-center overflow-hidden"
        style={{ background:'linear-gradient(150deg,#06091d 0%,#0c1545 40%,#0a1233 100%)' }}>
        {Array.from({length:50}).map((_,i) => (
          <motion.div key={i} className="absolute rounded-full bg-white pointer-events-none"
            style={{ top:`${Math.random()*100}%`, left:`${Math.random()*100}%`,
              width:Math.random()*2.5+0.5, height:Math.random()*2.5+0.5 }}
            animate={{ opacity:[0.1,0.8,0.1] }}
            transition={{ duration:2+Math.random()*3, repeat:Infinity, delay:Math.random()*2 }} />
        ))}
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center w-full">
          <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}>
            <div className="text-6xl mb-4 opacity-60">☽</div>
            <p className="section-tag justify-center !text-gold-400 before:bg-gold-400 after:bg-gold-400">Faith-Based Healing</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">Rohani Ilaaj</h1>
            <p className="font-arabic text-3xl text-gold-400 mb-5">روحانی علاج — شفاء بالقرآن</p>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
              Quranic healing and Islamic spiritual therapy by Dr. Abdul Moeed. Completely confidential and compassionate.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-9 py-4 inline-flex">
              <FaWhatsapp /> Get Rohani Ilaaj
            </a>
          </motion.div>
        </div>
      </div>

      {/* Quranic verses */}
      <section className="py-14 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {verses.map((v,i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.15 }}
                className="bg-white/5 border border-gold-500/15 rounded-2xl p-6 text-center">
                <p className="font-arabic text-lg text-gold-400 leading-loose mb-3">{v.ar}</p>
                <p className="text-slate-400 text-xs italic leading-relaxed">{v.tr}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="text-center mb-12">
            <p className="section-tag justify-center">Rohani Services</p>
            <h2 className="section-title">What We Help With</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((c,i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                className="p-6 rounded-2xl border border-indigo-100 bg-indigo-50 hover:bg-indigo-100 transition-colors group">
                <c.icon className="text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-navy-900 text-xl mb-2">{c.title}</h3>
                <p className="text-slate-600 text-[13px] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="text-center mb-12">
            <h2 className="section-title">Our Approach</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon:GiScrollUnfurled, title:'Quran-Based',         desc:'All treatments are strictly based on the Quran and authentic Hadith. We follow the Sunnah of the Prophet ﷺ.' },
              { icon:MdPrivacyTip,     title:'100% Confidential',   desc:'Your sessions and personal matters are completely private and confidential. We respect your privacy deeply.' },
              { icon:FaHeart,          title:'Compassionate Care',  desc:'Dr. Abdul Moeed approaches each case with empathy, understanding, and genuine concern for your wellbeing.' },
              { icon:FaShieldAlt,      title:'Safe & Authentic',    desc:'No superstitions. No innovations. Only authentic Islamic ruqyah and healing as prescribed by Islam.' },
            ].map((item,i) => (
              <motion.div key={i}
                initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="flex gap-4 p-5 bg-white rounded-2xl shadow-card border border-slate-100">
                <item.icon className="text-navy-700 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-navy-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            className="text-center mt-10">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-9 py-4 inline-flex">
              <FaWhatsapp /> Get Rohani Ilaaj — WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}
