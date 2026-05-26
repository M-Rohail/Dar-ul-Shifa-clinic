import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import { MdVerified, MdHealthAndSafety } from 'react-icons/md'
import AppointmentCTA from '../sections/AppointmentCTA'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dar-ul-Shifa%20Clinic.'

const quickMsgs = [
  { label:'Book Appointment',           msg:'I would like to book an appointment.' },
  { label:'Cupping / Hijama Enquiry',   msg:'I would like to enquire about Cupping/Hijama therapy.' },
  { label:'Home Service Request',       msg:'I need home service for cupping/homeopathy.' },
  { label:'Rohani Ilaaj',               msg:'I need Rohani Ilaaj. Please advise.' },
  { label:'Homeopathy Consultation',    msg:'I need a homeopathic consultation for my condition.' },
  { label:'Price Enquiry',              msg:'I would like to know the service prices.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}>
            <p className="section-tag justify-center !text-gold-400 before:bg-gold-400 after:bg-gold-400">Get In Touch</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-2">Contact Us</h1>
            <p className="font-arabic text-2xl text-gold-400 mb-4">تواصل معنا</p>
            <p className="text-slate-300 text-base">Book via WhatsApp — Quick, Easy, No Waiting.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 70 L1440 20 L1440 70 Z" fill="white"/>
          </svg>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left: WhatsApp */}
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <h2 className="section-title mb-3">Book via WhatsApp</h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                The simplest way to book an appointment is via WhatsApp.
                Dr. Abdul Moeed or his team will respond promptly.
              </p>

              {/* Quick message buttons */}
              <p className="text-navy-800 font-semibold text-xs uppercase tracking-wider mb-4">
                Quick Message — Tap to Send:
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
                {quickMsgs.map((m, i) => (
                  <motion.a key={i}
                    href={`https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20${encodeURIComponent(m.msg)}`}
                    target="_blank" rel="noopener noreferrer"
                    initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }} transition={{ delay: i*0.06 }}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl border border-green-200 bg-green-50
                               hover:bg-[#25D366] hover:text-white hover:border-transparent
                               transition-all duration-200 text-[13px] text-slate-700 font-medium group">
                    <FaWhatsapp className="text-[#25D366] group-hover:text-white flex-shrink-0 text-base" />
                    {m.label}
                  </motion.a>
                ))}
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm py-4">
                <FaWhatsapp className="text-base" /> Open WhatsApp Chat
              </a>
            </motion.div>

            {/* Right: Info */}
            <motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              className="space-y-4">
              {/* Address */}
              <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-navy-700 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-900 text-lg mb-1">Clinic Location</h4>
                    <p className="text-slate-700 leading-relaxed text-[13px]">
                      H.No. S/85, Chaklala Railway Scheme 1,<br />
                      Chaklala Cantt., Rawalpindi 46000, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-green-700 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-green-900 text-lg mb-0.5">Phone & WhatsApp</h4>
                    <a href="tel:+923415412125" className="text-slate-700 text-lg font-bold hover:text-green-700 transition-colors">
                      +92 341 5412125
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">WhatsApp available for quick appointments</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-gold-50 border border-gold-100">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-gold-700 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-800 text-lg mb-2.5">Clinic Hours</h4>
                    <div className="space-y-1 text-[13px]">
                      <div className="flex justify-between gap-8">
                        <span className="text-slate-600">Monday – Saturday</span>
                        <span className="text-gold-700 font-semibold">9:00 AM – 9:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-slate-600">Sunday</span>
                        <span className="text-gold-700 font-semibold">10:00 AM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5">
                    <MdHealthAndSafety className="text-navy-700 text-2xl flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400">Punjab Healthcare Commission</p>
                      <p className="text-navy-800 font-bold text-[12px]">PHC Reg. R-90753</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MdVerified className="text-navy-700 text-2xl flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400">National Council for Homoeopathy</p>
                      <p className="text-navy-800 font-bold text-[12px]">NCHP Reg. 116249</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  )
}
