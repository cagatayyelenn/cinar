import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { products, brands } from '../data/mockData';
import { ChevronRight, LayoutGrid } from 'lucide-react';

export default function SpareParts() {
  // Directly filter for products where category is 'Yedek Parça'
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === 'Yedek Parça');
  }, []);

  return (
    <>
      <Helmet>
        <title>Yedek Parça Kataloğu | Çınar Oto Klima</title>
        <meta name="description" content="Orijinal yedek parçalar, klima kompresörleri, kondanserler, fan motorları ve braket setleri tek bir çatı altında." />
      </Helmet>

      {/* Hero Header */}
      <div className="pt-40 pb-20 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black text-black mb-6 tracking-tight uppercase leading-tight">
              Yedek Parça <span className="text-orange-500">Kataloğu</span>
            </h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
              Dünya devi markalarımızın orijinal yedek parçaları, kompresörleri, kondanserleri ve tüm iklimlendirme bileşenleri.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-8">
          <h2 className="text-2xl font-black text-black uppercase tracking-tight">
            Tüm Yedek Parçalar
            <span className="ml-4 text-sm font-medium text-gray-400 normal-case tracking-normal">
              ({filteredProducts.length} Ürün Bulundu)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  <div className="relative h-64 bg-gray-50 overflow-hidden flex items-center justify-center p-6">
                    <img 
                      src={product.images?.[0] || 'https://picsum.photos/seed/klima1/800/600'} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Stage */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                        Orijinal Parça
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-black mb-4 leading-tight group-hover:text-orange-500 transition-colors uppercase tracking-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed mb-8 line-clamp-3">
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
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-tight">Ürün bulunamadı</h3>
          </div>
        )}
      </div>
    </>
  );
}
