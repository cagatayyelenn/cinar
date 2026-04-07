
import sys

path = 'src/data/mockData.ts'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_services_block = r"""export const services = [
  // --- MARKALAR & YETKİLİ SERVİS AĞI ---
  { 
    id: 'akdeniz-klima-servis', 
    brandId: 'other', 
    name: 'Akdeniz Klima Servis', 
    image: '/hizmetler/akdeniz-klima.webp', 
    description: 'Akdeniz klima sistemleri için uzman teknik servis desteği. Ticari araç ve otobüs klimalarında periyodik bakım and orijinal parça değişimi.',
    features: ['Akdeniz Klima Uzmanlığı', 'Kompresör Revizyonu', 'Gaz Dolumu', 'Kaçak Tespiti', 'Orijinal Parça Desteği', '7/24 Teknik Destek']
  },
  { 
    id: 'albatros-klima-servis', 
    brandId: 'other', 
    name: 'Albatros Klima Servis', 
    image: '/hizmetler/albatros-klima.webp', 
    description: 'Albatros marka araç iklimlendirme sistemleriniz için profesyonel onarım and bakım hizmetleri.',
    features: ['Albatros Sistem Analizi', 'Periyodik Filtre Bakımı', 'Elektronik Arıza Çözümü', 'Sızdırmazlık Testi', 'Vakumlama Hizmeti', 'Yüksek Soğutma Performansı']
  },
  { 
    id: 'astron-klima-servis', 
    brandId: 'other', 
    name: 'Astron Klima Servis', 
    image: '/hizmetler/astron-klima.webp', 
    description: 'Astron araç klimalarında meydana gelen teknik sorunların hızlı and kalıcı çözümü için Çınar Oto Klima uzmanlığına güvenin.',
    features: ['Astron Diyagnoz Testi', 'Kondenser Bakımı', 'Evaporatör Temizliği', 'Genleşme Valfi Kontrolü', 'Sistem Dezenfeksiyonu', 'Hızlı Teslimat']
  },
  { 
    id: 'coolertech-klima-servis', 
    brandId: 'other', 
    name: 'Coolertech Klima Servis', 
    image: '/hizmetler/coolertech-klima.webp', 
    description: 'Coolertech park klimaları and split sistemler için yetkili servis kalitesinde bakım, onarım and yedek parça desteği.',
    features: ['Coolertech Arıza Tespiti', 'Split Sistem Bakımı', 'Kompresör Tamiri', 'Dijital Panel Onarımı', 'Elektriksel Kontrol', 'Garanti Güvencesi']
  },
  { 
    id: 'delphi-klima-servis', 
    brandId: 'other', 
    name: 'Delphi Klima Servis', 
    image: '/hizmetler/delphi-klima.webp', 
    description: 'Binek and hafif ticari araçlarda kullanılan Delphi klima sistemleri and kompresörleri için uzman onarım desteği.',
    features: ['Delphi Kompresör Uzmanlığı', 'Swash-Plate Kontrolü', 'Solenoid Valf Değişimi', 'OE Standartlarında Bakım', 'Klima Gazı Yenileme', 'Sistem Verimlilik Testi']
  },
  { 
    id: 'eurostar-klima-servis', 
    brandId: 'other', 
    name: 'Eurostar Klima Servis', 
    image: '/hizmetler/eurostar-klima.webp', 
    description: 'Eurostar ticari araç iklimlendirme çözümlerinde periyodik bakım and arıza giderme hizmetleri.',
    features: ['Eurostar Bakım Protokolü', 'Termostat Kontrolü', 'Fan Motoru Onarımı', 'Filtre Gurubu Değişimi', 'Isı Transfer Testi', 'Orijinal Yedek Parça']
  },
  { 
    id: 'konvekta-klima-servis', 
    brandId: 'other', 
    name: 'Konvekta Klima Servis', 
    image: '/hizmetler/konvekta-klima.webp', 
    description: 'Konvekta otobüs and raylı sistem klimaları için profesyonel teknik destek and orijinal yedek parça hizmeti.',
    features: ['Konvekta Sistem Analizi', 'Yüksek Kapasiteli Bakım', 'Büyük Araç Klima Onarımı', 'Sensör Kalibrasyonu', 'Kompresör Değişimi', 'Detaylı Hijyen Bakımı']
  },
  { 
    id: 'safkar-klima-servis', 
    brandId: 'other', 
    name: 'Safkar Klima Servis', 
    image: '/hizmetler/safkar-klima.webp', 
    description: 'Safkar marka ticari araç soğutucu and klimaları için yetkili servis hassasiyetinde hızlı onarım and bakım.',
    features: ['Safkar Diyagnoz', 'Frigorifik Sistem Onarımı', 'Defrost Kontrolü', 'Evaporatör Hava Debisi Testi', 'Kondenser Temizliği', 'Geniş Yedek Parça Stoğu']
  },
  { 
    id: 'sutrak-klima-servis', 
    brandId: 'other', 
    name: 'Sütrak Klima Servis', 
    image: '/hizmetler/sutrak-klima.webp', 
    description: 'Sütrak (Carrier) otobüs iklimlendirme sistemleri için dünya standartlarında bakım and yedek parça desteği.',
    features: ['Sütrak Orijinal Parça', 'Otobüs Kliması Revizyonu', 'Yüksek Hava Debisi Kontrolü', 'Soğutucu Akışkan Testi', 'Otomatik Kontrol Onarımı', 'Sessiz Çalışma Ayarı']
  },
  { 
    id: 'yazkar-klima-servis', 
    brandId: 'other', 
    name: 'Yazkar Klima Servis', 
    image: '/hizmetler/yazkar-klima.webp', 
    description: 'Yazkar marka ticari araç and minibüs klimaları için yerinde and hızlı servis çözümleri.',
    features: ['Yazkar Bakım Kiti', 'Hızlı Arıza Tespiti', 'Gaz Kaçağı Onarımı', 'Elektrik Tesisat Kontrolü', 'Kabin İçi Hava Kalite Testi', 'Montaj Desteği']
  },
  // --- İKLİMLENDİRME ÇÖZÜMLERİ ---
  { 
    id: 'arac-isitma-sistemleri', 
    brandId: 'general', 
    name: 'Araç Isıtma Sistemleri', 
    image: '/hizmetler/arac-isitma.webp', 
    description: 'Kış aylarında motor çalışmadan kabin içi konfor sağlayan Sulu and Kuru tip araç ısıtma çözümleri.',
    features: ['Sulu Tip (Eberspächer)', 'Kuru Tip (Webasto)', 'Programlanabilir Kontrol', 'Yüksek Yakıt Verimliliği', 'Sessiz Isıtma Teknolojisi', 'Düşük Emisyon']
  },
  { 
    id: 'arac-kabin-isiticisi', 
    brandId: 'general', 
    name: 'Araç Kabin Isıtıcı', 
    image: '/hizmetler/kabin-isitici.webp', 
    description: 'Ticari and özel araçlarınız için taşınabilir veya sabit kabin ısıtma sistemleri montaj and bakım hizmeti.',
    features: ['Hızlı Kabin Isıtma', 'Termostatik Kontrol', 'Güvenli Yanma Odası', 'Aşırı Isınma Koruması', 'Kompakt Tasarım', 'Enerji Tasarrufu']
  },
  { 
    id: 'arac-klima-sistemi', 
    brandId: 'general', 
    name: 'Araç Klima Sistemi', 
    image: '/hizmetler/arac-klima.webp', 
    description: 'Binek, hafif ticari and ağır vasıta araçların orijinal klima sistemleri için tam kapsamlı teknik destek.',
    features: ['Komple Sistem Revizyonu', 'Hassas Gaz Dolumu', 'Yağlama Sistemi Kontrolü', 'Basınç Testleri', 'Performans Analizi', 'Koku Giderme']
  },
  { 
    id: 'arac-tavan-klimasi', 
    brandId: 'general', 
    name: 'Araç Tavan Kliması', 
    image: '/hizmetler/tavan-klimasi.webp', 
    description: 'Minibüs, otobüs and tırlar için tavan tipi iklimlendirme ünitelerinin montajı and yetkili servis bakımı.',
    features: ['Tavan Tipi Montaj', 'Aerodinamik Tasarım', 'Yüksek Soğutma Gücü', 'Sızdırmazlık Garantisi', 'Dijital Kontrol Ünitesi', 'Toz and Polen Koruması']
  },
  { 
    id: 'aractan-bagimsiz-klima', 
    brandId: 'general', 
    name: 'Araçtan Bağımsız Klima', 
    image: '/hizmetler/bagimsiz-klima.webp', 
    description: 'Park halinde, motoru çalıştırmadan akü üzerinden çalışan elektrikli bağımsız klima çözümleri.',
    features: ['Motor Çalışmadan Soğutma', 'Akü Koruma Sistemi', 'Sessiz Gece Modu', 'Yakıt Tasarrufu', 'Scroll Kompresör', 'Uzaktan Kumanda']
  },
  { 
    id: 'elektrikli-klima-sistemleri', 
    brandId: 'general', 
    name: 'Elektrikli Klima Sistemleri', 
    image: '/hizmetler/elektrikli-klima.webp', 
    description: 'Hibrit, elektrikli and içten yanmalı araçlar için yeni nesil tam elektrikli iklimlendirme teknolojileri.',
    features: ['Tam Elektrikli Çalışma', '12V/24V Uyumluluğu', 'İnverter Teknolojisi', 'Minimum Enerji Tüketimi', 'Çevre Dostu Akışkan', 'Hassas Sıcaklık Ayarı']
  },
  { 
    id: 'hafif-ticari-isitma', 
    brandId: 'general', 
    name: 'Hafif Ticari Isıtma Sistemleri', 
    image: '/hizmetler/hafif-ticari-isitma.webp', 
    description: 'Panelvan and kamyonet grubu araçlar için optimize edilmiş ısıtma çözümleri.',
    features: ['Kompakt Montaj', 'Düşük Yakıt Tüketimi', 'Taşıma Bölümü Isıtma', 'Hızlı Servis Desteği', 'Garantili İşçilik', 'Uzun Ömürlü Kullanım']
  },
  { 
    id: 'is-makinasi-klimalari', 
    brandId: 'general', 
    name: 'İş Makinası Klimaları', 
    image: '/hizmetler/is-makinesi-klima.webp', 
    description: 'Ekskavatör, loder and vinçlerin klima sistemlerinin onarımı and bakımı.',
    features: ['Ağır Hizmet Tipi Bakım', 'Toz Filtre Sistemleri', 'Titreşime Dayanıklı Montaj', 'Yüksek Verimli Kondenser', 'Saha Servis Desteği', 'Hızlı Yedek Parça']
  },
  { 
    id: 'kamyon-klimalari', 
    brandId: 'general', 
    name: 'Kamyon Klimaları', 
    image: '/hizmetler/kamyon-klima.webp', 
    description: 'Lojistik araçları için profesyonel klima servis hizmetleri.',
    features: ['Uzun Yol Konforu', 'Scroll Kompresör Bakımı', 'Kabin İçi Havalandırma', 'Isı İzolasyonu Kontrolü', 'Akü Optimize Şarj', 'Ergonomik Tasarım']
  },
  { 
    id: 'isitma-uygulamalari', 
    brandId: 'general', 
    name: 'Isıtma Uygulamaları', 
    image: '/hizmetler/isitma-uygulama.webp', 
    description: 'Araç tipine göre özelleştirilmiş profesyonel ısıtma sistemi projeleri.',
    features: ['Özel Projelendirme', 'Dizel and Sulu Tanımlar', 'Hassas Isı Dağıtımı', 'Dijital Otomasyon', 'Isı Kaybı Analizi', 'Standartlara Uygun Montaj']
  },
  { 
    id: 'karavan-sogutma', 
    brandId: 'general', 
    name: 'Karavan Soğutma', 
    image: '/hizmetler/karavan-klima.webp', 
    description: 'Karavan yaşamında yaz aylarında serinlik sağlayan tavan tipi and split klima uygulamaları.',
    features: ['Tatil Konforu', 'Sessiz Dış Ünite', 'Düşük Amper Tüketimi', 'İnverter Kompresör', 'Kompakt İç Ünite', 'Wi-Fi Kontrol Desteği']
  },
  { 
    id: 'karavan-isitma', 
    brandId: 'general', 
    name: 'Karavan Isıtma', 
    image: '/hizmetler/karavan-isitici.webp', 
    description: 'Kış kampları için karavan içi güvenli and verimli ısıtma sistemleri kurulumu.',
    features: ['Dizel Isıtıcı (Webasto)', 'Sulu Isıtma (Boyler)', 'Güvenli Yanış Sistemi', 'Yüksek Rakım Kiti', 'Hassas Termostat', 'Korozyona Karşı Direnç']
  },
  { 
    id: 'marin-isitma-sogutma', 
    brandId: 'general', 
    name: 'Marin Isıtma Soğutma', 
    image: '/hizmetler/marin-klima.webp', 
    description: 'Tekne and yatlarda profesyonel marin iklimlendirme çözümleri.',
    features: ['Deniz Suyu Korumalı', 'Paslanmaz Çelik Gövde', 'Nem Alma Özelliği', 'Sessiz Sintine Ünitesi', 'Kompakt Montaj', 'Merkezi Sistem Desteği']
  },
  { 
    id: 'motordan-bagimsiz-klima', 
    brandId: 'general', 
    name: 'Motordan Bağımsız Klima', 
    image: '/hizmetler/motordan-bagimsiz.webp', 
    description: 'Araç motorundan güç almadan çalışan, akü destekli park kliması sistemleri.',
    features: ['Yakıt Tasarrufu', 'Motor Ömrünü Uzatma', 'Gece Boyu Kesintisiz Soğutma', 'Otomatik Voltaj Kesici', 'Ekonomik Mod', 'Boost Soğutma']
  },
  { 
    id: 'oto-klima-onarim', 
    brandId: 'general', 
    name: 'Oto Klima Onarım', 
    image: '/hizmetler/klima-onarim.webp', 
    description: 'Her türlü araç kliması arızasının profesyonel ekipmanlarla teşhisi and tamiri.',
    features: ['Hızlı Diyagnoz', 'Mekanik Onarım', 'Elektriksel Tamir', 'Hortum Revizyonu', 'Basınç Sensörü Değişimi', 'Yol Testi']
  },
  { 
    id: 'oto-klima-servisi', 
    brandId: 'general', 
    name: 'Oto Klima Servisi', 
    image: '/hizmetler/klima-servis.webp', 
    description: 'İstanbul genelinde profesyonel araç klima bakım and onarım merkezi.',
    features: ['Profesyonel Kadro', 'Gelişmiş Teknolojik Cihazlar', 'Müşteri Memnuniyeti', 'Hızlı Randevu', 'Merkezi Konum', 'Geniş Hizmet Yelpazesi']
  },
  { 
    id: 'oto-klima-sogutma', 
    brandId: 'general', 
    name: 'Oto Klima Soğutma', 
    image: '/hizmetler/klima-sogutma.webp', 
    description: 'Araç kabin içi soğutma performansını artırmaya yönelik teknik iyileştirmeler.',
    features: ['Maksimum Soğutma Verimi', 'Sistem Revizyonu', 'Tıkanıklık Giderme', 'Fan Hızı Kalibrasyonu', 'Termal Verimlilik Testi', 'Kondenser Temizliği']
  },
  { 
    id: 'oto-klima-tamiri', 
    brandId: 'general', 
    name: 'Oto Klima Tamiri', 
    image: '/hizmetler/klima-tamiri.webp', 
    description: 'Arızalı klima bileşenleri için profesyonel onarım hizmetleri.',
    features: ['Detaylı Arıza Raporu', 'Garantili İşçilik', 'Orijinal Parça Kullanımı', 'Test Odası Onayı', 'Ekonomik Çözümler', 'Yüksek Dayanıklılık']
  },
  { 
    id: 'sogutma-uygulamalari', 
    brandId: 'general', 
    name: 'Soğutma Uygulamaları', 
    image: '/hizmetler/sogutma-uygulama.webp', 
    description: 'Endüstriyel and ticari araçlar için özel soğutma projeleri tasarımı and uygulaması.',
    features: ['Özel Tasarım Üniteler', 'Isı Kontrol Otomasyonu', 'Yalıtım Danışmanlığı', 'Frigorifik Kasa Kurulumu', 'Gıda Taşımacılığı Uyumu', 'Kesintisiz Soğutma Gücü']
  },
  { 
    id: 'ticari-klima', 
    brandId: 'general', 
    name: 'Ticari Klima', 
    image: '/hizmetler/ticari-klima.webp', 
    description: 'Kamyon, otobüs, tır and minibüs iklimlendirme sistemlerinde uzmanlık.',
    features: ['Yüksek Kapasiteli Üniteler', 'Filo Bakım Anlaşmaları', 'En Ağır Şartlara Uyumluluk', 'Yerinde Servis İmkanı', 'Teknik Eğitim Desteği', 'Verim Analizleri']
  },
  { 
    id: 'tir-kamyon-kabin-klima', 
    brandId: 'general', 
    name: 'Tır & Kamyon Kabin Klima', 
    image: '/hizmetler/tir-kamyon-klima.webp', 
    description: 'Ağır vasıta sürücü konforu için geliştirilmiş klima çözümleri.',
    features: ['Sürücü Konforu', 'Yüksek Sıcaklık Dayanımı', 'Hassas Hava Ayarı', 'Toz Tutucu Filtreler', 'Nem Kontrolü', 'Uzun Ömürlü Kullanım']
  },
  { 
    id: 'tir-kabin-klimasi', 
    brandId: 'general', 
    name: 'Tır Kabin Kliması', 
    image: '/hizmetler/tir-kabin.webp', 
    description: 'Tır çekici kabinleri için özel olarak tasarlanmış yüksek performanslı klimalar.',
    features: ['Ergonomik Tasarım', 'Hızlı Soğutma', 'Düşük Titreşim', 'Akü Koruma', 'Kabin İçi Hava Dağılımı', 'Ekonomik İşletme']
  },
  { 
    id: 'tir-park-klimasi', 
    brandId: 'general', 
    name: 'Tır Park Kliması', 
    image: '/hizmetler/tir-park-klima.webp', 
    description: 'Motoru çalıştırmadan kabini soğutan en verimli tır park kliması çözümleri.',
    features: ['Ekonomik Park Modu', 'Akü Dostu Tüketim', 'Yüksek Soğutma Alanı', 'Kompakt Montaj', 'Düşük Bakım Maliyeti', 'Sertifikalı Güvenlik']
  },
  { id: 'climart-bakim', brandId: 'climart', name: 'Climart Klima Bakımı', image: '/climart/climart-arac-bakimi.png', description: 'Climart ticari araç soğutucu and klimalarının uzun ömürlü olması için periyodik, detaylı bakım hizmeti.' },
  { id: 'climart-onarim', brandId: 'climart', name: 'Climart Klima Onarımı and Tamiri', image: '/climart/climart-arac-onarimi.png', description: 'Klimalarınızda meydana gelen tüm arızaların uzman teknisyenlerimiz tarafından kalıcı and hızlı onarımı.' },
  { id: 'climart-yedek-parca', brandId: 'climart', name: 'Climart Yedek Parça', image: '/climart/climart-arac-yedek-parca.png', description: 'Cihazlarınızın tam performansını koruması için garantili, %100 orijinal and onaylı Climart yedek parçaları.' },
  { id: 'yilkar-bakim', brandId: 'yilkar', name: 'Yılkar Bakım', image: '/logolar/yilkar-logo.png', description: 'Yılkar kuru tip ısıtıcılar and araç klimaları için yetkili servis güvencesiyle periyodik bakım hizmeti.' },
  { id: 'yilkar-onarim', brandId: 'yilkar', name: 'Yılkar Onarım', image: '/logolar/yilkar-logo.png', description: 'Yılkar ısıtma and soğutma sistemlerindeki tüm teknik arızaların orijinal parça desteğiyle onarımı.' },
  { id: 'yilkar-yedek-parca', brandId: 'yilkar', name: 'Yılkar Yedek Parça', image: '/logolar/yilkar-logo.png', description: 'Yılkar sistemleriniz için %100 orijinal, garantili and onaylı yedek parça tedarik and montaj desteği.' },
  { id: 'webasto-bakim', brandId: 'webasto', name: 'Webasto Bakım', image: '/logolar/webasto-logo1.png', description: 'Dünya devi Webasto ısıtma and soğutma sistemleri için küresel standartlarda periyodik bakım and kontrol.' },
  { id: 'webasto-onarim', brandId: 'webasto', name: 'Webasto Onarım', image: '/logolar/webasto-logo1.png', description: 'Webasto servis uzmanlığıyla, ısıtıcı and klimalarınızdaki arızaların profesyonel tamir and yazılım desteği.' },
  { id: 'webasto-yedek-parca', brandId: 'webasto', name: 'Webasto Yedek Parça', image: '/logolar/webasto-logo1.png', description: 'Webasto cihazlarınızın ömrünü uzatan orijinal yedek parçalar and uzman montaj işçiliği.' },
  { id: 'coolman-bakim', brandId: 'coolman', name: 'Coolman Bakım', image: '/logolar/coolman-logo.png', description: 'Coolman elektrikli park klimaları and gizli klima sistemleri için düzenli bakım and performans testi.' },
  { id: 'coolman-onarim', brandId: 'coolman', name: 'Coolman Onarım', image: '/logolar/coolman-logo.png', description: 'Coolman 12V/24V elektrikli park klimalarındaki kompresör and kart arızalarının hızlı and garantili onarımı.' },
  { id: 'coolman-yedek-parca', brandId: 'coolman', name: 'Coolman Yedek Parça', image: '/logolar/coolman-logo.png', description: 'Coolman elektrikli klima setleri için orijinal yedek parça desteği and geniş stok avantajı.' }
];""";

# Find services line
start_index = -1
for i, line in enumerate(lines):
    if 'export const services = [' in line:
        start_index = i
        break

# Find closure after start_index
end_index = -1
if start_index != -1:
    for i in range(start_index, len(lines)):
        if '];' in lines[i]:
            end_index = i
            break

if start_index != -1 and end_index != -1:
    # We replace from start_index to end_index inclusive
    lines[start_index:end_index+1] = [new_services_block + '\n']

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
