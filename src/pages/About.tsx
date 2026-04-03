import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Award, Users, Target, ChevronRight, ChevronDown, ShieldCheck, ThumbsUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        <title>Hakkımızda | Çınar Oto Klima</title>
        <meta name="description" content="Çınar Oto Klima olarak ticari araç iklimlendirme sistemlerinde 20 yılı aşkın tecrübemizle yetkili servis ve yedek parça hizmeti sunuyoruz." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-black pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-white max-w-3xl">
            <div className="flex items-center text-xs text-gray-400 mb-8 font-bold tracking-tight">
              <Link to="/" className="hover:text-black transition-colors">Anasayfa</Link>
              <ChevronRight size={12} className="mx-3" />
              <span className="text-black tracking-tight font-medium">Hakkımızda</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              Modern <br/><span className="text-gray-200">mühendislik.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              20 yılı aşkın süredir ticari araç iklimlendirme sistemlerinde Türkiye'nin öncü servis noktalarından biri olarak hizmet veriyoruz.
            </p>
          </div>
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/80 animate-bounce-slow">
            <ChevronDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-20 mb-32 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-black mb-8 tracking-tight leading-tight border-b border-gray-200 pb-6">
              Araç iklimlendirme sistemlerinde <br/>20 yıllık uzmanlık.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Çınar Oto Klima, temelleri atıldığı günden bu yana müşteri memnuniyetini ve teknik mükemmelliği merkeze alarak büyümesini sürdürmüştür. Ticari araçların (otobüs, minibüs, kamyon, iş makinesi) iklimlendirme ihtiyaçlarını en üst düzeyde karşılamak için sürekli kendimizi yeniliyoruz.
              </p>
              <p>
                Yılkar, Safkar ve Webasto gibi dünya devlerinin yetkili servisi olarak, her marka ve model araç için orijinal yedek parça ve garantili işçilik sunuyoruz. Amacımız, yollardaki konforunuzu ve güvenliğinizi en üst seviyeye taşımaktır.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l-4 border-black pl-6 py-2">
                <div className="text-4xl font-black text-black mb-1">20+</div>
                <div className="text-xs font-bold text-gray-400 tracking-tight">Yıllık tecrübe</div>
              </div>
              <div className="bg-white p-10 border border-gray-100 hover:shadow-xl transition-all group">
                <div className="text-4xl font-black text-black mb-2 flex items-center gap-2">
                  10k <span className="w-8 h-[2px] bg-amber-500 group-hover:w-12 transition-all"></span>
                </div>
                <div className="text-xs font-bold text-gray-400 tracking-tight">Mutlu müşteri</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/workshop/800/1000" 
                alt="Workshop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black p-10 text-white hidden md:block max-w-xs">
              <p className="text-sm font-bold tracking-tight leading-relaxed italic opacity-80">
                "Kalite asla tesadüf değildir, daima akıllı bir gayretin sonucudur."
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-black text-black mb-16 tracking-tight leading-tight text-center">
            Kurumsal değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-black group-hover:text-white transition-all">
                <ShieldCheck size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Kalite odaklı</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Her aşamada en yüksek kalite standartlarını koruyarak uzun ömürlü çözümler sunuyoruz.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-black group-hover:text-white transition-all">
                <ThumbsUp size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Müşteri memnuniyeti</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Müşterilerimizin ihtiyaçlarını anlayarak onlara en uygun ve hızlı çözümleri üretiyoruz.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-black group-hover:text-white transition-all">
                <Zap size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Sürekli gelişim</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Teknolojiyi yakından takip ederek kendimizi ve hizmet kalitemizi sürekli güncelliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-black p-16 text-center">
          <h2 className="text-4xl font-black text-white mb-8 tracking-tight leading-tight">
            Sistemleriniz için <br/>profesyonel çözümler.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/iletisim" className="bg-white text-black px-12 py-5 font-black tracking-tight text-xs hover:bg-gray-200 transition-colors">
              Randevu al
            </Link>
            <a href="tel:+905070485034" className="border border-gray-700 text-white px-12 py-5 font-black tracking-tight text-xs hover:border-white transition-colors">
              Hemen ara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
