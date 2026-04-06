import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products } from '../data/mockData';
import { ChevronRight, ArrowRight, ShieldCheck, FileText, Settings, Zap } from 'lucide-react';

export default function ProductDetail({ brandId: propBrandId, itemId: propItemId }: { brandId?: string, itemId?: string }) {
  const { brandId: paramBrandId, itemId: paramItemId } = useParams<{ brandId: string, itemId: string }>();
  
  const brandId = (propBrandId || paramBrandId || '').toLowerCase();
  const itemId = (propItemId || paramItemId || '').toLowerCase();
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Robust product lookup: handles both "art1000" and "climart-art1000" formats
  const product = products.find(p => 
    p.id.toLowerCase() === itemId || 
    p.id.toLowerCase() === `${brandId}-${itemId}` ||
    (p.brandId.toLowerCase() === brandId && p.id.toLowerCase() === itemId.replace(`${brandId}-`, ''))
  );
  
  const brand = brands.find(b => b.id.toLowerCase() === brandId);

  // Split product name to make the first part bold - only if product exists
  const nameParts = product?.name.split(' ') || [];
  const boldPart = nameParts.slice(0, Math.min(3, nameParts.length)).join(' ');
  const lightPart = nameParts.slice(Math.min(3, nameParts.length)).join(' ');

  const pageTitle = product 
    ? `${product.name} | ${brand?.name || 'Climart'} Ürünleri - Çınar Oto Klima`
    : 'Ürün Bulunamadı | Çınar Oto Klima';

  const pageDescription = product?.description || 'Aradığınız ürün bulunamadı. Çınar Oto Klima uzman servis güvencesiyle geniş ürün yelpazemizi inceleyin.';
  const pageKeywords = product ? `${product.name}, ${brand?.name}, oto klima, yedek parça, ${product.category}` : 'oto klima, yedek parça, çınar oto klima';
  const canonicalUrl = product ? `https://cinarotoklima.com/${brandId}-${product.id.toLowerCase()}` : 'https://cinarotoklima.com';

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={product?.images?.[0] || 'https://cinarotoklima.com/logolar/cinarotologo.png'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {!product || !brand ? (
        <div className="container mx-auto py-32 text-center">
          <h2 className="text-2xl font-black mb-4 tracking-tighter">Ürün bulunamadı</h2>
          <p className="text-gray-500 mb-8">Aradığınız ürün stoklarımızda bulunmuyor veya link hatalı.</p>
          <Link to="/" className="bg-black text-white px-8 py-4 text-xs font-black tracking-tight hover:bg-gray-800 transition-colors">Anasayfaya dön</Link>
        </div>
      ) : (
        <>
          {/* Breadcrumb - Sharp & Minimal */}
          <div 
            className="pt-32 pb-4 relative"
            style={{ 
              background: 'linear-gradient(178deg, rgba(0, 0, 0, .2) -106.73%, rgba(41, 51, 236, .2) -14.51%, rgba(255, 157, 72, .2) 47.94%, rgba(237, 210, 173, .2) 75.02%)' 
            }}
          >
            <div className="container mx-auto px-4 max-w-7xl flex items-center text-[10px] font-bold tracking-widest text-gray-400 overflow-x-auto">
              <Link to="/" className="hover:text-white transition-colors shrink-0">Anasayfa</Link>
              <ChevronRight size={12} className="mx-3 shrink-0" />
              <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-white transition-colors shrink-0">{brand.name} servisi</Link>
              <ChevronRight size={12} className="mx-3 shrink-0" />
              <Link to={`/${brand.id}/urunler`} className="hover:text-white transition-colors shrink-0">Ürünler</Link>
              <ChevronRight size={12} className="mx-3 shrink-0" />
              <span className="text-white truncate">{product.name}</span>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-7xl py-20">
            
            {/* Top Section: Image & Specs */}
            <div className="flex flex-col lg:flex-row gap-20 mb-32">
              <div className="lg:w-1/2 flex flex-col gap-4">
                <div className="flex justify-center items-center p-12 bg-white border border-slate-100 relative group overflow-hidden min-h-[400px] rounded-md shadow-sm">
                  <img 
                    // @ts-ignore
                    src={product.images?.[activeImageIndex] || 'https://picsum.photos/seed/klima1/400/300'} 
                    alt={product.name} 
                    className="max-w-full max-h-[400px] w-auto h-auto object-contain transition-transform duration-1000" 
                  />
                </div>
                
                {/* Thumbnails */}
                {/* @ts-ignore */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {/* @ts-ignore */}
                    {product.images.map((img: string, idx: number) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-24 h-24 shrink-0 border-2 overflow-hidden bg-white rounded-2xl flex items-center justify-center transition-all ${activeImageIndex === idx ? 'border-amber-500 shadow-lg' : 'border-slate-100 hover:border-slate-200'}`}
                      >
                        <img src={img} alt={`${product.name} - Görsel ${idx + 1}`} className="max-w-full max-h-full p-2 object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="lg:w-1/2">
                <div className="text-xs font-black text-gray-400 tracking-tight mb-6 flex items-center gap-6">
                  <span className="w-12 h-px bg-black"></span> Ürün detayı
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-black mb-10 leading-[0.95] tracking-tighter">
                  {boldPart} <br/><span className="text-gray-400 font-light">{lightPart}</span>
                </h1>
                
                <div className="mb-12">
                  <h3 className="text-xs font-black text-black mb-6 tracking-tight border-b border-slate-100 pb-4">Teknik özellikler</h3>
                  <div className="grid grid-cols-1 gap-px bg-slate-100 border border-slate-100 rounded-md overflow-hidden shadow-sm">
                    {product.features?.map((feature, i) => {
                      const [label, ...valueParts] = feature.split(':');
                      const value = valueParts.join(':').trim();
                      return (
                        <div key={i} className="flex bg-white py-4 px-6 text-[10px] tracking-tight border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                          <span className="w-1/2 font-black text-black">{label.trim()}</span>
                          <span className="w-1/2 text-gray-500 font-medium">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+905070485034" className="bg-[#fa9700] text-black px-12 py-6 rounded-full text-[11px] font-black tracking-tight hover:bg-black hover:text-white transition-all shadow-2xl hover:shadow-orange-500/20">
                    BU ÜRÜN İÇİN İLETİŞİME GEÇİN
                  </a>
                </div>
              </div>
            </div>

            {/* Features Grid - Sharp Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
              <div className="bg-slate-50 p-12 rounded-md border border-slate-100 hover:shadow-xl transition-all">
                <Settings className="text-black mb-8" size={32} strokeWidth={1} />
                <h3 className="text-lg font-black text-black mb-4 tracking-tighter">Opsiyonel sistemler</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Polen partikül filtresi entegre edilebilir yapısı ile iç mekan hava kalitesini maksimum seviyeye çıkarır.
                </p>
              </div>
              <div className="bg-slate-50 p-12 rounded-md border border-slate-100 hover:shadow-xl transition-all">
                <Zap className="text-black mb-8" size={32} strokeWidth={1} />
                <h3 className="text-lg font-black text-black mb-4 tracking-tighter">Yüksek verimlilik</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Değişken ortam parametrelerine uyum sağlayan akışkan kontrolü ile kompresör ömrünü uzatır.
                </p>
              </div>
              <div className="bg-[#0f2851] p-12 rounded-md shadow-2xl text-white">
                <ShieldCheck className="text-amber-500 mb-8" size={32} strokeWidth={1} />
                <h3 className="text-lg font-black mb-4 tracking-tighter">ECE R10 sertifikası</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Uluslararası elektromanyetik uyumluluk standartlarına tam uygunluk ve güvenli çalışma onayı.
                </p>
              </div>
            </div>

            {/* Control Panel - Sharp Split */}
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
              <div className="lg:w-1/2 bg-slate-50 p-12 rounded-md border border-slate-100 flex items-center justify-center">
                <img src="https://picsum.photos/seed/panel/800/500?grayscale" alt="Kontrol Paneli" className="w-[80%] brightness-90 contrast-125 mix-blend-multiply" />
              </div>
              <div className="lg:w-1/2">
                <div className="text-xs font-black text-gray-400 tracking-tight mb-6 flex items-center gap-6">
                  <span className="w-12 h-px bg-black"></span> Kontrol ünitesi
                </div>
                <h3 className="text-3xl font-black text-black mb-8 tracking-tighter leading-none">Klimatronik <br/><span className="text-gray-400 font-light">yönetim sistemi</span></h3>
                <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                  {product.description}
                </p>
                
                <ul className="space-y-6">
                  {[
                    '2.1 inç LCD ekran ile anlık veri takibi',
                    '6 adet bağımsız kontrol butonu',
                    'Termostat ayarlı hassas sıcaklık kontrolü',
                    '3 kademeli hava hızı yönetimi'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-tight text-black">
                      <ArrowRight size={14} className="text-gray-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dökümanlar - Sharp List */}
            <div className="bg-[#0f2851] p-16 rounded-md text-white shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
                <div>
                  <div className="text-xs font-black text-gray-400 tracking-tight mb-6 flex items-center gap-6">
                  <span className="flex items-center gap-2 group">
                    <span className="w-8 h-[1px] bg-slate-200 group-hover:w-12 transition-all"></span> 0% Emisyon
                  </span>
                  <span className="flex items-center gap-2 group">
                    <span className="w-8 h-[1px] bg-slate-200 group-hover:w-12 transition-all"></span> Sürdürülebilir
                  </span>
                </div>
                  <h2 className="text-4xl font-black tracking-tighter leading-[0.9]">Teknik <span className="text-slate-500 font-light">kütüphane</span></h2>
                </div>
                <FileText size={48} className="text-amber-500/20" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Teknik Döküman', desc: 'Ürün boyutları, kapasite ve ağırlık detayları.' },
                  { title: 'Montaj Talimatı', desc: 'Adım adım kurulum ve entegrasyon rehberi.' },
                  { title: 'Elektrik Şeması', desc: 'Kablolama ve kontrol ünitesi bağlantı planı.' }
                ].map((doc, i) => (
                  <a key={i} href="#" className="group bg-white/5 border border-white/10 p-10 rounded-md hover:bg-white hover:text-black transition-all duration-500">
                    <h4 className="text-[11px] font-black tracking-tight mb-6">{doc.title}</h4>
                    <p className="text-slate-400 group-hover:text-slate-600 text-xs leading-relaxed mb-10 font-light">{doc.desc}</p>
                    <div className="flex items-center gap-3 text-[10px] font-black tracking-tight">
                      <span className="border-b border-white/20 group-hover:border-black/20 pb-1">İNDİR (PDF)</span>
                      <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}
