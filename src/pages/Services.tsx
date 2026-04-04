import { Helmet } from 'react-helmet-async';
import { ChevronRight, Wind, Thermometer, Settings, Zap, Search, ShieldCheck, Wrench, Clock, ThumbsUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'klima-montaj',
    title: 'Klima montajı',
    description: 'Ticari araçlarınız için en uygun iklimlendirme çözümlerini, orijinal ekipmanlar ve uzman teknisyenlerimizle gerçekleştiriyoruz.',
    icon: Wind,
    features: ['Orijinal ekipman garantisi', 'Hızlı ve temiz işçilik', 'Sızdırmazlık testi']
  },
  {
    id: 'isitici-sistemleri',
    title: 'Isıtıcı sistemleri',
    description: 'Kış aylarında konforlu bir sürüş için Webasto ve Eberspächer gibi dünya markalarının ısıtıcı sistemleri montaj ve bakım hizmeti.',
    icon: Thermometer,
    features: ['Düşük yakıt tüketimi', 'Sessiz çalışma', 'Uzaktan kontrol seçenekleri']
  },
  {
    id: 'periyodik-bakim',
    title: 'Periyodik bakım',
    description: 'Sistemlerinizin ömrünü uzatmak ve verimliliğini artırmak için düzenli kontrol ve filtre değişim hizmetleri sunuyoruz.',
    icon: Settings,
    features: ['Filtre değişimi', 'Sistem temizliği', 'Performans ölçümü']
  },
  {
    id: 'gaz-dolumu',
    title: 'Gaz dolumu',
    description: 'Klima sistemlerinizin soğutma performansını korumak için hassas tartım ve vakum cihazlarıyla gaz dolumu yapıyoruz.',
    icon: Zap,
    features: ['Hassas tartım', 'Vakum testi', 'Kaçak kontrolü']
  },
  {
    id: 'ariza-tespiti',
    title: 'Arıza tespiti',
    description: 'Modern bilgisayarlı arıza tespit cihazlarımızla, sistemdeki sorunları hızlıca buluyor ve kalıcı çözümler üretiyoruz.',
    icon: Search,
    features: ['Bilgisayarlı diyagnoz', 'Elektriksel kontrol', 'Mekanik inceleme']
  },
  {
    id: 'yedek-parca',
    title: 'Yedek parça',
    description: 'Yılkar, Safkar ve Webasto gibi markaların %100 orijinal yedek parçalarını stoktan hızlıca temin ediyoruz.',
    icon: ShieldCheck,
    features: ['Geniş stok', 'Orijinal parça garantisi', 'Uygun fiyat']
  }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Hizmetlerimiz | Çınar Oto Klima</title>
        <meta name="description" content="Ticari araç klima montajı, ısıtıcı sistemleri, periyodik bakım ve orijinal yedek parça hizmetlerimizle İstanbul'da yanınızdayız." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-white pt-40 pb-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center text-[10px] mb-12 font-black tracking-tight breadcrumb">
            <Link to="/" className="transition-colors">Anasayfa</Link>
            <ChevronRight size={12} className="mx-3" />
            <span>Hizmetlerimiz</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] mb-8">
            Uzman <br/><span className="text-gray-200">hizmetler</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed font-light">
            Ticari araç iklimlendirme dünyasında, teknik mükemmellik ve müşteri memnuniyetini bir araya getiren profesyonel çözümler sunuyoruz.
          </p>
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce-slow">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-24">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`p-12 border-gray-100 transition-all duration-500 group hover:bg-black
                ${index % 3 !== 2 ? 'lg:border-r' : ''} 
                ${index < 3 ? 'lg:border-b' : ''}
                ${index % 2 !== 1 ? 'md:border-r lg:md:border-r-0' : ''}
                ${index < 4 ? 'md:border-b lg:md:border-b-0' : ''}
                border-b md:border-b lg:border-b-0
              `}
            >
              <service.icon className="mb-8 text-black group-hover:text-white transition-colors" size={40} strokeWidth={1} />
              <h3 className="text-xl font-black mb-4 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed mb-8 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-[10px] font-bold text-gray-400 tracking-widest group-hover:text-gray-500 transition-colors">
                    <div className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover:bg-gray-600"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
        <div className="mt-32 bg-black p-16 text-center shadow-2xl rounded-[3rem]">
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
