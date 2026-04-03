import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products } from '../data/mockData';
import { ChevronRight, ArrowRight, ShieldCheck, FileText, Settings, Zap } from 'lucide-react';

export default function ProductDetail({ brandId: propBrandId, itemId: propItemId }: { brandId?: string, itemId?: string }) {
  const { brandId: paramBrandId, itemId: paramItemId } = useParams<{ brandId: string, itemId: string }>();
  
  const brandId = propBrandId || paramBrandId;
  const itemId = propItemId || paramItemId;
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = products.find(p => p.id === itemId || p.id === `${brandId}-${itemId}`);
  const brand = brands.find(b => b.id === brandId);

  if (!product || !brand) {
    return <div className="container mx-auto py-20 text-center">Ürün bulunamadı.</div>;
  }

  // Split product name to make the first part bold
  const nameParts = product.name.split(' ');
  const boldPart = nameParts.slice(0, Math.min(3, nameParts.length)).join(' ');
  const lightPart = nameParts.slice(Math.min(3, nameParts.length)).join(' ');

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{product.name} | {brand.name} Yetkili Servisi</title>
      </Helmet>

      {/* Breadcrumb - Sharp & Minimal */}
      <div className="bg-gray-50 border-b border-gray-200 pt-32 pb-4">
        <div className="container mx-auto px-4 max-w-7xl flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 overflow-x-auto">
          <Link to="/" className="hover:text-black transition-colors">Anasayfa</Link>
          <ChevronRight size={12} className="mx-3 shrink-0" />
          <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-black transition-colors">{brand.name} Servisi</Link>
          <ChevronRight size={12} className="mx-3 shrink-0" />
          <Link to={`/${brand.id}/urunler`} className="hover:text-black transition-colors">Ürünler</Link>
          <ChevronRight size={12} className="mx-3 shrink-0" />
          <span className="text-black truncate">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        
        {/* Top Section: Image & Specs */}
        <div className="flex flex-col lg:flex-row gap-20 mb-32">
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="flex justify-center items-center p-12 bg-gray-50 border border-gray-100 relative group overflow-hidden min-h-[400px]">
              <div className="absolute top-8 left-8 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] z-10">
                {brand.name} // {product.category.toUpperCase()}
              </div>
              <img 
                // @ts-ignore
                src={product.images?.[activeImageIndex] || 'https://picsum.photos/seed/klima1/400/300'} 
                alt={product.name} 
                className="max-w-full max-h-[400px] w-auto h-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" 
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
                    className={`w-24 h-24 shrink-0 border-2 overflow-hidden bg-gray-50 flex items-center justify-center transition-all ${activeImageIndex === idx ? 'border-black' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <img src={img} alt={`${product.name} - Görsel ${idx + 1}`} className="max-w-full max-h-full p-2 object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="lg:w-1/2">
            <div className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-6">
              <span className="w-12 h-px bg-black"></span> ÜRÜN DETAYI
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black mb-10 leading-[0.95] tracking-tighter uppercase">
              {boldPart} <br/><span className="text-gray-400 font-light">{lightPart}</span>
            </h1>
            
            <div className="mb-12">
              <h3 className="text-xs font-black text-black mb-6 uppercase tracking-widest border-b border-gray-200 pb-4">Teknik Özellikler</h3>
              <div className="grid grid-cols-1 gap-px bg-gray-200 border border-gray-200">
                {[
                  { label: 'Soğutma Kapasitesi', value: '6 - 14 kW (20472 - 47770 BTU/sa)' },
                  { label: 'Soğutulmuş Hava', value: '1800 m³/sa' },
                  { label: 'Performans Limiti', value: '45 C° (Dış ortam sıcaklığı)' },
                  { label: 'Çektiği Akım', value: '47 A @12 VDC - 23 A @24 VDC' },
                  { label: 'Dış Ölçüler', value: '1280*1480*260 mm' },
                  { label: 'Ünite Ağırlığı', value: '55 kg' },
                  { label: 'Soğutucu Akışkan', value: 'R134a' }
                ].map((spec, i) => (
                  <div key={i} className="flex bg-white py-4 px-6 text-[11px] uppercase tracking-wider">
                    <span className="w-1/2 font-black text-black">{spec.label}</span>
                    <span className="w-1/2 text-gray-500 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905555555555" className="bg-black text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center">
                TEKLİF ALIN
              </a>
              <button className="bg-transparent border border-gray-200 text-black px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors">
                TEKNİK DÖKÜMAN (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid - Sharp Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mb-32">
          <div className="bg-white p-12">
            <Settings className="text-black mb-8" size={32} strokeWidth={1.5} />
            <h3 className="text-lg font-black text-black mb-4 uppercase tracking-tight">OPSİYONEL SİSTEMLER</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Polen partikül filtresi entegre edilebilir yapısı ile iç mekan hava kalitesini maksimum seviyeye çıkarır.
            </p>
          </div>
          <div className="bg-white p-12">
            <Zap className="text-black mb-8" size={32} strokeWidth={1.5} />
            <h3 className="text-lg font-black text-black mb-4 uppercase tracking-tight">YÜKSEK VERİMLİLİK</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Değişken ortam parametrelerine uyum sağlayan akışkan kontrolü ile kompresör ömrünü uzatır.
            </p>
          </div>
          <div className="bg-white p-12">
            <ShieldCheck className="text-black mb-8" size={32} strokeWidth={1.5} />
            <h3 className="text-lg font-black text-black mb-4 uppercase tracking-tight">ECE R10 SERTİFİKASI</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Uluslararası elektromanyetik uyumluluk standartlarına tam uygunluk ve güvenli çalışma onayı.
            </p>
          </div>
        </div>

        {/* Control Panel - Sharp Split */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2 bg-gray-50 p-12 border border-gray-100">
            <img src="https://picsum.photos/seed/panel/800/500?grayscale" alt="Kontrol Paneli" className="w-full grayscale border border-gray-200" />
          </div>
          <div className="lg:w-1/2">
            <div className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-6 flex items-center gap-6">
              <span className="w-12 h-px bg-black"></span> KONTROL ÜNİTESİ
            </div>
            <h3 className="text-3xl font-black text-black mb-8 uppercase tracking-tighter leading-none">KLİMATRONİK <br/><span className="text-gray-400 font-light">YÖNETİM SİSTEMİ</span></h3>
            <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
              Etkin sıcaklık ve hava hızı kontrolü imkanı ile ısıl konforunuzu dilediğiniz gibi kontrol edin.
            </p>
            
            <ul className="space-y-6">
              {[
                '2.1 inç LCD ekran ile anlık veri takibi',
                '6 adet bağımsız kontrol butonu',
                'Termostat ayarlı hassas sıcaklık kontrolü',
                '3 kademeli hava hızı yönetimi'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black">
                  <ArrowRight size={14} className="text-gray-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dökümanlar - Sharp List */}
        <div className="bg-black p-16 text-white">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div>
              <div className="text-xs font-black text-gray-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-6">
                <span className="w-12 h-px bg-white/20"></span> KAYNAKLAR
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">TEKNİK <span className="text-gray-600 font-light">KÜTÜPHANE</span></h2>
            </div>
            <FileText size={48} className="text-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Teknik Döküman', desc: 'Ürün boyutları, kapasite ve ağırlık detayları.' },
              { title: 'Montaj Talimatı', desc: 'Adım adım kurulum ve entegrasyon rehberi.' },
              { title: 'Elektrik Şeması', desc: 'Kablolama ve kontrol ünitesi bağlantı planı.' }
            ].map((doc, i) => (
              <a key={i} href="#" className="group bg-white/5 border border-white/10 p-8 hover:bg-white hover:text-black transition-all duration-500">
                <h4 className="text-sm font-black uppercase tracking-widest mb-4">{doc.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-600 text-xs leading-relaxed mb-8 font-light">{doc.desc}</p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                  <span>İNDİR (PDF)</span>
                  <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
