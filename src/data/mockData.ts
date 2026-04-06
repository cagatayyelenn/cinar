const makeLogo = (text: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" fill="#0f2851" letter-spacing="-1">${text}</text></svg>`)}`;

export const brands = [
  { 
    id: 'climart', 
    name: 'Climart', 
    logo: '/logolar/climart-logo1.png',
    heroDescription: 'Çınar Oto Klima; Climart yetkili servisi olarak ticari araç klimaları, soğutucular ve özel çözümler sunar. Hemen inceleyin.',
    whyTitle: 'Ticari Araç Klimaları ve Özel Soğutma Çözümleri',
    whyDescription: 'Çınar Oto Klima, Climart yetkili servisi olarak ticari araçlarınızın iklimlendirme ihtiyaçlarına profesyonel çözümler sunar. Minibüs, otobüs ve panelvan tipi ticari araç klimaları, frigofirik soğutucular ve projeye özel iklimlendirme uygulamaları ile işinizin sürekliliğini sağlıyoruz. Yüksek performanslı soğutma sistemleri ve orijinal yedek parça desteğiyle her zaman yanınızdayız.',
    seo: {
      title: 'Climart Yetkili Servisi | Ticari Araç Klima ve Soğutma Çözümleri',
      description: 'Çınar Oto Klima; Climart yetkili servisi olarak ticari araç klimaları, soğutucular ve özel çözümler sunar. Hemen inceleyin.',
      keywords: 'Climart yetkili servisi, ticari araç klimaları, ticari araç soğutucuları, özel soğutma uygulamaları, Climart servis, araç soğutma sistemleri',
      ogTitle: 'Climart Yetkili Servisi - Çınar Oto Klima',
      ogDescription: 'Ticari araçlar için Climart soğutma ve klima sistemlerinde yetkili servis desteği.',
      ogUrl: 'https://cinarotoklima.com/climart-yetkili-servisi',
      canonical: 'https://cinarotoklima.com/climart-yetkili-servisi'
    },
    menuProducts: [
      { label: 'Ticari Araç Klimaları', path: 'ticari-arac-klimalari' },
      { label: 'Ticari Araç Soğutucuları', path: 'ticari-arac-sogutuculari' },
      { label: 'Özel Uygulamalar', path: 'ozel-uygulamalar' }
    ],
    menuServices: [
      { label: 'Climart Klima Bakımı', path: 'bakim' },
      { label: 'Climart Klima Onarımı ve Tamiri', path: 'onarim' },
      { label: 'Climart Yedek Parça', path: 'yedek-parca' }
    ]
  },
  { 
    id: 'yilkar', 
    name: 'Yılkar', 
    logo: '/logolar/yilkar-logo.png',
    heroDescription: 'Çınar Oto Klima; Yılkar yetkili servisi olarak kuru tip ısıtma, split ve monoblok klima sistemlerinde profesyonel çözümler sunar. Hemen keşfedin.',
    whyTitle: 'Yılkar Isıtma ve Soğutma Sistemleri Yetkili Servisi',
    whyDescription: 'Yılkar markasının Türkiye genelindeki güçlü servis ağının bir parçası olarak, ticari araçlarınızın konforunu ve verimliliğini koruyoruz. Kuru tip ısıtıcılar (Webasto tipi), monoblok ve split klimalar ile frigorifik soğutma sistemlerinde montaj ve bakım hizmeti veriyoruz. Orijinal yedek parça ve garanti güvencesiyle Yılkar teknolojisini aracınıza taşıyoruz.',
    seo: {
      title: 'Yılkar Yetkili Servisi | Kuru Tip Isıtma ve Araç Klimaları',
      description: 'Yılkar yetkili servisi Çınar Oto Klima; minibüs, otobüs ve panelvan tipi araçlar için klima ve ısıtıcı çözümleri sunar.',
      keywords: 'Yılkar yetkili servisi, kuru tip ısıtıcı, araç kliması, Yılkar klima servis, monoblok klima, split klima, araç ısıtma sistemleri',
      ogTitle: 'Yılkar Yetkili Servisi - Çınar Oto Klima',
      ogDescription: 'Yılkar ısıtma ve soğutma sistemlerinde yetkili servis güvencesi.',
      ogUrl: 'https://cinarotoklima.com/yilkar-yetkili-servisi',
      canonical: 'https://cinarotoklima.com/yilkar-yetkili-servisi'
    },
    menuProducts: [
      { label: 'Kuru Tip Isıtma', path: 'kuru-tip-isitma' },
      { label: 'Split Klimalar', path: 'split-klimalar' },
      { label: 'Monoblok Klimalar', path: 'monoblok-klimalar' },
      { label: 'Otobüs Klimaları', path: 'otobus-klimalari' },
      { label: 'İlave Split Klimalar', path: 'ilave-split-klimalar' },
      { label: 'İlave Tavan Kliması', path: 'ilave-tavan-klimasi' },
      { label: 'Kabin Kliması', path: 'kabin-klimasi' },
      { label: 'Frigorifik Soğutucu', path: 'frigorifik-sogutucu' }
    ],
    menuServices: [
      { label: 'Yılkar Bakım', path: 'bakim' },
      { label: 'Yılkar Onarım', path: 'onarim' },
      { label: 'Yılkar Yedek Parça', path: 'yedek-parca' }
    ]
  },
  { 
    id: 'webasto', 
    name: 'Webasto', 
    logo: '/logolar/webasto-logo1.png',
    heroDescription: 'Çınar Oto Klima; Webasto yetkili servisi olarak araç ısıtma, soğutma sistemleri ve elektrikli klima çözümlerinde dünya devi Webasto teknolojisini uzman kadrosuyla sunar.',
    whyTitle: 'Webasto Isıtma ve Soğutma Çözümlerinde Küresel Standart',
    whyDescription: 'Dünya lideri Webasto markasının yetkili servisi olarak, ticari araçlarınızın iklimlendirme konforunu en üst seviyeye taşıyoruz. Havalı ve sulu ısıtma sistemlerinden, frigorifik soğutma ünitelerine ve yeni nesil elektrikli klimalara kadar geniş bir ürün yelpazesiyle hizmet veriyoruz. Orijinal yedek parça ve profesyonel montaj desteğiyle Webasto kalitesini güvence altına alıyoruz.',
    seo: {
      title: 'Webasto Yetkili Servisi | Araç Isıtma ve Soğutma Sistemleri',
      description: 'Webasto yetkili servisi Çınar Oto Klima; araç ısıtma sistemleri, soğutma çözümleri ve elektrikli klimalarda profesyonel destek sunar.',
      keywords: 'Webasto yetkili servisi, Webasto ısıtıcı, araç soğutma sistemleri, elektrikli klima, Webasto servis, araç iklimlendirme',
      ogTitle: 'Webasto Yetkili Servisi - Çınar Oto Klima',
      ogDescription: 'Webasto ısıtma ve soğutma sistemlerinde yetkili servis güvencesi ve orijinal parça desteği.',
      ogUrl: 'https://cinarotoklima.com/webasto-yetkili-servisi',
      canonical: 'https://cinarotoklima.com/webasto-yetkili-servisi'
    },
    menuProducts: [
      { label: 'Araç Isıtma Sistemleri', path: 'isitma-sistemleri' },
      { label: 'Araç Soğutma Sistemleri', path: 'sogutma-sistemleri' },
      { label: 'Elektrikli Klima', path: 'elektrikli-klima' }
    ],
    menuServices: [
      { label: 'Webasto Bakım', path: 'bakim' },
      { label: 'Webasto Onarım', path: 'onarim' },
      { label: 'Webasto Yedek Parça', path: 'yedek-parca' }
    ]
  },
  { 
    id: 'coolman', 
    name: 'Coolman', 
    logo: '/logolar/coolman-logo.png',
    heroDescription: 'Çınar Oto Klima; Coolman yetkili servisi olarak tır, kamyon ve karavanlar için 12V/24V elektrikli park klima sistemlerinde profesyonel çözümler sunar.',
    whyTitle: 'Elektrikli Park Klima Sistemlerinde Coolman Uzmanlığı',
    whyDescription: 'Ağır vasıta sürücülerinin park halindeki konforu için Coolman teknolojisini aracınıza taşıyoruz. Motor çalıştırmadan soğutma sağlayan 12V ve 24V elektrikli klima sistemleri, yakıt tasarrufu ve sessiz çalışma avantajıyla sürüş kalitenizi artırır. Mercedes, Volvo, Scania, MAN gibi tüm çekici gruplarına uyumlu gizli ve tavan tipi soğutma çözümleriyle hizmetinizdeyiz.',
    seo: {
      title: 'Coolman Yetkili Servisi | Elektrikli Park Klima Sistemleri',
      description: 'Coolman yetkili servisi Çınar Oto Klima; tır, kamyon ve karavanlar için 12V/24V elektrikli park klimaları ve gizli klima setleri sunar.',
      keywords: 'Coolman yetkili servisi, elektrikli park kliması, tır kliması, kamyonet kliması, karavan kliması, 24V klima, 12V elektrikli klima, park kliması servis',
      ogTitle: 'Coolman Yetkili Servisi - Çınar Oto Klima',
      ogDescription: 'Park halinde motor çalıştırmadan soğutma sağlayan Coolman elektrikli klima sistemlerinde yetkili servis desteği.',
      ogUrl: 'https://cinarotoklima.com/coolman-yetkili-servisi',
      canonical: 'https://cinarotoklima.com/coolman-yetkili-servisi'
    },
    menuProducts: [
      { label: 'Coolman Klimalar', path: 'elektrikli-klimalar' }
    ],
    menuServices: [
      { label: 'Coolman Bakım', path: 'bakim' },
      { label: 'Coolman Onarım', path: 'onarim' },
      { label: 'Coolman Yedek Parça', path: 'yedek-parca' }
    ]
  },
  { 
    id: 'delphi', 
    name: 'Delphi', 
    logo: '/logolar/delphi-logo1.png',
    heroDescription: 'Çınar Oto Klima; Delphi Technologies yetkili servisi olarak binek ve hafif ticari araç iklimlendirme sistemlerinde orijinal ekipman kalitesinde çözümler sunar.',
    whyTitle: 'Otomotiv İklimlendirmede Global Orijinal Ekipman (OE) Lideri',
    whyDescription: '50 yılı aşkın tecrübesiyle Delphi, dünyanın önde gelen otomobil üreticilerinin tercih ettiği orijinal klima komponentlerini üretmektedir. Çınar Oto Klima olarak, Delphi’nin yüksek verimli kompresörleri, kondenserleri ve evaporatörleri ile aracınızın fabrikadan çıktığı ilk günkü soğutma performansını koruyoruz. Orijinal parça garantisi ve uzman montaj desteğiyle konforunuzu güvence altına alıyoruz.',
    seo: {
      title: 'Delphi Yetkili Servisi | Binek ve Hafif Ticari Araç Klimaları',
      description: 'Delphi yetkili servisi Çınar Oto Klima; otomobil ve hafif ticari araçlar için orijinal Delphi klima kompresörleri, kondenserler ve yedek parça çözümleri sunar.',
      keywords: 'Delphi yetkili servisi, Delphi klima kompresörü, Delphi kondenser, oto klima servisi, Delphi yedek parça, binek araç klima tamiri',
      ogTitle: 'Delphi Yetkili Servisi - Çınar Oto Klima',
      ogDescription: 'Otomobiller için Delphi orijinal klima sistemlerinde yetkili servis desteği ve parça değişimi.',
      ogUrl: 'https://cinarotoklima.com/delphi-yetkili-servisi',
      canonical: 'https://cinarotoklima.com/delphi-yetkili-servisi'
    },
    menuProducts: [
      { label: 'Klima Kompresörleri', path: 'kompresorler' },
      { label: 'Kondenser ve Evaporatörler', path: 'sogutucu-uniteler' },
      { label: 'Klima Yedek Parçaları', path: 'yedek-parcalar' }
    ],
    menuServices: [
      { label: 'Delphi Klima Bakımı', path: 'bakim' },
      { label: 'Delphi Sistem Onarımı', path: 'onarim' },
      { label: 'Delphi Orijinal Parça', path: 'yedek-parca' }
    ]
  },
];

export const products = [
  { 
    id: 'art1000', 
    brandId: 'climart', 
    name: 'ART1000', 
    images: ['/climart/art1000-art1000d-kapak.jpg', '/climart/art1000-art1000d.jpg','/climart/art1000-art1000d-1.jpg'],
    description: 'Ticari araçlar için 6m³ - 11m³ kasa hacmine uygun yüksek performanslı soğutucu ünite.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART1000',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 6m³ / 9m³ / 11m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 2110Watt / 2450Watt',
      'Soğutucu Akışkan: R134a',
      'Evaporatör Ünite Ölçüleri: 800 x 500 x 160 mm',
      'Kondenser Ünite Ölçüleri: 810 x 660 x 190 mm',
      'Kondenser Ağırlığı: 27 Kg.',
      'Evaporatör Ağırlığı: 13,5 Kg.',
      'Montaj Kit Ağırlığı: 21 Kg.',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 1200m3/h @0 mmH2O',
      'Güç İhtiyacı: 15A@24V DC'
    ]
  },
  { 
    id: 'art1000d', 
    brandId: 'climart', 
    name: 'ART1000D', 
    images: ['/climart/art1000-art1000d-kapak.jpg', '/climart/art1000-art1000d.jpg','/climart/art1000-art1000d-1.jpg'],
    description: 'Ticari araçlar için 6m³ - 11m³ kasa hacmine uygun standart defrost sistemli yüksek performanslı soğutucu ünite.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART1000D',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 6m³ / 9m³ / 11m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 920Watt / 2120Watt / 2480Watt',
      'Soğutucu Akışkan: R134a',
      'Evaporatör Ünite Ölçüleri: 800 x 550 x 160 mm',
      'Kondenser Ünite Ölçüleri: 810 x 660 x 190 mm',
      'Kondenser Ağırlığı: 27 Kg.',
      'Evaporatör Ağırlığı: 14,5 Kg.',
      'Montaj Kit Ağırlığı: 22 Kg.',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 1200m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 30A@12V DC'
    ]
  },
  { 
    id: 'art2000', 
    brandId: 'climart', 
    name: 'ART2000', 
    images: ['/climart/art2000-art2000d-kapak.jpg', '/climart/art2000-art2000d.jpg','/climart/art2000-art2000d-1.jpg'],
    description: '12m³ - 19m³ orta ölçekli ticari taşıtlar için güçlü soğutma sunan ART Series.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART2000',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 12m³ / 16m³ / 19m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 2450Watt / 2970Watt',
      'Soğutucu Akışkan: R134a',
      'Evaporatör Ünite Ölçüleri: 1060 x 530 x 180 mm',
      'Kondenser Ünite Ölçüleri: 810 x 660 x 190 mm',
      'Kondenser Ağırlığı: 27 Kg.',
      'Evaporatör Ağırlığı: 15 Kg.',
      'Montaj Kit Ağırlığı: 23 Kg.',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2400m3/h @0 mmH2O',
      'Güç İhtiyacı: 20A@24V DC'
    ]
  },
  { 
    id: 'art2000d', 
    brandId: 'climart', 
    name: 'ART2000D', 
    images: ['/climart/art2000-art2000d-kapak.jpg', '/climart/art2000-art2000d.jpg','/climart/art2000-art2000d-1.jpg'],
    description: '12m³ - 19m³ orta ölçekli ticari taşıtlar için standart defrost donanımlı ticari soğutucu.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART2000D',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 12m³ / 16m³ / 19m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1180Watt / 2500Watt / 3100Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1060 x 530 x 180 mm',
      'Kondenser Ünite Ölçüleri: 810 x 660 x 190 mm',
      'Kondenser Ağırlığı: 27 Kg.',
      'Evaporatör Ağırlığı: 17 Kg.',
      'Montaj Kit Ağırlığı: 26 Kg.',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2400m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 40A@12V DC'
    ]
  },
  { 
    id: 'art2200', 
    brandId: 'climart', 
    name: 'ART2200', 
    images: ['/climart/art2200-art2200d-kapak.jpg', '/climart/art2200-art2200d.jpg','/climart/art2200-art2200d-1.jpg'], 
    description: '12m³ - 19m³ orta ölçekli ticari taşıtlar için ART2200 soğutucu ünite.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART2200',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 12m³ / 16m³ / 19m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 2450Watt / 2970Watt',
      'Soğutucu Akışkan: R134a',
      'Soğutucu Akışkan Miktarı: 1300gr',
      'Çalışma Çevre Sıcaklığı: Min: -18 C° (±2 °C) / Max: 43 C° (±2 °C)',
      'Evaporatör Ünite Ölçüleri: 1060 x 530 x 180 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 98 Kg.',
      'Evaporatör Ağırlığı: 15 Kg.',
      'Montaj Kit Ağırlığı: 23 Kg.',
      'Kompresör Tipi: SD5H14',
      'Kompresör Yağ Tipi: Polyol Ester 68',
      'Kompresör Yağ Miktarı: 300cc',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2400m3/h @0 mmH2O',
      'Genişleme Valfi: Termostatik Dıştan Dengelemeli',
      'Triple Basınç Otomatiği: Yüksek(24off)/Alçak(2off) / Fan Kontrol(120on)',
      'Elektrik Motor Özellikleri: 1,5 kW 380V 50Hz',
      'Güç İhtiyacı: 20A@24V DC'
    ]
  },
  { 
    id: 'art2200d', 
    brandId: 'climart', 
    name: 'ART2200D', 
    images: ['/climart/art2200-art2200d-kapak.jpg', '/climart/art2200-art2200d.jpg','/climart/art2200-art2200d-1.jpg'], 
    description: '12m³ - 19m³ orta ölçekli ticari taşıtlar için defrost destekli ART2200D ticari soğutucu.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART2200D',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 12m³ / 16m³ / 19m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1180Watt / 2500Watt / 3100Watt',
      'Soğutucu Akışkan: R404A',
      'Soğutucu Akışkan Miktarı: 1450gr',
      'Çalışma Çevre Sıcaklığı: Min: -18 C° (±2 °C) / Max: 43 C° (±2 °C)',
      'Evaporatör Ünite Ölçüleri: 1060 x 530 x 180 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 103 Kg.',
      'Evaporatör Ağırlığı: 17 Kg.',
      'Montaj Kit Ağırlığı: 24 Kg.',
      'Kompresör Tipi: SD5H14',
      'Kompresör Yağ Tipi: Polyol Ester 68',
      'Kompresör Yağ Miktarı: 300cc',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2400m3/h @0 mmH2O',
      'Genişleme Valfi: Termostatik Dıştan Dengelemeli',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Triple Basınç Otomatiği: Yüksek(29off)/Alçak(-0,4off) / Fan Kontrol(28on)',
      'Elektrik Motor Özellikleri: 3 kW 380V 50Hz',
      'Güç İhtiyacı: 40A@12V DC'
    ]
  },
  { 
    id: 'art2500', 
    brandId: 'climart', 
    name: 'ART2500', 
    images: ['/climart/art2500-art2550-kapak.jpg', '/climart/art2500-art2550.jpg','/climart/art2500-art2550-1.jpg'], 
    description: '12m³ - 22m³ orta-büyük ölçekli ticari taşıtlar için ART2500 soğutucu ünite.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART2500',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 12m³ / 19m³ / 22m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1900Watt / 3350Watt / 3830Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1060 x 530 x 185 mm',
      'Kondenser Ünite Ölçüleri: 1300 x 1090 x 260 mm',
      'Kondenser Ağırlığı: 32 Kg.',
      'Evaporatör Ağırlığı: 21 Kg.',
      'Montaj Kit Ağırlığı: 28 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2800m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 28A@24V DC'
    ]
  },
  { 
    id: 'art2550d', 
    brandId: 'climart', 
    name: 'ART2550D', 
    images: ['/climart/art2500-art2550-kapak.jpg', '/climart/art2500-art2550.jpg','/climart/art2500-art2550-1.jpg'], 
    description: '12m³ - 22m³ ticari taşıtlar için defrost destekli ART2550D ticari soğutucu.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART2550D',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 12m³ / 19m³ / 22m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1450Watt / 2750Watt / 3130Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1060 x 530 x 185 mm',
      'Kondenser Ünite Ölçüleri: 1760 x 1090 x 260 mm',
      'Kondenser Ağırlığı: 78 Kg.',
      'Evaporatör Ağırlığı: 21 Kg.',
      'Montaj Kit Ağırlığı: 29 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2800m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Elektrik Motor Özellikleri: 3kW 280V 50Hz',
      'Güç İhtiyacı: 56A@12V DC'
    ]
  },
  { 
    id: 'art3000', 
    brandId: 'climart', 
    name: 'ART3000', 
    images: ['/climart/art3000-art3300-kapak.jpg', '/climart/art3000-art3300.jpg','/climart/art3000-art3300-1.jpg'], 
    description: '19m³ - 26m³ büyük ölçekli ticari taşıtlar için yüksek kapasiteli ART3000 soğutucu ünite.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART3000',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 19m³ / 22m³ / 26m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1880Watt / 3650Watt / 4600Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1000 x 650 x 230 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 54 Kg.',
      'Evaporatör Ağırlığı: 21,5 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2800m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 28A@24V DC'
    ]
  },
  { 
    id: 'art3300', 
    brandId: 'climart', 
    name: 'ART3300', 
    images: ['/climart/art3000-art3300-kapak.jpg', '/climart/art3000-art3300.jpg','/climart/art3000-art3300-1.jpg'], 
    description: '19m³ - 26m³ büyük kapasiteli ticari taşıtlar için güçlü ve defrost destekli ART3300 ticari soğutucu.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART3300',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 19m³ / 22m³ / 26m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1490Watt / 3005Watt / 3760Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1000 x 650 x 230 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 104 Kg.',
      'Evaporatör Ağırlığı: 21,5 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2800m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Elektrik Motor Özellikleri: 4kW 380V 50Hz',
      'Güç İhtiyacı: 56A@12V DC'
    ]
  },
  { 
    id: 'art4000', 
    brandId: 'climart', 
    name: 'ART4000', 
    images: ['/climart/art4000-art4400-kapak.jpg', '/climart/art4000-art4400.jpg','/climart/art4000-art4400-1.jpg'], 
    description: '24m³ - 36m³ geniş hacimli ticari taşıtlar için dev soğutma kapasiteli ART4000 soğutucu ünite.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART4000',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 24m³ / 32m³ / 36m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 2110Watt / 3755Watt / 4935Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1310 x 795 x 240 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 54 Kg.',
      'Evaporatör Ağırlığı: 31 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2800m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 28A@24V DC'
    ]
  },
  { 
    id: 'art4400', 
    brandId: 'climart', 
    name: 'ART4400', 
    images: ['/climart/art4000-art4400-kapak.jpg', '/climart/art4000-art4400.jpg','/climart/art4000-art4400-1.jpg'], 
    description: '24m³ - 36m³ ekstra büyük hacimli ticari soğutma gereksinimleri için ART4400 soğutucu donanımı.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART4400',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 24m³ / 32m³ / 36m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1610Watt / 3130Watt / 3950Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1310 x 795 x 240 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 104 Kg.',
      'Evaporatör Ağırlığı: 31 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2800m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Elektrik Motor Özellikleri: 4kW 380V 50Hz',
      'Güç İhtiyacı: 56A@12V DC'
    ]
  },
  { 
    id: 'art5000', 
    brandId: 'climart', 
    name: 'ART5000', 
    images: ['/climart/art5000-art5500-kapak.jpg', '/climart/art5000-art5500.jpg','/climart/art5000-art5500-1.jpg'], 
    description: '32m³ - 50m³ ekstra dev hacimli ticari taşıtlar için ART5000 maksimum soğutma donanımı.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART5000',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 32m³ / 42m³ / 50m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 2380Watt / 4315Watt / 4650Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1240 x 680 x 200 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 57 Kg.',
      'Evaporatör Ağırlığı: 37 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 33A@24V DC'
    ]
  },
  { 
    id: 'art5500', 
    brandId: 'climart', 
    name: 'ART5500', 
    images: ['/climart/art5000-art5500-kapak.jpg', '/climart/art5000-art5500.jpg','/climart/art5000-art5500-1.jpg'], 
    description: '32m³ - 50m³ ekstra dev hacimli ticari soğutma gereksinimleri için yüksek performans ART5500 ünitesi.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART5500',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 32m³ / 42m³ / 50m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 1800Watt / 3400Watt / 4650Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1240 x 680 x 200 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 106 Kg.',
      'Evaporatör Ağırlığı: 37 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Elektrik Motor Özellikleri: 4kW 380V 50Hz',
      'Güç İhtiyacı: 60A@12V DC'
    ]
  },
  { 
    id: 'art5000t', 
    brandId: 'climart', 
    name: 'ART5000T', 
    images: ['/climart/art5000t-art5500t-kapak.jpg', '/climart/art5000t-art5500t.jpg'], 
    description: '32m³ - 50m³ ekstra dev hacimli ticari taşıtlar için ART5000T maksimum soğutma donanımı.', 
    category: 'Ticari Araç Soğutucuları',
    features: [
      'Ünite Adı: ART5000T',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 32m³ / 42m³ / 50m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Araç Motorundan Tahrikli: 2380Watt / 4315Watt / 5710Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1240 x 680 x 200 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 57 Kg.',
      'Evaporatör Ağırlığı: 37 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Sıcak Gaz ile Manuel veya Otomatik Defrost: Standart',
      'Güç İhtiyacı: 33A@24V DC'
    ]
  },
  { 
    id: 'art5500t', 
    brandId: 'climart', 
    name: 'ART5500T', 
    images: ['/climart/art5000t-art5500t-kapak.jpg', '/climart/art5000t-art5500t.jpg'], 
    description: '32m³ - 50m³ ekstra dev hacimli ticari soğutma gereksinimleri için yüksek performans ART5500T Elektrik donanımlı ünitesi.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART5500T',
      'Soğutma Kapasitesi: @30ᵒC',
      'Kasa Hacmi: 32m³ / 42m³ / 50m³',
      'Set Sıcaklığı: -18 °C / 0 °C / +5 °C',
      'Elektrik Motorundan Tahrikli: 1800Watt / 3400Watt / 4650Watt',
      'Soğutucu Akışkan: R404A',
      'Evaporatör Ünite Ölçüleri: 1240 x 680 x 200 mm',
      'Kondenser Ünite Ölçüleri: 1270 x 560 x 455 mm',
      'Kondenser Ağırlığı: 106 Kg.',
      'Evaporatör Ağırlığı: 37 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Elektrik Motor Özellikleri: 4kW 380V 50Hz',
      'Güç İhtiyanı: 66A@12V DC'
    ]
  },
  { 
    id: 'art8-eco', 
    brandId: 'climart', 
    name: 'ART8 ECO', 
    images: ['/climart/climart-art8-eco-kapak.jpg', '/climart/climart-art8-eco.jpg','/climart/climart-art8-eco-1.jpg'], 
    description: 'Yüksek kapasiteli soğutma ve ısıtma sunan ART8 ECO ticari araç kliması.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART8 ECO',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 6000Kcal (7000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 960 x 310 x 150 mm',
      'Kondenser Ünite Ölçüleri: 1150 x 1075 x 150 mm',
      'Kondenser Ağırlığı: 19 Kg.',
      'Evaporatör Ağırlığı: 14 Kg.',
      'Montaj Kit Ağırlığı: 40 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 5600m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 1600m3/h @0 mmH2O',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 30A@12V DC'
    ]
  },
  { 
    id: 'art10', 
    brandId: 'climart', 
    name: 'ART10', 
    images: ['/climart/climart-art10-kapak.jpg', '/climart/climart-art10.jpg','/climart/climart-art10-1.jpg'], 
    description: 'Büyük araçlar için tasarlanmış 10000Watt güçlü soğutma kapasiteli ART10 ticari araç kliması.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART10',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 8600Kcal (10000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1250 x 300 x 200 mm',
      'Kondenser Ünite Ölçüleri: 1320 x 1260 x 175 mm',
      'Kondenser Ağırlığı: 23 Kg.',
      'Evaporatör Ağırlığı: 24 Kg.',
      'Montaj Kit Ağırlığı: 41 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 4200m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2000m3/h @0 mmH2O',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 36A@12V DC'
    ]
  },
  { 
    id: 'art11', 
    brandId: 'climart', 
    name: 'ART11', 
    images: ['/climart/climart-art11-kapak.jpg', '/climart/climart-art11.jpg','/climart/climart-art11-1.jpg'], 
    description: '11000Watt olağanüstü soğutma kapasitesiyle ART11 tepe/tavan tipi ticari split araç kliması.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART11',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 9500Kcal (11000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1250 x 300 x 200 mm',
      'Kondenser Ünite Ölçüleri: 1670 x 1260 x 230 mm',
      'Kondenser Ağırlığı: 29 Kg.',
      'Evaporatör Ağırlığı: 24 Kg.',
      'Montaj Kit Ağırlığı: 41 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 6700m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2000m3/h @0 mmH2O',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 43A@12V DC'
    ]
  },
  { 
    id: 'art12', 
    brandId: 'climart', 
    name: 'ART12', 
    images: ['/climart/climart-art12-kapak.jpg', '/climart/climart-art12.jpg'], 
    description: '12000Watt yüksek soğutma kapasitesine sahip ART12 ticari araç kliması.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART12',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 10320Kcal (12000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1370 x 1850 x 152 mm',
      'Kondenser Ağırlığı: 51 Kg.',
      'Montaj Kit Ağırlığı: 25 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 5600m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 2400m3/h @0 mmH2O',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 58A@12V DC'
    ]
  },
  { 
    id: 'art15', 
    brandId: 'climart', 
    name: 'ART15', 
    images: ['/climart/climart-art15-kapak.jpg', '/climart/climart-art15.jpg'], 
    description: '15000Watt dev soğutma kapasitesiyle ART15 yüksek performanslı ticari araç kliması.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART15',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 12900Kcal (15000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1370 x 2000 x 215 mm',
      'Kondenser Ağırlığı: 62 Kg.',
      'Montaj Kit Ağırlığı: 22 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 6700m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4000m3/h @0 mmH2O',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 75A@12V DC'
    ]
  },
  { 
    id: 'art18-eco', 
    brandId: 'climart', 
    name: 'ART18 ECO', 
    images: ['/climart/climart-art18-eco.jpg'], 
    description: '18000Watt yüksek performanslı ve ekonomik ART18 ECO ticari araç kliması.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART18 ECO',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 15500Kcal (18000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1630 x 1580 x 280 mm',
      'Kondenser Ağırlığı: 92 Kg.',
      'Montaj Kit Ağırlığı: 35 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 5400m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Taze Hava: Opsiyonel',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 41A@24V DC'
    ]
  },
  { 
    id: 'art22', 
    brandId: 'climart', 
    name: 'ART22', 
    images: ['/climart/climart-art22-kapak.jpg', '/climart/climart-art22.jpg'], 
    description: 'Büyük yolcu araçları ve otobüsler için 22000Watt dev kapasiteli ART22 ticari klima.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART22',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 18930Kcal (22000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1660 x 1600 x 250 mm',
      'Kondenser Ağırlığı: 92 Kg.',
      'Montaj Kit Ağırlığı: 35 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 6750m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Taze Hava: Opsiyonel',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 50A@24V DC'
    ]
  },
  { 
    id: 'art24', 
    brandId: 'climart', 
    name: 'ART24', 
    images: ['/climart/climart-art24-kapak.jpg', '/climart/climart-art24.jpg'], 
    description: 'Üst düzey soğutma gereksinimi olan büyük ticari araçlar için 24000Watt gücünde ART24.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART24',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 20700Kcal (24000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 1810 x 1660 x 250 mm',
      'Kondenser Ağırlığı: 92 Kg.',
      'Montaj Kit Ağırlığı: 35 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 8600m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 4200m3/h @0 mmH2O',
      'Taze Hava: Opsiyonel',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 50A@24V DC'
    ]
  },
  { 
    id: 'art40', 
    brandId: 'climart', 
    name: 'ART40', 
    images: ['/climart/climart-art40-kapak.jpg', '/climart/climart-art40.jpg'], 
    description: 'Devasa yolcu otobüsleri ve özel projeler için 40000Watt mega kapasiteli ART40 ticari klima.', 
    category: 'Ticari Araç Klimaları',
    features: [
      'Ünite Adı: ART40',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 34400Kcal (40000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 2575 x 2060 x 240 mm',
      'Kondenser Ağırlığı: 160 Kg.',
      'Montaj Kit Ağırlığı: 50 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 13000m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 9600m3/h @0 mmH2O',
      'Taze Hava: Opsiyonel',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 90A@12V DC'
    ]
  },
  { 
    id: 'art3', 
    brandId: 'climart', 
    name: 'ART3', 
    images: ['/climart/climart-art3-kapak.jpg', '/climart/climart-art3.jpg'], 
    description: 'Kompakt boyutlarıyla araç orijinal fanına entegre çalışan 4000Watt kapasiteli ART3 ticari klima.', 
    category: 'Özel Uygulamalar',
    features: [
      'Ünite Adı: ART3',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 3440Kcal (4000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 305 x 195 x 38 mm',
      'Kondenser Ünite Ölçüleri: 593 x 355 x 242 mm',
      'Kondenser Ağırlığı: 6,6 Kg.',
      'Evaporatör Ağırlığı: 1 Kg.',
      'Montaj Kit Ağırlığı: 16 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: Araç Orijinal Fanı',
      'Güç İhtiyacı: 10A@24V DC'
    ]
  },
  { 
    id: 'art5', 
    brandId: 'climart', 
    name: 'ART5', 
    images: ['/climart/climart-art5-kapak.jpg', '/climart/climart-art5.jpg'], 
    description: '5000Watt soğutma kapasitesiyle standart ticari araç iklimlendirme ünitelerinin favorisi ART5.', 
    category: 'Özel Uygulamalar',
    features: [
      'Ünite Adı: ART5',
      'Soğutma Kapasitesi: @35ᵒC',
      'Isıtma Kapasitesi: @Q80ᵒC',
      'Araç Motorundan Tahrikli: 4300Kcal (5000Watt)',
      'Soğutucu Akışkan: R134a',
      'Çalışma Çevre Sıcaklığı Min: 15 ᵒC(±2)',
      'Çalışma Çevre Sıcaklığı Max: 43 ᵒC(±2)',
      'Evaporatör Ünite Ölçüleri: 535 x 445 x 185 mm',
      'Kondenser Ünite Ölçüleri: 660 x 445 x 210 mm',
      'Kondenser Ağırlığı: 8 Kg.',
      'Evaporatör Ağırlığı: 10 Kg.',
      'Montaj Kit Ağırlığı: 24 Kg.',
      'Kompresör Tipi: Pistonlu Tip',
      'Kondenser Hava Debisi: 2300m3/h @0 mmH2O',
      'Evaporatör Hava Debisi: 1200m3/h @0 mmH2O',
      'Ön Klima: Opsiyonel',
      'Güç İhtiyacı: 13A@24V DC'
    ]
  },

  { 
    id: 'yh-2', 
    brandId: 'yilkar', 
    name: 'YH 2 Kuru Tip Isıtıcı', 
    images: [
      '/yilkar/yh-2-kuru-tip-isitici.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-1.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-2.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-3.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-4.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-5.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-6.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-7.jpg',
      '/yilkar/yh-2-kuru-tip-isitici-8.jpg'
    ], 
    description: 'Ticari araçlar için kompakt dizel ısıtıcı çözümü. Yüksek verimlilik ve düşük yakıt tüketimi ile kış aylarında ideal konfor sağlar.', 
    category: 'Kuru Tip Isıtma',
    features: [
      'ECE R122 Numarası: 122 R - 0010869',
      'ECE R10 Numarası: 10R - 05 15114',
      'Isıtma Kapasitesi: 0,9 - 2,5 kW',
      'Hava debisi: 90 m³/sa (maks.)',
      'Yakıt Cinsi: Dizel',
      'Yakıt Tüketimi: 0,28 lt/sa (maks.) - 0,2 lt/sa (ortalama)',
      'Çalışma Voltajı: 12 / 24 VDC',
      'Başlangıç Çalışma Akımı: 8A @ 12VDC - 4A @ 24VDC',
      'Sürekli Çalışma Akımı (maks.): 3A @ 12VDC - 1.5A @ 24VDC',
      'Ağırlık: 3 kg',
      'Ünite Ölçüleri: 320x130x150 mm'
    ]
  },

  { 
    id: 'yh-5', 
    brandId: 'yilkar', 
    name: 'YH 5 Kuru Tip Isıtıcı', 
    images: [
      '/yilkar/yh-5-kuru-tip-isitici.jpg',
      '/yilkar/yh-5-kuru-tip-isitici-1.jpg',
      '/yilkar/yh-5-kuru-tip-isitici-2.jpg'
    ], 
    description: 'Yüksek ısıtma kapasiteli (5.0 kW) motor bağımsız dizel ısıtıcı. Büyük kabinler ve zorlu kış şartları için tasarlanmış profesyonel çözüm.', 
    category: 'Kuru Tip Isıtma',
    features: [
      'ECE R122 Numarası: 122 R - 0010869',
      'ECE R10 Numarası: 10R - 05 15114',
      'Isıtma Kapasitesi: 1,0 - 5,0 kW',
      'Hava debisi: 200 m³/sa (maks.)',
      'Yakıt Cinsi: Dizel',
      'Yakıt Tüketimi: 0,46 lt/sa (maks.) - 0,35 lt/sa (ortalama)',
      'Çalışma Voltajı: 12 / 24 VDC',
      'Başlangıç Çalışma Akımı: 8A @ 12VDC - 4A @ 24VDC',
      'Sürekli Çalışma Akımı (maks.): 3A @ 12VDC - 1.5A @ 24VDC',
      'Ağırlık: 5,2 kg',
      'Ünite Ölçüleri: 400x140x180 mm'
    ]
  },
  { 
    id: 'yk-100-s', 
    brandId: 'yilkar', 
    name: 'YK 100 S Tavan Kliması', 
    images: [
      '/yilkar/yk-100-s-tavan-klimasi.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-1.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-2.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-3.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-4.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-5.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-6.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-7.jpg',
      '/yilkar/yk-100-s-tavan-klimasi-8.jpg'
    ], 
    description: 'Büyük ölçekli ticari araçlar için 10kW kapasiteli üstün iklimlendirme performansı sunan tavan tipi klima sistemi.', 
    category: 'Tavan Klimaları',
    features: [
      'Soğutma Kapasitesi: 6 - 10 kW (20472 - 34121 BTU/h)',
      'Soğutulmuş Hava: 2700 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 65 A @12 VDC - 32.5 A @24 VDC',
      'İç Ölçüler: 1280*380*180 mm',
      'Dış Ölçüler: 1200*1680*190 mm',
      'Ünite Ağırlığı: 44.5 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-80-s', 
    brandId: 'yilkar', 
    name: 'YK 80 S Tavan Kliması', 
    images: [
      '/yilkar/yk-80-s-tavan-klimasi.jpg',
      '/yilkar/yk-80-s-tavan-klimasi-1.jpg',
      '/yilkar/yk-80-s-tavan-klimasi-2.jpg',
      '/yilkar/yk-80-s-tavan-klimasi-3.jpg',
      '/yilkar/yk-80-s-tavan-klimasi-4.jpg',
      '/yilkar/yk-80-s-tavan-klimasi-5.jpg'
    ], 
    description: 'Orta segment ticari araçlar için ideal 8kW soğutma kapasiteli, dayanıklı ve verimli tavan tipi klima çözümü.', 
    category: 'Tavan Klimaları',
    features: [
      'Soğutma Kapasitesi: 6 - 8 kW (20472 - 27297 BTU/h)',
      'Soğutulmuş Hava: 1800 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 47 A @12 VDC - 25 A @24 VDC',
      'İç Ölçüler: 1098*366*174 mm',
      'Dış Ölçüler: 1200*1200*190 mm',
      'Ünite Ağırlığı: 34.5 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-120-s', 
    brandId: 'yilkar', 
    name: 'YK 120 S Tavan Kliması', 
    images: [
      '/yilkar/yk-120-s-tavan-klimasi.jpg',
      '/yilkar/yk-120-s-tavan-klimasi-1.jpg',
      '/yilkar/yk-120-s-tavan-klimasi-2.jpg',
      '/yilkar/yk-120-s-tavan-klimasi-3.jpg',
      '/yilkar/yk-120-s-tavan-klimasi-4.jpg'
    ], 
    description: 'Yüksek yolcu kapasiteli araçlar için 12kW gücünde maksimum soğutma performansı sağlayan tavan tipi klima.', 
    category: 'Tavan Klimaları',
    features: [
      'Soğutma Kapasitesi: 9 - 12 kW (30709 - 40945 BTU/sa)',
      'Soğutulmuş Hava: 2700 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 65 A @12 VDC - 32,5 A @24 VDC',
      'İç Ölçüler: 1300 * 420 * 226 mm',
      'Dış Ölçüler: 1200 * 1680 * 190 mm',
      'Ünite Ağırlığı: 44,5 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-90-s', 
    brandId: 'yilkar', 
    name: 'YK 90 S Tavan Kliması', 
    images: [
      '/yilkar/yk-90-s-tavan-klimasi.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-1.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-2.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-3.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-4.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-5.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-6.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-7.jpg',
      '/yilkar/yk-90-s-tavan-klimasi-8.jpg'
    ], 
    description: 'Minibüs ve midibüs segmenti için özel olarak geliştirilmiş 9kW kapasiteli, kompakt ve estetik tavan tipi klima.', 
    category: 'Tavan Klimaları',
    features: [
      'Soğutma Kapasitesi: 6 - 9 kW (20472 - 30709 BTU/sa)',
      'Soğutulmuş Hava: 1800 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 36 A @12 VDC - 18 A @24 VDC',
      'İç Ölçüler: 952 *420* 222 mm',
      'Dış Ölçüler: 1200*1200*190 mm',
      'Ünite Ağırlığı: 32.5 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-135-mb', 
    brandId: 'yilkar', 
    name: 'YK 135 MB Tavan Kliması', 
    images: [
      '/yilkar/yk-135-mb-tavan-klimasi.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-1.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-2.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-3.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-4.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-5.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-6.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-7.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-8.jpg',
      '/yilkar/yk-135-mb-tavan-klimasi-9.jpg'
    ], 
    description: '13.5 kW kapasiteli, yüksek verimli monoblok tavan tipi klima. Opsiyonel ısıtma ve temiz hava özellikleri ile komple çözüm sunar.', 
    category: 'Monoblok Klimalar',
    features: [
      'Soğutma Kapasitesi: 8 - 13.5 kW (27297 - 46064 BTU/h)',
      'Isıtma Kapesitesi: 12554 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %50 (Opsiyonel)',
      'Soğutulmuş Hava: 1800 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 47 A @12 VDC - 23 A @24 VDC',
      'Dış Ölçüler: 1280*1760*220 mm',
      'Ünite Ağırlığı: 48,5 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-155-mb', 
    brandId: 'yilkar', 
    name: 'YK 155 MB Tavan Kliması', 
    images: [
      '/yilkar/yk-155-mb-tavan-klimasi.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-1.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-2.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-3.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-4.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-5.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-6.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-7.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-8.jpg',
      '/yilkar/yk-155-mb-tavan-klimasi-9.jpg'
    ], 
    description: 'Büyük araçlar için tasarlanmış 15.5 kW soğutma gücüne sahip profesyonel monoblok klima sistemi.', 
    category: 'Monoblok Klimalar',
    features: [
      'Soğutma Kapasitesi: 10 - 15.5 kW (34121 - 52888 BTU/h)',
      'Isıtma Kapesitesi: 18000 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %50 (Opsiyonel)',
      'Soğutulmuş Hava: 3600 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 70 A @12 VDC - 35 A @24 VDC',
      'Dış Ölçüler: 1280*1960*220 mm',
      'Ünite Ağırlığı: 55 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-155-mb-l', 
    brandId: 'yilkar', 
    name: 'YK 155 MB L Tavan Kliması', 
    images: [
      '/yilkar/yk-155-mb-l-tavan-klimasi.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-1.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-2.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-3.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-4.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-5.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-6.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-7.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-8.jpg',
      '/yilkar/yk-155-mb-l-tavan-klimasi-9.jpg'
    ], 
    description: 'Geniş gövdeli araçlar için L tipi özel tasarım monoblok klima. Yüksek hava debisi ve soğutma kapasitesi sağlar.', 
    category: 'Monoblok Klimalar',
    features: [
      'Soğutma Kapasitesi: 10 - 15.5 kW (34121 - 52888 BTU/h)',
      'Isıtma Kapasitesi: 18000 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %50 (Opsiyonel)',
      'Soğutulmuş Hava: 3600 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 70 A @12 VDC - 35 A @24 VDC',
      'Dış Ölçüler: 1600*1960*230 mm',
      'Ünite Ağırlığı: 70 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-190-mb-l', 
    brandId: 'yilkar', 
    name: 'YK 190 MB L Tavan Kliması', 
    images: [
      '/yilkar/yk-190-mb-l-tavan-klimasi.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-1.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-2.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-3.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-4.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-5.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-6.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-7.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-8.jpg',
      '/yilkar/yk-190-mb-l-tavan-klimasi-9.jpg'
    ], 
    description: '19 kW soğutma gücüyle monoblok serisinin en güçlüsü. Büyük otobüsler ve özel projeler için rakipsiz performans.', 
    category: 'Monoblok Klimalar',
    features: [
      'Soğutma Kapasitesi: 14 - 19 kW (47000 - 65000 BTU/h)',
      'Isıtma Kapesitesi: 18000 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %50 (Opsiyonel)',
      'Soğutulmuş Hava: 3600 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 78 A @12 VDC - 43 A @24 VDC',
      'Dış Ölçüler: 1600*1960*230 mm',
      'Ünite Ağırlığı: 75 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-140-mb', 
    brandId: 'yilkar', 
    name: 'YK 140 MB Monoblok Tavan Kliması', 
    images: [
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-1.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-2.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-3.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-4.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-5.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-6.jpg',
      '/yilkar/yk-140-mb-monoblok-tavan-klimasi-7.jpg'
    ], 
    description: '14 kW soğutma kapasiteli kompakt monoblok sistem. Minibüs ve midibüsler için yüksek performanslı iklimlendirme sağlar.', 
    category: 'Monoblok Klimalar',
    features: [
      'Soğutma Kapasitesi: 6 - 14 kW (20472 - 47770 BTU/sa)',
      'Soğutulmuş Hava: 1800 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 47 A @12 VDC - 23 A @24 VDC',
      'Dış Ölçüler: 1280*1480*260 mm',
      'Ünite Ağırlığı: 55 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-300', 
    brandId: 'yilkar', 
    name: 'YK 300 Tavan Kliması', 
    images: [
      '/yilkar/yk-300-tavan-klimasi.jpg',
      '/yilkar/yk-300-tavan-klimasi-1.jpg',
      '/yilkar/yk-300-tavan-klimasi-2.jpg',
      '/yilkar/yk-300-tavan-klimasi-3.jpg',
      '/yilkar/yk-300-tavan-klimasi-4.jpg',
      '/yilkar/yk-300-tavan-klimasi-5.jpg',
      '/yilkar/yk-300-tavan-klimasi-6.jpg',
      '/yilkar/yk-300-tavan-klimasi-7.jpg',
      '/yilkar/yk-300-tavan-klimasi-8.jpg'
    ], 
    description: '30 kW yüksek soğutma kapasiteli tavan tipi klima. 150 kg ünitesi ile otobüsler için dayanıklı ve güçlü çözüm.', 
    category: 'Otobüs Klimaları',
    features: [
      'Soğutma Kapasitesi: 20 - 30 kW (68242 - 102364 BTU/h)',
      'Isıtma Kapesitesi: 40000 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %30 (Opsiyonel)',
      'Soğutulmuş Hava: 3600 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 130 A @12 VDC - 65 A @24 VDC',
      'Dış Ölçüler: 2080 / 1930 / 1780 * 1990 * 270 mm',
      'Ünite Ağırlığı: 150 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-400', 
    brandId: 'yilkar', 
    name: 'YK 400 Otobüs Tavan Kliması', 
    images: [
      '/yilkar/yk-400-otobus-tavan-klimasi.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-1.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-2.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-3.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-4.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-5.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-6.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-7.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-8.jpg',
      '/yilkar/yk-400-otobus-tavan-klimasi-9.jpg'
    ], 
    description: '40 kW soğutma gücüyle şehirlerarası ve turizm otobüsleri için en yüksek performanslı iklimlendirme sistemi.', 
    category: 'Otobüs Klimaları',
    features: [
      'Soğutma Kapasitesi: 35 - 40 kW (119424 - 136485 BTU/h)',
      'Isıtma Kapesitesi: 42992 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %30 (Opsiyonel)',
      'Soğutulmuş Hava: 5400 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 85 A @24 VDC',
      'Dış Ölçüler: 2080 / 1930 / 1780 * 2450 * 270 mm',
      'Ünite Ağırlığı: 200 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-450', 
    brandId: 'yilkar', 
    name: 'YK 450 Otobüs Tavan Kliması', 
    images: [
      '/yilkar/yk-450-otobus-tavan-klimasi.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-1.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-2.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-3.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-4.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-5.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-6.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-7.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-8.jpg',
      '/yilkar/yk-450-otobus-tavan-klimasi-9.jpg'
    ], 
    description: '45 kW soğutma ve 55000 kcal/sa ısıtma kapasitesiyle dev otobüs serisinin amiral gemisi.', 
    category: 'Otobüs Klimaları',
    features: [
      'Soğutma Kapasitesi: 40 - 45 kW (136485 - 153546 BTU/h)',
      'Isıtma Kapesitesi: 55000 kcal/sa (Opsiyonel)',
      'Temiz Hava: %0 - %30 (Opsiyonel)',
      'Soğutulmuş Hava: 7200 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 105 A @24 VDC',
      'Dış Ölçüler: 2120 / 2020 / 1920 * 2885 * 290 mm',
      'Ünite Ağırlığı: 250 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-60-s-split', 
    brandId: 'yilkar', 
    name: 'YK 60 S İlave Split Minibüs Kliması', 
    images: [
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-1.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-2.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-3.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-4.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-5.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-6.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-7.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-8.jpg',
      '/yilkar/yk-60-s-ilave-split-minibus-klimasi-9.jpg'
    ], 
    description: 'Minibüsler için tasarlanmış 6 kW soğutma kapasiteli ilave split tip iklimlendirme çözümü.', 
    category: 'İlave Split Klimalar',
    features: [
      'Soğutma Kapasitesi: 2 - 6 kW (6824 - 20472 BTU/sa)',
      'Isıtma Kapasitesi: 4500 kcal/sa (Opsiyonel)',
      'Soğutulmuş Hava: 900 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 18 A @12 VDC - 9 A @24 VDC',
      'Dış Ölçüler: 610*420*226 mm',
      'Ünite Ağırlığı: 8 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-90-s-split', 
    brandId: 'yilkar', 
    name: 'YK 90 S İlave Split Minibüs Kliması', 
    images: [
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-1.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-2.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-3.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-4.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-5.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-6.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-7.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-8.jpg',
      '/yilkar/yk-90-s-ilave-split-minibus-klimasi-9.jpg'
    ], 
    description: '9 kW kapasiteli ilave split sistemi ile minibüslerde konforlu ve verimli taze hava sirkülasyonu.', 
    category: 'İlave Split Klimalar',
    features: [
      'Soğutma Kapasitesi: 6 - 9 kW (20472 - 30709 BTU/sa)',
      'Isıtma Kapasitesi: 6750 kcal/sa (Opsiyonel)',
      'Soğutulmuş Hava: 1800 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 36 A @12 VDC - 18 A @24 VDC',
      'Dış Ölçüler: 980*420*226 mm',
      'Ünite Ağırlığı: 13,5 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-120-s-split', 
    brandId: 'yilkar', 
    name: 'YK 120 S İlave Split Minibüs Kliması', 
    images: [
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-1.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-2.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-3.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-4.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-5.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-6.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-7.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-8.jpg',
      '/yilkar/yk-120-s-ilave-split-minibus-klimasi-9.jpg'
    ], 
    description: '12 kW soğutma gücüyle büyük minibüsler için profesyonel ilave split klima çözümü.', 
    category: 'İlave Split Klimalar',
    features: [
      'Soğutma Kapasitesi: 9 - 12 kW (30709 - 40945 BTU/sa)',
      'Isıtma Kapasitesi: 9000 kcal/sa (Opsiyonel)',
      'Soğutulmuş Hava: 2700 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 54 A @12 VDC - 27 A @24 VDC',
      'Dış Ölçüler: 1300*420*226 mm',
      'Ünite Ağırlığı: 23 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-140-mb-extra', 
    brandId: 'yilkar', 
    name: 'YK 140 MB İlave Minibüs Tavan Kliması', 
    images: [
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-1.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-2.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-3.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-4.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-5.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-6.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-7.jpg',
      '/yilkar/yk-140-mb-ilave-minibus-tavan-klimasi-8.jpg'
    ], 
    description: 'Minibüsler için 14 kW soğutma kapasiteli tavan tipi ilave iklimlendirme ünitesi.', 
    category: 'İlave Tavan Kliması',
    features: [
      'Soğutma Kapasitesi: 6 - 14 kW (20472 - 47770 BTU/sa)',
      'Soğutulmuş Hava: 1800 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 33 A @12 VDC - 17 A @24 VDC',
      'Dış Ölçüler: 1280*825*260 mm',
      'Ünite Ağırlığı: 25 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'yk-50-mb', 
    brandId: 'yilkar', 
    name: 'YK 50 MB Monoblok Kabin Kliması', 
    images: [
      '/yilkar/yk-50-mb-monoblok-kabin-klimasi.jpg',
      '/yilkar/yk-50-mb-monoblok-kabin-klimasi-1.jpg',
      '/yilkar/yk-50-mb-monoblok-kabin-klimasi-2.jpg',
      '/yilkar/yk-50-mb-monoblok-kabin-klimasi-3.jpg',
      '/yilkar/yk-50-mb-monoblok-kabin-klimasi-4.jpg',
      '/yilkar/yk-50-mb-monoblok-kabin-klimasi-5.jpg'
    ], 
    description: 'İş makineleri ve traktör kabinleri için tasarlanmış 5 kW monoblok kabin kliması sistemi.', 
    category: 'Kabin Kliması',
    features: [
      'Soğutma Kapasitesi: 5 kW (17060 BTU/h)',
      'Soğutulmuş Hava: 525 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 30 A @12 VDC - 15 A @24 VDC',
      'Dış Ölçüler: 760 * 800 * 195 mm',
      'Ünite Ağırlığı: 25 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'ys-50', 
    brandId: 'yilkar', 
    name: 'YS 50 Araç Soğutucusu', 
    images: [
      '/yilkar/ys-50-arac-sogutucusu.jpg',
      '/yilkar/ys-50-arac-sogutucusu-1.jpg',
      '/yilkar/ys-50-arac-sogutucusu-2.jpg',
      '/yilkar/ys-50-arac-sogutucusu-3.jpg',
      '/yilkar/ys-50-arac-sogutucusu-4.jpg',
      '/yilkar/ys-50-arac-sogutucusu-5.jpg',
      '/yilkar/ys-50-arac-sogutucusu-6.jpg',
      '/yilkar/ys-50-arac-sogutucusu-7.jpg',
      '/yilkar/ys-50-arac-sogutucusu-8.jpg',
      '/yilkar/ys-50-arac-sogutucusu-9.jpg'
    ], 
    description: 'Frigorifik Sistem +4 C° Nakliye Soğutucusu. 5-13 m³ hacimli araçlar için güvenilir soğuk zincir çözümü.', 
    category: 'Frigorifik Soğutucu',
    features: [
      'Uygun Hacim: 5 - 13 m³',
      'Soğutma Kapasitesi (Maks): 5 kW',
      'Hava Debisi: 1200 m³/saat',
      'Çalışma Voltajı: 12 / 24 VDC',
      'Maksimum Akım (12V): 20 A',
      'Maksimum Akım (24V): 10 A',
      'Soğutucu Akışkan: R134a',
      'Kompresör Koruması: Mevcut'
    ]
  },
  { 
    id: 'webasto-rte-23', 
    brandId: 'webasto', 
    name: 'Webasto Elektrikli Klima Cool Top RTE 23', 
    images: [
      '/webasto/webasto-elektrikli-klima-cool-top-rte-23.png',
      '/webasto/webasto-elektrikli-klima-cool-top-rte-23-1.png'
    ], 
    description: `<h2>Webasto Elektrikli Klima Cool Top RTE 23</h2>
    <p>Webasto’nun güçlü, elektrikli Cool Top RTE 23 tavan tipi klima sistemi, sıcak ortamlardaki molalarda kabinlerde hoş sıcaklıklar ve düşük nem sağlar. İki yenilikçi fırçasız fan sayesinde daha az güç tüketir, çok sessizdir ve uzun ömürlüdür. 24 Volt araç aküsünden gerekli gücü çeker ve 2,5 kW’a kadar enerji verimli bir şekilde soğutabilir. Motordan bağımsız çalıştığı için rölanti sürelerini kısaltır ve bu sayede yakıt tasarrufu sağlar. Düşük gerilim kesintisi, motorun sorunsuz çalışması için akünün her zaman yeterince şarj edilmesini sağlar.</p>
    
    <h2>Cool Top RTE 23 Faydaları</h2>
    <h3>Verimli, sessiz çalışma</h3>
    <p>Elektrikle çalışma, motor rölantisini azaltır ve böylece yakıt tasarrufu sağlar. İki yenilikçi fırçasız fan az güç tüketir ve çok sessizdir.</p>
    
    <h3>Kolay kurulum</h3>
    <p>Cool Top RTE 23, aracın tavan penceresine kolayca ve hızlıca monte edilebilir.</p>
    
    <h3>Hoş sıcaklıklar</h3>
    <p>Klimanın yüksek performansı kabinde ideal sıcaklığı sağlar ve nemi azaltır.</p>`,
    category: 'Elektrikli Klima',
    features: [
      'Soğutma Kapasitesi: 0,9 – 2,5 kW',
      'Nominal Gerilim: 24 V',
      'Kondansatör Ölçüleri: 990 x 734 x 163 mm',
      'Evaporatör Ölçüleri: 350 x 355 x 138 mm',
      'Montaj Yüksekliği: 163 mm',
      'Ağırlık: 28 kg',
      'Sessiz ve uzun ömürlü iki adet fırçasız fan teknolojisi',
      'Hafif ve düz tasarım (165 mm yükseklik)',
      'Hızlı ve kolay tavan montajı'
    ]
  },
  { 
    id: 'webasto-air-top-2000-stc', 
    brandId: 'webasto', 
    name: 'Webasto Air Top 2000 STC Hava Isıtıcı', 
    images: ['/webasto/air-top-2000-stc-webasto.jpeg', '/webasto/air-top-2000-stc-webasto-1.jpeg'], 
    description: `<h2>Çok yönlü, verimli hava ısıtıcısı</h2>
    <p>Webasto'nun Air Top 2000 STC modeli, 2 kW ısı çıkışıyla hava ısıtıcıları arasında "çok yönlü" bir üründür. Kompakt, güvenli, yakıt tüketimi açısından son derece verimli olup, neredeyse tüm araç ve teknelerde geniş bir montaj seçeneği sunar. İster zemin altına ister tekneye monte edilsin, istenen sıcaklığa hızla ulaşır ve sabit tutar. Sessiz çalışır ve sürekli ısıtma için olduğu kadar, sıcaklığa duyarlı malların ve tehlikeli maddelerin taşınması için kargo bölmelerinin ısıtılması için de uygundur.</p>
    
    <h2>Ürün özellikleri</h2>
    <p>Ölçüler (Uzunluk x Genişlik x Yükseklik) mm cinsinden: 310 x 120 x 118. Ağırlık: 2,6 kg. Nominal gerilim: 12 V, 24 V. Yakıt: Dizel, benzin, parafin yakıtlar elektrikle çalışma, motor rölantisini azaltır ve böylece yakıt tasarrufu sağlar.</p>`,
    category: 'Araç Isıtma Sistemleri',
    technicalTable: {
      headers: ['AİR TOP 2000 STC', 'DİZEL', 'BENZİN'],
      rows: [
        ['ECE onay numarası ECE R122 (ısıtıcı)', 'E1 00 0216', 'E1 00 0216'],
        ['ECE onay numarası ECE R10 (EMC)', 'E1 04 1085', 'E1 04 1085'],
        ['Isıtma kapasitesi, kontrol aralığı (kW)', '0.9 – 2.0', '1.0 – 2.0'],
        ['Yakıt tüketimi, kontrol aralığı ( l/h )', '0.12 – 0.24', '0.14 – 0.27'],
        ['Nominal voltaj (V)', '12 / 24', '12'],
        ['Nominal güç tüketimi, kontrol aralığı (W)', '14 – 29', '14 – 29'],
        ['Isıtma hava debisi (0,31 bar)', '93 m³/h', '93 m³/h'],
        ['Ölçüler B x E x Y (mm)', '311 x 120 x 121', '311 x 120 x 121'],
        ['Ağırlık (kg)', '2.6', '2.6']
      ]
    },
    features: ['Isıtma Kapasitesi: 2.0 kW', 'Düşük Yakıt Tüketimi', 'Sessiz Çalışma']
  },
  { 
    id: 'webasto-air-top-evo-40', 
    brandId: 'webasto', 
    name: 'Webasto Air Top Evo 40 Hava Isıtıcı', 
    images: ['/webasto/air-top-evo-40-webasto.jpeg'], 
    description: `<h2>Konforlu, sessiz, güçlü hava ısıtıcısı</h2><p>Air Top Evo modelleri, her zamankinden daha fazla konfor, güvenlik ve ısı çıkışı sunarak öne çıkar. Geniş ticari araçlardan kamp araçlarına kadar geniş bir yelpazede sessiz ve hızlı ısıtma sağlar. Isıtma performansı modüle edilerek yakıt ve güç tüketimi minimize edilir.</p><h2>Air Top Evo: Konforlu, sessiz, güçlü</h2><h3>Isıtma performansının modüle edilmesi</h3><p>Isıtma performansı, hedeflenen sıcaklığa ulaşıldığında enerji tasarrufu sağlamak üzere otomatik olarak ayarlanır (modülasyon). Bu, hem yakıt tüketimini azaltır hem de cihazın ömrünü uzatır.</p>`,
    category: 'Araç Isıtma Sistemleri',
    technicalTable: {
      headers: ['AİR TOP EVO 40', 'DİZEL', 'BENZİN'],
      rows: [
        ['ECE onay numarası ECE R122 (ısıtıcı)', 'E1 00 0385', 'E1 00 0385'],
        ['Isıtma kapasitesi, kontrol aralığı / boost (kW)', '1.5 – 3.5 / 4.0*', '1.7 – 3.5 / 4.0*'],
        ['Yakıt tüketimi, kontrol aralığı ( l/h )', '0.18 – 0.43 / 0.49', '0.25 – 0.51 / 0.58'],
        ['Nominal voltaj (V)', '12 / 24', '12'],
        ['Nominal güç tüketimi, kontrol aralığı (W)', '15 – 40 / 55', '15 – 40 / 55'],
        ['Isıtma hava hacmi (m3/h)', '132 / 140', '132 / 140'],
        ['Otomatik yükseklik ayarı (m)', '2,200', '2,200'],
        ['Ölçüler B x E x Y (mm)', '423 x 148 x 162', '423 x 148 x 162'],
        ['Ağırlık (kg)', '5.9', '5.9']
      ]
    },
    features: ['Boost Kapasitesi: 4.0 kW', 'Otomatik Yükseklik Ayarı', 'Düşük Elektrik Tüketimi']
  },
  { 
    id: 'webasto-air-top-evo-55', 
    brandId: 'webasto', 
    name: 'Webasto Air Top Evo 55 Hava Isıtıcı', 
    images: ['/webasto/air-top-evo-55-webasto.jpeg'], 
    description: `<h2>Air Top Evo: Konforlu, sessiz, güçlü</h2><p>Isıtma performansının modüle edilmesi sayesinde çok düşük yakıt ve elektrik tüketimi. Modern Air Top Evo modülünün sundukları: Kompakt boyutlar, yüksek güvenilirlik ve kullanıcı dostu arayüz.</p><h3>Modern Air Top Evo modülünün sundukları</h3><p>Kompakt tasarımı sayesinde en dar alanlara bile monte edilebilir. Akıllı kontrol paneli ile istenen sıcaklık hassas bir şekilde ayarlanabilir.</p>`,
    category: 'Araç Isıtma Sistemleri',
    technicalTable: {
      headers: ['AIR TOP EVO 55', 'DİZEL', 'BENZİN'],
      rows: [
        ['ECE onay numarası ECE R122 (ısıtıcı)', 'E1 00 0386', 'E1 00 0386'],
        ['Isıtma kapasitesi, kontrol aralığı / boost (kW)', '1.5 – 5.0 / 5.5**', '1.7 – 5.0 / 5.5**'],
        ['Yakıt tüketimi, kontrol aralığı ( l/h )', '0.18 – 0.61 / 0.67', '0.28 – 0.73 / 0.80'],
        ['Nominal voltaj (V)', '12 / 24', '12'],
        ['Nominal güç tüketimi, kontrol aralığı (W)', '15 – 95 / 130', '15 – 95 / 130'],
        ['Hava hacmi akımı ısıtma (m3/h)', '200 / 220', '200 / 220'],
        ['Otomatik yükseklik ayarı (m)', '2,200', '2,200'],
        ['Ölçüler B x E x Y (mm)', '423 x 148 x 162', '423 x 148 x 162'],
        ['Ağırlık (kg)', '5.9', '5.9']
      ]
    },
    features: ['Maksimum Isıtma Kapasitesi: 5.5 kW', 'Uzun Ömürlü Fan', 'Kompakt Boyutlar']
  },
  { 
    id: 'webasto-thermo-pro-90', 
    brandId: 'webasto', 
    name: 'Webasto Thermo Pro 90 Sulu Isıtıcı', 
    images: ['/webasto/thermo-pro-90-webasto.jpeg', '/webasto/thermo-pro-90-webasto-1.jpeg'], 
    description: `<h2>Thermo Pro 90 - Büyük ticari araçlar ve ağır iş makineleri için yüksek performanslı sulu ısıtıcı</h2><p>Gelişmiş özellikleri ve 9.1 kW'a kadar çıkan ısıtma gücü ile Thermo Pro 90, en zorlu kış koşullarında bile motorun ve kabinin hızlı bir şekilde ısınmasını sağlar. Arctic Start özelliği sayesinde aşırı düşük sıcaklıklarda bile güvenilir çalışma performansı sunar.</p><h2>Thermo Pro 90 Faydaları</h2><p>Daha düşük yakıt tüketimi ve sessiz çalışma. Arctic Start ve hızlı ısıtma performansı. Kompakt boyutları sayesinde kolay montaj imkanı.</p>`,
    category: 'Araç Isıtma Sistemleri',
    technicalTable: {
      headers: ['TEKNİK ÖZELLİKLER', 'THERMO PRO 90'],
      rows: [
        ['Isıtma kapasitesi, kısmi yük / tam yük / boost (kW)', '1,8 / 7,6 / 9,1'],
        ['Yakıt tüketimi, kısmi yük / tam yük / boost (l/h)', '0,15 / 0,90 / 1,1'],
        ['Nominal voltaj (V)', '12 / 24'],
        ['Nominal güç tüketimi, kısmi yük / tam yük (W)', '37 / 80'],
        ['Su pompası U4840 debisi (l/h)', '700'],
        ['Ölçüler B x E x Y (mm)', '381 x 131 x 224'],
        ['Ağırlık (kg)', '4,9']
      ]
    },
    features: ['Sulu Tip Isıtıcı', '9.1 kW Isıtma Gücü', 'Motor Ön Isıtma Özelliği']
  },
  { 
    id: 'webasto-cool-top-140-ert-c', 
    brandId: 'webasto', 
    name: 'Cool Top 140 eRT-C Tavan Kliması', 
    images: ['/webasto/cool-top-140-ert-c-webasto.jpeg'], 
    description: 'Bu tavan üstü klima sistemleri, 15 ila 20 koltuklu minibüsler için tasarlanmıştır. Bu cihazlar, tüm sürüş koşullarında çok güvenilirdir ve yüksek kalite standartlarındaki bileşenleri sayesinde uzun servis ömrüne sahiptirler. Kolay erişebilir ve değiştirilebilir bileşenler ile tasarlanmış bu sistemlerde kolay ve hızlı bakım mümkündür. Bu klima sistemleri için geniş aralıkta aksesuar yelpazesi, çeşitli montaj ve motor kiti alternatifleri bulunmaktadır. Kullanıcı dostu ve pratik kumanda çeşitleri mevcuttur. Isıtma seçeneği, yolcu konforunu daha da arttırmaktadır. Bu klima sistemlerinin kapakları aracın rengine uyacak şekilde boyaya hazırlıklıdırlar. Uygulamanızın performans değerleri nominal değerlerden farklı olabilir. Bu değerler kompresör, hava kanalları ve iklim koşulları gibi çeşitli etkenlere bağlıdır.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['KLİMA ÜNİTESİ', 'COOL TOP RTC 140 E'],
      rows: [
        ['Nominal soğutma kapasitesi (kW)', '14.0'],
        ['Isıtma kapasitesi (opsiyonel) (kW)', '12.0'],
        ['Nominal voltaj (V)', '12 / 24'],
        ['Evaporatör hava debisi (m³/h) (12V)', '2,400'],
        ['Evaporatör hava debisi (m³/h) (24V)', '2,000'],
        ['Ölçüler B x E x Y (mm)', '1,600 x 1,150 x 204'],
        ['Ağırlık (kg)', '50']
      ]
    },
    features: ['Soğutma: 14 kW', 'Isıtma Opsiyonu', 'Kompakt Tavan Tasarımı']
  },
  { 
    id: 'webasto-efes-2-riga', 
    brandId: 'webasto', 
    name: 'Webasto Efes 2 Riga Split Klima', 
    images: ['/webasto/efes-2-riga-webasto.jpeg'], 
    description: 'Minibüsler için 15 kW\'a kadar soğutma çözümü sağlayan split klima sistemi.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['TEKNİK ÖZELLİKLER', 'EFES 2', 'RİGA'],
      rows: [
        ['Soğutma kapasitesi (kW)', '15.0', '12.0'],
        ['Nominal voltaj (V)', '12 / 24', '12 / 24'],
        ['Maksimum enerji tüketimi (A) (12V)', '24.6', '45.0'],
        ['Hava debisi (m³/ h)', '4,140', '2,070'],
        ['Ölçüler B x E x Y (mm)', '1,505 x 1,285 x 187', '1,240 x 320 x 175'],
        ['Ağırlık (kg)', '24.0', '18.0']
      ]
    },
    features: ['Split Klima Sistemi', '15 kW Soğutma', 'Minibüse Özel Tasarım']
  },
  { 
    id: 'webasto-efes-3-riga', 
    brandId: 'webasto', 
    name: 'Webasto Efes 3 Riga Split Klima', 
    images: ['/webasto/efes-2-riga-webasto.jpeg'], 
    description: '19.0 kW\'a kadar yüksek performanslı soğutma sağlayan profesyonel split sistem.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['TEKNİK ÖZELLİKLER', 'EFES 3', 'RİGA'],
      rows: [
        ['Soğutma kapasitesi (kW)', '19.0', '12.0'],
        ['Nominal voltaj (V)', '12 / 24', '12 / 24'],
        ['Maksimum enerji tüketimi (A) (12V)', '36.9', '45.0'],
        ['Hava debisi (m³/ h)', '6,210', '2,070'],
        ['Ölçüler B x E x Y (mm)', '1,505 x 1,285 x 187', '1,240 x 320 x 175'],
        ['Ağırlık (kg)', '28.0', '18.0']
      ]
    },
    features: ['Yüksek Kapasiteli Soğutma', 'Split Sistem', 'Hızlı Montaj']
  },
  { 
    id: 'webasto-madrid', 
    brandId: 'webasto', 
    name: 'Webasto Madrid Tavan Kliması', 
    images: ['/webasto/webasto-madrid.jpeg'], 
    description: '35 koltuğa kadar olan mini ve midi otobüsler için dayanıklı ve yüksek randımanlı tavan tipi klima çözümü.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['TEKNİK ÖZELLİKLER', 'MADRİD'],
      rows: [
        ['Soğutma kapasitesi (kW)', '15.5'],
        ['Isıtma kapasitesi (opsiyonel) (kW)', '20.0'],
        ['Nominal voltaj (V)', '24'],
        ['Maksimum enerji tüketimi (A)', '35.0'],
        ['Maksimum Hava debisi (m³/h)', '2,500'],
        ['Ölçüler B x E x Y (mm)', '1,760 x 1,280 x 220'],
        ['Ağırlık (kg)', '59.0']
      ]
    },
    features: ['Soğutma: 15.5 kW', 'Midi Otobüs Uygunluğu', 'Yüksek Hava Debisi']
  },
  { 
    id: 'webasto-myra-newport', 
    brandId: 'webasto', 
    name: 'Myra Newport Split Klima', 
    images: ['/webasto/myra-newport.jpeg'], 
    description: '15 kW kapasiteli, minibüslere özel split klima sistemi.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['TEKNİK ÖZELLİKLER', 'MYRA', 'NEWPORT'],
      rows: [
        ['Soğutma kapasitesi (kW)', '15.0', '12.0'],
        ['Nominal voltaj (V)', '12 / 24', '12 / 24'],
        ['Maksimum enerji tüketimi (A) (12V)', '24.6', '45.0'],
        ['Hava debisi (m³/ h)', '4,140', '2,070'],
        ['Ölçüler B x E x Y (mm)', '1,300 x 1,300 x 160', '1,240 x 320 x 165'],
        ['Ağırlık (kg)', '27.0', '18.0']
      ]
    },
    features: ['Split Klima', '15 kW Kapasite', 'Modüler Tasarım']
  },
  { 
    id: 'webasto-london-tr', 
    brandId: 'webasto', 
    name: 'Webasto London TR / Vancouver TR Entegre Klima', 
    images: ['/webasto/london-tr-vancouver-tr-webasto.jpeg'], 
    description: 'Entegre klima sistemleri; torpido altına veya arka panele dikey olarak monte edilebilir.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['KLİMA ÜNİTESİ', 'LONDON TR', 'VANCOUVER TR'],
      rows: [
        ['Soğutma kapasitesi (kW)', '9.5', '9.5'],
        ['Isıtma kapasitesi (kW)', '13.0', '–'],
        ['Nominal voltaj (V)', '12 / 24', '12 / 24'],
        ['Maksimum enerji tüketimi (A) (12V)', '31.0', '31.0'],
        ['Hava debisi (m³/h)', '1,130', '1,130'],
        ['Ölçüler B x E x Y (mm)', '400 x 550 x 180', '400 x 550 x 180'],
        ['Ağırlık (kg)', '7.7', '7.7']
      ]
    },
    features: ['Entegre Tasarım', 'Ek Isıtma Fonksiyonu (London)', 'Yüksek Esneklik']
  },
  { 
    id: 'webasto-quebec-tr', 
    brandId: 'webasto', 
    name: 'Webasto Quebec TR / Montreal TR Entegre Klima', 
    images: ['/webasto/quebec-tr-montreal-tr-webasto.jpeg'], 
    description: 'Ambulanslar ve iş makineleri için çok yönlü entegre klima çözümleri.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['KLİMA ÜNİTESİ', 'QUEBEC TR', 'MONTREAL TR'],
      rows: [
        ['Soğutma kapasitesi (kW)', '5.0', '5.0'],
        ['Isıtma kapasitesi (kW)', '6.7', '–'],
        ['Nominal voltaj (V)', '12 / 24', '12 / 24'],
        ['Maksimum enerji tüketimi (A) (12V)', '15.0', '15.0'],
        ['Hava debisi (m³/h)', '690', '690'],
        ['Ölçüler B x E x Y (mm)', '183 x 382 x 335', '183 x 382 x 335'],
        ['Ağırlık (kg)', '6.5', '6.5']
      ]
    },
    features: ['Dayanıklı Yapı', 'Kompakt Entegrasyon', 'Ambulans Tipi Klima']
  },
  { 
    id: 'webasto-rimini', 
    brandId: 'webasto', 
    name: 'Webasto Rimini Tavan Kliması', 
    images: ['/webasto/rimini-webasto.jpeg'], 
    description: 'Küçük otobüsler ve özel hizmet araçları için kompakt tavan tipi klima.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['TEKNİK ÖZELLİKLER', 'RİMİNİ', 'PORTOFINO', 'MINSK'],
      rows: [
        ['Soğutma kapasitesi (kW)', '3.5', '5.0', '6.2'],
        ['Nominal voltaj (V)', '12', '12 / 24', '12 / 24'],
        ['Maksimum enerji tüketimi (A) (12V)', '15.0', '19.0', '21.0'],
        ['Hava debisi (m³/h)', '550', '680', '740'],
        ['Ölçüler B x E x Y (mm)', '605 x 800 x 165', '710 x 855 x 185', '710 x 855 x 185'],
        ['Ağırlık (kg)', '18.0', '23.5', '23.5']
      ]
    },
    features: ['Kompakt Tasarım', '3 Farklı Kapasite Seçeneği', 'Hafif Yapı']
  },
  { 
    id: 'webasto-frigo-20', 
    brandId: 'webasto', 
    name: 'Webasto Frigo 20 RT-D Soğuk Depolama', 
    images: ['/webasto/webasto-frigo-20-rt-d.png'], 
    description: 'Hafif ticari araçlar için motor tahrikli frigorifik soğutma sistemi.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['KLİMA ÜNİTESİ', 'FRİGO 20 RT-D (R404A)', 'FRİGO 20 (R134a)'],
      rows: [
        ['+5°C Soğutma Kapasitesi (W)', '–', '1,950'],
        ['0°C Soğutma Kapasitesi (W)', '2,505', '1,650'],
        ['-20°C Soğutma Kapasitesi (W)', '1,350', '–'],
        ['Nominal voltaj (V)', '12', '12'],
        ['Hava akımı (m³/h)', '1,430', '1,430'],
        ['Maksimum akım tüketimi (A)', '24.0 / 12.0', '17.0 / 9.0'],
        ['Ölçüler Kondenser E x B x Y (mm)', '797 x 510 x 173', '797 x 510 x 173'],
        ['Ölçüler Evaporatör E x B x Y (mm)', '655 x 493 x 147', '655 x 493 x 147'],
        ['Ağırlık Kodenser / Evaporatör (kg)', '23.0 / 12.0', '22.0 / 11.5']
      ]
    },
    features: ['Frigorifik Soğutma', 'Motor Tahrikli', 'Kompakt Tasarım']
  },
  { 
    id: 'coolman-ws3000-24v', 
    brandId: 'coolman', 
    name: 'WS3000 Elektrikli Tavan Park Kliması (24V)', 
    images: ['/coolman/ws3000-elektrikli-tavan-park-klimasi-24v.webp'], 
    description: `Coolman WS3000 Elektrikli Tavan Park Kliması (24V), araç motoru çalışmadan kabin içi soğutma sağlayan yüksek performanslı bir tavan park kliması çözümüdür. Özellikle uzun yol sürücüleri ve ağır vasıta kullanıcıları için geliştirilen bu sistem, güçlü soğutma kapasitesi sayesinde tır park kliması, kamyon kabin kliması, kamyonet kabin kliması ve karavan kliması olarak profesyonel kullanım sunar.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması', 'Motordan bağımsız klima sistemi', 'Orijinal kliması olmayan araçlar', 'Gazlı elektrikli klima sistemi'
    ],
    advantages: [
      'Güçlü soğutma kapasitesi (3800 W)', 'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan park klima sistemi', 'Enerji verimli çalışma sistemi', 'R134a gaz ile çevre dostu kullanım', 'Dayanıklı ve uzun ömürlü klima sistemi', 'Park halinde konforlu dinlenme ortamı', 'Profesyonel ağır vasıta klima çözümü'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 3800W', 'Scroll Kompresör', 'Hava Debisi: 540 m³/h']
  },
  { 
    id: 'webasto-frigo-40', 
    brandId: 'webasto', 
    name: 'Webasto Frigo 40 RT-D Soğuk Depolama', 
    images: ['/webasto/webasto-frigo-40-rt-d.png'], 
    description: 'Frigofirik soğutma sistemleri, uzun mesafeli yolculuklarda bile ürünlerinizin optimum derecede taşınabilmesini ve mükemmel koşullarda varış noktasına ulaşmasını sağlar. Hafif ticari araçlar için tasarlanmış olup araç motorundan tahriklidir. Geniş montaj kiti alternatifi ile bir çok araç modeline montaj imkanı sunar. Yüksek kaliteli komponentler sayesinde uzun servis ömrüne sahiptir. Talep edilen taşıma sıcaklığına göre R134a ve R404A alternatifleri mevcuttur.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['KLİMA ÜNİTESİ', 'FRİGO 40 RT-D', 'KRANK TAHRİKLİ'],
      rows: [
        ['Soğutucu akışkan', 'R404A', 'R134a'],
        ['+30°C ortam sıcaklığında ve +5°C bölme sıcaklığında nominal soğutma kapasitesi motor çalışırken (W)', '–', '3,550'],
        ['+30°C ortam sıcaklığında ve 0°C bölme sıcaklığında nominal soğutma kapasitesi motor çalışırken (W)', '3,930', '3,050'],
        ['+30°C ortam sıcaklığında ve -20°C bölme sıcaklığında nominal soğutma kapasitesi motor çalışırken (W)', '2,040', '–'],
        ['Nominal voltaj (V)', '12/24', '12/24'],
        ['Hava akımı (m³/h)', '2,860 / 2,800', '2,860 / 2,800'],
        ['Maksimum güç tüketimi kondenser ünitesi / evaporatör ünitesi (A) (12V)', '24.6 / 13.0', '24.6 / 13.0'],
        ['Maksimum güç tüketimi kondenser ünitesi / evaporatör ünitesi (A) (24V)', '15.2 / 7.4', '15.2 / 7.4'],
        ['Ölçüler kondenser / evaporatör E x B x Y (mm)', '1,033 x 551 x 174', '995 x 493 x 152'],
        ['Ağırlık kondenser / evaporatör (kg)', '27.0 / 17.0', '26.0 / 16.5']
      ]
    },
    features: ['Frigorifik Soğutma', 'Krank Tahrikli', 'Yüksek Verim']
  },
  { 
    id: 'webasto-frigo-45', 
    brandId: 'webasto', 
    name: 'Webasto Frigo 45 RT-D', 
    images: ['/webasto/frigo-45-rt-d-webasto.png'], 
    description: 'Frigofirik soğutma sistemleri, uzun mesafeli yolculuklarda bile ürünlerinizin optimum derecede taşınabilmesini ve mükemmel koşullarda varış noktasına ulaşmasını sağlar. Bu sistemler hafif ticari araçlar için tasarlanmış olup araç motorundan tahriklidir. Geniş montaj kiti alternatifi ile bir çok araç modeline montaj imkanı sunar.', 
    category: 'Araç Soğutma Sistemleri',
    technicalTable: {
      headers: ['KLİMA ÜNİTESİ', 'FRİGO 45 RT-D'],
      rows: [
        ['Soğutucu akışkan', 'R404A'],
        ['+30°C ortam sıcaklığında ve 0°C bölme sıcaklığında nominal soğutma kapasitesi motor çalışırken (W)', '4,300'],
        ['+30°C ortam sıcaklığında ve -20°C bölme sıcaklığında nominal soğutma kapasitesi motor çalışırken (W)', '2,050'],
        ['Nominal voltaj (V)', '12/24'],
        ['Hava akımı (m/h)3', '2,860 / 2,800'],
        ['Ağırlık kondenser / evaporatör (kg)', '34.0 / 22.0']
      ]
    },
    features: ['Frigorifik Soğutma', 'Motor Tahrikli', 'Dayanıklı Yapı']
  },
  { 
    id: 'coolman-ws2000-24v', 
    brandId: 'coolman', 
    name: 'WS2000 Elektrikli Tavan Park Kliması (24V)', 
    images: ['/coolman/ws2000-elektrikli-tavan-park-klimasi-24v.webp'], 
    description: `Coolman WS2000 Elektrikli Tavan Park Kliması (24V), araç motoru çalışmadan kabin içi soğutma sağlayan yüksek performanslı bir tavan park kliması çözümüdür. Scroll kompresör teknolojisi sayesinde 3800W seviyesine kadar güçlü soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini hızlı şekilde serinletir.`,
    category: 'Park Kliması',
    usageAreas: ['Tır park kliması', 'Kamyon kabin kliması'],
    advantages: ['Motor çalıştırmadan soğutma', 'Yakıt tasarrufu'],
    compatibleVehicles: ['MAN TGX', 'Mercedes-Benz Actros'],
    features: ['Soğutma: 3800W', 'Scroll Kompresör', 'Hava Debisi: 540 m³/h']
  },
  { 
    id: 'coolman-md2000-24v', 
    brandId: 'coolman', 
    name: 'MD2000 Elektrikli Tavan Park Kliması (24V)', 
    images: [
      '/coolman/md2000-elektrikli-tavan-park-klimasi-24v.webp',
      '/coolman/md2000-elektrikli-tavan-park-klimasi-24v-1.webp',
      '/coolman/md2000-elektrikli-tavan-park-klimasi-24v-2.webp',
      '/coolman/md2000-elektrikli-tavan-park-klimasi-24v-3.webp',
      '/coolman/md2000-elektrikli-tavan-park-klimasi-24v-4.webp'
    ], 
    description: `Coolman MD2000 Elektrikli Tavan Park Kliması (24V), araç motoru çalışmadan kabin içi soğutma sağlayan verimli ve dayanıklı bir tavan park kliması çözümüdür. Özellikle uzun yol sürücüleri ve ticari araç kullanıcıları için geliştirilen bu sistem, güçlü performansı sayesinde tır park kliması, kamyon tavan kliması, kamyon kabin kliması ve karavan kliması olarak profesyonel kullanım sunar.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen MD2000 park klima sistemi, 24V araç elektrik altyapısı ile uyumlu çalışarak ağır ticari araçlar ve mobil yaşam araçlarında güvenli kullanım sağlar. Scroll kompresör teknolojisi sayesinde 2300W seviyesine kadar soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini hızlı şekilde serinletir.
    
    Alüminyum petek evaporatör ve güçlü fan sistemi ile donatılan cihaz, 300 – 380 m³/h hava debisi ile kabin içerisinde dengeli hava sirkülasyonu sağlayarak sürücüler için konforlu bir ortam oluşturur. Kompakt tasarımı ve hafif yapısı sayesinde birçok ticari araca kolayca uygulanabilen bu araç tavan kliması, özellikle park halinde dinlenme ihtiyacı olan sürücüler için ideal bir çözümdür.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Panelvan ve ticari araç kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması', 'Motordan bağımsız klima sistemi', 'Orijinal kliması olmayan araçlar'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan park klima sistemi', 'Enerji verimli klima teknolojisi', 'Kompakt ve hafif tasarım', 'Dayanıklı alüminyum evaporatör yapısı', 'Kolay montaj ve kullanım', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı', 'Ticari araçlar için ideal klima çözümü'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 2300W', 'Hafif Tasarım', 'Scroll Kompresör']
  },
  { 
    id: 'coolman-gizli-elektrikli-klima-seti-yatay', 
    brandId: 'coolman', 
    name: 'Gizli Elektrikli Klima Seti (Yatay 405 Evaporatörlü)', 
    images: [
      '/coolman/gizli-elektrikli-klima-seti-yatay-405-evaporatorlu-12v-24v.webp',
      '/coolman/gizli-elektrikli-klima-seti-yatay-405-evaporatorlu-12v-24v-1.webp',
      '/coolman/gizli-elektrikli-klima-seti-yatay-405-evaporatorlu-12v-24v-2.webp'
    ], 
    description: `Coolman Gizli Elektrikli Klima Seti (Yatay 405 Evaporatörlü – 12V/24V), araç kabinlerinde motor çalışmadan soğutma sağlayan yüksek verimli bir split elektrikli araç klima sistemi çözümüdür. Yatay tip evaporatör tasarımı sayesinde dar kabinli araçlarda kolay montaj imkanı sunarak tır kabin kliması, kamyon kabin kliması, karavan kliması ve mobil araç klima sistemi olarak profesyonel kullanım sağlar.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen bu gizli klima sistemi, 12V ve 24V araç elektrik altyapıları ile uyumlu çalışarak farklı araç segmentlerinde güvenli kullanım sunar. Scroll kompresör teknolojisi sayesinde 2400W seviyesine kadar güçlü soğutma kapasitesi sağlayarak sıcak yaz günlerinde araç kabinini kısa sürede serinletir.`,
    category: 'Elektrikli Klima',
    usageAreas: [
      'Tır kabin kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Karavan klima sistemi', 'Mobil servis araçları', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Tekne ve yat kliması', 'Mobil ofis araçları', 'Orijinal kliması olmayan araçlar'
    ],
    advantages: [
      '12V ve 24V uyumlu elektrikli klima sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Split sistem sayesinde verimli soğutma', 'Yatay evaporatör tasarımı ile kolay montaj', 'Yakıt tasarrufu sağlayan klima sistemi', 'Dayanıklı alüminyum evaporatör yapısı', 'Kompakt ve gizli montaj imkanı', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Kondanser: 340x400x25 mm', 'Evaporatör: 350x400x150 mm', 'Soğutma: 2400W']
  },
  { 
    id: 'coolman-haier-24v', 
    brandId: 'coolman', 
    name: 'Haier Elektrikli Park Kliması (24V)', 
    images: [
      '/coolman/haier-elektrikli-park-klimasi-24v.webp',
      '/coolman/haier-elektrikli-park-klimasi-24v-1.webp',
      '/coolman/haier-elektrikli-park-klimasi-24v-2.webp'
    ], 
    description: `Coolman Haier Elektrikli Park Kliması (24V), araç motoru çalışmadan kabin içi soğutma sağlayan yüksek performanslı bir tavan park kliması çözümüdür. Özellikle uzun yol sürücüleri için geliştirilen bu sistem, güçlü soğutma kapasitesi ve enerji verimliliği ile tır park kliması, kamyon tavan kliması, kamyon kabin kliması ve karavan kliması kategorilerinde öne çıkan profesyonel bir çözümdür.
    
    Coolman ve Coolertech güvencesi ile Haier serisi park klima sistemi, 24V araç elektrik sistemleri ile uyumlu çalışarak ağır ticari araçlar ve mobil yaşam araçlarında güvenli kullanım sağlar. Hermetik kompresör teknolojisi sayesinde 2800W seviyesine kadar güçlü soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini kısa sürede serinletir.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması', 'Motordan bağımsız klima sistemi', 'Orijinal kliması olmayan araçlar', 'Gazlı elektrikli klima sistemi'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan elektrikli klima sistemi', 'Yüksek soğutma performansı', 'Sessiz çalışma teknolojisi', 'Enerji verimli sistem (yüksek COP değeri)', 'Dayanıklı bakır petek evaporatör yapısı', 'Uzun ömürlü klima sistemi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 2800W', 'Bakır Evaporatör', 'Fırçasız Fan']
  },
  { 
    id: 'coolman-gizli-elektrikli-klima-seti', 
    brandId: 'coolman', 
    name: 'Gizli Elektrikli Klima Seti (12V/24V)', 
    images: [
      '/coolman/gizli-elektrikli-klima-seti-12v-24v.webp',
      '/coolman/gizli-elektrikli-klima-seti-12v-24v-1.webp',
      '/coolman/gizli-elektrikli-klima-seti-12v-24v-2.webp',
      '/coolman/gizli-elektrikli-klima-seti-12v-24v-3.webp'
    ], 
    description: `Coolman Gizli Elektrikli Klima Seti (12/24V), araç kabinlerinde motor çalışmadan soğutma sağlayan yüksek verimli bir split elektrikli klima sistemi çözümüdür. Duvar tipi iç ünite ve harici kondenser yapısı sayesinde özellikle dar kabinli araçlarda etkili soğutma sağlayarak tır kabin kliması, kamyon kabin kliması, karavan kliması ve mobil araç klima sistemi olarak profesyonel kullanım sunar.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen bu gizli klima sistemi, 12V and 24V araç elektrik altyapıları ile uyumlu çalışarak farklı araç segmentlerinde güvenli kullanım sağlar. Scroll kompresör teknolojisi sayesinde 2400W seviyesine kadar güçlü soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini hızlı şekilde serinletir.`,
    category: 'Elektrikli Klima',
    usageAreas: [
      'Tır kabin kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Karavan klima sistemi', 'Mobil servis araçları', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Tekne ve yat kliması', 'Mobil ofis araçları', 'Orijinal kliması olmayan araçlar'
    ],
    advantages: [
      '12V ve 24V uyumlu elektrikli klima sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Split sistem sayesinde verimli soğutma', 'Kompakt ve gizli montaj imkanı', 'Yakıt tasarrufu sağlayan klima sistemi', 'Dayanıklı alüminyum evaporatör yapısı', 'Kolay montaj ve servis imkanı', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 2400W Max', 'Split Sistem', 'Akü Koruması']
  },
  { 
    id: 'coolman-d10000-plus-12v-24v', 
    brandId: 'coolman', 
    name: 'D-10000 Plus Elektrikli Tavan Park Kliması (12V-24V)', 
    images: [
      '/coolman/d-10000-plus-elektrikli-tavan-park-klimasi-12v-24v.webp',
      '/coolman/d-10000-plus-elektrikli-tavan-park-klimasi-12v-24v-1.webp',
      '/coolman/d-10000-plus-elektrikli-tavan-park-klimasi-12v-24v-2.webp',
      '/coolman/d-10000-plus-elektrikli-tavan-park-klimasi-12v-24v-3.webp'
    ], 
    description: `Coolman D-10000 Plus Elektrikli Tavan Park Kliması (12V-24V), araç motoru çalışmadan kabin içi soğutma sağlayan yüksek performanslı bir tavan park kliması çözümüdür. Uzun yol sürücüleri için geliştirilen bu sistem, güçlü soğutma kapasitesi ve enerji verimliliği ile tır park kliması, kamyon tavan kliması, panelvan kliması ve karavan kliması kategorilerinde öne çıkan profesyonel bir çözümdür.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen D-10000 Plus park klima sistemi, 12V ve 24V araç elektrik sistemleri ile uyumlu çalışarak farklı araç segmentlerinde güvenli ve verimli kullanım sağlar. Scroll kompresör teknolojisi sayesinde 3000W – 3100W seviyesine kadar güçlü soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini kısa sürede serinletir.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır ve çekici araçlar', 'Kamyon ve ağır ticari araçlar', 'Panelvan ve ticari araçlar', 'Karavan ve camper araçlar', 'Minibüs ve servis araçları', 'Pickup araçlar', 'Mobil servis araçları', 'Tarım ve iş makineleri', 'Tekne ve yatlar'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tüketimini azaltan elektrikli klima sistemi', 'Yüksek soğutma kapasitesi', 'Güçlü hava sirkülasyonu', 'Enerji verimli çalışma sistemi', 'Kolay montaj ve kompakt tasarım', 'Dayanıklı alüminyum evaporatör yapısı', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'Tır ve çekici araçlar', 'Kamyon ve ağır ticari araçlar', 'Panelvan araçlar', 'Karavan ve camper van araçlar', 'Minibüs ve midibüs araçlar', 'Servis araçları', 'Pickup araçlar', 'Mobil servis araçları'
    ],
    features: ['Soğutma: 3100W', 'Çift Voltaj: 12V/24V', 'Alüminyum Evaporatör']
  },
  { 
    id: 'coolman-ct1500-md-x-12v-24v', 
    brandId: 'coolman', 
    name: 'CT-1500 MD-X Elektrikli Tavan Park Kliması (12V-24V)', 
    images: [
      '/coolman/ct-1500-md-x-elektrikli-tavan-park-klimasi-12v-24v.webp',
      '/coolman/ct-1500-md-x-elektrikli-tavan-park-klimasi-12v-24v-1.webp',
      '/coolman/ct-1500-md-x-elektrikli-tavan-park-klimasi-12v-24v-2.webp',
      '/coolman/ct-1500-md-x-elektrikli-tavan-park-klimasi-12v-24v-3.webp'
    ], 
    description: `Coolman CT-1500 MD-X Elektrikli Tavan Park Kliması (12V-24V), araç motoru çalışmadan kabin içi soğutma sağlayan yüksek verimli bir tavan park kliması çözümüdür. Özellikle uzun yol sürücüleri ve ticari araç kullanıcıları için geliştirilen bu sistem, güçlü performansı sayesinde tır park kliması, kamyon tavan kliması, kamyon kabin kliması ve karavan kliması olarak güvenilir bir kullanım sunar.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen CT-1500 MD-X park klima sistemi, 12V ve 24V araç elektrik altyapıları ile uyumlu çalışarak farklı araç segmentlerinde verimli kullanım sağlar. Scroll kompresör teknolojisi sayesinde 2600W seviyesine kadar güçlü soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini kısa sürede serinletir.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Panelvan ve ticari araç kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması'
    ],
    advantages: [
      '12V ve 24V uyumlu çalışma sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan park klima sistemi', 'Kompakt ve hafif tasarım', 'Enerji verimli klima sistemi', 'Dayanıklı bakır petek evaporatör', 'Kolay montaj ve kullanım', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo'
    ],
    features: ['Soğutma: 2600W', 'Bakır Evaporatör', 'Kompakt Tasarım']
  },
  { 
    id: 'coolman-ct1500-md-x-eko-12v-24v', 
    brandId: 'coolman', 
    name: 'CT-1500 MD-X Eko Elektrikli Tavan Park Kliması (12V-24V)', 
    images: [
      '/coolman/ct-1500-md-x-eko-elektrikli-tavan-park-klimasi-12v-24v.webp',
      '/coolman/ct-1500-md-x-eko-elektrikli-tavan-park-klimasi-12v-24v-1.webp',
      '/coolman/ct-1500-md-x-eko-elektrikli-tavan-park-klimasi-12v-24v-2.webp',
      '/coolman/ct-1500-md-x-eko-elektrikli-tavan-park-klimasi-12v-24v-3.webp'
    ], 
    description: `Coolman CT-1500 MD-X Eko Elektrikli Tavan Park Kliması (12V-24V), araç motoru çalışmadan kabin içi soğutma sağlayan verimli ve ekonomik bir tavan park kliması çözümüdür. Özellikle uzun yol sürücüleri ve ticari araç kullanıcıları için geliştirilen bu sistem, kompakt yapısı ve enerji tasarrufu sağlayan teknolojisi ile tır park kliması, kamyon tavan kliması, kamyon kabin kliması ve karavan kliması kategorilerinde pratik bir çözüm sunar.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen CT-1500 MD-X Eko park klima sistemi, 12V ve 24V araç elektrik sistemleri ile uyumlu çalışarak farklı araç segmentlerinde güvenli kullanım sağlar. Scroll kompresör teknolojisi sayesinde 2400W seviyesine kadar soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini kısa sürede serinletir.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Panelvan ve ticari araç kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması'
    ],
    advantages: [
      '12V ve 24V uyumlu çalışma sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan park klima sistemi', 'Kompakt ve hafif tasarım', 'Enerji verimli klima sistemi', 'Dayanıklı alüminyum evaporatör yapısı', 'Kolay montaj ve kullanım', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF'
    ],
    features: ['Soğutma: 2400W', 'Eko Modu', 'Alüminyum Evaporatör']
  },
  { 
    id: 'coolman-haier-small-home-12v-24v', 
    brandId: 'coolman', 
    name: 'Coolman Haier Small Home Elektrikli Tavan Park Kliması', 
    images: [
      '/coolman/coolman-haier-elektrikli-tavan-park-klimasi-12-24v.webp',
      '/coolman/coolman-haier-elektrikli-tavan-park-klimasi-12-24v-1.webp',
      '/coolman/coolman-haier-elektrikli-tavan-park-klimasi-12-24v-2.webp',
      '/coolman/coolman-haier-elektrikli-tavan-park-klimasi-12-24v-3.webp'
    ], 
    description: `Coolman Haier Small Home Elektrikli Tavan Park Kliması, araç motoru çalışmadan kabin içi soğutma sağlayan yüksek performanslı bir tavan park kliması çözümüdür. Özellikle uzun yol sürücüleri için geliştirilen bu sistem, güçlü soğutma kapasitesi ve enerji verimliliği sayesinde tır park kliması, kamyon tavan kliması ve karavan kliması kategorilerinde öne çıkan çözümlerden biridir.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen bu elektrikli park klima sistemi, 12V ve 24V araç elektrik altyapıları ile uyumlu çalışarak farklı araç segmentlerinde güvenle kullanılabilir. Güçlü kompresör teknolojisi sayesinde 3000W – 3200W seviyesine kadar soğutma kapasitesi sağlayarak sıcak yaz günlerinde kabin içi sıcaklığı kısa sürede düşürür.`,
    category: 'Park Kliması',
    usageAreas: [
      'Tır ve çekici araçlar', 'Kamyon ve ağır ticari araçlar', 'Panelvan ve ticari araçlar', 'Karavan ve camper araçlar', 'Minibüs ve servis araçları', 'Pickup araçlar', 'Mobil servis araçları', 'Tarım ve iş makineleri'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tüketimini azaltan elektrikli sistem', 'Yüksek soğutma kapasitesi', 'Sessiz çalışma teknolojisi', 'Enerji verimli sistem (yüksek COP değeri)', 'Kolay montaj ve kompakt tasarım', 'Uzun ömürlü bakır petek evaporatör', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'Tır ve çekici araçlar', 'Kamyon ve ağır ticari araçlar', 'Panelvan araçlar', 'Karavan ve camper van araçlar', 'Minibüs ve midibüs araçlar', 'Servis araçları', 'Pickup araçlar'
    ],
    features: ['Soğutma: 3200W', 'Haier Kalitesi', 'Bakır Evaporatör']
  },
  { 
    id: 'coolman-ct1500-split-12v-24v', 
    brandId: 'coolman', 
    name: 'CT1500 Split Elektrikli Klima Seti (12V-24V)', 
    images: [
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v.webp',
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v-1.webp',
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v-2.webp',
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v-3.webp',
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v-4.webp',
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v-5.webp',
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v-6.webp'
    ], 
    description: `Coolman CT1500 Split Elektrikli Klima Seti (12V-24V), araç kabinlerinde motor çalışmadan etkili soğutma sağlayan yüksek performanslı bir split elektrikli araç klima sistemi çözümüdür. İç ve dış ünite yapısına sahip olan bu sistem özellikle tır kabin kliması, kamyon kabin kliması, karavan kliması ve mobil araç klima sistemi olarak profesyonel kullanım sunar.
    
    Coolman ve Coolertech mühendisliği ile geliştirilen CT1500 split klima sistemi, 12V ve 24V araç elektrik altyapıları ile uyumlu çalışarak farklı araç segmentlerinde güvenilir kullanım sağlar. Scroll kompresör teknolojisi sayesinde 2600W seviyesine kadar güçlü soğutma kapasitesi sunarak sıcak yaz günlerinde araç kabinini kısa sürede serinletir.`,
    category: 'Elektrikli Klima',
    usageAreas: [
      'Tır kabin kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Karavan klima sistemi', 'Mobil servis araçları', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Tekne ve yat kliması', 'Mobil ofis araçları'
    ],
    advantages: [
      '12V ve 24V uyumlu elektrikli klima sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Split sistem sayesinde yüksek verimli soğutma', 'Yakıt tasarrufu sağlayan elektrikli klima sistemi', 'Dayanıklı alüminyum evaporatör yapısı', 'Kolay montaj ve servis imkanı', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo'
    ],
    features: ['Soğutma: 2600W', 'Split Tasarım', 'Scroll Kompresör']
  },
  { 
    id: 'delphi-dcs17e-kompresor', 
    brandId: 'delphi', 
    name: 'Delphi DCS17E Klima Kompresörü', 
    images: ['/logolar/delphi-logo1.png'], 
    description: `Delphi DCS17E, özellikle Volkswagen Grubu (VW, Audi, Seat, Skoda) araçlarda yaygın olarak kullanılan, harici kontrollü ve değişken deplasmanlı bir klima kompresörüdür. 171 cm³ hacmiyle yüksek soğutma kapasitesi sunarken, hassas solenoid valf kontrolü sayesinde motor yükünü minimize eder ve yakıt verimliliği sağlar.`,
    category: 'Klima Kompresörleri',
    technicalTable: {
      headers: ['ÖZELLİK', 'DETAY'],
      rows: [
        ['Tip', 'Değişken Deplasmanlı Swash-Plate'],
        ['Kontrol', 'Harici Solenoid Valf (ECV)'],
        ['Deplasman', '171 cm³/devir'],
        ['Yağ Tipi', 'PAG 46 / PAG 100'],
        ['Soğutucu Akışkan', 'R134a / R1234yf']
      ]
    },
    features: ['Orijinal Ekipman (OE) Kalitesi', 'Yüksek Soğutma Verimi', 'Düşük Gürültü Seviyesi']
  },
  { 
    id: 'delphi-cvc-kompresor', 
    brandId: 'delphi', 
    name: 'Delphi CVC Kompakt Klima Kompresörü', 
    images: ['/logolar/delphi-logo1.png'], 
    description: `Delphi CVC (Compact Variable Compressor), hafif tasarımı ve düşük iç sürtünme özellikleriyle öne çıkan bir Swash-Plate kompresördür. Opel, Fiat ve PSA grubu araçlarda dayanıklılığı ve verimliliği nedeniyle tercih edilmektedir.`,
    category: 'Klima Kompresörleri',
    features: ['Düşük Sürtünme Kaybı', 'Minimum Titreşim', 'Sessiz Çalışma Teknolojisi']
  },
  { 
    id: 'delphi-microport-kondenser', 
    brandId: 'delphi', 
    name: 'Delphi Microport Alüminyum Kondenser', 
    images: ['/logolar/delphi-logo1.png'], 
    description: `Delphi Microport kondenserler, çok kanallı tüp teknolojisi ile maksimum ısı transferi sağlar. Tamamı alüminyum lehimli yapısı korozyona karşı dirençlidir.`,
    category: 'Kondenser ve Evaporatörler',
    features: ['Maksimum Isı Transferi', 'Hafif Alüminyum Yapı', 'OE Standartları']
  },
  { 
    id: 'delphi-solenoid-valf', 
    brandId: 'delphi', 
    name: 'Delphi Kompresör Kontrol Valfi (Solenoid)', 
    images: ['/logolar/delphi-logo1.png'], 
    description: `Değişken deplasmanlı kompresörlerin soğutma talebine göre piston açısını değiştiren hassas elektronik kontrol valfidir.`,
    category: 'Klima Yedek Parçaları',
    features: ['Hassas Elektronik Kontrol', 'Hızlı Tepki', 'OE Güvenilirliği']
  },
];

export const services = [
  { id: 'climart-bakim', brandId: 'climart', name: 'Climart Klima Bakımı', image: '/climart/climart-arac-bakimi.png', description: 'Climart ticari araç soğutucu ve klimalarının uzun ömürlü olması için periyodik, detaylı bakım hizmeti.' },
  { id: 'climart-onarim', brandId: 'climart', name: 'Climart Klima Onarımı ve Tamiri', image: '/climart/climart-arac-onarimi.png', description: 'Klimalarınızda meydana gelen tüm arızaların uzman teknisyenlerimiz tarafından kalıcı ve hızlı onarımı.' },
  { id: 'climart-yedek-parca', brandId: 'climart', name: 'Climart Yedek Parça', image: '/climart/climart-arac-yedek-parca.png', description: 'Cihazlarınızın tam performansını koruması için garantili, %100 orijinal ve onaylı Climart yedek parçaları.' },
];

export const faqs = [
  { question: 'Klima bakımı ne sıklıkla yapılmalıdır?', answer: 'Ticari araçlarda klima bakımı yılda en az bir kez, tercihen yaz mevsimi öncesinde yapılmalıdır.' },
  { question: 'Orijinal yedek parça kullanıyor musunuz?', answer: 'Evet, yetkili servisi olduğumuz tüm markaların (Climart, Yılkar, Webasto, Coolman, Delphi) %100 orijinal yedek parçalarını kullanıyoruz.' },
  { question: 'Montaj süresi ne kadardır?', answer: 'Araç tipine ve takılacak sisteme göre değişiklik göstermekle birlikte ortalama 4-6 saat sürmektedir.' },
];
