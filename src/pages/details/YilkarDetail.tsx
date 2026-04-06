import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight, ShieldCheck, FileText, Settings, Zap } from 'lucide-react';

export default function YilkarDetail({ product, brand }: { product: any, brand: any }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Split name for styling
  const nameParts = product.name.split(' ');
  const boldPart = nameParts.slice(0, Math.min(3, nameParts.length)).join(' ');
  const lightPart = nameParts.slice(Math.min(3, nameParts.length)).join(' ');

  return (
    <div className="bg-white min-h-screen pt-32">
      <Helmet>
        <title>{product.name} | Yılkar Ürünleri - Çınar Oto Klima</title>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 max-w-7xl flex items-center text-[10px] font-bold tracking-widest text-gray-400 mb-12">
        <Link to="/" className="hover:text-black transition-colors">Anasayfa</Link>
        <ChevronRight size={12} className="mx-3" />
        <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-black transition-colors">{brand.name} servisi</Link>
        <ChevronRight size={12} className="mx-3" />
        <Link to={`/${brand.id}/urunler`} className="hover:text-black transition-colors">Ürünler</Link>
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

          {/* Right: Basic Info & Specs List */}
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
                {product.features?.map((feature: string, i: number) => {
                  const [label, ...val] = feature.split(':');
                  return (
                    <div key={i} className="flex bg-white py-4 px-6 text-[10px] tracking-tight border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                      <span className="w-1/2 font-black text-black">{label.trim()}</span>
                      <span className="w-1/2 text-gray-500 font-medium">{val.join(':').trim()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905070485034" className="bg-[#fa9700] text-black px-12 py-6 rounded-full text-[11px] font-black tracking-tight hover:bg-black hover:text-white transition-all shadow-xl">
                TEKLİF ALIN / İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Description & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-slate-50 p-12 rounded-md border border-slate-101 transition-all">
            <Settings className="text-black mb-8" size={32} strokeWidth={1} />
            <h3 className="text-lg font-black text-black mb-4 tracking-tighter">Modern Tasarım</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">{product.description}</p>
          </div>
          <div className="bg-slate-50 p-12 rounded-md border border-slate-101 transition-all">
            <Zap className="text-black mb-8" size={32} strokeWidth={1} />
            <h3 className="text-lg font-black text-black mb-4 tracking-tighter">Yüksek Verimlilik</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">En zorlu hava koşullarında bile test edilmiş, maksimum soğutma ve ısıtma performansı.</p>
          </div>
          <div className="bg-[#0f2851] p-12 rounded-md shadow-2xl text-white">
            <ShieldCheck className="text-amber-500 mb-8" size={32} strokeWidth={1} />
            <h3 className="text-lg font-black mb-4 tracking-tighter">Garanti & Servis</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">Çınar Oto Klima güvencesiyle 2 yıl garantili montaj ve kesintisiz yedek parça desteği.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
