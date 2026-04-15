import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, services, faqs } from '../data/mockData';
import { ChevronRight, PhoneCall, CheckCircle2, Wrench, Settings } from 'lucide-react';

export default function ServiceDetail({ brandId: propBrandId, itemId: propItemId }: { brandId?: string, itemId?: string }) {
  const { brandId: paramBrandId, itemId: paramItemId } = useParams<{ brandId: string, itemId: string }>();
  
  const brandId = (propBrandId || paramBrandId || '').toLowerCase();
  const itemId = (propItemId || paramItemId || '').toLowerCase();
  
  // Find service by ID or Slug
  const service = services.find(s => 
    s.id.toLowerCase() === itemId || 
    s.id.toLowerCase() === `${brandId}-${itemId}` ||
    s.id.toLowerCase() === brandId // For direct slugs like /tir-park-klimasi
  );

  const brand = brands.find(b => b.id.toLowerCase() === brandId) || 
               (service?.brandId === 'general' ? { id: 'general', name: 'Çınar Oto Klima' } : null) ||
               (service?.brandId === 'other' ? { id: 'other', name: 'Yetkili Servis' } : null);

  const pageTitle = service 
    ? `${service.name} | ${brand?.name || 'Çınar'} Uzman Servisi - Çınar Oto Klima`
    : 'Hizmet Bulunamadı | Çınar Oto Klima';

  const pageDescription = service?.description || `Çınar Oto Klima olarak sunduğumuz profil hizmetlerimiz hakkında detaylı bilgi, randevu ve uzman teknik destek.`;
  const canonicalUrl = service ? `https://cinarotoklima.com/servis/${service.id}` : 'https://cinarotoklima.com';

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={service ? `${service.name}, oto klima bakımı, ticari araç klima onarımı, ${brand?.name} servisi, çınar oto klima` : 'oto klima servisi, çınar oto klima'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={service?.image || 'https://cinarotoklima.com/cinar-oto-klima-logo.svg'} />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {!service ? (
        <div className="container mx-auto py-48 text-center px-4">
          <h2 className="text-4xl font-black mb-6 tracking-tighter">Hizmet bulunamadı</h2>
          <p className="text-gray-500 mb-12 max-w-md mx-auto">Aradığınız hizmet detayları şu anda ulaşılamıyor veya katalog güncelleniyor olabilir.</p>
          <Link to="/hizmetlerimiz" className="bg-black text-white px-12 py-5 text-xs font-black tracking-widest hover:bg-gray-800 transition-all uppercase shadow-xl">Tüm Hizmetlerimize Göz Atın</Link>
        </div>
      ) : (
        <>
          {/* Breadcrumb & Hero Background */}
          <div 
            className="pt-40 pb-12 relative"
            style={{ 
              background: 'linear-gradient(178deg, rgba(0, 0, 0, .4) -106.73%, rgba(41, 51, 236, .15) -14.51%, rgba(255, 157, 72, .1) 47.94%, rgba(237, 210, 173, .05) 75.02%)' 
            }}
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex items-center text-[10px] font-black tracking-[0.2em] overflow-x-auto breadcrumb text-gray-400 uppercase">
                <Link to="/" className="hover:text-black transition-colors shrink-0">Anasayfa</Link>
                <ChevronRight size={14} className="mx-3 shrink-0" />
                <Link to="/hizmetlerimiz" className="hover:text-black transition-colors shrink-0">Hizmetlerimiz</Link>
                <ChevronRight size={14} className="mx-3 shrink-0" />
                <span className="text-black font-bold truncate">{service.name}</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="inline-block bg-orange-500 text-white text-[10px] font-black px-4 py-1 tracking-widest uppercase mb-6">
                  {brand?.id === 'general' ? 'Profesyonel Çözüm' : `${brand?.name} HİZMETİ`}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-black mb-10 tracking-tighter leading-tight uppercase tabular-nums">
                  {service.name}
                </h1>
                
                <div className="bg-gray-50 border-l-4 border-black p-10 mb-16 shadow-sm">
                  <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800">
                    {service.description}
                  </p>
                </div>

                <div className="prose prose-xl max-w-none text-gray-600 mb-20 font-light leading-relaxed">
                  <p className="mb-8">
                    Çınar Oto Klima olarak, <span className="font-bold text-black">{service.name}</span> alanında uzman teknik ekibimiz ve modern ekipmanlarımızla profesyonel hizmet sunuyoruz. 
                    {brand?.id !== 'general' && ` ${brand?.name} standartlarına uygun, garantili ve güvenilir çözümlerle aracınızın performansını ve konforunu en üst seviyede tutuyoruz.`}
                  </p>
                  
                  <h3 className="text-2xl font-black text-black mt-16 mb-8 tracking-tighter uppercase flex items-center gap-4">
                    <span className="w-10 h-[2px] bg-black"></span> Hizmet Avantajları
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {(service.features || [
                      'Periyodik Bakım ve Temizlik',
                      'Gaz Dolumu ve Kaçak Testi',
                      'Kompresör Revizyonu',
                      'Elektriksel Arıza Tespiti',
                      'Polen Filtresi Değişimi',
                      'Sistem Dezenfeksiyonu'
                    ]).map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle2 size={24} className="text-orange-500 shrink-0 mt-1" />
                        <div>
                          <span className="text-sm font-black tracking-tight text-black uppercase leading-tight block mb-1">{item}</span>
                          <span className="text-xs text-gray-400 font-medium">Uzman teknik ekip tarafından garantili uygulama.</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Selection */}
                <div className="mt-32 pt-20 border-t border-gray-100">
                  <h2 className="text-3xl font-black text-black mb-12 tracking-tighter uppercase flex items-center gap-6">
                    Sıkça Sorulan Sorular <span className="text-gray-200 text-5xl">/</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-8">
                    {faqs.slice(0, 3).map((faq, i) => (
                      <div key={i} className="group">
                        <h4 className="text-sm font-black text-black mb-4 tracking-tight flex items-start gap-4">
                          <span className="text-orange-500 font-mono">0{i+1}.</span>
                          <span className="uppercase group-hover:text-orange-500 transition-colors uppercase leading-snug">{faq.question}</span>
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-500 font-light pl-10 border-l border-gray-100 ml-3">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-32 space-y-10">
                  <div className="relative group overflow-hidden bg-slate-50 rounded-md p-8 flex items-center justify-center">
                    <img src={service.image} alt={service.name} className="w-full aspect-square object-contain transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all pointer-events-none"></div>
                  </div>
                  
                  <div className="bg-black p-12 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <h3 className="text-2xl font-black mb-6 tracking-tighter leading-none uppercase">Teknik Destek <br/>& Randevu</h3>
                    <p className="text-gray-400 text-sm mb-12 leading-relaxed font-light">
                      {service.name} hizmetimiz hakkında detaylı teknik bilgi almak veya randevu oluşturmak için uzman ekibimize ulaşın.
                    </p>
                    <a href="tel:+905070485034" className="flex items-center justify-center gap-4 bg-white text-black py-6 px-8 font-black text-[10px] tracking-widest hover:bg-orange-500 hover:text-white transition-all uppercase shadow-lg">
                      <PhoneCall size={18} />
                      ŞİMDİ İLETİŞİME GEÇİN
                    </a>
                  </div>
                  
                  <div className="border border-gray-100 p-10 bg-white">
                    <h4 className="text-[10px] font-black text-gray-300 tracking-[0.3em] mb-10 uppercase flex items-center gap-4">
                      <span className="w-6 h-[1px] bg-gray-200"></span> Benzer Hizmetler
                    </h4>
                    <div className="space-y-6">
                      {services
                        .filter(s => s.id !== service.id && (s.brandId === service.brandId || s.brandId === 'general'))
                        .slice(0, 5)
                        .map((s, i) => (
                        <Link key={i} to={`/servis/${s.id}`} className="flex items-center justify-between text-[11px] font-bold tracking-tight text-gray-500 hover:text-black transition-all group">
                          <span className="uppercase truncate pr-4">{s.name}</span>
                          <ChevronRight size={14} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
