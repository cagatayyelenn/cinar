import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products, services, faqs } from '../data/mockData';
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Wrench, ChevronRight, Car, Truck, Bus, Tractor, ChevronDown, Settings, Plus } from 'lucide-react';

export default function BrandService({ brandId: propBrandId }: { brandId?: string }) {
  const { brandId: paramBrandId } = useParams<{ brandId: string }>();
  const activeBrandId = propBrandId || paramBrandId;
  const brand = brands.find(b => b.id === activeBrandId);

  if (!brand) {
    return <div className="container mx-auto py-20 text-center">Marka bulunamadı.</div>;
  }

  const brandProducts = products.filter(p => 
    p.brandId === activeBrandId || (activeBrandId === 'delphi' && p.brandId === 'webasto')
  ).slice(0, 9);
  const brandServices = services.filter(s => 
    s.brandId === activeBrandId || (activeBrandId === 'delphi' && s.brandId === 'webasto')
  );

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
      <div 
        className="pt-32 pb-20 relative"
        style={{ 
          background: 'linear-gradient(178deg, rgba(0, 0, 0, .2) -106.73%, rgba(41, 51, 236, .2) -14.51%, rgba(255, 157, 72, .2) 47.94%, rgba(237, 210, 173, .2) 75.02%)' 
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="text-white max-w-3xl">
              <div className="flex items-center text-xs mb-8 font-bold tracking-tight breadcrumb">
                <Link to="/" className="transition-colors">Anasayfa</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="tracking-tight">{brand.name} yetkili servisi</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                {brand.name} <br/><span className="text-gray-500 font-light">yetkili servisi</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-xl drop-shadow-md">
                {/* @ts-ignore */}
                {brand.heroDescription || `${brand.name} ürünleriniz için garantili bakım, onarım, montaj ve orijinal yedek parça hizmetleri.`}
              </p>
            </div>
            <div className="bg-white p-10 shrink-0 border border-white/20 rounded-md shadow-2xl">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`${brand.id === 'yilkar' ? 'h-[100px]' : 'h-[150px]'} w-auto object-contain`} 
              />
            </div>
          </div>
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/80 animate-bounce-slow">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Rebranding Information Banner */}
      {/* @ts-ignore */}
      {brand.rebrandedTo && (
        <div className="bg-[#0f2851] border-y border-white/10 py-6">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-amber-500 p-3 rounded-full shrink-0">
                  <ShieldCheck size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="font-black tracking-tighter text-lg mb-1 leading-none uppercase">Delphi & Webasto Güçlerini Birleştirdi</h3>
                  <p className="text-slate-400 text-sm font-medium">
                    Delphi yetkili servis hizmetleri artık Webasto uzmanlığı ve garantisi ile sunulmaktadır.
                  </p>
                </div>
              </div>
              <a 
                href="tel:+905070485034"
                className="bg-amber-500 text-black px-8 py-3 rounded-full font-black text-[10px] tracking-tight hover:bg-white transition-all flex items-center shrink-0 shadow-lg shadow-amber-500/20"
              >
                Servis Randevusu Al <ArrowRight size={14} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section className="mb-24">
              <h2 className="text-3xl font-black text-black mb-8 tracking-tight leading-tight">
                Neden {brand.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-black">
                    <ShieldCheck size={24} strokeWidth={1} />
                  </div>
                  <h3 className="font-black text-xl mb-3 tracking-tight">Garantili hizmet</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Yetkili servis güvencesiyle yaptığımız tüm işlemler markanın garanti kapsamındadır.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-black">
                    <Settings size={24} strokeWidth={1} />
                  </div>
                  <h3 className="font-black text-xl mb-3 tracking-tight">Orijinal yedek parça</h3>
                  <p className="font-light leading-relaxed">
                    Aracınızın ömrünü uzatmak için sadece %100 orijinal yedek parçalar kullanıyoruz.
                  </p>
                </div>
              </div>
            </section>

            {/* Hizmetlerimiz */}
            <section className="mb-24">
              <h2 className="text-3xl font-black text-black mb-12 tracking-tight leading-tight">
                Verdiğimiz hizmetler
              </h2>
              <div className="space-y-8">
                {brandServices.length > 0 ? brandServices.map(service => (
                  <div key={service.id} className="flex flex-col md:flex-row gap-8 bg-white border border-slate-100 rounded-md p-4 group hover:shadow-2xl hover:border-slate-200 transition-all duration-500">
                    <div className="md:w-2/5 overflow-hidden rounded-md">
                      <img src={service.image} alt={service.name} className="w-full h-64 md:h-full object-cover transition-transform duration-700" />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-black text-black mb-4 tracking-tight leading-tight">{service.name}</h3>
                      <p className="text-gray-500 mb-6 flex-grow font-light leading-relaxed">
                        {service.description}
                      </p>
                      <Link to={`/${service.id}`} className="inline-flex items-center text-xs font-black text-black tracking-tight mt-auto group-hover:text-amber-600 transition-colors">
                        Hizmeti incele <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
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
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black text-black tracking-tight leading-tight">
                  {brand.name} <span className="text-gray-400 font-light">ürünleri</span>
                </h2>
                {/* @ts-ignore */}
                <Link to={brand.rebrandedTo ? `/${brand.rebrandedTo}/urunler` : `/${brand.id}/urunler`} className="text-xs font-black text-black tracking-tight hover:text-gray-600 transition-colors">Tümünü gör</Link>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {brandProducts.length > 0 ? brandProducts.map(product => (
                  /* @ts-ignore */
                  <Link key={product.id} to={`/${brand.rebrandedTo || brand.id}-${product.id}`} className="group flex flex-col h-full bg-white transition-all duration-500 relative border border-slate-100 hover:shadow-2xl rounded-md overflow-hidden">
                    {/* Top Image Section */}
                    <div className="relative h-64 bg-white flex justify-center items-center overflow-hidden border-b border-gray-50 p-6">
                      <div className="absolute top-4 left-6 bg-[#dbe825] px-4 py-1 text-[10px] font-black text-black tracking-widest z-10 rounded-full">
                        YENİ
                      </div>
                      <img src={product.images?.[0] || 'https://picsum.photos/seed/klima1/400/300'} alt={product.name} className="w-full h-full object-contain transition-transform duration-500" />
                    </div>
                    {/* Card Content Section */}
                    <div className="p-8 flex flex-col items-center text-center">
                      <span className="text-[10px] font-bold text-gray-400 tracking-tight mb-4 block">
                        {brand.name} // Ürün
                      </span>
                      <h3 className="text-xl font-black text-black mb-4 leading-tight">{product.name}</h3>
                      <div className="flex gap-2 mb-6">
                        {/* @ts-ignore */}
                        {brand.id === 'yılkar' ? (
                          <span className="bg-amber-500/10 text-amber-600 text-[10px] px-3 py-1 rounded-full font-black tracking-tight">Yerli üretim</span>
                        ) : (
                          <span className="bg-blue-500/10 text-blue-600 text-[10px] px-3 py-1 rounded-full font-black tracking-tight">Ticari araç</span>
                        )}
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
              <h2 className="text-3xl font-black text-black mb-12 tracking-tight leading-tight">
                Sıkça sorulan sorular
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-10 rounded-md border border-slate-100">
                    <h3 className="text-lg font-black text-black mb-4 flex items-start tracking-tight leading-tight">
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
            <div className="sticky top-32 bg-[#0f2851] p-12 rounded-md text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-6 tracking-tighter leading-[0.9]">Servis <br/>randevusu</h3>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
                Size en yakın servis noktamızdan randevu almak için formu doldurun veya doğrudan arayın.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-center text-xs font-bold tracking-tight text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 text-[#fa9700]">01</div>
                  Orijinal yedek parça garantisi
                </li>
                <li className="flex items-center text-xs font-bold tracking-tight text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 text-[#fa9700]">02</div>
                  Sertifikalı uzman teknisyenler
                </li>
                <li className="flex items-center text-xs font-bold tracking-tight text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 text-[#fa9700]">03</div>
                  Aynı gün servis ve hızlı teslimat
                </li>
              </ul>
 
              <div className="space-y-4">
                <a href="tel:+905070485034" className="w-full bg-[#fa9700] hover:bg-white text-black py-5 rounded-full font-black flex items-center justify-center transition-all mb-6 tracking-tight text-[10px] shadow-lg">
                  Hemen ara: 0507 048 50 34
                </a>
                <Link to="/iletisim" className="w-full border border-white/20 hover:border-white text-white py-5 rounded-full font-black flex items-center justify-center transition-all tracking-tight text-[10px]">
                  Teklif isteyin
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
