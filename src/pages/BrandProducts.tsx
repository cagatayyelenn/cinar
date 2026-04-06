import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products } from '../data/mockData';
import { PhoneCall, ChevronRight, Filter, Search, ShieldCheck, ArrowRight, XCircle, ChevronDown } from 'lucide-react';

export default function BrandProducts({ brandId: propBrandId }: { brandId?: string }) {
  const { brandId: paramBrandId, categoryId } = useParams<{ brandId: string; categoryId: string }>();
  const navigate = useNavigate();
  const brandId = propBrandId || paramBrandId;
  const brand = brands.find(b => b.id.toLowerCase() === brandId?.toLowerCase());
  
  // Initialize from URL param if exists
  const initialCategory = brand?.menuProducts?.find(m => m.path === categoryId)?.label || null;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Update selection if URL changes
  useEffect(() => {
    if (categoryId) {
      const cat = brand?.menuProducts?.find(m => m.path === categoryId);
      if (cat) {
        setSelectedCategory(cat.label);
      } else {
        setSelectedCategory(null);
      }
    } else {
      setSelectedCategory(null);
    }
  }, [categoryId, brand]);

  if (!brand) {
    return <div className="container mx-auto py-20 text-center">Marka bulunamadı.</div>;
  }

  const brandProducts = products.filter(p => p.brandId.toLowerCase() === brandId?.toLowerCase());
  
  // Dynamic categories based on brand menu or defaults
  const categories = brand.menuProducts || [];

  const filteredProducts = brandProducts.filter(p => {
    const searchLower = searchQuery.toLocaleLowerCase('tr-TR').trim();
    const matchesSearch = 
      (p.name || '').toLocaleLowerCase('tr-TR').includes(searchLower) || 
      (p.description || '').toLocaleLowerCase('tr-TR').includes(searchLower);
    
    if (!selectedCategory) return matchesSearch;
    return p.category === selectedCategory && matchesSearch;
  });

  const handleCategoryClick = (catLabel: string | null) => {
    if (catLabel === null) {
      navigate(`/${brand.id}/urunler`);
    } else {
      const catPath = brand.menuProducts?.find(m => m.label === catLabel)?.path;
      if (catPath) {
        navigate(`/${brand.id}/${catPath}`);
      }
    }
  };

  const pageTitle = selectedCategory 
    ? `${selectedCategory} | ${brand.name} Ürünleri - Çınar Oto Klima`
    : `${brand.name} Tüm Ürünleri ve Yedek Parçaları | Çınar Oto Klima`;

  const pageDescription = selectedCategory
    ? `${brand.name} markalı orijinal ${selectedCategory.toLocaleLowerCase('tr-TR')} modellerini keşfedin. En uygun fiyatlar ve yetkili servis güvencesiyle.`
    : `${brand.name} markalı orijinal klimalar, ısıtıcılar ve %100 orijinal yedek parçalar. Çınar Oto Klima yetkili servis güvencesiyle tüm ürünler.`;

  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="canonical" href={selectedCategory ? `https://cinarotoklima.com/${brand.id}/${categoryId}` : `https://cinarotoklima.com/${brand.id}/urunler`} />
      </Helmet>

      {/* Hero Section */}
      <div 
        className="pt-32 pb-20 relative"
        style={{ 
          background: 'linear-gradient(178deg, rgba(0, 0, 0, .2) -106.73%, rgba(41, 51, 236, .2) -14.51%, rgba(255, 157, 72, .2) 47.94%, rgba(237, 210, 173, .2) 75.02%)' 
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="text-white max-w-3xl">
              <div className="flex items-center text-xs text-gray-400 mb-8 font-bold tracking-tight">
                <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
                <ChevronRight size={14} className="mx-2" />
                <Link to={`/${brand.id}-yetkili-servisi`} className="hover:text-white transition-colors">{brand.name} servisi</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-white">Ürünler {selectedCategory && ` - ${selectedCategory}`}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                {brand.name} <br/><span className="text-gray-500 font-light">{selectedCategory || 'ürünleri'}</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Yüksek performanslı {brand.name} {selectedCategory ? selectedCategory.toLocaleLowerCase('tr-TR') : 'klimaları, ısıtıcıları ve %100 orijinal yedek parçaları'}. Yetkili servis güvencesiyle.
              </p>
            </div>
            <div className="bg-white p-10 shrink-0 border border-white/20 rounded-md shadow-2xl">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`${brand.id === 'yilkar' ? 'h-[100px]' : 'h-[150px]'} w-auto object-contain`} 
              />
            </div>
          </div>
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/80 animate-bounce-slow">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Categories */}
            <div className="bg-white border border-slate-100 p-8 rounded-md shadow-sm">
              <h3 className="text-sm font-black text-black mb-6 tracking-tight border-b border-slate-100 pb-4 flex items-center">
                <Filter size={16} className="mr-3" /> Kategoriler
              </h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => handleCategoryClick(null)}
                    className={`w-full flex items-center justify-between text-left transition-all p-3 rounded-xl text-[11px] tracking-tight group ${selectedCategory === null ? 'bg-black text-white font-black' : 'text-gray-500 hover:bg-gray-50 hover:text-black font-medium'}`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Tüm ürünler</span>
                    <span className={`${selectedCategory === null ? 'bg-white/20 text-white' : 'bg-gray-100 text-black'} text-[10px] py-1 px-2 font-mono rounded-md`}>{brandProducts.length}</span>
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.path}>
                    <button 
                      onClick={() => handleCategoryClick(cat.label)}
                      className={`w-full flex items-center justify-between text-left transition-all p-3 rounded-xl text-[11px] tracking-tight group ${selectedCategory === cat.label ? 'bg-black text-white font-black' : 'text-gray-500 hover:bg-gray-50 hover:text-black font-medium'}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{cat.label}</span>
                      <span className={`${selectedCategory === cat.label ? 'bg-white/20 text-white' : 'bg-gray-100 text-black'} text-[10px] py-1 px-2 font-mono rounded-md`}>
                        {brandProducts.filter(p => p.category === cat.label).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-[#0f2851] p-10 text-white rounded-md shadow-2xl">
              <ShieldCheck size={32} className="text-amber-500 mb-6" />
              <h3 className="text-xl font-black mb-4 tracking-tighter leading-none">Doğru ürünü bulamadınız mı?</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                Aradığınız {brand.name} yedek parçası veya ürünü listede yoksa, bize ulaşın. Stoklarımızı sizin için kontrol edelim.
              </p>
              
              <a href="tel:+905070485034" className="w-full bg-[#fa9700] hover:bg-white text-black py-4 rounded-full font-bold flex items-center justify-center transition-all mb-4 tracking-tight text-[10px] shadow-lg">
                <PhoneCall className="mr-2" size={16} /> Bizi arayın
              </a>
              <a href="https://wa.me/905070485034" target="_blank" rel="noreferrer" className="w-full border border-white/20 hover:border-white text-white py-4 rounded-full font-bold flex items-center justify-center transition-all tracking-tight text-[10px]">
                WhatsApp destek
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Top Bar - Softer & Simpler */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              <div className="relative w-full sm:w-[450px] group">
                <input 
                  type="text" 
                  placeholder="Ürün ara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-100 text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-all rounded-full placeholder:text-gray-400"
                />
                <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                  >
                    <XCircle size={16} />
                  </button>
                )}
              </div>
              <div className="text-[10px] text-gray-400 font-bold tracking-tight px-4 py-2 border border-gray-100 bg-gray-50/50">
                <span className="text-black font-black mr-1">{filteredProducts.length}</span> ürün listeleniyor
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? filteredProducts.map(product => (
                <Link key={product.id} to={`/${brand.id}-${product.id}`} className="group flex flex-col h-full bg-white transition-all duration-500 relative border border-slate-100 hover:shadow-2xl rounded-md overflow-hidden">
                  {/* Top Image Section */}
                  <div className="relative h-64 bg-white flex justify-center items-center overflow-hidden border-b border-slate-50 p-6">
                    <div className="absolute top-4 left-6 bg-[#dbe825] px-4 py-1 text-[10px] font-black text-black tracking-tight z-10 rounded-full">
                      YENİ
                    </div>
                    <img 
                      src={product.images?.[0] || 'https://picsum.photos/seed/klima1/400/300'} 
                      alt={product.name} 
                      className="w-full h-full object-contain transition-transform duration-500" 
                    />
                  </div>
                  {/* Card Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-gray-400 tracking-tight mb-4 block">
                      {product.category} | {brand.name}
                    </span>
                    <h3 className="font-black text-black text-xl mb-8 leading-tight group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Suitable for Section */}
                    <div className="mt-auto pt-6 border-t border-slate-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-black grayscale group-hover:grayscale-0 transition-all duration-500">
                           <img src="/ticari.svg" alt="Ticari Araç" className="w-6 h-6 mr-2" />
                           <span className="text-[10px] font-black tracking-tight">Ticari araç</span>
                        </div>
                        <ArrowRight size={18} className="text-slate-200 group-hover:text-black transition-all group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-full py-32 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200">
                  <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Search size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 tracking-tighter">Sonuç bulunamadı</h3>
                  <p className="text-gray-500 text-center max-w-sm text-sm leading-relaxed mb-8">
                    "<strong>{searchQuery}</strong>" aramasıyla eşleşen ürün bulunamadı. Lütfen farklı anahtar kelimeler deneyin.
                  </p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="bg-black text-white px-8 py-4 font-black text-xs tracking-tight hover:bg-gray-800 transition-colors"
                  >
                    Aramayı temizle
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
