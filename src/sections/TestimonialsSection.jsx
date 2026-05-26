import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const reviews = [
  { initials:'MA', name:'Muhammad Asim',   city:'Rawalpindi',     rating:5, service:'Cupping Therapy',       color:'bg-navy-800',    text:'Alhamdulillah! Suffering from chronic back pain for years. After just 3 cupping sessions with Dr. Abdul Moeed I feel 80% better. His expertise is amazing!' },
  { initials:'FB', name:'Fatima Bibi',     city:'Chaklala Cantt.',rating:5, service:'Homeopathic Treatment',  color:'bg-gold-600',    text:"Dr. Moeed's homeopathic treatment cured my daughter's chronic allergies when other doctors failed. We are so grateful. Highly recommended!" },
  { initials:'TM', name:'Tariq Mahmood',   city:'Rawalpindi',     rating:5, service:'Home Service',           color:'bg-teal-700',    text:'I had the home service done. The team was very professional and the Hijama session at home was perfect. MashaAllah, outstanding service!' },
  { initials:'SN', name:'Saira Nawaz',     city:'PWD Colony',     rating:5, service:'Rohani Ilaaj',           color:'bg-purple-800',  text:'I visited for Rohani Ilaaj and was amazed by Dr. Moeed\'s knowledge. His approach is caring, Islamic, and very effective. Highly recommend!' },
  { initials:'KI', name:'Khalid Iqbal',    city:'Chaklala',       rating:5, service:'Homeopathic Treatment',  color:'bg-rose-700',    text:'Best homeopathic doctor in Rawalpindi. Treated my diabetes complications naturally. Very affordable and caring. 25 years of experience really shows!' },
  { initials:'RB', name:'Rukhsana Begum',  city:'Scheme 1',       rating:5, service:'Bamboo Cup Therapy',     color:'bg-emerald-700', text:'Bamboo cup therapy was new to me but Dr. Moeed explained everything so well. It worked wonderfully for my shoulder pain. JazakAllah Khair!' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center sm:text-left max-w-2xl mb-10 sm:mb-16">
          <p className="section-tag sm:justify-start justify-center">Patient Reviews</p>
          <h2 className="section-title">
            What Our <span className="text-gold-gradient">Patients Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i*0.08, duration:0.55 }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-card
                         hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <FaQuoteLeft className="text-slate-100 text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:text-slate-200 transition-colors" />

              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <FaStar key={s} className="text-gold-400 text-sm" />
                ))}
              </div>

              <p className="text-slate-600 text-[13px] leading-relaxed mb-3 sm:mb-4">"{r.text}"</p>

              <span className="inline-block bg-navy-50 text-navy-700 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4 sm:mb-5">
                {r.service}
              </span>

              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-slate-100">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 ${r.color} rounded-full flex items-center justify-center text-white font-bold text-[12px] sm:text-[13px] flex-shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-navy-900 font-semibold text-sm">{r.name}</p>
                  <p className="text-slate-400 text-[11px]">{r.city}</p>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-5 h-0.5 bg-gradient-to-r from-navy-800 to-gold-400
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
