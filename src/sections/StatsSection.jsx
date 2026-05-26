import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUserMd, FaUsers, FaAward, FaHome } from 'react-icons/fa'

const stats = [
  { icon: FaUserMd, value: 25,    suffix: '+', label: 'Years of Experience',  color: 'text-navy-900' },
  { icon: FaUsers,  value: 10000, suffix: '+', label: 'Patients Treated',     color: 'text-gold-600' },
  { icon: FaAward,  value: 100,   suffix: '%', label: 'Natural Remedies',     color: 'text-navy-900' },
  { icon: FaHome,   value: 500,   suffix: '+', label: 'Home Visits Done',     color: 'text-gold-600' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0; const step = (value / 1800) * 16
    const t = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(t) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(t)
  }, [inView, value])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 rounded-2xl overflow-hidden shadow-card border border-slate-100">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className={`relative text-center py-10 px-6 group
                ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}
                ${i < stats.length - 1 ? 'border-r border-slate-100' : ''}`}>
              {/* Icon bubble */}
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center
                group-hover:scale-110 transition-transform duration-300
                ${i % 2 === 0 ? 'bg-navy-50' : 'bg-gold-50'}`}>
                <s.icon className={`text-2xl ${s.color}`} />
              </div>
              <div className={`font-heading text-4xl md:text-5xl font-black ${s.color} mb-1`}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-slate-500 text-sm font-medium">{s.label}</p>
              {/* Bottom accent */}
              <div className={`absolute bottom-0 inset-x-0 h-0.5 transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 origin-left
                ${i % 2 === 0 ? 'bg-navy-900' : 'bg-gold-500'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
