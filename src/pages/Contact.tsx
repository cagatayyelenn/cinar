import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, ChevronRight, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>İletişim | Çınar Oto Klima</title>
        <meta name="description" content="Çınar Oto Klima iletişim bilgileri, adres, telefon ve servis randevusu için bize ulaşın." />
      </Helmet>

      {/* Hero Section - Minimalist & Airy */}
      <div 
        className="pt-40 pb-24 relative"
        style={{ 
          background: 'linear-gradient(178deg, rgba(0, 0, 0, .2) -106.73%, rgba(41, 51, 236, .2) -14.51%, rgba(255, 157, 72, .2) 47.94%, rgba(237, 210, 173, .2) 75.02%)' 
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex items-center text-xs mb-8 font-bold tracking-tight breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight size={12} className="mx-3" />
            <span className="text-white">İletişim</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Bize <br/><span className="text-gray-500/50">ulaşın</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl drop-shadow-md">
            Sorularınız, servis talepleriniz veya yedek parça siparişleriniz için profesyonel ekibimizle doğrudan iletişime geçin.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-24">
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Left Column: Contact Methods */}
          <div className="lg:col-span-7 space-y-24">
            
            {/* Primary Contact Methods */}
            <section>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs font-black tracking-tight text-gray-400">Telefon hattı</h3>
                  </div>
                  <a href="tel:+905418705693" className="text-3xl font-black text-black hover:text-gray-600 transition-colors block mb-2">
                    0541 870 56 93
                  </a>
                  <p className="text-gray-400 text-sm">Hafta içi ve Cumartesi günleri ulaşabilirsiniz.</p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center">
                      <MessageCircle size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs font-black tracking-tight text-gray-400">WhatsApp destek</h3>
                  </div>
                  <a href="https://wa.me/905418705693" target="_blank" rel="noreferrer" className="text-3xl font-black text-black hover:text-[#25D366] transition-colors block mb-2">
                    Mesaj gönderin
                  </a>
                  <p className="text-gray-400 text-sm">Hızlı teknik bilgi ve randevu için.</p>
                </div>
              </div>
            </section>

            {/* Address & Email */}
            <section className="pt-12 border-t border-gray-100">
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gray-100 text-black flex items-center justify-center">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs font-black tracking-tight text-gray-400">Merkez servis</h3>
                  </div>
                  <p className="text-xl font-bold text-black leading-snug mb-6 tracking-tight">
                    Ramazanoğlu, Sanayi Cd. <br/>No:44 B Blok No:65, <br/>34906 Pendik/İstanbul
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-[10px] font-black text-black tracking-tight group"
                  >
                    Haritada görüntüle <ExternalLink size={12} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gray-100 text-black flex items-center justify-center">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs font-black tracking-tight text-gray-400">E-posta adresi</h3>
                  </div>
                  <a href="mailto:info@cinarotoklima.com" className="text-xl font-black text-black hover:text-gray-600 transition-colors block mb-2">
                    info@cinarotoklima.com
                  </a>
                  <p className="text-gray-400 text-sm">Kurumsal iş birlikleri ve teklifler için.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Working Hours & Visual */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-12">
                <Clock className="text-black" size={24} strokeWidth={1.5} />
                <h2 className="text-xs font-black tracking-tight text-black">Çalışma saatleri</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                  <span className="text-sm font-bold text-gray-400 tracking-tight">Pazartesi — Cuma</span>
                  <span className="text-xl font-black text-black">08:30 – 19:00</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                  <span className="text-sm font-bold text-gray-400 tracking-tight">Cumartesi</span>
                  <span className="text-xl font-black text-black">08:30 – 17:00</span>
                </div>
                <div className="flex justify-between items-end pb-4">
                  <span className="text-sm font-bold text-gray-400 tracking-tight">Pazar</span>
                  <span className="text-xl font-black text-gray-300">Kapalı</span>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-gray-200">
                  Servis yoğunluğu nedeniyle gelmeden önce randevu almanız rica olunur.
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width & Minimal */}
        <div className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-xs font-black text-black tracking-tight">Lokasyon</h2>
            <span className="text-[10px] text-gray-400 font-bold tracking-tight">İstanbul, Türkiye</span>
          </div>
          <div className="aspect-[21/7] bg-gray-50 relative overflow-hidden grayscale contrast-125 brightness-105">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48220.30601954153!2d29.2131934!3d40.8768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad0523b1c6767%3A0x7c7f7f7f7f7f7f7f!2sPendik%2C%20Istanbul!5e0!3m2!1sen!2str!4v1712060000000!5m2!1sen!2str" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

