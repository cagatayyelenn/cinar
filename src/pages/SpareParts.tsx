import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { products, brands } from '../data/mockData';
import { ChevronRight, Filter, LayoutGrid, Check } from 'lucide-react';

export default function SpareParts() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  // Filter brands to show only the core 4 requested + Delphi (linked to Webasto)
  const targetBrandIds = ['yilkar', 'webasto', 'coolman', 'climart'];
  const sidebarBrands = brands.filter(b => targetBrandIds.includes(b.id));

  const filteredProducts = useMemo(() => {
    if (selectedBrand === 'all') {
      return products.filter(p => targetBrandIds.includes(p.brandId));
    }
    return products.filter(p => p.brandId === selectedBrand);
  }, [selectedBrand]);

  return (
    <>
      <Helmet>
        <title>Yedek Parça ve Ürünler | Çınar Oto Klima</title>
        <meta name="description" content="Yılkar, Webasto, Coolman ve Climart marka tüm yedek parça ve üniteler." />
      </Helmet>

      {/* Hero Header */}
      <div className="pt-40 pb-20 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black text-black mb-6 tracking-tight uppercase leading-tight">
              Yedek Parça <span className="text-orange-500">&</span> Ürün Kataloğu
            </h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
              Dünya devi markalarımızın orijinal yedek parçaları, klima üniteleri ve ısıtma sistemleri tek bir çatı altında.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center">
                  <Filter size={14} className="mr-2 text-orange-500" /> Markalar
                </h3>
                
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={`flex items-center justify-between px-6 py-4 rounded-xl font-bold transition-all duration-300 text-sm
                      ${selectedBrand === 'all' 
                        ? 'bg-black text-white shadow-xl shadow-black/10 translate-x-1' 
                        : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-black border border-transparent hover:border-gray-100'
                      }`}
                  >
                    <span className="flex items-center">
                      <LayoutGrid size={18} className="mr-3 opacity-60" /> TÜM ÜRÜNLER
                    </span>
                    {selectedBrand === 'all' && <Check size={16} className="text-orange-500" />}
                  </button>

                  {sidebarBrands.map(brand => (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.id)}
                      className={`flex items-center justify-between px-6 py-4 rounded-xl font-bold transition-all duration-300 text-sm
                        ${selectedBrand === brand.id 
                          ? 'bg-black text-white shadow-xl shadow-black/10 translate-x-1' 
                          : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-black border border-transparent hover:border-gray-100'
                        }`}
                    >
                      <span className="flex items-center uppercase tracking-tight">
                        {brand.name}
                      </span>
                      {selectedBrand === brand.id && <Check size={16} className="text-orange-500" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 hidden lg:block">
                <h4 className="text-orange-800 font-black mb-3 uppercase tracking-tight text-sm">Orijinal Parça Garantisi</h4>
                <p className="text-orange-700/70 text-xs leading-relaxed font-medium">
                  Sistemlerinizin ömrünü uzatmak ve maksimum performansı korumak için sadece onaylı ve garantili orijinal yedek parçalar kullanıyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Product Listing */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-8">
              <h2 className="text-2xl font-black text-black uppercase tracking-tight">
                {selectedBrand === 'all' ? 'Tüm Ürünler' : sidebarBrands.find(b => b.id === selectedBrand)?.name}
                <span className="ml-4 text-sm font-medium text-gray-300 normal-case tracking-normal">
                  ({filteredProducts.length} Ürün Bulundu)
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link 
                      to={`/${product.brandId}-${product.id}`}
                      className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 h-full flex flex-col"
                    >
                      {/* Image Stage */}
                      <div className="relative h-64 bg-gray-50 overflow-hidden">
                        <img 
                          src={product.images?.[0] || 'https://picsum.photos/seed/klima1/800/600'} 
                          alt={product.name} 
                          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-black uppercase tracking-widest shadow-sm">
                            {brands.find(b => b.id === product.brandId)?.name}
                          </div>
                        </div>
                      </div>

                      {/* Content Stage */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="mb-2">
                          <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-black mb-4 leading-tight group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-xs font-medium leading-relaxed mb-8 line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            DETAYLI İNCELE
                          </span>
                          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                            <ChevronRight size={18} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <LayoutGrid size={48} className="mx-auto text-gray-200 mb-6" />
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-tight">Bu marka için ürün bulunamadı</h3>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
