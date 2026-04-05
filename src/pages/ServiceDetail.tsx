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
  const canonicalUrl = service ? `https://cinarotoklima.com/${service.id}` : 'https://cinarotoklima.com';

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
          <h2 className="text-2xl font-black mb-4 tracking-tighter">Hizmet bulunamadı</h2>
          <p className="text-gray-500 mb-8">Aradığınız hizmet detayları şu anda ulaşılamıyor veya link hatalı.</p>
          <Link to="/" className="bg-black text-white px-8 py-4 text-xs font-black tracking-tight hover:bg-gray-800 transition-colors">Anasayfaya dön</Link>
        </div>
      ) : (
        <>
          {/* Breadcrumb */}
          <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-4">
            <div className="container mx-auto px-4 flex items-center text-[10px] font-black tracking-tight overflow-x-auto breadcrumb">
              <Link to="/" className="">Anasayfa</Link>
              <ChevronRight size={14} className="mx-2 shrink-0" />
              <Link to={`/${brand.id}-yetkili-servisi`} className="">{brand.name} servisi</Link>
              <ChevronRight size={14} className="mx-2 shrink-0" />
              <span className="text-black font-medium truncate">{service.name}</span>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row gap-12">
              
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-5xl font-black text-black mb-8 tracking-tighter">{service.name}</h1>
                
                <div className="bg-slate-50 rounded-md p-10 mb-12 border border-slate-100 shadow-sm">
                  <p className="text-xl leading-relaxed font-light italic">
                    "{service.description}"
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 mb-16 font-light leading-relaxed">
                  <p className="mb-6">
                    {brand.name} marka aracınızın klima ve ısıtma sistemleri için en yüksek standartlarda teknik servis desteği sunuyoruz. 
                    Uzman ekibimiz ve orijinal yedek parça stoğumuzla, aracınızın konforunu ve performansını koruyoruz.
                  </p>
                  
                  <h3 className="text-xl font-black text-black mt-12 mb-6 tracking-tight">Hizmet kapsamımız</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-12">
                    {[
                      'Periyodik Bakım ve Temizlik',
                      'Gaz Dolumu ve Kaçak Testi',
                      'Kompresör Revizyonu',
                      'Elektriksel Arıza Tespiti',
                      'Polen Filtresi Değişimi',
                      'Sistem Dezenfeksiyonu'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold tracking-tight text-black">
                        <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                  <h2 className="text-2xl font-black text-black mb-10 tracking-tighter">Sıkça sorulan sorular</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {faqs.slice(0, 3).map((faq, i) => (
                      <div key={i} className="bg-slate-50 p-10 rounded-md border border-slate-100 hover:shadow-xl transition-all group">
                        <h4 className="text-[11px] font-black text-black mb-4 tracking-tight flex items-center gap-4">
                          <span className="w-8 h-px bg-amber-500 group-hover:w-12 transition-all"></span>
                          {faq.question}
                        </h4>
                        <p className="text-sm leading-relaxed font-light pl-12">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-8">
                  <img src={service.image} alt={service.name} className="w-full h-80 object-cover rounded-md border border-slate-100 shadow-xl" />
                  
                  <div className="bg-[#0f2851] p-12 rounded-md text-white shadow-2xl">
                    <h3 className="text-2xl font-black mb-4 tracking-tighter leading-none">Randevu alın</h3>
                    <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
                      Hızlı servis ve uzman desteği için hemen bizimle iletişime geçin.
                    </p>
                    <a href="tel:+905070485034" className="flex items-center justify-center gap-4 bg-[#fa9700] text-black py-5 px-8 rounded-full font-black text-[10px] tracking-tight hover:bg-white transition-all shadow-lg">
                      <PhoneCall size={16} />
                      Şimdi arayın
                    </a>
                  </div>
                  
                  <div className="bg-slate-50 p-10 rounded-md border border-slate-100">
                    <h4 className="text-[10px] font-black text-slate-400 tracking-tight mb-8">Diğer hizmetler</h4>
                    <div className="space-y-4">
                      {services.filter(s => s.id !== service.id && s.brandId === brand.id).slice(0, 4).map((s, i) => (
                        <Link key={i} to={`/${s.id}`} className="flex items-center justify-between text-[11px] font-black tracking-tight text-black hover:text-amber-600 transition-all group">
                          <span>{s.name}</span>
                          <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
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
