import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLeaf, FaTint, FaWind, FaHome, FaSyringe, FaArrowRight } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import { MdArrowOutward } from 'react-icons/md'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20service.'

const services = [
  {
    icon:  FaLeaf,
    title: 'Homeopathic Treatment',
    urdu:  'علاج مثلی',
    desc:  'Complete homeopathic care for chronic & acute diseases using potentized natural remedies. Safe for all ages.',
    link:  '/services',
    img:   'https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?w=500&q=80',
    accent:'from-navy-900 to-navy-700',
  },
  {
    icon:  FaTint,
    title: 'Wet Cupping — Hijama',
    urdu:  'الحجامة',
    desc:  'Authentic Sunnah-based wet cupping for deep detoxification & blood purification. Sterile, safe technique.',
    link:  '/cupping-therapy',
    img:   'https://images.unsplash.com/photo-1745327883389-17150e99dcf7?w=500&q=80',
    accent:'from-red-800 to-red-600',
  },
  {
    icon:  FaWind,
    title: 'Dry Cupping Therapy',
    urdu:  'الحجامة الجافة',
    desc:  'Therapeutic dry cupping with premium bamboo & glass cups for muscle relief and circulation.',
    link:  '/cupping-therapy',
    img:   'https://images.unsplash.com/photo-1740689593879-b44e3eeaef31?w=500&q=80',
    accent:'from-amber-700 to-amber-500',
  },
  {
    icon:  GiMeditation,
    title: 'Rohani Ilaaj',
    urdu:  'روحانی علاج',
    desc:  'Faith-based Quranic healing, ruqyah, and spiritual counseling. Confidential & compassionate care.',
    link:  '/rohani-ilaaj',
    img:   'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=500&q=80',
    accent:'from-purple-900 to-purple-700',
  },
  {
    icon:  FaSyringe,
    title: 'Fusud — Phlebotomy',
    urdu:  'الفصد',
    desc:  'Traditional Islamic Fusud (bloodletting) therapy performed under expert supervision for specific conditions.',
    link:  '/services',
    img:   'https://i0.wp.com/myjjhi.net/wp-content/uploads/2022/07/190121613_5552436514827002_5411569809887967382_n.jpg?resize=500%2C333&ssl=1',
    accent:'from-rose-800 to-rose-600',
  },
  {
    icon:  FaHome,
    title: 'Home Service',
    urdu:  'خدمة منزلية',
    desc:  'Professional homeopathic consultation & cupping therapy at your home across Rawalpindi.',
    link:  '/contact',
    img:   'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&q=80',
    accent:'from-teal-800 to-teal-600',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="max-w-2xl mb-16">
          <p className="section-tag">What We Offer</p>
          <h2 className="section-title mb-4">
            Comprehensive<br />
            <span className="text-gold-gradient">Healing Services</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From classical homeopathy to Sunnah-based cupping and spiritual healing —
            holistic care rooted in tradition, backed by 25+ years of expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:36 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:'-40px' }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400">

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-80`} />
                {/* Icon + urdu */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="w-11 h-11 bg-white/15 border border-white/25 rounded-xl
                                  flex items-center justify-center backdrop-blur-sm">
                    <s.icon className="text-white text-lg" />
                  </div>
                  <p className="font-arabic text-white/80 text-base">{s.urdu}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-2 group-hover:text-navy-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-3">
                  <Link to={s.link}
                    className="inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900 font-semibold text-[13px] transition-colors group/lnk">
                    Learn More <MdArrowOutward className="group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-slate-200 text-xs">|</span>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="text-[#25D366] hover:text-green-700 font-semibold text-[13px] transition-colors">
                    Book Now
                  </a>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r ${s.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          className="mt-12 text-center">
          <Link to="/services" className="btn-navy text-sm px-9 py-4">
            View All Services <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
