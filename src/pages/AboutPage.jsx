import { motion } from 'framer-motion'
import { FaWhatsapp, FaAward, FaStar, FaGraduationCap, FaCheckCircle } from 'react-icons/fa'
import { MdVerified, MdHealthAndSafety } from 'react-icons/md'
import doctorImg from '../assets/doctor.png'
import AppointmentCTA from '../sections/AppointmentCTA'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%20Dr.%20Abdul%20Moeed%2C%20I%20would%20like%20to%20consult.'

const specialties = [
  'Chronic Disease Management','Pediatric Homeopathy',
  "Women's Health",'Mental & Emotional Health',
  'Hijama (Wet Cupping)','Dry & Bamboo Cupping',
  'Fusud (Phlebotomy)','Rohani Ilaaj',
  'Sports Injuries','Skin Conditions',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}>
            <p className="section-tag justify-center !text-gold-400 before:bg-gold-400 after:bg-gold-400">Meet Your Healer</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">Dr. Abdul Moeed</h1>
            <p className="font-arabic text-2xl text-gold-400 mb-3">طبيب هوموباثي — منذ ١٩٩٩</p>
            <p className="text-slate-300 text-sm">
              Homoeopathic Physician &amp; Cupping Therapist · PHC Reg. R-90753 · NCHP Reg. 116249
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 70 L1440 20 L1440 70 Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Doctor profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-gold-500 rounded-tl-2xl z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-[3px] border-r-[3px] border-navy-800 rounded-br-2xl z-10" />
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,16,64,0.18)] border-2 border-slate-100 bg-slate-50">
                <img src={doctorImg} alt="Dr. Abdul Moeed" className="w-full object-contain object-center" loading="lazy" />
              </div>

              {/* Floating badges */}
              <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
                transition={{ delay:0.5, type:'spring' }}
                className="absolute -top-5 -right-5 bg-navy-gradient rounded-2xl shadow-navy p-4 text-center border border-navy-700">
                <p className="font-heading text-4xl font-black text-white leading-none">25+</p>
                <p className="text-gold-400 text-[10px] font-bold uppercase tracking-wider mt-1">Years Exp.</p>
              </motion.div>

              <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
                transition={{ delay:0.65, type:'spring' }}
                className="absolute -bottom-5 left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
                <MdHealthAndSafety className="text-navy-800 text-2xl" />
                <div>
                  <p className="text-[10px] text-slate-400">Punjab Healthcare Commission</p>
                  <p className="text-navy-800 font-bold text-[12px]">PHC Reg. R-90753</p>
                  <p className="text-[10px] text-slate-400">NCHP Reg. 116249</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              className="space-y-6 mt-10 lg:mt-0">
              <div>
                <h2 className="font-heading text-4xl font-bold text-navy-950 mb-1">Dr. Abdul Moeed</h2>
                <p className="font-arabic text-lg text-gold-600 mb-2">طبيب هوموباثي متخصص</p>
                <p className="font-heading italic text-lg text-navy-600 font-semibold mb-4">Homoeopathic Physician & Cupping Therapist</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon:FaGraduationCap,   label:'Qualified Homeopath' },
                    { icon:FaAward,            label:'25+ Years' },
                    { icon:MdHealthAndSafety,  label:'PHC Registered' },
                    { icon:MdVerified,         label:'NCHP Registered' },
                    { icon:FaStar,             label:'Hijama Expert' },
                  ].map(b => (
                    <span key={b.label}
                      className="flex items-center gap-1.5 bg-navy-50 text-navy-700 text-[12px] font-semibold px-3 py-1.5 rounded-full border border-navy-100">
                      <b.icon className="text-[11px]" /> {b.label}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Dr. Abdul Moeed founded Dar-ul-Shifa Homoeopathic Clinic in 1999 with a vision to bring
                natural, affordable healing to Rawalpindi. With 25+ years of dedicated service, he has
                treated thousands of patients with compassion and expertise.
              </p>

              <p className="text-slate-600 leading-relaxed">
                His holistic approach combines classical homeopathy with traditional Islamic healing —
                Hijama, Fusud, bamboo & glass cupping, and Rohani Ilaaj. Dr. Moeed believes in treating
                the whole person: body, mind, and soul.
              </p>

              <div>
                <p className="text-navy-800 font-semibold text-xs uppercase tracking-wider mb-3">Areas of Expertise:</p>
                <div className="grid grid-cols-2 gap-2">
                  {specialties.map((sp, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600 text-[13px]">
                      <FaCheckCircle className="text-navy-600 text-[10px] flex-shrink-0" />
                      {sp}
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-gold-500 pl-4 bg-slate-50 rounded-r-xl py-3.5 pr-4">
                <p className="text-slate-600 italic text-sm leading-relaxed">
                  "Every patient who walks through our door deserves the best natural care. True healing
                  comes from Allah — we are only His means."
                </p>
                <footer className="text-gold-600 font-bold text-[13px] mt-2">— Dr. Abdul Moeed</footer>
              </blockquote>

              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex">
                <FaWhatsapp /> Book Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}
