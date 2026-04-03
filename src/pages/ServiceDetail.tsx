import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, services, faqs } from '../data/mockData';
import { ChevronRight, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail({ brandId: propBrandId, itemId: propItemId }: { brandId?: string, itemId?: string }) {
  const { brandId: paramBrandId, itemId: paramItemId } = useParams<{ brandId: string, itemId: string }>();
  
  const brandId = (propBrandId || paramBrandId || '').toLowerCase();
  const itemId = (propItemId || paramItemId || '').toLowerCase();
  
  const service = services.find(s => s.id.toLowerCase() === itemId || s.id.toLowerCase() === `${brandId}-${itemId}`);
  const brand = brands.find(b => b.id.toLowerCase() === brandId);

  const pageTitle = service 
    ? `${service.name} | ${brand?.name || 'Çınar'} Yetkili Servisi - Çınar Oto Klima`
    : 'Hizmet Bulunamadı | Çınar Oto Klima';

  const pageDescription = service?.description || `${brand?.name || 'Marka'} yetkili servisi olarak sunduğumuz hizmetler hakkında detaylı bilgi, randevu ve uzman desteği.`;
  const canonicalUrl = service ? `https://cinarotoklima.com/${brandId}-yetkili-servisi` : 'https://cinarotoklima.com';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={service ? `${service.name}, ${brand?.name} servisi, oto klima bakımı, ticari araç klima onarımı, çınar oto klima` : 'oto klima servisi, çınar oto klima'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={service?.image || 'https://cinarotoklima.com/logolar/cinarotologo.png'} />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {!service || !brand ? (
        <div className="container mx-auto py-32 text-center">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Hizmet Bulunamadı</h2>
          <p className="text-gray-500 mb-8">Aradığınız hizmet detayları şu anda ulaşılamıyor veya link hatalı.</p>
          <Link to="/" className="bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-colors">Anasayfaya Dön</Link>
        </div>
      ) : (
        <>
          {/* Breadcrumb */}
          <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-4">
            <div className="container mx-auto px-4 flex items-center text-[10px] font-black uppercase tracking-widest text-black overflow-x-auto">
              <Link to="/" className="hover:text-black">Anasayfa</Link>
              <ChevronRight size={14} className="mx-2 shrink-0" />
              <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-black">{brand.name} Servisi</Link>
              <ChevronRight size={14} className="mx-2 shrink-0" />
              <span className="text-black font-medium truncate">{service.name}</span>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row gap-12">
              
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-5xl font-black text-black mb-8 uppercase tracking-tighter">{service.name}</h1>
                
                <div className="bg-white border-l-4 border-black p-8 mb-12 bg-gray-50">
                  <p className="text-xl text-gray-700 leading-relaxed font-light italic">
                    "{service.description}"
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 mb-16 font-light leading-relaxed">
                  <p className="mb-6">
                    {brand.name} marka aracınızın klima ve ısıtma sistemleri için en yüksek standartlarda teknik servis desteği sunuyoruz. 
                    Uzman ekibimiz ve orijinal yedek parça stoğumuzla, aracınızın konforunu ve performansını koruyoruz.
                  </p>
                  
                  <h3 className="text-xl font-black text-black mt-12 mb-6 uppercase tracking-tight">Hizmet Kapsamımız</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-12">
                    {[
                      'Periyodik Bakım ve Temizlik',
                      'Gaz Dolumu ve Kaçak Testi',
                      'Kompresör Revizyonu',
                      'Elektriksel Arıza Tespiti',
                      'Polen Filtresi Değişimi',
                      'Sistem Dezenfeksiyonu'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black">
                        <CheckCircle2 size={18} className="text-black shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                  <h2 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">SIKÇA SORULAR SORULAR</h2>
                  <div className="space-y-4">
                    {faqs.slice(0, 3).map((faq, i) => (
                      <div key={i} className="border border-gray-100 p-8 hover:border-black transition-colors bg-white">
                        <h4 className="text-sm font-black text-black mb-4 uppercase tracking-widest">{faq.question}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-8">
                  <img src={service.image} alt={service.name} className="w-full h-80 object-cover border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700" />
                  
                  <div className="bg-black p-10 text-white">
                    <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">RANDEVU ALIN</h3>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
                      Hızlı servis ve uzman desteği için hemen bizimle iletişime geçin.
                    </p>
                    <a href="tel:+905555555555" className="flex items-center justify-center gap-4 bg-white text-black py-5 px-8 font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors">
                      <PhoneCall size={18} />
                      ŞİMDİ ARA
                    </a>
                  </div>
                  
                  <div className="border border-gray-100 p-8 space-y-6">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">DİĞER HİZMETLER</h4>
                    <div className="space-y-3">
                      {services.filter(s => s.id !== service.id).slice(0, 4).map((s, i) => (
                        <Link key={i} to={`/${brand.id}/servis/${s.id}`} className="block text-xs font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors py-2 border-b border-gray-50 last:border-0">
                          {s.name}
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
    </>
  );
}
