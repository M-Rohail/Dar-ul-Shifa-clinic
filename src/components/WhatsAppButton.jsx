import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dar-ul-Shifa%20Clinic.'

export default function WhatsAppButton() {
  const [bubble, setBubble] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => { if (!closed) setBubble(true) }, 3500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat bubble */}
      <AnimatePresence>
        {bubble && !closed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            className="bg-white rounded-2xl shadow-2xl p-4 w-56 border border-slate-100 relative">
            <button onClick={() => { setClosed(true); setBubble(false) }}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 transition-colors">
              <HiX size={13} />
            </button>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow">
                <FaWhatsapp className="text-white text-sm" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-navy-900">Dr. Abdul Moeed</p>
                <p className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                  Available Now
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Assalamu Alaikum! Book an appointment or get a free consultation. 🌿
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[11px] font-semibold py-2 rounded-full transition-colors">
              Start Chat →
            </a>
            {/* Pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a href={WA} target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }}
        onMouseEnter={() => setBubble(true)}
        onMouseLeave={() => !closed && setTimeout(() => setBubble(false), 400)}
        className="relative w-[58px] h-[58px] bg-[#25D366] rounded-full flex items-center
                   justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] cursor-pointer"
        aria-label="Chat on WhatsApp">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <FaWhatsapp className="text-white text-[26px] relative z-10" />
      </motion.a>
    </div>
  )
}
