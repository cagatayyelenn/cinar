import { Helmet } from 'react-helmet-async';
import { ChevronRight, Wind, Thermometer, Settings, Zap, Search, ShieldCheck, Wrench, Clock, ThumbsUp, ChevronDown, Rocket, Truck, Anchor, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services as mockServices } from '../data/mockData';

// Category Definitions
const categories = [
  { id: 'network', title: 'Marka Servis Ağı', description: 'Dünya markaları için yetkili servis güvencesi' },
  { id: 'climate', title: 'İklimlendirme Çözümleri', description: 'Isıtma ve soğutma sistemleri uzmanlığı' },
  { id: 'sectoral', title: 'Sektörel Uygulamalar', description: 'Karavan, marin ve ağır hizmet çözümleri' },
  { id: 'general', title: 'Genel Bakım ve Onarım', description: 'Periyodik kontroller ve teknik tamir' }
];

export default function Services() {
  const getIcon = (id: string) => {
    if (id.includes('bakim') || id.includes('servis')) return Settings;
    if (id.includes('onarim') || id.includes('tamir')) return Wrench;
    if (id.includes('isitma') || id.includes('isitici')) return Thermometer;
    if (id.includes('marin')) return Anchor;
    if (id.includes('tir') || id.includes('kamyon')) return Truck;
    if (id.includes('is-makinasi')) return HardHat;
    if (id.includes('elektrikli')) return Zap;
    return Wind;
  };

  const categorizedServices = {
    network: mockServices.filter(s => 
      s.id.includes('servis-agi') || 
      s.id.includes('-servis') || 
      (s.brandId !== 'general' && s.brandId !== 'other')
    ),
    climate: mockServices.filter(s => 
      s.brandId === 'general' && (
        s.id.includes('isitma') || 
        s.id.includes('isitici') ||
        s.id.includes('klima-sistemi') || 
        s.id.includes('elektrikli') ||
        s.id.includes('bagimsiz-klima')
      )
    ),
    sectoral: mockServices.filter(s => 
      s.brandId === 'general' && (
        s.id.includes('is-makinasi') || 
        s.id.includes('karavan') || 
        s.id.includes('marin') || 
        s.id.includes('tir') || 
        s.id.includes('kamyon')
      )
    ),
    general: mockServices.filter(s => 
      s.id.includes('oto-klima') || 
      s.id.includes('sogutma') || 
      s.id.includes('ticari-klima') ||
      s.id.includes('onarim') ||
      s.id.includes('tamiri') ||
      s.id.includes('servisi')
    )
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Uzman Hizmetler ve Çözümler | Çınar Oto Klima</title>
        <meta name="description" content="35'ten fazla uzman hizmetimizle; araç klima montajı, ısıtıcı sistemleri, karavan iklimlendirme ve ağır vasıta çözümleri sunuyoruz." />
      </Helmet>

      {/* Hero Section */}
      <div 
        className="pt-40 pb-24 relative"
        style={{ 
          background: 'linear-gradient(178deg, rgba(0, 0, 0, .2) -106.73%, rgba(41, 51, 236, .2) -14.51%, rgba(255, 157, 72, .2) 47.94%, rgba(237, 210, 173, .2) 75.02%)' 
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex items-center text-[10px] mb-12 font-black tracking-tight text-gray-400 breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight size={12} className="mx-3" />
            <span className="text-white uppercase">Hizmetlerimiz</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Uzman <br/><span className="text-gray-500/50 uppercase">hizmetler</span>
          </h1>
          <p className="text-gray-200 text-xl max-w-2xl leading-relaxed font-light">
            İstanbul'un en kapsamlı araç iklimlendirme kataloğu. 35'ten fazla uzmanlık alanıyla her türlü teknik ihtiyaca profesyonel yanıt.
          </p>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 animate-bounce-slow">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-24">
        {/* Categories Loop */}
        {categories.map((category) => {
          const catServices = categorizedServices[category.id as keyof typeof categorizedServices];
          if (!catServices || catServices.length === 0) return null;

          return (
            <div key={category.id} className="mb-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <div className="text-[10px] font-black tracking-[0.3em] text-orange-500 uppercase mb-4 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-orange-500"></span> {category.title}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                    {category.description}
                  </h2>
                </div>
                <div className="text-gray-400 font-mono text-sm">
                  {catServices.length} Hizmet Bulundu
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100">
                {catServices.map((service, index) => {
                  const Icon = getIcon(service.id);
                  return (
                    <Link 
                      to={`/${service.id}`}
                      key={service.id} 
                      className={`p-10 border-gray-100 transition-all duration-500 group hover:bg-black
                        ${index % 3 !== 2 ? 'lg:border-r' : ''} 
                        border-b
                      `}
                    >
                      <Icon className="mb-8 text-black group-hover:text-white transition-colors" size={32} strokeWidth={1} />
                      <h3 className="text-lg font-black mb-4 tracking-tight group-hover:text-white transition-colors uppercase leading-tight">
                        {service.name}
                      </h3>
                      <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed mb-8 text-xs font-medium">
                        {service.description.substring(0, 120)}...
                      </p>
                      <div className="flex items-center text-[10px] font-black tracking-widest text-orange-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        DETAYLARI İNCELE <ChevronRight size={12} className="ml-2" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* FEATURES - Sticky Sidebar List (From Home) */}
        <div className="mt-32">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <div className="font-mono text-black text-sm tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-black"></span> Avantajlar
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-[1.1] tracking-tight">
                Neden bizi <br/><span className="text-gray-400">tercih etmelisiniz?</span>
              </h2>
            </div>
            
            <div className="lg:w-2/3">
              <div className="flex flex-col border-t border-gray-200">
                {[
                  { icon: ShieldCheck, title: 'Yetkili Servis Güvencesi', desc: 'Dünya markalarının resmi yetkili servisi olarak garantili ve standartlara uygun hizmet.' },
                  { icon: Wrench, title: 'Orijinal Yedek Parça', desc: '%100 orijinal yedek parça kullanımı ile sistemlerinizde uzun ömürlü çözümler.' },
                  { icon: Clock, title: 'Hızlı ve Etkili Çözüm', desc: 'Ticari araçlarınızın zaman kaybını önlemek için en hızlı ve kesin onarım süreçleri.' },
                  { icon: ThumbsUp, title: 'Uzman Kadro', desc: 'Sürekli güncel eğitimler alan, alanında uzman ve sertifikalı teknisyen kadrosu.' }
                ].map((feature, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-gray-200 hover:bg-gray-50 transition-colors px-6 -mx-6">
                    <div className="font-mono text-4xl text-black group-hover:text-black transition-colors font-black">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-black mb-4 tracking-wide">{feature.title}</h3>
                      <p className="text-lg font-light leading-relaxed max-w-xl">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-black p-16 text-center shadow-2xl rounded-md">
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight leading-tight">
            Aracınız için <br/>randevu alın
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hizmetlerimiz hakkında detaylı bilgi almak veya servis randevusu oluşturmak için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/iletisim" className="bg-white text-black px-12 py-5 font-black tracking-tight text-xs hover:bg-gray-200 transition-colors">
              Randevu al
            </Link>
            <a href="tel:+905070485034" className="border border-gray-700 text-white px-12 py-5 font-black tracking-tight text-xs hover:border-white transition-colors">
              Hemen ara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
