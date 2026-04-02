import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="bg-black text-gray-400 text-xs py-3 hidden md:block border-b border-white/10 uppercase tracking-[0.15em] font-black">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-white" />
            <span>Pendik / İSTANBUL</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-white" />
            <span>Pzt - Cmt: 08:30 - 19:00</span>
          </div>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link>
          <Link to="/hizmetlerimiz" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
          <Link to="/yedek-parca" className="hover:text-white transition-colors">Yedek Parça</Link>
          <Link to="/iletisim" className="hover:text-white transition-colors">İletişim</Link>
        </nav>
      </div>
    </div>
  );
}
