import { Link } from 'react-router-dom'
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock, FaLeaf } from 'react-icons/fa'
import { MdVerified, MdHealthAndSafety } from 'react-icons/md'
import Logo from './Logo'

const WA = 'https://wa.me/923415412125?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment.'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Decorative top strip */}
      <div className="h-1 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5">
            <Logo />
            <p className="text-slate-400 text-[13px] leading-relaxed mt-1">
              Providing authentic homeopathic care, cupping therapy, and spiritual healing
              since 1999. Your health, our mission.
            </p>
            {/* Registration badges */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 bg-navy-900 border border-navy-700 rounded-xl p-3">
                <MdHealthAndSafety className="text-gold-400 text-xl flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Punjab Healthcare Commission</p>
                  <p className="text-gold-400 text-[11px] font-bold tracking-wide">PHC Reg. No. R-90753</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-navy-900 border border-navy-700 rounded-xl p-3">
                <MdVerified className="text-gold-400 text-xl flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">National Council for Homoeopathy</p>
                  <p className="text-gold-400 text-[11px] font-bold tracking-wide">NCHP Reg. No. 116249</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-gold-500" /> Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ['Home', '/'],
                ['Our Services', '/services'],
                ['Cupping Therapy', '/cupping-therapy'],
                ['Rohani Ilaaj', '/rohani-ilaaj'],
                ['About Doctor', '/about'],
                ['Contact Us', '/contact'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link to={path}
                    className="text-[13px] text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-navy-600 group-hover:bg-gold-400 transition-colors flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-gold-500" /> Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Homeopathic Treatment',
                'Wet Cupping (Hijama)',
                'Dry Cupping Therapy',
                'Bamboo Cup Therapy',
                'Glass Cup Therapy',
                'Fusud (Phlebotomy)',
                'Rohani Ilaaj',
                'Home Service',
              ].map(s => (
                <li key={s} className="flex items-center gap-2 text-[13px] text-slate-400">
                  <FaLeaf className="text-gold-500/70 text-[10px] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-gold-500" /> Find Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-gold-400 text-sm mt-1 flex-shrink-0" />
                <p className="text-[13px] text-slate-400 leading-relaxed">
                  H.No. S/85, Chaklala Railway Scheme 1,<br />
                  Chaklala Cantt., Rawalpindi 46000, Pakistan
                </p>
              </div>
              <a href="tel:+923415412125"
                className="flex items-center gap-3 text-[13px] text-slate-400 hover:text-gold-400 transition-colors">
                <FaPhone className="text-gold-400 text-xs flex-shrink-0" />
                +92 341 5412125
              </a>
              <div className="flex gap-3">
                <FaClock className="text-gold-400 text-sm mt-0.5 flex-shrink-0" />
                <div className="text-[13px] text-slate-400">
                  <p className="text-slate-300 font-medium text-[12px] mb-1">Clinic Hours</p>
                  <p>Mon – Sat: 9:00 AM – 9:00 PM</p>
                  <p>Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-[13px]">
                <FaWhatsapp className="text-base" />
                WhatsApp Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-navy-800/60">
          <p className="text-[10px] text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="text-slate-500 font-semibold">Disclaimer:</span>{' '}
            The information and services provided by Dar-ul-Shifa Homoeopathic Clinic are intended for general
            wellness and complementary health support only. They do not replace the advice, diagnosis, or treatment
            of a qualified medical doctor. Results may vary by individual. Patients with serious or emergency medical
            conditions are advised to seek conventional medical care immediately. The clinic is not liable for any
            adverse outcomes arising from the use of its services without proper consultation.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-5 pt-5 border-t border-navy-800 flex flex-col items-center gap-2 text-center text-[11px] text-slate-500 md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Dar-ul-Shifa Homoeopathic Clinic. All rights reserved.</p>
          <p>Dr. Abdul Moeed · PHC <span className="text-gold-500">R-90753</span> · NCHP <span className="text-gold-500">116249</span></p>
          <p>Est. 1999 · Rawalpindi, Pakistan 🇵🇰</p>
        </div>
        <div className="mt-3 text-center text-[10px] text-slate-600">
          Developed by{' '}
          <a href="https://muhammadrohail.netlify.app" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-gold-400 transition-colors underline-offset-2 hover:underline">
            muhammadrohail.netlify.app
          </a>
        </div>
      </div>
    </footer>
  )
}
