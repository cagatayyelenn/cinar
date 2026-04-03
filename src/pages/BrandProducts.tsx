import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, products } from '../data/mockData';
import { PhoneCall, ChevronRight, Filter, Search, ShieldCheck, ArrowRight, XCircle } from 'lucide-react';

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
                <span className="text-white">Ürünler {selectedCategory && ` - ${selectedCategory}`}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                {brand.name} <br/><span className="text-gray-500 font-light">{selectedCategory || 'Ürünleri'}</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Yüksek performanslı {brand.name} {selectedCategory ? selectedCategory.toLocaleLowerCase('tr-TR') : 'klimaları, ısıtıcıları ve %100 orijinal yedek parçaları'}. Yetkili servis güvencesiyle.
              </p>
            </div>
            <div className="bg-white p-8 shrink-0 border border-gray-800">
              <img src={brand.logo} alt={brand.name} className="h-[200px] w-auto object-contain" />
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
                  <button 
                    onClick={() => handleCategoryClick(null)}
                    className={`w-full flex items-center justify-between text-left transition-colors uppercase text-sm tracking-wide group ${selectedCategory === null ? 'text-black font-black' : 'text-gray-500 hover:text-black font-medium'}`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Tüm Ürünler</span>
                    <span className={`${selectedCategory === null ? 'bg-black text-white' : 'bg-gray-100 text-black'} text-xs py-1 px-2 font-mono`}>{brandProducts.length}</span>
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.path}>
                    <button 
                      onClick={() => handleCategoryClick(cat.label)}
                      className={`w-full flex items-center justify-between text-left transition-colors uppercase text-sm tracking-wide group ${selectedCategory === cat.label ? 'text-black font-black' : 'text-gray-500 hover:text-black font-medium'}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{cat.label}</span>
                      <span className={`${selectedCategory === cat.label ? 'bg-black text-white' : 'bg-gray-100 text-black'} text-xs py-1 px-2 font-mono`}>
                        {brandProducts.filter(p => p.category === cat.label).length}
                      </span>
                    </button>
                  </li>
                ))}
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
            
            {/* Top Bar - Softer & Simpler */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              <div className="relative w-full sm:w-[450px] group">
                <input 
                  type="text" 
                  placeholder="Ürün adı veya kodu ile ara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 text-sm font-medium focus:outline-none focus:border-black focus:bg-white transition-all rounded-none placeholder:text-gray-400"
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                  >
                    <XCircle size={16} />
                  </button>
                )}
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-4 py-2 border border-gray-100 bg-gray-50/50">
                <span className="text-black font-black mr-1">{filteredProducts.length}</span> Ürün Listeleniyor
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? filteredProducts.map(product => (
                <Link key={product.id} to={`/${brand.id}-${product.id}`} className="group flex flex-col h-full bg-white transition-all duration-300 relative border border-gray-100 hover:border-gray-200 hover:shadow-xl overflow-hidden rounded-none">
                  {/* Top Image Section */}
                  <div className="relative h-64 bg-white flex justify-center items-center overflow-hidden border-b border-gray-50">
                    <div className="absolute top-4 left-4 bg-[#dbe825] px-4 py-1 text-[10px] font-black text-black tracking-widest z-10">
                      YENİ
                    </div>
                    <img 
                      src={product.images?.[0] || 'https://picsum.photos/seed/klima1/400/300'} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" 
                    />
                  </div>
                  {/* Card Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block opacity-80">
                      {product.category} | {brand.name}
                    </span>
                    <h3 className="font-bold text-black text-xl mb-8 leading-tight group-hover:underline decoration-2 underline-offset-4">
                      {product.name}
                    </h3>
                    
                    {/* Suitable for Section */}
                    <div className="mt-auto border-t border-gray-100 pt-6">
                      <p className="text-black font-black text-[10px] uppercase tracking-widest mb-4 opacity-60">Kullanım Alanı:</p>
                      <div className="flex flex-wrap gap-4 text-black mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src="/araba.svg" alt="Araba" className="w-8 h-8" title="Otomobil" />
                        <img src="/ticari.svg" alt="Ticari Araç" className="w-8 h-8" title="Hafif Ticari" />
                        <img src="/otobus.svg" alt="Otobüs" className="w-8 h-8" title="Minibüs / Otobüs" />
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="font-black text-xs uppercase tracking-widest text-black flex items-center group-hover:translate-x-1 transition-transform">
                          İncele <ArrowRight size={16} className="ml-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-full py-32 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200">
                  <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Search size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">Sonuç Bulunamadı</h3>
                  <p className="text-gray-500 text-center max-w-sm text-sm leading-relaxed mb-8">
                    "<strong>{searchQuery}</strong>" aramasıyla eşleşen ürün bulunamadı. Lütfen farklı anahtar kelimeler deneyin.
                  </p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="bg-black text-white px-8 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
                  >
                    Aramayı Temizle
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
