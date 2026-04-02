import { Facebook, Instagram, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-slate-300 pt-20 pb-8 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mb-16">
          
          {/* Col 1: Brand & About */}
          <div className="lg:pr-12 lg:border-r border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#ffc107] rounded-lg flex items-center justify-center">
                <span className="text-[#0f2851] font-black text-xl">Ç</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none tracking-tight">ÇINAR</span>
                <span className="text-[#ffc107] font-semibold text-xs tracking-widest">OTO KLİMA</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Ticari araç klimaları ve ısıtıcı sistemlerinde uzman kadromuzla, güvenli ve orijinal yedek parça garantili servis hizmeti sunuyoruz.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:px-12 lg:border-r border-white/10">
            <h3 className="text-white font-bold text-base mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3.5">
              <li><Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Anasayfa</Link></li>
              <li><Link to="/hakkimizda" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Hakkımızda</Link></li>
              <li><Link to="/yedek-parca" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Yedek Parça</Link></li>
              <li><Link to="/urunlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Ürünlerimiz</Link></li>
              <li><Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Hizmetlerimiz</Link></li>
              <li><Link to="/iletisim" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>İletişim</Link></li>
            </ul>
          </div>

          {/* Col 3: Services / Brands */}
          <div className="lg:px-12 lg:border-r border-white/10">
            <h3 className="text-white font-bold text-base mb-6">Yetkili Servisler</h3>
            <ul className="space-y-3.5">
              {brands.map(brand => (
                <li key={brand.id}>
                  <Link to={`/servis/${brand.id}`} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center">
                    <span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>
                    {brand.name} Servisi
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="lg:pl-12">
            <h3 className="text-white font-bold text-base mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3.5">
              <li><Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Klima Montajı</Link></li>
              <li><Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Isıtıcı Sistemleri</Link></li>
              <li><Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Periyodik Bakım</Link></li>
              <li><Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Gaz Dolumu</Link></li>
              <li><Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Arıza Tespiti</Link></li>
              <li><Link to="/yedek-parca" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-slate-500 mr-3"></span>Yedek Parça Temini</Link></li>
            </ul>
          </div>

        </div>

        {/* Middle Section: Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-white/5 mb-10">
          <div className="flex items-center justify-center gap-3 text-sm text-white font-medium">
            <CheckCircle2 size={18} className="text-emerald-400" />
            %100 Orijinal Parça
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-white font-medium">
            <CheckCircle2 size={18} className="text-emerald-400" />
            Yetkili Servis Güvencesi
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-white font-medium">
            <CheckCircle2 size={18} className="text-emerald-400" />
            Uzman Teknisyenler
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-white font-medium">
            <CheckCircle2 size={18} className="text-emerald-400" />
            Hızlı Teknik Destek
          </div>
        </div>

        {/* Bottom Alert Box */}
        <div className="bg-white/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left mb-12 border border-white/5">
          <span className="text-white font-medium text-sm md:text-base">Servis ve randevu talepleriniz için:</span>
          <span className="text-slate-400 text-sm md:text-base">Lütfen <strong className="text-white">0507 048 50 34</strong> numaralı telefonu arayın veya servis noktamıza gelin.</span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Çınar Oto Klima. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <span className="w-px h-3 bg-slate-600"></span>
            <Link to="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
