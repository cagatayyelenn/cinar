import { Facebook, Instagram, Linkedin, Twitter, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="bg-[var(--gradient-6)] text-slate-400 pt-24 pb-12 font-sans overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fa9700]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Col 1: Brand & About */}
          <div className="lg:pr-12">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-[#fa9700] rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-[#0f2851] font-black text-2xl">Ç</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none tracking-tighter">Çınar</span>
                <span className="text-amber-500 font-bold text-[10px] tracking-tight">Oto Klima</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-10 leading-relaxed font-light">
              Ticari araç klimaları ve ısıtıcı sistemlerinde uzman kadromuzla, güvenli ve orijinal yedek parça garantili servis hizmeti sunuyoruz.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#fa9700] hover:text-black hover:border-[#fa9700] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
 
          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-black text-xs tracking-tight mb-10">Hızlı bağlantılar</h3>
            <ul className="space-y-4">
              {[
                { label: 'Anasayfa', path: '/' },
                { label: 'Hakkımızda', path: '/hakkimizda' },
                { label: 'Yedek Parça', path: '/yedek-parca' },
                { label: 'Ürünlerimiz', path: '/urunlerimiz' },
                { label: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
                { label: 'İletişim', path: '/iletisim' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mr-4 group-hover:scale-150 group-hover:bg-amber-500 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Col 3: Services / Brands */}
          <div>
            <h3 className="text-white font-black text-xs tracking-tight mb-10">Yetkili servisler</h3>
            <ul className="space-y-4">
              {brands.map(brand => (
                <li key={brand.id}>
                  <Link to={`/${brand.id}-yetkili-servisi`} className="text-sm text-slate-400 hover:text-white transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mr-4 group-hover:scale-150 group-hover:bg-amber-500 transition-all"></span>
                    {brand.name} Servisi
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Col 4: Services */}
          <div>
            <h3 className="text-white font-black text-xs tracking-tight mb-10">Hizmetlerimiz</h3>
            <ul className="space-y-4">
              {[
                'Klima Montajı',
                'Isıtıcı Sistemleri',
                'Periyodik Bakım',
                'Gaz Dolumu',
                'Arıza Tespiti',
                'Yedek Parça Temini'
              ].map((service, i) => (
                <li key={i}>
                  <Link to="/hizmetlerimiz" className="text-sm text-slate-400 hover:text-white transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mr-4 group-hover:scale-150 group-hover:bg-amber-500 transition-all"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
        </div>
 
        {/* Bottom Alert Box */}
        <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
              <PhoneCall size={32} />
            </div>
            <div>
              <span className="text-white font-black text-lg block tracking-tight">Servis ve randevu talepleriniz için</span>
              <span className="text-slate-400 text-sm font-light">7/24 Kesintisiz Teknik Destek ve Randevu Hattı</span>
            </div>
          </div>
          <a href="tel:+905070485034" className="bg-[#fa9700] text-black px-10 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-xl shadow-orange-500/20">
            0507 048 50 34
          </a>
        </div>
 
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-[11px] font-bold tracking-tight text-slate-500">
          <p>© {new Date().getFullYear()} Çınar Oto Klima. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <Link to="/gizlilik" className="hover:text-amber-500 transition-colors">Gizlilik Politikası</Link>
            <Link to="/kullanim-kosullari" className="hover:text-amber-500 transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
 
      </div>
    </footer>
  );
}
