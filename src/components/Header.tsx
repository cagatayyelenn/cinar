import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, ChevronRight, ChevronDown, Menu, X, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { brands } from '../data/mockData';
import { cn } from '../lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-[999] w-full transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
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
              const isYedekParca = brand.id === 'yedek-parca';

              return (
                <li
                  key={brand.id}
                  className="group static flex items-center h-full"
                  onMouseEnter={() => setActiveBrand(brand.id)}
                  onMouseLeave={() => setActiveBrand(null)}
                >
                  <Link
                    to={isYedekParca ? `/${brand.id}` : `/${brand.id}-yetkili-servisi`}
                    className={cn(
                      "px-6 py-3 transition-all duration-200 flex items-center h-16 mx-1 text-black relative group/link",
                      isActive && "text-[#000879]"
                    )}
                  >
                    <span className="font-black text-sm capitalize tracking-wide relative whitespace-nowrap">
                      {brand.name}
                      {/* Underline Effect */}
                      <span className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-[#000879] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover/link:w-full"
                      )}></span>
                    </span>
                    {!isYedekParca && (
                      <ChevronDown size={14} className={cn("ml-2 transition-transform group-hover:rotate-180", isActive ? "text-[#000879]" : "text-gray-400")} />
                    )}
                  </Link>

                  {/* Mega Menu - Sharp Edges */}
                  {!isYedekParca && (
                    <div className={cn(
                      "absolute top-[calc(100%-8px)] left-[44%] -translate-x-1/2 w-[800px] bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex overflow-hidden z-50",
                      "origin-top scale-95 group-hover:scale-100"
                    )}>
                      {/* Left side: Brand Info */}
                      <div className="w-1/3 bg-gray-50 p-8 border-r border-gray-100 flex flex-col items-center justify-center">
                        <img src={brand.logo} alt={brand.name} className="w-40 h-auto mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-xl" />
                        <Link to={`/${brand.id}-yetkili-servisi`} className="text-[10px] text-white font-black bg-black px-6 py-3 rounded-full tracking-widest hover:bg-gray-800 transition-colors shadow-lg">Yetkili Servis &rarr;</Link>
                      </div>

                      {/* Right side: Links */}
                      <div className="w-2/3 p-8 flex space-x-12">
                        <div className="flex-1">
                          <h4 className="font-black text-xs tracking-[0.2em] mb-6 text-gray-400">Ürünler</h4>
                          <ul className="space-y-4">
                            {/* @ts-ignore */}
                            {brand.menuProducts ? brand.menuProducts.map((p, i) => (
                              <li key={i}>
                                <Link
                                  to={p.path.startsWith('/') ? p.path : `/${brand.id}/${p.path}`}
                                  className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"
                                >
                                  <ChevronRight size={12} className="mr-2 text-black" /> {p.label}
                                </Link>
                              </li>
                            )) : (
                              <>
                                <li><Link to={`/${brand.id}/tum-urunler`} className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Tüm Ürünler</Link></li>
                                <li><Link to={`/${brand.id}/klimalar`} className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Klimalar</Link></li>
                                <li><Link to={`/${brand.id}/isiticilar`} className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Isıtıcılar</Link></li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-xs tracking-[0.2em] mb-6 text-gray-400">Hizmetler</h4>
                          <ul className="space-y-4">
                            {/* @ts-ignore */}
                            {brand.menuServices ? brand.menuServices.map((s, i) => (
                              <li key={i}>
                                <Link
                                  to={s.path.startsWith('/') ? s.path : `/${brand.id}-${s.path}`}
                                  className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"
                                >
                                  <ChevronRight size={12} className="mr-2 text-black" /> {s.label}
                                </Link>
                              </li>
                            )) : (
                              <>
                                <li><Link to={`/${brand.id}-ticari-arac-klimalari`} className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Montaj</Link></li>
                                <li><Link to={`/${brand.id}-ticari-arac-klimalari`} className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Bakım & Onarım</Link></li>
                                <li><Link to={`/${brand.id}-ticari-arac-klimalari`} className="text-black hover:text-gray-500 flex items-center text-xs font-black tracking-widest transition-colors"><ChevronRight size={12} className="mr-2 text-black" /> Gaz Dolumu</Link></li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Buttons - Sharp */}
        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
          <a href="tel:+905070485034" className="flex items-center bg-gray-50 border border-gray-100 px-6 py-3 hover:bg-gray-100 transition-colors h-12 rounded-full shadow-sm whitespace-nowrap flex-shrink-0">
            <Phone size={14} className="text-black mr-3" />
            <span className="font-black text-black text-xs tracking-tighter">0507 048 50 34</span>
          </a>
          <a href="https://wa.me/905070485034" target="_blank" rel="noreferrer" className="flex items-center bg-black text-white px-8 py-3 font-black text-xs tracking-[0.2em] hover:bg-gray-900 transition-colors h-12 rounded-full shadow-lg whitespace-nowrap flex-shrink-0">
            WhatsApp <ChevronRight size={14} className="ml-2" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-black p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Premium Slide-in */}
      <div className={cn(
      <div className={cn(
        "lg:hidden fixed inset-0 z-[1000] transition-all duration-500 overflow-hidden",
        isMobileMenuOpen ? "visible" : "invisible"
      )}>
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Content Panel */}
        <div className={cn(
          "absolute top-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 transform flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <span className="font-black text-xl tracking-tighter">MENÜ</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-gray-50 text-black hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Scrollable Area */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="space-y-1">
              <Link 
                to="/" 
                className="flex items-center justify-between py-4 text-base font-black text-black border-b border-gray-50 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ANASAYFA <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/hakkimizda" 
                className="flex items-center justify-between py-4 text-base font-black text-black border-b border-gray-50 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HAKKIMIZDA <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Accordion: Yetkili Servisler */}
              <div className="border-b border-gray-50">
                <button 
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className="w-full flex items-center justify-between py-4 text-base font-black text-black"
                >
                  YETKİLİ SERVİSLER 
                  <ChevronDown size={18} className={cn("transition-transform duration-300", isServicesExpanded ? "rotate-180" : "rotate-0")} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  isServicesExpanded ? "max-h-[500px] pb-4" : "max-h-0"
                )}>
                  {brands.filter(b => b.id !== 'yedek-parca').map((brand) => (
                    <Link
                      key={brand.id}
                      to={`/${brand.id}-yetkili-servisi`}
                      className="flex items-center py-3 pl-4 text-sm font-bold text-gray-400 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></span>
                      {brand.name} Yetkili Servisi
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/yedek-parca" 
                className="flex items-center justify-between py-4 text-base font-black text-black border-b border-gray-50 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                YEDEK PARÇA <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/hizmetlerimiz" 
                className="flex items-center justify-between py-4 text-base font-black text-black border-b border-gray-50 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HİZMETLERİMİZ <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/iletisim" 
                className="flex items-center justify-between py-4 text-base font-black text-black border-b border-gray-50 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İLETİŞİM <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

            {/* Contact & Info Section */}
            <div className="mt-12 space-y-8 flex flex-col items-center">
              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-3 w-full">
                <a 
                  href="tel:+905070485034"
                  className="flex items-center justify-center gap-3 bg-gray-50 text-black border border-gray-100 py-4 rounded-2xl font-black text-sm tracking-tight hover:bg-gray-100 transition-colors w-full"
                >
                  <Phone size={18} /> 0507 048 50 34
                </a>
                <a 
                  href="https://wa.me/905070485034"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-black text-sm tracking-tight hover:bg-gray-900 transition-colors w-full"
                >
                  <MessageCircle size={18} /> WhatsApp Destek
                </a>
              </div>

              {/* Address */}
              <div className="space-y-3 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={14} />
                  <span className="text-[10px] font-black tracking-widest uppercase">ADRES</span>
                </div>
                <p className="text-sm font-bold text-black leading-snug tracking-tight">
                  Ramazanoğlu, Sanayi Cd. No:44 B Blok No:65, 34906 Pendik/İstanbul
                </p>
              </div>

              {/* Social Icons */}
              <div className="space-y-4 pt-8 border-t border-gray-50 w-full flex flex-col items-center">
                 <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="text-[10px] font-black tracking-widest uppercase">BİZİ TAKİP EDİN</span>
                </div>
                <div className="flex gap-4 justify-center">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
