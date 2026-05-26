import { motion } from 'framer-motion'
import { FaWhatsapp, FaAward, FaStar, FaGraduationCap, FaCheckCircle } from 'react-icons/fa'
import { MdVerified, MdHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router-dom'
import doctorImg from '../assets/doctor.png'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%20Dr.%20Abdul%20Moeed%2C%20I%20would%20like%20to%20book%20a%20consultation.'

const credentials = [
  { icon: FaGraduationCap,  text: 'Qualified Homeopathic Physician' },
  { icon: MdHealthAndSafety,text: 'PHC Reg. No. R-90753' },
  { icon: MdVerified,       text: 'NCHP Reg. No. 116249' },
  { icon: FaAward,          text: '25+ Years of Practice' },
  { icon: FaStar,           text: 'Expert in Hijama & Cupping' },
  { icon: FaCheckCircle,    text: 'Rohani Ilaaj Specialist' },
]

export default function DoctorSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="doctor">
      {/* Dot pattern */}
      <div className="absolute inset-0 grid-dots opacity-40" />
      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Doctor image */}
          <motion.div initial={{ opacity:0, scale:0.92, x:-30 }} whileInView={{ opacity:1, scale:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.8 }}
            className="relative pt-6 pb-10 sm:pt-8 sm:pb-12">

            {/* Frame corners — hidden on very small to avoid overflow */}
            <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-t-[3px] border-l-[3px] border-gold-500 rounded-tl-2xl z-10" />
            <div className="absolute bottom-4 right-0 w-16 sm:w-20 h-16 sm:h-20 border-b-[3px] border-r-[3px] border-navy-900 rounded-br-2xl z-10" />

            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,16,64,0.2)] border-2 border-slate-100">
              <img src={doctorImg} alt="Dr. Abdul Moeed — Dar-ul-Shifa Homoeopathic Clinic"
                className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-top" loading="lazy" />
            </div>

            {/* Experience badge — repositioned for mobile */}
            <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
              transition={{ delay:0.5, type:'spring', stiffness:220 }}
              className="absolute top-0 right-0 sm:-top-5 sm:-right-5 bg-navy-gradient rounded-2xl shadow-navy p-3 sm:p-5 text-center border border-navy-700">
              <p className="font-heading text-3xl sm:text-4xl font-black text-white leading-none">25+</p>
              <p className="text-gold-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mt-1">Years Exp.</p>
            </motion.div>

            {/* PHC badge — repositioned for mobile */}
            <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
              transition={{ delay:0.65, type:'spring', stiffness:220 }}
              className="absolute bottom-0 left-0 sm:left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border border-slate-100 max-w-[90%] sm:max-w-none">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MdHealthAndSafety className="text-navy-800 text-xl sm:text-2xl" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Punjab Healthcare Commission</p>
                <p className="text-navy-800 font-bold text-[12px] sm:text-[13px]">PHC Reg. R-90753</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400">NCHP Reg. 116249</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.7, delay:0.15 }} className="space-y-5">

            <div>
              <p className="section-tag">Meet Your Healer</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-1">
                Dr. Abdul Moeed
              </h2>
              <p className="font-arabic text-lg text-gold-600 mb-2">طبيب هوموباثي متخصص — منذ ١٩٩٩</p>
              <p className="font-heading italic text-base sm:text-lg text-navy-600 font-semibold">
                Homoeopathic Physician & Cupping Therapist
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dr. Abdul Moeed founded Dar-ul-Shifa Homoeopathic Clinic in 1999 with a vision to provide
              natural, effective, and affordable healing. Over 25 years he has treated thousands of patients
              with compassion, expertise, and a holistic approach.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              He specialises in classical homeopathy, Hijama (wet cupping), dry cupping with bamboo &amp;
              glass cups, Fusud (phlebotomy), and Rohani Ilaaj — treating body, mind, and soul together.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-2">
              {credentials.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-navy-50 border border-navy-100">
                  <c.icon className="text-navy-700 text-xs sm:text-sm flex-shrink-0" />
                  <span className="text-navy-800 text-[11px] sm:text-[12px] font-medium leading-tight">{c.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative pl-4 sm:pl-5 border-l-4 border-gold-500 bg-slate-50 rounded-r-xl py-3 sm:py-4 pr-3 sm:pr-4">
              <p className="text-slate-600 italic text-xs sm:text-sm leading-relaxed">
                "My mission is to heal naturally. Every patient deserves personalised care with the best of
                homeopathic medicine and traditional therapies."
              </p>
              <footer className="text-gold-600 font-bold text-[12px] sm:text-[13px] mt-2">— Dr. Abdul Moeed</footer>
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                <FaWhatsapp /> Consult Doctor
              </a>
              <Link to="/about" className="btn-outline text-sm">Full Profile</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
