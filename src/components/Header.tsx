import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { brands } from '../data/mockData';
import { cn } from '../lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b-2 border-black">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logolar/cinarotologo.png" alt="Çınar Oto Klima" className="h-20 md:h-24 w-auto object-contain py-1" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          <ul className="flex items-center space-x-0 h-full">
            {brands.map((brand, index) => {
              const isActive = location.pathname.includes(brand.id);
              return (
                <li
                  key={brand.id}
                  className="group static flex items-center h-full"
                  onMouseEnter={() => setActiveBrand(brand.id)}
                  onMouseLeave={() => setActiveBrand(null)}
                >
                  <Link
                    to={`/${brand.id}-yetkili-servisi`}
                    className={cn(
                      "px-6 py-3 transition-all duration-200 flex items-center h-16 border-x border-transparent",
                      isActive
                        ? "bg-black text-white border-black"
                        : "text-black hover:bg-gray-50 hover:border-gray-100"
                    )}
                  >
                    <span className="font-black text-sm uppercase tracking-wide">
                      {brand.name}
                    </span>
                    <ChevronDown size={14} className={cn("ml-2 transition-transform group-hover:rotate-180", isActive ? "text-white" : "text-gray-400")} />
                  </Link>

                  {/* Mega Menu - Sharp Edges */}
                  <div className={cn(
                    "absolute top-full left-[44%] -translate-x-1/2 w-[700px] bg-white border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex overflow-hidden z-50",
                    "origin-top"
                  )}>
                    {/* Left side: Brand Info */}
                    <div className="w-1/3 bg-gray-50 p-8 border-r border-gray-100 flex flex-col items-center justify-center">
                      <img src={brand.logo} alt={brand.name} className="w-32 h-auto mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <Link to={`/${brand.id}-yetkili-servisi`} className="text-[10px] text-white font-black bg-black px-4 py-2 uppercase tracking-widest hover:bg-gray-800 transition-colors">Yetkili Servis &rarr;</Link>
                    </div>

                    {/* Right side: Links */}
                    <div className="w-2/3 p-8 flex space-x-12">
                      <div className="flex-1">
                        <h4 className="font-black text-black text-xs uppercase tracking-[0.2em] mb-6 border-b-2 border-black pb-2">Ürünler</h4>
                        <ul className="space-y-4">
                          {/* @ts-ignore */}
                          {brand.menuProducts ? brand.menuProducts.map((p, i) => (
                            <li key={i}><Link to={`/${brand.id}/${p.path}`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> {p.label}</Link></li>
                          )) : (
                            <>
                              <li><Link to={`/${brand.id}/tum-urunler`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Tüm Ürünler</Link></li>
                              <li><Link to={`/${brand.id}/klimalar`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Klimalar</Link></li>
                              <li><Link to={`/${brand.id}/isiticilar`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Isıtıcılar</Link></li>
                            </>
                          )}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-black text-xs uppercase tracking-[0.2em] mb-6 border-b-2 border-black pb-2">Hizmetler</h4>
                        <ul className="space-y-4">
                          {/* @ts-ignore */}
                          {brand.menuServices ? brand.menuServices.map((s, i) => (
                            <li key={i}><Link to={`/${brand.id}-yetkili-servisi#${s.path}`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> {s.label}</Link></li>
                          )) : (
                            <>
                              <li><Link to={`/detay/${brand.id}/ticari-arac-klimalari`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Montaj</Link></li>
                              <li><Link to={`/detay/${brand.id}/ticari-arac-klimalari`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Bakım & Onarım</Link></li>
                              <li><Link to={`/detay/${brand.id}/ticari-arac-klimalari`} className="text-black hover:text-gray-500 flex items-center text-xs font-black uppercase tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Gaz Dolumu</Link></li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Buttons - Sharp */}
        <div className="hidden lg:flex items-center space-x-0">
          <a href="tel:+905070485034" className="flex items-center bg-gray-50 border-y border-l border-gray-200 px-6 py-4 hover:bg-gray-100 transition-colors h-16">
            <Phone size={16} className="text-black mr-3" />
            <span className="font-black text-black text-sm tracking-tighter uppercase">0507 048 50 34</span>
          </a>
          <a href="https://wa.me/905070485034" target="_blank" rel="noreferrer" className="flex items-center bg-black text-white px-8 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors h-16">
            WhatsApp <ChevronRight size={14} className="ml-2" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-black p-2 border-2 border-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Sharp Edges */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-black shadow-2xl overflow-hidden z-50">
          <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {brands.map((brand) => (
              <div key={brand.id} className="border-b border-gray-100 last:border-0 pb-4">
                <Link to={`/${brand.id}-yetkili-servisi`} className="font-black text-black flex items-center py-3 px-2 hover:bg-gray-50 uppercase tracking-tight">
                  <img src={brand.logo} alt={brand.name} className="h-6 w-auto object-contain mr-4" />
                  {brand.name}
                </Link>
                <div className="pl-10 space-y-2 mt-2">
                  <Link to={`/urunler/${brand.id}`} className="text-gray-500 block text-xs font-black py-2 px-2 hover:text-black uppercase tracking-widest">Ürünler</Link>
                  <Link to={`/detay/${brand.id}/ticari-arac-klimalari`} className="text-gray-500 block text-xs font-black py-2 px-2 hover:text-black uppercase tracking-widest">Hizmetler</Link>
                </div>
              </div>
            ))}
            <div className="pt-6 flex flex-col space-y-4">
              <a href="tel:+905070485034" className="flex items-center justify-center space-x-3 bg-gray-50 text-black px-6 py-4 border border-gray-200 font-black uppercase tracking-widest text-xs">
                <Phone size={16} />
                <span>0507 048 50 34</span>
              </a>
              <a href="https://wa.me/905070485034" className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 font-black uppercase tracking-widest text-xs">
                <MessageCircle size={16} />
                <span>WhatsApp Destek</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>

  );
}
