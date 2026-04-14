import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const contactButtons = [
  {
    icon: <Phone size={24} />,
    href: 'tel:+905070485034',
    label: 'Ara',
    color: 'bg-[#fa9700]',
    textColor: 'text-black',
  },
  {
    icon: <MessageCircle size={24} />,
    href: 'https://wa.me/905070485034',
    label: 'WhatsApp',
    color: 'bg-[#25D366]',
    textColor: 'text-white',
  },
  {
    icon: <MapPin size={24} />,
    href: 'https://www.google.com/maps/dir//Çınar+Oto+Klima+Pendik+İstanbul',
    label: 'Konum',
    color: 'bg-[#4285F4]',
    textColor: 'text-white',
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 pointer-events-none">
      {contactButtons.map((btn, index) => (
        <motion.a
          key={index}
          href={btn.href}
          target={btn.href.startsWith('http') ? '_blank' : undefined}
          rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
          initial={{ opacity: 0, scale: 0.5, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.1 * index,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`pointer-events-auto w-14 h-14 rounded-full ${btn.color} ${btn.textColor} flex items-center justify-center shadow-lg shadow-black/20 hover:shadow-xl transition-shadow relative group`}
          title={btn.label}
        >
          {btn.icon}
          
          {/* Label Tooltip (Hidden by default, visible on hover) */}
          <span className="absolute right-16 px-2 py-1 rounded bg-black/80 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            {btn.label}
          </span>
          
          {/* Subtle Ring Animation */}
          <span className={`absolute inset-0 rounded-full animate-ping opacity-20 ${btn.color} -z-10`}></span>
        </motion.a>
      ))}
    </div>
  );
}
