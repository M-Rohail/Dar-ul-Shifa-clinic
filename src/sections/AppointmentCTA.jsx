import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dar-ul-Shifa%20Clinic.'

const info = [
  { icon: FaMapMarkerAlt, title: 'Clinic Address',
    text: 'H.No. S/85, Chaklala Railway Scheme 1,\nChaklala Cantt., Rawalpindi, 46000' },
  { icon: FaClock, title: 'Clinic Hours',
    text: 'Mon–Sat: 9:00 AM – 9:00 PM\nSunday: 10:00 AM – 6:00 PM' },
  { icon: FaPhone, title: 'Phone & WhatsApp',
    text: '+92 341 5412125\nWhatsApp for fast response' },
]

export default function AppointmentCTA() {
  return (
    <section className="py-16 sm:py-24 bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                      rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <motion.div animate={{ rotate:360 }} transition={{ duration:40, repeat:Infinity, ease:'linear' }}
        className="absolute top-10 right-10 w-40 sm:w-64 h-40 sm:h-64 border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <p className="section-tag justify-center !text-gold-400 before:bg-gold-400 after:bg-gold-400 mb-3">
            Book Your Appointment
          </p>
          <h2 className="section-title-white mb-4">
            Ready to Start Your<br />
            <span className="text-gold-gradient">Healing Journey?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
            Contact Dr. Abdul Moeed via WhatsApp for appointments, queries, or home service.
            Fast response, compassionate care.
          </p>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
            {info.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i*0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors">
                <item.icon className="text-gold-400 text-lg sm:text-xl mx-auto mb-2 sm:mb-3" />
                <h4 className="text-white font-semibold text-sm mb-1 sm:mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs whitespace-pre-line leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div initial={{ opacity:0, scale:0.92 }} whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true }} transition={{ delay:0.3, type:'spring' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white
                         font-bold text-sm sm:text-base px-6 sm:px-12 py-4 sm:py-5 rounded-full w-full sm:w-auto
                         shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)]
                         transition-all duration-300 hover:-translate-y-1">
              <FaWhatsapp className="text-xl sm:text-2xl" />
              Book Appointment on WhatsApp
            </a>
            <p className="text-slate-500 text-xs mt-4 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Typically responds within minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
