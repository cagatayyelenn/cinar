import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight, ShieldCheck, FileText, Settings, Zap } from 'lucide-react';

export default function WebastoDetail({ product, brand }: { product: any, brand: any }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Split name for styling
  const nameParts = product.name.split(' ');
  const boldPart = nameParts.slice(0, Math.min(3, nameParts.length)).join(' ');
  const lightPart = nameParts.slice(Math.min(3, nameParts.length)).join(' ');

  return (
    <div className="bg-white min-h-screen pt-32">
      <Helmet>
        <title>{product.name} | Webasto Teknik Detaylar - Çınar Oto Klima</title>
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
          {/* Left: Image */}
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center p-12 bg-white border border-slate-100 rounded-md shadow-sm min-h-[400px]">
              <img 
                src={product.images?.[activeImageIndex] || 'https://picsum.photos/seed/webasto/400/300'} 
                alt={product.name} 
                className="max-w-full max-h-[400px] w-auto h-auto object-contain transition-transform duration-1000" 
              />
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 mt-4 overflow-x-auto pb-4">
                {product.images.map((img: string, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-24 h-24 shrink-0 border-2 overflow-hidden bg-white rounded-md flex items-center justify-center transition-all ${activeImageIndex === idx ? 'border-blue-600' : 'border-slate-100'}`}
                  >
                    <img src={img} alt={`${product.name} - ${idx + 1}`} className="max-w-full max-h-full p-2 object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Intro & Description */}
          <div className="lg:w-1/2">
            <div className="text-xs font-black text-blue-600 tracking-tight mb-6 flex items-center gap-6">
              <span className="w-12 h-px bg-blue-600"></span> Webasto Profesyonel Çözüm
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black mb-10 leading-[0.95] tracking-tighter">
              {boldPart} <br/><span className="text-gray-400 font-light">{lightPart}</span>
            </h1>
            
            <p className="text-gray-600 mb-12 leading-relaxed font-light text-lg">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:+905070485034" className="bg-[#0f2851] text-white px-12 py-6 rounded-full text-[11px] font-black tracking-tight hover:bg-blue-600 transition-all shadow-xl">
                TEKNİK DESTEK VE FİYAT ALIN
              </a>
            </div>
          </div>
        </div>

        {/* Technical Data Table - Integrated Look - NOW FIRST */}
        {product.technicalTable && (
          <div className="mb-20">
            <h3 className="text-xl font-black text-black mb-8 tracking-tighter flex items-center gap-4">
              TEKNİK ÖZELLİKLER <span className="text-gray-300 font-light">| Teknik Spesifikasyonlar</span>
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-2xl bg-white mb-12">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#0f2851] text-white">
                    {product.technicalTable.headers.map((header: string, i: number) => (
                      <th key={i} className="py-6 px-8 text-[11px] font-black uppercase tracking-widest border-r border-white/10 last:border-0 text-center first:text-left">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-black">
                  {product.technicalTable.rows.map((row: string[], i: number) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
                      {row.map((cell: string, j: number) => (
                        <td key={j} className={`py-5 px-8 text-[10px] tracking-tight border-r border-slate-50 last:border-0 font-medium ${j === 0 ? 'bg-slate-50/50 font-bold w-1/3' : 'text-gray-500 text-center'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* User Requested: Header and Description under Table */}
            <div className="mt-16 pt-16 border-t border-slate-100">
              <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">Ürün özellikleri</h2>
              <div className="prose prose-slate max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed font-light text-xl italic border-l-4 border-blue-600 pl-8 py-2">
                  {product.description}
                </p>
              </div>

              {/* Added: Specific Features Grid even when technicalTable exists */}
              {product.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 group hover:bg-blue-600 hover:border-blue-600 transition-all duration-500">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-500 transition-colors">
                        <Zap size={14} className="text-blue-600 group-hover:text-white" />
                      </div>
                      <span className="text-[11px] font-black tracking-tight text-gray-700 group-hover:text-white transition-colors uppercase">{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Fallback for regular features if no table */}
        {!product.technicalTable && product.features && (
          <div className="mb-32">
            <h3 className="text-xs font-black text-black mb-6 tracking-tight border-b border-slate-100 pb-4 uppercase">Teknik özellikler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((f: string, i: number) => (
                <div key={i} className="flex bg-slate-50 p-6 rounded-md text-[11px] font-bold tracking-tight text-gray-700">
                   <ArrowRight size={14} className="mr-3 text-blue-600" />
                   {f}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
