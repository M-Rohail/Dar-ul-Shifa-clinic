import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle, FaMapMarkerAlt, FaCar } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20need%20a%20home%20service%20visit%20from%20Dar-ul-Shifa%20Clinic.'

const features = [
  'Homeopathic consultation at home',
  'Hijama (wet cupping) at home',
  'Dry cupping — bamboo & glass cups',
  'Follow-up visits available',
  'Flexible timing on request',
  'Rawalpindi & surroundings',
]

export default function HomeServiceSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-2/5 h-full grid-dots opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Image */}
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.75 }}
            className="relative pt-8 pb-10 sm:pt-6 sm:pb-8">

            {/* Top badge */}
            <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
              transition={{ delay:0.65, type:'spring' }}
              className="absolute top-0 left-4 sm:left-6 bg-navy-gradient text-white rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-navy z-10">
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400">Clinic Quality</p>
              <p className="text-white text-xs">At Your Doorstep</p>
            </motion.div>

            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,16,64,0.12)] border border-slate-100">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="Home medical service kit"
                className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>

            {/* Floating review card — safe position on mobile */}
            <motion.div initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }}
              viewport={{ once:true }} transition={{ delay:0.5, type:'spring', stiffness:200 }}
              className="absolute bottom-0 right-0 sm:-bottom-2 sm:-right-4 bg-white rounded-2xl shadow-xl p-4 sm:p-5 max-w-[180px] sm:max-w-[200px] border border-slate-100">
              <FaCar className="text-navy-700 text-xl sm:text-2xl mb-1.5 sm:mb-2" />
              <p className="text-navy-900 font-heading font-bold text-sm">Home Visits</p>
              <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">Available 7 days across Rawalpindi</p>
              <div className="flex gap-0.5 mt-1.5 sm:mt-2">
                {[1,2,3,4,5].map(s => <MdStar key={s} className="text-gold-400 text-sm" />)}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.7, delay:0.15 }}>
            <p className="section-tag">Clinic At Your Door</p>
            <h2 className="section-title mb-3 sm:mb-4">
              Home Service
              <span className="block text-gold-gradient">Available in Rawalpindi</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Can't make it to the clinic? We come to you! Dr. Abdul Moeed provides professional
              homeopathic consultations and cupping therapy sessions at your home, with the same
              quality and care as our clinic — at your preferred time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay: i*0.07 }}
                  className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-navy-700 text-sm flex-shrink-0" />
                  <span className="text-slate-700 text-[13px] font-medium">{f}</span>
                </motion.div>
              ))}
            </div>

            {/* Area note */}
            <div className="flex items-start gap-3 p-3.5 sm:p-4 bg-navy-50 rounded-xl border border-navy-100 mb-6 sm:mb-8">
              <FaMapMarkerAlt className="text-navy-700 text-base mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-navy-800 font-semibold text-sm">Service Area</p>
                <p className="text-navy-600 text-[13px]">Rawalpindi, Chaklala Cantt. and surrounding areas</p>
              </div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-6 sm:px-8 py-3.5 sm:py-4 inline-flex w-full sm:w-auto justify-center sm:justify-start">
              <FaWhatsapp className="text-base" /> Book Home Visit on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
