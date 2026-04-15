import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ShieldCheck, Zap, Settings } from 'lucide-react';

export default function YedekParcaDetail({ product, brand }: { product: any, brand: any }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Split name for styling
  const nameParts = product.name.split(' ');
  const boldPart = nameParts.slice(0, Math.min(3, nameParts.length)).join(' ');
  const lightPart = nameParts.slice(Math.min(3, nameParts.length)).join(' ');

  return (
    <div className="bg-white min-h-screen pt-32">
      <Helmet>
        <title>{product.name} | Yedek Parça - Çınar Oto Klima</title>
        <meta name="description" content={`${product.name} araç klima ve ısıtma sistemleri için orijinal yedek parça. Çınar Oto Klima güvencesiyle yüksek kalite ve tam uyum.`} />
        <meta name="keywords" content={`${product.name}, oto klima yedek parça, ${brand?.name || ''} parça, kalorifer yedek parça`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Yedek Parça`} />
        <meta property="og:description" content={`${product.name} orijinal yedek parça seçenekleri ve uzman montaj desteği.`} />
        <meta property="og:image" content={product.images?.[0] || 'https://cinarotoklima.com/logo-veya-gorsel.jpg'} />
        <meta property="og:url" content={`https://cinarotoklima.com/${product.id}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.images?.[0] || 'https://cinarotoklima.com/logo-veya-gorsel.jpg'} />

        <link rel="canonical" href={`https://cinarotoklima.com/${product.id}`} />

        {/* Product Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.images?.[0],
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": brand?.name || "Çınar Oto Klima"
            },
            "category": "Yedek Parça",
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "1",
              "lowPrice": "0",
              "highPrice": "0",
              "priceCurrency": "TRY",
              "availability": "https://schema.org/InStock",
              "url": `https://cinarotoklima.com/${product.id}`
            }
          })}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Anasayfa",
                "item": "https://cinarotoklima.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Yedek Parça",
                "item": "https://cinarotoklima.com/yedek-parca"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `https://cinarotoklima.com/${product.id}`
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 max-w-7xl flex items-center text-[10px] font-bold tracking-widest text-gray-400 mb-12">
        <Link to="/" className="hover:text-black transition-colors">Anasayfa</Link>
        <ChevronRight size={12} className="mx-3" />
        <Link to="/yedek-parca" className="hover:text-black transition-colors">Yedek Parçalar</Link>
        <ChevronRight size={12} className="mx-3" />
        <span className="text-black">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pb-20">
        <div className="flex flex-col lg:flex-row gap-20 mb-32">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="flex justify-center items-center p-12 bg-white border border-slate-100 relative rounded-md shadow-sm min-h-[400px]">
              <img 
                src={product.images?.[activeImageIndex] || 'https://picsum.photos/seed/yilkar/400/300'} 
                alt={product.name} 
                className="max-w-full max-h-[400px] w-auto h-auto object-contain transition-transform duration-1000" 
              />
              <div className="absolute top-6 left-6">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Orijinal Parça
                </span>
              </div>
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4">
                {product.images.map((img: string, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-24 h-24 shrink-0 border-2 overflow-hidden bg-white rounded-md flex items-center justify-center transition-all ${activeImageIndex === idx ? 'border-amber-500' : 'border-slate-100'}`}
                  >
                    <img src={img} alt={`${product.name} - ${idx + 1}`} className="max-w-full max-h-full p-2 object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Description Content */}
          <div className="lg:w-1/2">
            <div className="text-xs font-black text-gray-400 tracking-tight mb-6 flex items-center gap-6">
              <span className="w-12 h-px bg-black"></span> Ürün detayı
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black mb-10 leading-[0.95] tracking-tighter">
              {boldPart} <br/><span className="text-gray-400 font-light">{lightPart}</span>
            </h1>
            
            <div className="mb-12">
              <h3 className="text-xs font-black text-black mb-6 tracking-tight border-b border-slate-100 pb-4 uppercase">Ürün Açıklaması</h3>
              <div className="prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed whitespace-pre-wrap">
                {product.description}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905070485034" className="bg-[#fa9700] text-black px-12 py-6 rounded-full text-[11px] font-black tracking-tight hover:bg-black hover:text-white transition-all shadow-xl text-center">
                STOK VE FİYAT BİLGİSİ İÇİN ARAYIN
              </a>
            </div>
          </div>
        </div>

        {/* Generic Spare Part Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-slate-50 p-12 rounded-md border border-slate-101 border-b-4 border-b-orange-500 transition-all">
            <Settings className="text-orange-500 mb-8" size={32} strokeWidth={1} />
            <h3 className="text-lg font-black text-black mb-4 tracking-tighter">Tam Uyum Garanitsi</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">Orijinal spesifikasyonlarda üretilmiş parçalar sayesinde, aracınızın iklimlendirme sisteminde montaj sorunu yaşamadan birebir uyum sağlar.</p>
          </div>
          <div className="bg-slate-50 p-12 rounded-md border border-slate-101 border-b-4 border-b-blue-500 transition-all">
            <Zap className="text-blue-500 mb-8" size={32} strokeWidth={1} />
            <h3 className="text-lg font-black text-black mb-4 tracking-tighter">Maksimum Performans</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">OEM kalitesindeki bileşenler, sisteminizin ilk günkü verimiyle çalışmasını destekler, yüksek basınçlı ve yoğun kullanıma dayanıklıdır.</p>
          </div>
          <div className="bg-[#0f2851] p-12 rounded-md shadow-2xl text-white">
            <ShieldCheck className="text-amber-500 mb-8" size={32} strokeWidth={1} />
            <h3 className="text-lg font-black mb-4 tracking-tighter">Uzman Montaj & Servis</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">Satın aldığınız yedek parçaların profesyonel kurulumu, kontrolleri ve garantili işçilik desteği Çınar Oto Klima uzmanlığıyla sağlanır.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
