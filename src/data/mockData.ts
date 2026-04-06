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
  { id: 'coolman', name: 'Coolman', logo: '/logolar/coolman-logo1.png' },
  { id: 'delphi', name: 'Delphi', logo: '/logolar/delphi-logo1.png' },
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
    description: 'Webasto’nun güçlü, elektrikli Cool Top RTE 23 tavan tipi klima sistemi; kamyon kabinlerinde sessiz, tasarruflu ve yüksek performanslı soğutma sağlar. 24V araç aküsünden güç alan sistem, motor bağımsız çalıştığı için rölanti sürelerini kısaltır ve yakıt tasarrufu sağlar.', 
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
    images: [
      '/webasto/air-top-2000-stc-webasto.jpg'
    ], 
    description: 'Webasto\'nun 2 kW ısı çıkışıyla hava ısıtıcıları arasında çok yönlü modeli. Kompakt, güvenli ve son derece verimli bir ısıtma çözümü sunar.', 
    category: 'Araç Isıtma Sistemleri',
    features: [
      'Isıtma Kapasitesi: 0.9 – 2.0 kW (Dizel) / 1.0 – 2.0 kW (Benzin)',
      'Yakıt Tüketimi: 0.12 – 0.24 l/sa (Dizel) / 0.14 – 0.27 l/sa (Benzin)',
      'Nominal Voltaj: 12 / 24 V',
      'Hava Debisi: 93 m³/sa',
      'Ölçüler: 311 x 120 x 121 mm',
      'Ağırlık: 2.6 kg',
      'Sessiz çalışma ve hızlı ısıtma',
      'Düşük güç tüketimi ve yüksek verimlilik'
    ]
  },
  { 
    id: 'webasto-air-top-evo-40', 
    brandId: 'webasto', 
    name: 'Webasto Air Top Evo 40 Hava Isıtıcı', 
    images: [
      '/webasto/air-top-evo-40-webasto.jpeg'
    ], 
    description: 'Büyük kabinler ve kargo bölmeleri için tasarlanmış 4 kW kapasiteli profesyonel hava ısıtıcısı. Akıllı üfleyici kontrolü ile sessiz ve verimli çalışma sağlar.', 
    category: 'Araç Isıtma Sistemleri',
    features: [
      'Isıtma Kapasitesi: 1.5 – 3.5 kW (Boost: 4.0 kW)',
      'Yakıt Tüketimi: 0.18 – 0.43 l/sa (Dizel)',
      'Nominal Voltaj: 12 / 24 V',
      'Hava Debisi: 132 m³/sa (Boost: 140 m³/sa)',
      'Otomatik Yükseklik Ayarı: 2,200 m\'ye kadar',
      'Ölçüler: 423 x 148 x 162 mm',
      'Ağırlık: 5.9 kg'
    ]
  },
  { 
    id: 'webasto-air-top-evo-55', 
    brandId: 'webasto', 
    name: 'Webasto Air Top Evo 55 Hava Isıtıcı', 
    images: [
      '/webasto/air-top-evo-55-webasto.jpeg'
    ], 
    description: 'Otobüs ve büyük kamp araçları için 5.5 kW çıkış gücüne sahip en güçlü Webasto hava ısıtıcısı. Yüksek rakımlarda bile güvenilir performans sunar.', 
    category: 'Araç Isıtma Sistemleri',
    features: [
      'Isıtma Kapasitesi: 1.5 – 5.0 kW (Boost: 5.5 kW)',
      'Yakıt Tüketimi: 0.18 – 0.61 l/sa (Dizel)',
      'Nominal Voltaj: 12 / 24 V',
      'Hava Debisi: 200 m³/sa (Boost: 220 m³/sa)',
      'Otomatik Yükseklik Ayarı: 2,200 m\'ye kadar',
      'Ölçüler: 423 x 148 x 162 mm',
      'Ağırlık: 5.9 kg'
    ]
  },
  { 
    id: 'webasto-thermo-pro-90', 
    brandId: 'webasto', 
    name: 'Webasto Thermo Pro 90 Sulu Isıtıcı', 
    images: [
      '/webasto/thermo-pro-90-webasto.jpeg',
      '/webasto/thermo-pro-90-webasto-1.jpeg',
      '/webasto/thermo-pro-90-webasto-2.jpeg',
      '/webasto/thermo-pro-90-webasto-3.jpeg'
    ], 
    description: 'Büyük ticari ve özel araçlar için geliştirilen Sulu ısitıcı; motoru ideal sıcaklığa getirirken kabin konforunu da artırır. Arctic Start özelliği ile aşırı soğuklarda bile çalışır.', 
    category: 'Araç Isıtma Sistemleri',
    features: [
      'Isıtma Kapasitesi: 1,8 / 7,6 kW (Boost: 9,1 kW)',
      'Yakıt Tüketimi: 0,15 – 1,1 l/sa',
      'Su Pompası Debisi: 700 l/sa',
      'Nominal Voltaj: 12 / 24 V',
      'Çalışma Sıcaklığı: –40 to +80 °C',
      'Ölçüler: 381 x 131 x 224 mm',
      'Ağırlık: 4.9 kg'
    ]
  },
  { id: 'coolman-tepe-klimasi', brandId: 'coolman', name: 'Coolman Tepe Kliması', images: ['https://picsum.photos/seed/klima3/400/300'], description: 'Kamyon ve tırlar için tepe kliması.', category: 'Klima' },
  { id: 'delphi-kompresor', brandId: 'delphi', name: 'Delphi Klima Kompresörü', images: ['https://picsum.photos/seed/kompresor1/400/300'], description: 'Orijinal Delphi klima kompresörü.', category: 'Yedek Parça' },
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
