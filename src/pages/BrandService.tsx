import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products, services, faqs } from '../data/mockData';
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Wrench, ChevronRight, Car, Truck, Bus, Tractor } from 'lucide-react';

export default function BrandService({ brandId: propBrandId }: { brandId?: string }) {
  const { brandId: paramBrandId } = useParams<{ brandId: string }>();
  const activeBrandId = propBrandId || paramBrandId;
  const brand = brands.find(b => b.id === activeBrandId);

  if (!brand) {
    return <div className="container mx-auto py-20 text-center">Marka bulunamadı.</div>;
  }

  const brandProducts = products.filter(p => p.brandId === activeBrandId).slice(0, 9);
  const brandServices = services.filter(s => s.brandId === activeBrandId);

  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        {/* @ts-ignore */}
        <title>{brand.seo?.title || `${brand.name} Yetkili Servisi | Çınar Oto Klima`}</title>
        {/* @ts-ignore */}
        <meta name="description" content={brand.seo?.description || `${brand.name} markalı ticari araç klimaları ve ısıtıcı sistemleri için yetkili servis, montaj, bakım ve orijinal yedek parça hizmetleri.`} />
        {/* @ts-ignore */}
        {brand.seo?.keywords && <meta name="keywords" content={brand.seo.keywords} />}
        {/* @ts-ignore */}
        <meta property="og:title" content={brand.seo?.ogTitle || `${brand.name} Yetkili Servisi`} />
        {/* @ts-ignore */}
        <meta property="og:description" content={brand.seo?.ogDescription || `${brand.name} markalı araç klimaları için uzman servis desteği.`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={brand.seo?.canonical || `https://cinarotoklima.com/${brand.id}-yetkili-servisi`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-[#0f2851]/80 bg-[url('/arkaplan.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="text-white max-w-3xl">
              <div className="flex items-center text-xs text-gray-400 mb-8 font-bold uppercase tracking-widest">
                <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-white uppercase tracking-widest">{brand.name} Yetkili Servisi</span>
              </div>
              <div className="inline-block border border-white px-4 py-1 text-xs font-bold mb-6 uppercase tracking-widest">
                Çınar Oto Klima
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                {brand.name} <br/><span className="text-gray-500 font-light">Yetkili Servisi</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl drop-shadow-md">
                {/* @ts-ignore */}
                {brand.heroDescription || `${brand.name} ürünleriniz için garantili bakım, onarım, montaj ve orijinal yedek parça hizmetleri.`}
              </p>
            </div>
            <div className="bg-white p-10 shrink-0 border border-white/20 rounded-[2.5rem] shadow-2xl">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`${brand.id === 'yilkar' ? 'h-[100px]' : 'h-[150px]'} w-auto object-contain`} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section className="mb-24">
              <h2 className="text-3xl font-black text-black mb-8 uppercase tracking-tight leading-tight border-b border-gray-200 pb-6">
                {/* @ts-ignore */}
                {brand.whyTitle ? brand.whyTitle : <>Neden <span className="text-gray-400">{brand.name}</span> Servisi?</>}
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                {/* @ts-ignore */}
                {brand.whyDescription || `Çınar Oto Klima olarak, ${brand.name} markasının resmi yetkili servisi olmaktan gurur duyuyoruz. Aracınızdaki ${brand.name} marka klima ve ısıtıcı sistemlerinin en yüksek performansta çalışması için gerekli tüm teknik donanıma ve sertifikalı uzman kadroya sahibiz.`}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
                  <ShieldCheck className="text-black mb-6" size={40} strokeWidth={1.2} />
                  <h3 className="font-black text-xl mb-3 uppercase tracking-tight">Garantili Hizmet</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Tüm bakım ve onarım işlemlerimiz yetkili servis garantisi altındadır.</p>
                </div>
                <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
                  <Wrench className="text-black mb-6" size={40} strokeWidth={1.2} />
                  <h3 className="font-black text-xl mb-3 uppercase tracking-tight">Orijinal Yedek Parça</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Sadece {brand.name} onaylı, %100 orijinal yedek parçalar kullanıyoruz.</p>
                </div>
              </div>
            </section>

            {/* Hizmetlerimiz */}
            <section className="mb-24">
              <h2 className="text-3xl font-black text-black mb-12 uppercase tracking-tight leading-tight border-b border-gray-200 pb-6">
                Verdiğimiz <span className="text-gray-400">Hizmetler</span>
              </h2>
              <div className="space-y-8">
                {brandServices.length > 0 ? brandServices.map(service => (
                  <div key={service.id} className="flex flex-col md:flex-row gap-8 bg-white border border-slate-100 rounded-[2.5rem] p-4 group hover:shadow-2xl hover:border-slate-200 transition-all duration-500">
                    <div className="md:w-2/5 overflow-hidden rounded-[2rem]">
                      <img src={service.image} alt={service.name} className="w-full h-64 md:h-full object-cover transition-transform duration-700" />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight leading-tight">{service.name}</h3>
                      <p className="text-gray-500 mb-8 leading-relaxed font-light">{service.description}</p>
                      <Link to={`/${service.id}`} className="inline-flex items-center text-xs font-black text-black uppercase tracking-widest mt-auto group-hover:text-amber-600 transition-colors">
                        Hizmet Detayları <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )) : (
                  <p className="text-gray-500 italic">Bu marka için özel hizmet detayları yakında eklenecektir.</p>
                )}
              </div>
            </section>

            {/* Ürünler */}
            <section className="mb-24">
              <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-black text-black uppercase tracking-tight leading-tight">
                  {brand.name} <span className="text-gray-400">Ürünleri</span>
                </h2>
                <Link to={`/${brand.id}/urunler`} className="text-xs font-black text-black uppercase tracking-widest hover:text-gray-600 transition-colors">Tümünü Gör</Link>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {brandProducts.length > 0 ? brandProducts.map(product => (
                  <Link key={product.id} to={`/${brand.id}-${product.id}`} className="group flex flex-col h-full bg-white transition-all duration-500 relative border border-slate-100 hover:shadow-2xl rounded-[2rem] overflow-hidden">
                    {/* Top Image Section */}
                    <div className="relative h-64 bg-white flex justify-center items-center overflow-hidden border-b border-gray-50 p-6">
                      <div className="absolute top-4 left-6 bg-[#dbe825] px-4 py-1 text-[10px] font-black text-black tracking-widest z-10 rounded-full">
                        YENİ
                      </div>
                      <img src={product.images?.[0] || 'https://picsum.photos/seed/klima1/400/300'} alt={product.name} className="w-full h-full object-contain transition-transform duration-500" />
                    </div>
                    {/* Card Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                        {product.category} | {brand.name}
                      </span>
                      <h3 className="font-black text-black text-xl mb-8 leading-tight group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Suitable for Section */}
                      <div className="mt-auto pt-6 border-t border-slate-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-black grayscale group-hover:grayscale-0 transition-all duration-500">
                             <img src="/ticari.svg" alt="Ticari Araç" className="w-6 h-6 mr-2" />
                             <span className="text-[10px] font-black uppercase tracking-widest">Ticari Araç</span>
                          </div>
                          <ArrowRight size={18} className="text-slate-200 group-hover:text-black transition-all group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )) : (
                  <p className="text-gray-500 col-span-3 italic">Bu markaya ait ürünler yakında eklenecektir.</p>
                )}
              </div>
            </section>

            {/* SSS */}
            <section>
              <h2 className="text-3xl font-black text-black mb-12 uppercase tracking-tight leading-tight border-b border-gray-200 pb-6">
                Sıkça <span className="text-gray-400">Sorulan Sorular</span>
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
                    <h3 className="text-lg font-black text-black mb-4 flex items-start uppercase tracking-tight leading-tight">
                      <span className="text-amber-500 mr-4 font-black">Q.</span> {faq.question}
                    </h3>
                    <p className="text-gray-500 pl-10 text-sm leading-relaxed border-l border-slate-200 font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-[#0f2851] p-12 rounded-[2.5rem] text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">Servis <br/>Randevusu</h3>
              <p className="text-slate-400 mb-10 leading-relaxed font-light">
                Aracınızın iklimlendirme sistemi için profesyonel destek alın. Hemen randevu oluşturun veya bilgi alın.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-300">
                  <CheckCircle2 className="text-amber-500 mr-4" size={18} />
                  <span>Aynı Gün Servis</span>
                </li>
                <li className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-300">
                  <CheckCircle2 className="text-amber-500 mr-4" size={18} />
                  <span>Ücretsiz Arıza Tespiti</span>
                </li>
                <li className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-300">
                  <CheckCircle2 className="text-amber-500 mr-4" size={18} />
                  <span>1 Yıl İşçilik Garantisi</span>
                </li>
              </ul>
 
              <a href="tel:+905070485034" className="w-full bg-[#fa9700] hover:bg-white text-black py-5 rounded-full font-black flex items-center justify-center transition-all mb-6 uppercase tracking-widest text-[10px] shadow-lg">
                <PhoneCall className="mr-3" size={16} /> 0507 048 50 34
              </a>
              <Link to="/iletisim" className="w-full border border-white/20 hover:border-white text-white py-5 rounded-full font-black flex items-center justify-center transition-all uppercase tracking-widest text-[10px]">
                Mesaj Gönder
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
