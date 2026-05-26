import { motion } from 'framer-motion'
import { FaWhatsapp, FaLeaf, FaTint, FaWind, FaHome, FaSyringe, FaCheckCircle } from 'react-icons/fa'
import { GiMeditation, GiBamboo } from 'react-icons/gi'
import AppointmentCTA from '../sections/AppointmentCTA'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20enquire%20about%20a%20service.'

const services = [
  { icon:FaLeaf,       title:'Homeopathic Treatment',     arabic:'علاج مثلی',
    img:'https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?w=700&q=80',       // mortar & pestle — no people
    color:'from-navy-800 to-navy-600',
    desc:'Dr. Abdul Moeed provides comprehensive homeopathic treatment using highly potentized natural remedies. Safe, gentle, and effective for all ages.',
    list:['Chronic diseases (diabetes, hypertension)','Skin conditions (eczema, psoriasis)','Digestive disorders','Respiratory issues','Joint pain & arthritis','Child health issues','Hormonal disorders','Anxiety & depression'] },
  { icon:FaTint,       title:'Wet Cupping — Hijama',      arabic:'الحجامة',
    img:'https://images.unsplash.com/photo-1745327883389-17150e99dcf7?w=700&q=80',       // glass cups on back — hijama
    color:'from-red-800 to-red-600',
    desc:'Authentic Sunnah-based wet cupping for deep detoxification. Sterile single-use equipment under hygienic conditions.',
    list:['Blood purification & detox','Hypertension control','Migraine & headaches','Back & shoulder pain','Diabetes management','Immune system boost','Skin diseases','Fertility support'] },
  { icon:FaWind,       title:'Dry Cupping Therapy',       arabic:'الحجامة الجافة',
    img:'https://images.unsplash.com/photo-1740689593879-b44e3eeaef31?w=700&q=80',       // man spa back massage / dry cupping
    color:'from-amber-700 to-amber-500',
    desc:'Non-invasive dry cupping to promote circulation, relieve muscle tension and stimulate lymphatic drainage. Glass and bamboo cups available.',
    list:['Muscle pain & tension','Sports injuries','Lymphatic drainage','Relaxation & stress','Fibromyalgia','Cellulite reduction','Poor circulation','Respiratory conditions'] },
  { icon:GiBamboo,     title:'Bamboo Cup Therapy',        arabic:'كؤوس البامبو',
    img:'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?w=700&q=80',       // cupping marks on athlete back
    color:'from-teal-800 to-teal-600',
    desc:'Eco-friendly bamboo cup therapy — a gentle alternative to glass cupping with unique therapeutic properties.',
    list:['Gentle muscle relaxation','Skin rejuvenation','Anti-aging benefits','Natural detoxification','Chronic fatigue','Insomnia treatment','Circulation improvement','Overall wellness'] },
  { icon:FaSyringe,    title:'Fusud — Phlebotomy',        arabic:'الفصد',
    img:'https://i0.wp.com/myjjhi.net/wp-content/uploads/2022/07/190121613_5552436514827002_5411569809887967382_n.jpg?resize=640%2C428&ssl=1',
    color:'from-rose-800 to-rose-600',
    desc:'Traditional Islamic Fusud (bloodletting) therapy performed under expert supervision for specific health conditions.',
    list:['Polycythemia treatment','High iron levels','Cardiovascular health','Tibb-e-Nabawi practice','Blood pressure management','Specific chronic conditions'] },
  { icon:GiMeditation, title:'Rohani Ilaaj',               arabic:'روحانی علاج',
    img:'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=700&q=80',       // Quran / Islamic
    color:'from-purple-900 to-purple-700',
    desc:'Faith-based Quranic healing, Islamic duas, and spiritual counseling. Compassionate Rohani Ilaaj for spiritual & psychological ailments.',
    list:['Nazar (Evil Eye)','Spiritual anxiety & fear','Depression & hopelessness','Family harmony issues','Psychological ailments','Spiritual blockages','General wellness dua','Ruqyah treatment'] },
  { icon:FaHome,       title:'Home Service',               arabic:'خدمة منزلية',
    img:'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=700&q=80',       // mosque / Islamic architecture
    color:'from-navy-800 to-navy-700',
    desc:"Can't visit? We come to you! Professional home visits for homeopathic consultations and cupping therapy across Rawalpindi.",
    list:['Elderly & disabled patients','Post-operative patients','Busy schedules','Complete cupping at home','Follow-up treatments','Flexible scheduling','Rawalpindi coverage','Same quality as clinic'] },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}>
            <p className="section-tag justify-center !text-gold-400 before:bg-gold-400 after:bg-gold-400">Complete Healing Services</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">Our Services</h1>
            <p className="font-arabic text-xl sm:text-2xl text-gold-400 mb-4">خدمات دار الشفاء</p>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Comprehensive homeopathic care, cupping therapy, spiritual healing & home service since 1999.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 70 L1440 20 L1440 70 Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Services list */}
      <div className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
          {services.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.65 }}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${i%2===1?'lg:grid-flow-col-dense':''}`}>

              {/* Image */}
              <div className={`relative pb-4 ${i%2===1?'lg:col-start-2':''}`}>
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,16,64,0.12)]">
                  <img src={s.img} alt={s.title} className="w-full h-[240px] sm:h-[320px] object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-25`} />
                </div>
                {/* Icon badge — positioned inside image area to avoid overflow */}
                <div className={`absolute bottom-0 ${i%2===1?'right-4':'left-4'} w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${s.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl`}>
                  <s.icon className="text-white text-lg sm:text-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className={i%2===1?'lg:col-start-1 lg:row-start-1':''}>
                <p className="section-tag">Service {i+1}</p>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-navy-950 mb-1">{s.title}</h2>
                <p className="font-arabic text-lg sm:text-xl text-gold-600 mb-3 sm:mb-4">{s.arabic}</p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">{s.desc}</p>
                <p className="text-navy-800 font-semibold text-xs uppercase tracking-wider mb-3">Benefits / Conditions Treated:</p>
                <div className="grid grid-cols-2 gap-2 mb-5 sm:mb-6">
                  {s.list.map((c,ci) => (
                    <div key={ci} className="flex items-start gap-2 text-slate-600 text-[12px] sm:text-[13px]">
                      <FaCheckCircle className="text-navy-600 text-[10px] mt-0.5 flex-shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp text-sm w-full sm:w-auto justify-center sm:justify-start">
                  <FaWhatsapp /> Book This Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AppointmentCTA />
    </>
  )
}
