import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products, brands } from '../data/mockData';
import { ChevronRight, Filter, ChevronDown } from 'lucide-react';

export default function SpareParts() {
  const spareParts = products.filter(p => p.category === 'Yedek Parça');

  return (
    <>
      <Helmet>
        <title>Yedek Parça | Çınar Oto Klima</title>
        <meta name="description" content="Ticari araç klimaları ve ısıtıcıları için %100 orijinal yedek parçalar." />
      </Helmet>

      <div 
        className="pt-36 pb-16 relative"
        style={{ 
          background: 'linear-gradient(178deg, rgba(0, 0, 0, .2) -106.73%, rgba(41, 51, 236, .2) -14.51%, rgba(255, 157, 72, .2) 47.94%, rgba(237, 210, 173, .2) 75.02%)' 
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Orijinal Yedek Parçalar</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tüm yetkili servis markalarımızın %100 orijinal yedek parçaları stoklarımızda.
          </p>
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-blue-100/80 animate-bounce-slow">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters */}
          <div className="md:w-1/4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-32">
              <h3 className="font-bold text-black mb-4 flex items-center">
                <Filter size={18} className="mr-2" /> Filtreler
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Marka</label>
                  <select className="w-full border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500">
                    <option>Tüm Markalar</option>
                    {brands.map(b => <option key={b.id}>{b.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="md:w-3/4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {spareParts.map(product => (
                <Link key={product.id} to={`/${product.brandId}-${product.id}`} className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img src={product.images?.[0] || 'https://picsum.photos/seed/klima1/400/300'} alt={product.name} className="w-full h-full object-cover transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black shadow-sm">
                      {brands.find(b => b.id === product.brandId)?.name}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-black text-lg mb-2 line-clamp-2 group-hover:text-black transition-colors">{product.name}</h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xl font-bold text-black">İncele</span>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
