import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Wrench, ShieldCheck, Clock, ThumbsUp, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands, services } from '../data/mockData';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mainBrands = brands.filter(b => b.id !== 'yedek-parca');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainBrands.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [mainBrands.length]);

  return (
    <div className="bg-[#F8F9FA]">
      <Helmet>
        <title>Çınar Oto Klima | Isıtma, Soğutma ve Yetkili Servis Hizmetleri</title>
        <meta name="description" content="Çınar Oto Klima; Webasto, Yılkar, Climart, Coolman ve Delphi yetkili servisidir. Oto klima tamiri, kalorifer onarımı ve araç iklimlendirme çözümleri sunuyoruz." />
        <meta name="keywords" content="oto klima tamiri, oto kalorifer tamiri, araç ısıtma ve soğutma hizmeti, Climart yetkili servisi, Yılkar yetkili servisi, Webasto yetkili servisi, Coolman yetkili servisi, Delphi yetkili servisi, klima gaz dolumu" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cinarotoklima.com/" />
        <meta property="og:title" content="Çınar Oto Klima | Isıtma ve Soğutma Sistemleri Uzmanı" />
        <meta property="og:description" content="Webasto, Yılkar ve Delphi yetkili servisi güvencesiyle araç klima ve kalorifer tamirinde profesyonel hizmet." />
        <meta property="og:image" content="https://cinarotoklima.com/logo-veya-gorsel.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Çınar Oto Klima | Yetkili Servis Hizmetleri" />
        <meta name="twitter:description" content="Oto klima ve kalorifer sistemlerinde yetkili servis güvencesi. Profesyonel tamir ve bakım." />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" href="https://cinarotoklima.com/" hreflang="tr-tr" />
      </Helmet>

      {/* HERO SECTION - Editorial & Brutalist */}
      <section className="relative min-h-[73vh] bg-[#0f2851] pt-32 pb-12 flex flex-col justify-end overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {mainBrands.map((brand, index) => (
          <div 
            key={brand.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="absolute inset-0 bg-[#0f2851]/80 mix-blend-multiply z-10"></div>
            <img 
              src={`https://picsum.photos/seed/${brand.id}hero/1920/1080?grayscale`} 
              alt={brand.name} 
              width="1920"
              height="1080"
              className="w-full h-full object-cover grayscale opacity-60"
              fetchPriority={index === 0 ? "high" : "low"}
            />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20">
              <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-mono text-[#fa9700] text-sm tracking-tight border border-[#fa9700] px-4 py-1 rounded-full">
                        Yetkili servis
                      </span>
                      <span className="font-mono text-white/50 text-sm tracking-tight">
                        [ {String(index + 1).padStart(2, '0')} / {String(mainBrands.length).padStart(2, '0')} ]
                      </span>
                    </div>
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                      {brand.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light border-l-2 border-[#fa9700] pl-6">
                      Ticari araç klimaları ve ısıtıcı sistemlerinde %100 orijinal yedek parça ve mühendislik çözümleri.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Link to={`/${brand.id}-yetkili-servisi`} className="group flex items-center justify-between bg-[#fa9700] text-black px-10 py-5 rounded-full font-heading font-bold text-lg tracking-wide hover:bg-white transition-all shadow-xl hover:shadow-orange-500/20">
                      <span>Hizmetleri incele</span>
                      <ArrowUpRight className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                    </Link>
                    <Link to="/iletisim" className="group flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-heading font-bold text-lg tracking-wide hover:bg-white/20 transition-all shadow-xl">
                      <span>İletişime geç</span>
                      <ArrowRight className="ml-4 group-hover:translate-x-1 transition-transform" size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
          <div 
            className="h-full bg-[#fa9700] transition-all duration-[6000ms] ease-linear"
            style={{ width: `${((currentSlide + 1) / mainBrands.length) * 100}%` }}
          ></div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-white opacity-80 animate-bounce-slow">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* TICKER / TRUST BAR - Stark & Minimal */}
      <div className="border-b border-slate-300 bg-white overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-xs md:text-sm font-bold tracking-tight text-black">
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> 20+ Yıllık piyasa tecrübesi</span>
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> %100 Orijinal yedek parça</span>
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> Sertifikalı operatörler</span>
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> 7/24 Kesintisiz destek</span>
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> Global markalar</span>
          {/* Duplicate for seamless loop */}
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> 20+ Yıllık tecrübe</span>
          <span className="mx-8 flex items-center"><span className="w-2 h-2 bg-[#fa9700] mr-3"></span> %100 Orijinal parça</span>
        </div>
      </div>

      {/* ABOUT - Clean & Elegant Editorial */}
      <section className="py-20 md:py-24 bg-white text-black relative overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left: Typography */}
            <div className="lg:col-span-5">
              <div className="font-mono text-black text-sm tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0f2851]"></span> Kurumsal profil
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                Ticari araç iklimlendirme sistemlerinde <span className="text-black">referans noktası.</span>
              </h2>
              <p className="text-lg text-black leading-relaxed font-light mb-8 max-w-xl">
                Sektördeki köklü geçmişimiz ve uzman kadromuzla, dünyanın önde gelen markalarının yetkili servisi olarak kalite ve güveni standart haline getiriyoruz.
              </p>
              
              <Link to="/hakkimizda" className="inline-flex items-center gap-3 font-heading font-bold text-base tracking-wide text-black hover:text-black transition-colors group">
                <span className="border-b-2 border-[#0f2851] group-hover:border-orange-500 pb-1">Tüm detayları incele</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>

            {/* Right: Stats Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="font-heading text-4xl md:text-5xl font-black text-black mb-2">20<span className="text-black">+</span></div>
                  <div className="font-mono text-xs md:text-sm text-black tracking-tight">Yıllık deneyim</div>
                </div>
                <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="font-heading text-4xl md:text-5xl font-black text-black mb-2">05</div>
                  <div className="font-mono text-xs md:text-sm text-black tracking-tight">Global marka</div>
                </div>
                <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="font-heading text-4xl md:text-5xl font-black text-black mb-2">10<span className="text-black">k</span></div>
                  <div className="font-mono text-xs md:text-sm text-black tracking-tight">Mutlu müşteri</div>
                </div>
                <div className="bg-[#0f2851] p-8 md:p-10 rounded-2xl shadow-xl text-white transform md:-translate-y-4">
                  <div className="font-heading text-4xl md:text-5xl font-black mb-2">%100</div>
                  <div className="font-mono text-xs md:text-sm text-slate-300 tracking-tight">Orijinal parça</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRANDS - Industrial Partner Grid */}
      <section className="pt-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="font-mono text-black text-sm tracking-tight mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0f2851]"></span> Global partners
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-black tracking-tight">
                Yetkili servis ağı
              </h2>
            </div>
            <div className="font-mono text-xs text-black max-w-xs md:text-right tracking-tight leading-relaxed">
              Dünyanın önde gelen iklimlendirme markalarının resmi çözüm ortağı.
            </div>
          </div>
        </div>

        {/* Full width brutalist grid */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {mainBrands.map((brand, idx) => (
              <Link 
                key={brand.id} 
                to={`/${brand.id}-yetkili-servisi`} 
                className="bg-white p-8 flex flex-col items-center justify-center group hover:bg-[#fa9700] transition-all duration-500 relative overflow-hidden h-48 md:h-64 rounded-md shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-100"
              >
                <div className="absolute top-6 left-8 font-mono text-[10px] font-bold text-gray-400 group-hover:text-black transition-colors tracking-tight z-20">
                  0{idx + 1} // {brand.name}
                </div>
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  width="200"
                  height="100"
                  className="max-h-20 md:max-h-24 lg:max-h-28 max-w-[85%] object-contain transition-all duration-500 mix-blend-multiply relative z-10" 
                  loading="lazy"
                />
                <div className="absolute bottom-6 right-8 w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-black transition-colors">
                  <ArrowUpRight className="text-gray-400 group-hover:text-black transition-all" size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - Sticky Sidebar List */}
      <section className="py-24 md:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <div className="font-mono text-black text-sm tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0f2851]"></span> Avantajlar
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
                Neden bizi tercih etmelisiniz?
              </h2>
            </div>
            
            <div className="lg:w-2/3">
              <div className="flex flex-col border-t border-slate-300">
                {[
                  { icon: ShieldCheck, title: 'Yetkili Servis Güvencesi', desc: 'Dünya markalarının resmi yetkili servisi olarak garantili ve standartlara uygun hizmet.' },
                  { icon: Wrench, title: 'Orijinal Yedek Parça', desc: '%100 orijinal yedek parça kullanımı ile sistemlerinizde uzun ömürlü çözümler.' },
                  { icon: Clock, title: 'Hızlı ve Etkili Çözüm', desc: 'Ticari araçlarınızın zaman kaybını önlemek için en hızlı ve kesin onarım süreçleri.' },
                  { icon: ThumbsUp, title: 'Uzman Kadro', desc: 'Sürekli güncel eğitimler alan, alanında uzman ve sertifikalı teknisyen kadrosu.' }
                ].map((feature, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-slate-200 hover:bg-white transition-all px-8 -mx-8 rounded-3xl">
                    <div className="font-mono text-4xl text-slate-200 group-hover:text-[#fa9700] transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-black mb-3 tracking-wide">{feature.title}</h3>
                      <p className="text-lg font-light leading-relaxed max-w-xl">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Interactive Editorial List */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="font-mono text-black text-sm tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0f2851]"></span> Faaliyet Alanları
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
                Profesyonel hizmetler
              </h2>
            </div>
            <Link to="/hizmetlerimiz" className="group flex items-center gap-4 font-heading font-bold text-lg tracking-wide text-black hover:text-black transition-colors">
              <span className="border-b-2 border-[#0f2851] group-hover:border-[#fa9700] pb-1">Tümünü gör</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="border-t-2 border-[#0f2851]">
            {services.map((service, idx) => (
              <Link 
                key={service.id} 
                to={`/${service.id}`}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-12 border-b border-slate-200 hover:bg-[#0f2851] rounded-md transition-all duration-500 px-8 -mx-8"
              >
                <div className="flex items-center gap-6 md:gap-12 w-full md:w-1/2 mb-6 md:mb-0">
                  <span className="font-mono text-2xl md:text-3xl text-slate-200 group-hover:text-white/20 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-black group-hover:text-white transition-colors tracking-tight">
                    {service.name}
                  </h3>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-1/2 justify-between">
                  <p className="text-gray-500 group-hover:text-slate-300 transition-colors text-base md:text-lg font-light line-clamp-2 md:line-clamp-1 max-w-md">
                    {service.description}
                  </p>
                  <div className="hidden md:flex w-16 h-16 rounded-full border border-slate-200 group-hover:border-[#fa9700] items-center justify-center shrink-0 group-hover:bg-[#fa9700] transition-colors relative overflow-hidden shadow-sm">
                    <ArrowUpRight className="text-black absolute transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300" size={24} />
                    <ArrowRight className="text-slate-400 absolute transform group-hover:translate-x-12 transition-transform duration-300" size={24} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS - Google Maps Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="font-mono text-black text-sm tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0f2851]"></span> Müşteri yorumları
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
                Google Haritalar'da <span className="text-black">biz.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading font-black text-4xl text-black">4.9</span>
                <div className="flex text-[#fa9700]">
                  <Star size={24} fill="currentColor" />
                  <Star size={24} fill="currentColor" />
                  <Star size={24} fill="currentColor" />
                  <Star size={24} fill="currentColor" />
                  <Star size={24} fill="currentColor" />
                </div>
              </div>
              <p className="text-black font-mono text-sm">120+ Değerlendirme</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-black rounded-full flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-black">Ahmet Yılmaz</h4>
                  <div className="flex text-[#fa9700] mt-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-black leading-relaxed">
                "Ticari aracımızın kliması bozulmuştu, Çınar Oto Klima'ya getirdik. Çok hızlı ve profesyonel bir şekilde hallettiler. İşçilikleri gerçekten çok temiz."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 text-black rounded-full flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-black">Mehmet Kaya</h4>
                  <div className="flex text-[#fa9700] mt-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-black leading-relaxed">
                "Yılkar marka klimamızın montajını yaptırdık. Çalışanlar güler yüzlü ve işlerinin ehli. Orijinal parça kullanmaları en büyük tercih sebebimiz."
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 text-black rounded-full flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-black">Caner Demir</h4>
                  <div className="flex text-[#fa9700] mt-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-black leading-relaxed">
                "Webasto ısıtıcımız için kış bakımı yaptırdık. Şeffaf fiyatlandırma ve kaliteli hizmet. Bundan sonra tek adresimiz Çınar Oto Klima."
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://google.com/maps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-heading font-bold text-base tracking-wide text-black hover:text-[#0f2851] transition-colors group">
              <span className="border-b-2 border-slate-200 group-hover:border-[#0f2851] pb-1">Google'da tüm yorumları gör</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA - Fixed User Selection (Image Left, Text Right) */}
      <div className="mb-section container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-aux-13 md:rounded-none">
          
          {/* Left: Image (First in DOM) */}
          <div className="w-full lg:w-1/2 min-h-[300px] md:min-h-[400px] relative bg-white flex items-center justify-center p-12 overflow-hidden border-r border-slate-100">
            <img 
              src="/deneme.jpeg" 
              alt="Banner image" 
              className="w-full h-full object-contain transition-opacity duration-500 opacity-100" 
            />
          </div>
          
          {/* Right: Text/Content (Second in DOM) */}
          <div className="w-full lg:w-1/2 py-12 px-8 md:py-20 md:px-20 flex flex-col justify-center">
            <div className="subtitle-sm-tint mb-1 uppercase text-blue-600 font-bold text-xs tracking-widest">Yetkili Servis Güvencesi</div>
            <div className="heading-sm mb-6 max-w-[500px] lg:max-w-2xl text-3xl md:text-5xl font-bold text-[#0f2851] leading-tight tracking-tight">
              Sistemleriniz için <br /> maksimum verimlilik.
            </div>
            
            <div className="inline-block">
              <div className="cursor-pointer select-none">
                <Link to="/hizmetlerimiz">
                  <div className="group relative inline-block">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-full transition-transform duration-300 ease-out bg-blue-700/10 group-hover:scale-110"></div>
                    
                    {/* Main Button */}
                    <div className="relative z-10 flex items-center justify-center rounded-full px-10 py-5 text-center bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                      <div className="text-white font-bold tracking-wide">Hizmetleri İncele</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
