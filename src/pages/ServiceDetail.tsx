import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, services, faqs } from '../data/mockData';
import { ChevronRight, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { brandId, itemId } = useParams<{ brandId: string, itemId: string }>();
  
  const service = services.find(s => s.id === itemId || s.id === `${brandId}-${itemId}`);
  const brand = brands.find(b => b.id === brandId);

  if (!service || !brand) {
    return <div className="container mx-auto py-20 text-center">Hizmet bulunamadı.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{service.name} | {brand.name} Yetkili Servisi</title>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-black overflow-x-auto">
          <Link to="/" className="hover:text-black">Anasayfa</Link>
          <ChevronRight size={14} className="mx-2 shrink-0" />
          <Link to={`/servis/${brand.id}`} className="hover:text-black">{brand.name} Servisi</Link>
          <ChevronRight size={14} className="mx-2 shrink-0" />
          <span className="text-black font-medium truncate">{service.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">{service.name}</h1>
            <img src={service.image} alt={service.name} className="w-full h-[400px] object-cover rounded-3xl mb-8" />
            
            <div className="prose prose-lg max-w-none prose-blue mb-12">
              <p className="text-xl text-black mb-8 leading-relaxed">
                {service.description} {brand.name} standartlarına uygun olarak, sertifikalı uzman teknisyenlerimiz tarafından gerçekleştirilmektedir.
              </p>
              
              <h3 className="text-2xl font-bold text-black mb-4">Hizmet Kapsamı</h3>
              <ul className="space-y-3 mb-8">
                {['Ön inceleme ve arıza tespiti', 'Orijinal yedek parça temini', 'Profesyonel montaj ve onarım', 'Performans ve sızdırmazlık testleri', 'Garantili teslimat'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-black">
                    <CheckCircle2 className="text-black mr-3 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SSS */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h3 className="text-lg font-bold text-black mb-2 flex items-start">
                      <span className="text-black mr-3">S:</span> {faq.question}
                    </h3>
                    <p className="text-black pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-blue-900 rounded-3xl p-8 text-white shadow-xl">
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto mb-6 bg-white p-2 rounded-lg" />
              <h3 className="text-2xl font-bold mb-4">Servis Randevusu Alın</h3>
              <p className="text-blue-100 mb-8">
                {service.name} hizmetimizden yararlanmak için hemen randevu oluşturun.
              </p>
              <a href="tel:+905070485034" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center transition-colors mb-4">
                <PhoneCall className="mr-2" size={20} /> 0507 048 50 34
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
