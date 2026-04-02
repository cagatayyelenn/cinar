import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products } from '../data/mockData';
import { PhoneCall, ChevronRight, Filter, Search, ShieldCheck } from 'lucide-react';

export default function BrandProducts({ brandId: propBrandId }: { brandId?: string }) {
  const { brandId: paramBrandId, categoryId } = useParams<{ brandId: string; categoryId: string }>();
  const brandId = propBrandId || paramBrandId;
  const brand = brands.find(b => b.id === brandId);

  if (!brand) {
    return <div className="container mx-auto py-20 text-center">Marka bulunamadı.</div>;
  }

  const brandProducts = products.filter(p => p.brandId === brandId);

  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        <title>{brand.name} Ürünleri ve Yedek Parçaları | Çınar Oto Klima</title>
        <meta name="description" content={`${brand.name} markalı orijinal klimalar, ısıtıcılar ve yedek parçalar. En uygun fiyatlar ve yetkili servis güvencesiyle.`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-[#0f2851]/80 bg-[url('/arkaplan.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="text-white max-w-3xl">
              <div className="flex items-center text-xs text-gray-400 mb-8 font-bold uppercase tracking-widest">
                <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
                <ChevronRight size={14} className="mx-2" />
                <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-white transition-colors">{brand.name} Servisi</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-white">Ürünler</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                {brand.name} <br/><span className="text-gray-500 font-light">Ürünleri</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Yüksek performanslı {brand.name} klimaları, ısıtıcıları ve %100 orijinal yedek parçaları. Yetkili servis güvencesiyle.
              </p>
            </div>
            <div className="bg-white p-8 shrink-0 border border-gray-800">
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain grayscale opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Categories */}
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-sm font-black text-black mb-6 uppercase tracking-widest border-b border-gray-200 pb-4 flex items-center">
                <Filter size={16} className="mr-3" /> Kategoriler
              </h3>
              <ul className="space-y-4">
                <li>
                  <button className="w-full flex items-center justify-between text-left text-black font-bold group">
                    <span className="group-hover:translate-x-1 transition-transform uppercase text-sm tracking-wide">Tüm Ürünler</span>
                    <span className="bg-black text-white text-xs py-1 px-2 font-mono">{brandProducts.length}</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-between text-left text-gray-500 hover:text-black transition-colors group">
                    <span className="group-hover:translate-x-1 transition-transform uppercase text-sm tracking-wide font-medium">Klimalar</span>
                    <span className="bg-gray-100 text-black text-xs py-1 px-2 font-mono">
                      {brandProducts.filter(p => p.category === 'Klima').length}
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-between text-left text-gray-500 hover:text-black transition-colors group">
                    <span className="group-hover:translate-x-1 transition-transform uppercase text-sm tracking-wide font-medium">Isıtıcılar</span>
                    <span className="bg-gray-100 text-black text-xs py-1 px-2 font-mono">
                      {brandProducts.filter(p => p.category === 'Isıtıcı').length}
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-between text-left text-gray-500 hover:text-black transition-colors group">
                    <span className="group-hover:translate-x-1 transition-transform uppercase text-sm tracking-wide font-medium">Yedek Parçalar</span>
                    <span className="bg-gray-100 text-black text-xs py-1 px-2 font-mono">
                      {brandProducts.filter(p => p.category === 'Yedek Parça').length}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-black p-8 text-white">
              <ShieldCheck size={32} className="text-white mb-6" />
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight leading-tight">Doğru Ürünü Bulamadınız mı?</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Aradığınız {brand.name} yedek parçası veya ürünü listede yoksa, şasi numaranızla birlikte bize ulaşın. Stoklarımızı sizin için kontrol edelim.
              </p>
              
              <a href="tel:+905070485034" className="w-full bg-white hover:bg-gray-200 text-black py-4 font-bold flex items-center justify-center transition-colors mb-4 uppercase tracking-widest text-xs">
                <PhoneCall className="mr-2" size={16} /> Bizi Arayın
              </a>
              <a href="https://wa.me/905070485034" target="_blank" rel="noreferrer" className="w-full border border-gray-700 hover:border-white text-white py-4 font-bold flex items-center justify-center transition-colors uppercase tracking-widest text-xs">
                WhatsApp Destek
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Top Bar */}
            <div className="bg-white border border-gray-200 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-96">
                <input 
                  type="text" 
                  placeholder="Ürün veya parça kodu ara..." 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-black focus:bg-white transition-all rounded-none"
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                Toplam <strong className="text-black text-sm">{brandProducts.length}</strong> ürün
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {brandProducts.length > 0 ? brandProducts.map(product => (
                <Link key={product.id} to={`/detay/${brand.id}/${product.id}`} className="group flex flex-col h-full bg-white border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="relative h-64 bg-gray-50 flex items-center justify-center p-8 overflow-hidden border-b border-gray-100">
                    <div className="absolute top-4 left-4 bg-black px-3 py-1 text-xs font-bold text-white uppercase tracking-widest z-10">
                      {product.category}
                    </div>
                    <img 
                      // @ts-ignore
                      src={product.images?.[0] || 'https://picsum.photos/seed/klima1/400/300'} 
                      alt={product.name} 
                      className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-bold text-black text-lg mb-3 line-clamp-2 uppercase tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-auto flex items-center justify-end pt-6 border-t border-gray-100">
                      <span className="px-6 py-3 font-bold text-[10px] text-gray-500 uppercase tracking-widest bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors border border-gray-100 group-hover:border-black">
                        Detayları İncele <ChevronRight size={14} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-full py-32 flex flex-col items-center justify-center bg-gray-50 border border-gray-200">
                  <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center mb-6">
                    <Search size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">Ürün Bulunamadı</h3>
                  <p className="text-gray-500 text-center max-w-md text-sm leading-relaxed">
                    Bu kategoriye ait ürün stoklarımızda kalmamış olabilir. Lütfen bizimle iletişime geçin.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
