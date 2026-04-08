import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, CheckCircle2, Truck, Star, Shield, Battery, Gauge } from 'lucide-react';

export default function CoolmanDetail({ product, brand }: { product: any, brand: any }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32">
      <Helmet>
        <title>{product.name} | Coolman Elektrikli Klima - Çınar Oto Klima</title>
      </Helmet>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 max-w-7xl flex items-center text-[10px] font-bold tracking-widest text-slate-400 mb-12">
        <Link to="/" className="hover:text-[#0f2851] transition-colors">Anasayfa</Link>
        <ChevronRight size={12} className="mx-3 text-slate-300" />
        <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-[#0f2851] transition-colors">{brand.name} servisi</Link>
        <ChevronRight size={12} className="mx-3 text-slate-300" />
        <span className="text-[#0f2851]">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl pb-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          {/* Left: Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-white border border-slate-200 rounded-3xl p-12 shadow-sm flex items-center justify-center overflow-hidden group">
              <img 
                src={product.images?.[activeImageIndex] || 'https://picsum.photos/seed/coolman/600/600'} 
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4">
                {product.images.map((img: string, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-24 h-24 shrink-0 rounded-2xl border-2 bg-white flex items-center justify-center transition-all ${activeImageIndex === idx ? 'border-[#0f2851] p-1 shadow-md' : 'border-slate-100 p-2'}`}
                  >
                    <img src={img} alt={`${product.name} ${idx}`} className="max-w-full max-h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f2851]/10 text-[#0f2851] rounded-full text-[10px] font-black uppercase tracking-tighter mb-6">
              <Star size={12} className="fill-current" />
              Premium Park Klima Sistemi
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0f2851] mb-8 tracking-tighter leading-[1.1]">
              {product.name}
            </h1>
            
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg mb-10">
              {product.description.split('\n\n').map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-[#0f2851] transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0f2851] group-hover:bg-[#0f2851] group-hover:text-white transition-colors">
                  <Battery size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Volt desteği</span>
                  <span className="text-sm font-black text-[#0f2851]">12V / 24V Uyumlu</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-[#0f2851] transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0f2851] group-hover:bg-[#0f2851] group-hover:text-white transition-colors">
                  <Gauge size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Güç</span>
                  <span className="text-sm font-black text-[#0f2851]">2400W Kapasite</span>
                </div>
              </div>
            </div>

            <a href="tel:+905070485034" className="block w-full bg-[#fa9700] hover:bg-black text-black hover:text-white text-center py-6 rounded-2xl text-[11px] font-black tracking-tight shadow-xl transition-all uppercase">
              HEMEN TEKLİF VE BİLGİ ALIN
            </a>
          </div>
        </div>

        {/* Technical Table Section */}
        {product.technicalTable && (
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm mb-24 overflow-hidden">
            <h2 className="text-2xl font-black text-[#0f2851] mb-8 tracking-tighter flex items-center gap-3">
              <Gauge size={24} className="text-[#fa9700]" />
              Teknik Özellikler
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <tbody>
                  {product.technicalTable.rows.map((row: string[], idx: number) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <th className={`py-5 px-4 font-bold text-slate-500 ${row.length === 3 ? 'w-1/3' : 'w-1/2 md:w-1/3'}`}>
                        {row[0]}
                      </th>
                      {row.slice(1).map((colText, colIdx) => (
                        <td key={colIdx} className={`py-5 px-4 font-medium ${row[0] === 'Teknik Değerler' ? 'text-slate-400 font-bold' : 'text-slate-700'}`}>
                          {colText}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Areas & Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-black text-[#0f2851] mb-8 tracking-tighter flex items-center gap-3">
              <Truck size={24} className="text-[#fa9700]" />
              Kullanım Alanları
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.usageAreas?.map((area: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 group">
                  <CheckCircle2 size={16} className="text-[#fa9700] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-black text-[#0f2851] mb-8 tracking-tighter flex items-center gap-3">
              <Shield size={24} className="text-[#fa9700]" />
              Sistemin Avantajları
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.advantages?.map((adv: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 group">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compatibility List - Professional Look */}
        <div className="bg-[#0f2851] p-16 rounded-[40px] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -mr-48 -mt-48"></div>
          <div className="relative z-10 w-full">
            <h2 className="text-3xl font-black mb-12 tracking-tighter text-center">Uyumlu Araç Segmentleri</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {product.compatibleVehicles?.map((vehicle: string, i: number) => (
                <div key={i} className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-sm font-bold border border-white/10 hover:bg-white hover:text-[#0f2851] transition-all duration-300">
                  {vehicle}
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-slate-400 text-sm font-light italic">
              * Diğer tüm marka ve model çekiciler için montaj kiti ve çözümümüz mevcuttur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
