const makeLogo = (text: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" fill="#0f2851" letter-spacing="-1">${text}</text></svg>`)}`;

export const brands = [
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
      { label: 'Araç Isıtma Sistemleri', path: 'arac-isitma-sistemleri' },
      { label: 'Split Klimalar', path: 'split-klimalar' },
      { label: 'İlave Split Klimalar', path: 'ilave-split-klimalar' },
      { label: 'İlave Tavan Kliması', path: 'ilave-tavan-klimasi' },
      { label: 'Kabin Kliması', path: 'kabin-klimasi' },
      { label: 'Frigorifik Soğutucu', path: 'frigorifik-sogutucu' },
      { label: 'Elektrikli Klima', path: 'elektrikli-klima' }
    ],
    menuServices: [
      { label: 'Webasto Bakım', path: 'bakim' },
      { label: 'Webasto Onarım', path: 'onarim' },
      { label: 'Webasto Yedek Parça', path: 'yedek-parca' }
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
      { label: 'Frigorifik Soğutucu', path: 'frigorifik-sogutucu' },
      { label: 'Elektirikli Kabin Kliması', path: 'elektrikli-kabin-klimasi' }
    ],
    menuServices: [
      { label: 'Yılkar Bakım', path: 'bakim' },
      { label: 'Yılkar Onarım', path: 'onarim' },
      { label: 'Yılkar Yedek Parça', path: 'yedek-parca' }
    ]
  },
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
    id: 'delphi', 
    name: 'Delphi', 
    logo: '/logolar/delphi-logo1.png',
    heroDescription: 'Delphi artık Webasto bünyesinde! Çınar Oto Klima olarak, Delphi sistemleriniz için orijinal parça ve yetkili servis desteğini Webasto uzmanlığıyla sunmaya devam ediyoruz.',
    rebrandedTo: 'webasto',
    whyTitle: 'Delphi & Webasto Güçlerini Birleştirdi',
    whyDescription: 'Delphi Technologies artık Webasto ailesinin bir parçası. Dünyanın önde gelen otomobil üreticilerinin tercihi olan Delphi klima komponentleri, artık Webasto’nun küresel teknoloji ağı ve Çınar Oto Klima’nın uzman servis desteğiyle buluşuyor. Aracınızdaki Delphi sistemleri için en güncel Webasto çözümlerini ve orijinal parça desteğini bizden alabilirsiniz.',
    seo: {
      title: 'Delphi Yetkili Servisi & Webasto Çözümleri | Çınar Oto Klima',
      description: 'Delphi yetkili servisi Çınar Oto Klima. Delphi artık Webasto bünyesinde! Otomobil ve hafif ticari araçlar için orijinal Delphi ve Webasto klima çözümleri.',
      keywords: 'Delphi yetkili servisi, Delphi klima kompresörü, Delphi Webasto geçişi, oto klima servisi, Delphi yedek parça, Webasto klima desteği',
      ogTitle: 'Delphi Yetkili Servisi - Webasto Güvencesiyle',
      ogDescription: 'Delphi ürünleri ve servisi artık Webasto uzmanlığıyla sunulmaktadır. Orijinal parça ve garantili işçilik.',
      ogUrl: 'https://cinarotoklima.com/delphi-yetkili-servisi',
      canonical: 'https://cinarotoklima.com/delphi-yetkili-servisi'
    },
    menuProducts: [
      { label: 'Araç Isıtma Sistemleri', path: '/webasto/isitma-sistemleri' },
      { label: 'Araç Soğutma Sistemleri', path: '/webasto/sogutma-sistemleri' },
      { label: 'Elektrikli Klima', path: '/webasto/tavan-klimalari' }
    ],
    menuServices: [
      { label: 'Webasto Bakım', path: '/webasto/bakim' },
      { label: 'Webasto Onarım', path: '/webasto/onarim' }
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
      { label: 'Elektrikli Kabin Kliması', path: 'elektrikli-kabin-klimasi' },
      { label: 'Dizel Isıtıcılar', path: 'dizel-isiticilar' }
    ],
    menuServices: [
      { label: 'Coolman Bakım', path: 'bakim' },
      { label: 'Coolman Onarım', path: 'onarim' },
      { label: 'Coolman Yedek Parça', path: 'yedek-parca' }
    ]
  },
  {
    id: 'yedek-parca',
    name: 'Yedek Parça',
    logo: '',
    heroDescription: 'Orjinal yedek parça kataloğu.',
    whyTitle: 'Yedek Parça',
    whyDescription: 'Orijinal Yedek Parça',
    seo: {
      title: 'Yedek Parça | Çınar Oto Klima',
      description: 'Yedek parça listesi',
      keywords: 'yedek parça',
      ogTitle: 'Yedek Parçalar',
      ogDescription: 'Tüm yedek parça ürünleri',
      ogUrl: 'https://cinarotoklima.com/yedek-parca',
      canonical: 'https://cinarotoklima.com/yedek-parca'
    },
    menuProducts: [],
    menuServices: []
  }
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
    category: 'Split Klimalar',
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
    category: 'Split Klimalar',
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
    category: 'Split Klimalar',
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
    category: 'Split Klimalar',
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
    category: 'İlave Tavan Kliması',
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
    category: 'Split Klimalar',
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
    category: 'Split Klimalar',
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
    category: 'Split Klimalar',
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
    category: 'Split Klimalar',
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
    category: 'İlave Split Klimalar',
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
    category: 'İlave Split Klimalar',
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
    category: 'Kabin Kliması',
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
    category: 'Frigorifik Soğutucu',
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
    id: 'webasto-frigo-40', 
    brandId: 'webasto', 
    name: 'Webasto Frigo 40 RT-D', 
    images: ['/webasto/frigo-40-rt-d-webasto.png'], 
    description: 'Frigofirik soğutma sistemleri, uzun mesafeli yolculuklarda bile ürünlerinizin optimum derecede taşınabilmesini ve mükemmel koşullarda varış noktasına ulaşmasını sağlar. Hafif ticari araçlar için tasarlanmış olup araç motorundan tahriklidir. Geniş montaj kiti alternatifi ile bir çok araç modeline montaj imkanı sunar. Yüksek kaliteli komponentler sayesinde uzun servis ömrüne sahiptir. Talep edilen taşıma sıcaklığına göre R134a ve R404A alternatifleri mevcuttur.', 
    category: 'Frigorifik Soğutucu',
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
    category: 'Frigorifik Soğutucu',
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: ['Tır park kliması', 'Kamyon kabin kliması'],
    advantages: ['Motor çalıştırmadan soğutma', 'Yakıt tasarrufu'],
    compatibleVehicles: ['MAN TGX', 'Mercedes-Benz Actros'],
    features: ['Soğutma: 3800W', 'Scroll Kompresör', 'Hava Debisi: 540 m³/h'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '3800W'], ['Kompresör Tipi', 'Scroll Kompresör'], ['Hava Debisi', '540 m³/h']] }
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Panelvan ve ticari araç kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması', 'Motordan bağımsız klima sistemi', 'Orijinal kliması olmayan araçlar'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan park klima sistemi', 'Enerji verimli klima teknolojisi', 'Kompakt ve hafif tasarım', 'Dayanıklı alüminyum evaporatör yapısı', 'Kolay montaj ve kullanım', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı', 'Ticari araçlar için ideal klima çözümü'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 2300W', 'Hafif Tasarım', 'Scroll Kompresör'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2300W'], ['Tasarım', 'Hafif Tasarım'], ['Kompresör Tipi', 'Scroll Kompresör']] }
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: [
      'Tır kabin kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Karavan klima sistemi', 'Mobil servis araçları', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Tekne ve yat kliması', 'Mobil ofis araçları', 'Orijinal kliması olmayan araçlar'
    ],
    advantages: [
      '12V ve 24V uyumlu elektrikli klima sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Split sistem sayesinde verimli soğutma', 'Yatay evaporatör tasarımı ile kolay montaj', 'Yakıt tasarrufu sağlayan klima sistemi', 'Dayanıklı alüminyum evaporatör yapısı', 'Kompakt ve gizli montaj imkanı', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Kondanser: 340x400x25 mm', 'Evaporatör: 350x400x150 mm', 'Soğutma: 2400W'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Kondanser Boyutları', '340x400x25 mm'], ['Evaporatör Boyutları', '350x400x150 mm'], ['Soğutma Kapasitesi', '2400W']] }
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması', 'Motordan bağımsız klima sistemi', 'Orijinal kliması olmayan araçlar', 'Gazlı elektrikli klima sistemi'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan elektrikli klima sistemi', 'Yüksek soğutma performansı', 'Sessiz çalışma teknolojisi', 'Enerji verimli sistem (yüksek COP değeri)', 'Dayanıklı bakır petek evaporatör yapısı', 'Uzun ömürlü klima sistemi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 2800W', 'Bakır Evaporatör', 'Fırçasız Fan'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2800W'], ['Evaporatör Tipi', 'Bakır Evaporatör'], ['Fan Tipi', 'Fırçasız Fan']] }
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: [
      'Tır kabin kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Karavan klima sistemi', 'Mobil servis araçları', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Tekne ve yat kliması', 'Mobil ofis araçları', 'Orijinal kliması olmayan araçlar'
    ],
    advantages: [
      '12V ve 24V uyumlu elektrikli klima sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Split sistem sayesinde verimli soğutma', 'Kompakt ve gizli montaj imkanı', 'Yakıt tasarrufu sağlayan klima sistemi', 'Dayanıklı alüminyum evaporatör yapısı', 'Kolay montaj ve servis imkanı', 'Sessiz çalışma teknolojisi', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo', 'Isuzu NPR / NQR / F Serisi', 'Mitsubishi Fuso Canter', 'BMC Tuğra', 'Hyundai Mighty', 'Otokar Atlas'
    ],
    features: ['Soğutma: 2400W Max', 'Split Sistem', 'Akü Koruması'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2400W Max'], ['Sistem Tipi', 'Split Sistem'], ['Koruma', 'Akü Koruması']] }
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: [
      'Tır ve çekici araçlar', 'Kamyon ve ağır ticari araçlar', 'Panelvan ve ticari araçlar', 'Karavan ve camper araçlar', 'Minibüs ve servis araçları', 'Pickup araçlar', 'Mobil servis araçları', 'Tarım ve iş makineleri', 'Tekne ve yatlar'
    ],
    advantages: [
      'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tüketimini azaltan elektrikli klima sistemi', 'Yüksek soğutma kapasitesi', 'Güçlü hava sirkülasyonu', 'Enerji verimli çalışma sistemi', 'Kolay montaj ve kompakt tasarım', 'Dayanıklı alüminyum evaporatör yapısı', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'Tır ve çekici araçlar', 'Kamyon ve ağır ticari araçlar', 'Panelvan araçlar', 'Karavan ve camper van araçlar', 'Minibüs ve midibüs araçlar', 'Servis araçları', 'Pickup araçlar', 'Mobil servis araçları'
    ],
    features: ['Soğutma: 3100W', 'Çift Voltaj: 12V/24V', 'Alüminyum Evaporatör'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '3100W'], ['Çalışma Gerilimi', '12V / 24V Çift Voltaj'], ['Evaporatör Tipi', 'Alüminyum Evaporatör']] }
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
    category: 'Elektrikli Kabin Kliması',
    usageAreas: [
      'Tır park kliması', 'Kamyon kabin kliması', 'Kamyonet kabin kliması', 'Panelvan ve ticari araç kliması', 'İş makinesi kabin kliması', 'Vinç kabin kliması', 'Karavan uyku kliması', 'Yat ve tekne kliması'
    ],
    advantages: [
      '12V ve 24V uyumlu çalışma sistemi', 'Motor çalıştırmadan kabin soğutma imkanı', 'Yakıt tasarrufu sağlayan park klima sistemi', 'Kompakt ve hafif tasarım', 'Enerji verimli klima sistemi', 'Dayanıklı bakır petek evaporatör', 'Kolay montaj ve kullanım', 'Park halinde konforlu dinlenme ortamı'
    ],
    compatibleVehicles: [
      'MAN TGX / TGS / TGA', 'Mercedes-Benz Actros / Axor / Atego / Arocs', 'Volvo FH / FM / FMX', 'Scania R / S / G Serisi', 'DAF XF / CF', 'Renault Trucks T / C / K Serisi', 'Iveco Stralis / S-Way / Eurocargo', 'Ford Trucks F-MAX / Cargo'
    ],
    features: ['Soğutma: 2600W', 'Bakır Evaporatör', 'Kompakt Tasarım'],
    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2600W'], ['Evaporatör Tipi', 'Bakır Evaporatör'], ['Tasarım', 'Kompakt Tasarım']] }
  },
  { 
    id: 'coolman-ct1500-split-12v-24v', 
    brandId: 'coolman', 
    name: 'CT1500 Split Elektrikli Klima Seti (12V-24V)', 
    images: [
      '/coolman/ct1500-split-elektrikli-klima-seti-12v-24v.webp'
    ],
    description: 'Coolman CT1500 Split Elektrikli Klima Seti (12V-24V), araç kabinlerinde motor çalışmadan etkili soğutma sağlar.',
    category: 'Elektrikli Kabin Kliması',
    features: ['Soğutma: 2600W', 'Split Tasarım']
  },

  // Professional services categorized under the services array to keep products clean
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
  { 
    id: 'yk-20-mb-elektrikli-park-klimasi', 
    brandId: 'yilkar', 
    name: 'YK 20 MB Elektirikli Park Kliması', 
    images: [
      '/yilkar/yk-20-mb-elektrikli-park-klimasi.jpg',
      '/yilkar/yk-20-mb-elektrikli-park-klimasi-1.jpg',
      '/yilkar/yk-20-mb-elektrikli-park-klimasi-2.jpg',
      '/yilkar/yk-20-mb-elektrikli-park-klimasi-3.jpg',
      '/yilkar/yk-20-mb-elektrikli-park-klimasi-4.jpg',
      '/yilkar/yk-20-mb-elektrikli-park-klimasi-5.jpg',
      '/yilkar/yk-20-mb-elektrikli-park-klimasi-6.jpg'
    ], 
    description: 'Yüksek performanslı ve kabin konforunu en üst seviyeye çıkaran elektrikli park kliması.', 
    category: 'Elektirikli Kabin Kliması',
    features: [
      'Soğutma Kapasitesi: 2.2 kW (7500 BTU/sa) (1900 kcal/sa)',
      'Soğutulmuş Hava: 450 m³/sa',
      'Performans Limiti: 45 C° (Dış ortam sıcaklığı)',
      'Çektiği Akım: 55 A @12 VDC - 33 A @24 VDC',
      'Dış Ölçüler: 950*750*185 mm',
      'Ünite Ağırlığı: 28,9 kg',
      'Soğutucu Akışkan: R134a'
    ]
  },
  { 
    id: 'coolman-s44-portatif-dizel-isitici', 
    brandId: 'coolman', 
    name: 'S44 Portatif Dizel Isıtıcı (5kW)', 
    images: [
      '/coolman/s44-portatif-dizel-isitici.webp',
      '/coolman/s44-portatif-dizel-isitici-1.webp'
    ], 
    description: `Coolman Webasto Tipi S44 Portatif Dizel Isıtıcı

STANDART PAKETLERİMİZE EK OLARAK;

.7.5 METRE UZUNLUĞUNDA SİGORTALI ELEKTRİK TESİSATI
.2 METRE UZUNLUĞUNDA AKORDEON BORU
BU SEZONA ÖZEL HEDİYEMİZDİR. KAMPANYAMIZI KAÇIRMAYIN

S44 PORTATİF DİZEL ISITICI ÜRÜN ÖZELLİKLERİ

.Hem 220 Volt hem de 12V – 24V ile çalışabilme özelliği
.7.5 m elektrik tesisatı
.Türkçe sesli uyarı sistemi
.Detaylı LCD ekran
.Uzaktan kumanda
.5 KW güç
.Koku yapmaz, ısıya ve darbeye dayanıklı çelik dış gövde
.Kapalı sistem elektronik devre kartı
.5 litre dahili depo
.5 yıl garantili 606I alaşım alüminyum gövde
.Hava akış sensörü
.Hava akış sensörü ile sıfır tolerans ortam termostatı
.Otomatik ve manuel kullanma seçeneği
.Boyutları 260x 250 x 380 cm (Yükseklik: 260 cm, Genişlik: 250 cm ve Derinlik: 380 cm)`, 
    category: 'Dizel Isıtıcılar',
    technicalTable: {
      headers: ['Teknik Özellikler', 'Detay'],
      rows: [
        ['Çalışma Gerilimi', '220V - 12V - 24V'],
        ['Isı Yönetimi', 'Kuru Tip Hava Isıtıcısı'],
        ['Yakıt Tipi', 'Dizel'],
        ['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1500', '5000'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,25'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W', '20W'],
        ['Kademe Sayısı', '10 Kademeli'],
        ['Başlangıçta Güç Tüketimi', '60W'],
        ['Boyutlar', '260 x 250 x 380 cm'],
        ['Ağırlık', '4,1 Kg']
      ]
    }
  },
  { 
    id: 'coolman-pro-dizel-isitici-5kw', 
    brandId: 'coolman', 
    name: 'Coolman Webasto Tipi Pro Dizel Isıtıcı 5 kW (12-24V)', 
    images: [
      '/coolman/pro-dizel-isitici-5-kw.webp',
      '/coolman/pro-dizel-isitici-5-kw-1.webp',
      '/coolman/pro-dizel-isitici-5-kw-2.webp'
    ], 
    description: `Coolman Webasto Tipi Pro Dizel Isıtıcı 5kW (12-24V)

Coolman Webasto Tipi Pro Dizel Isıtıcı 5 kW (12-24V), güçlü performansı ve dayanıklı yapısıyla zorlu koşullarda uzun süreli ve sorunsuz kullanım sunmak üzere tasarlanmıştır. PRO serisi 5 kW araç ısıtıcıları, paslanmaz çelik ve alüminyum alaşımlı bileşenlerden üretilerek çevresel etkilere karşı yüksek direnç sağlar ve uzun ömürlü bir yapı sunar.

Yüksek kaliteli ısıtma elemanları sayesinde güçlü bir ısıtma performansı sunarken, enerji tüketimini optimize ederek araç aküsünün korunmasına yardımcı olur. Bu sayede hem verimli hem de ekonomik bir ısıtma çözümü sağlar. Dayanıklı iç yapısı, yoğun ve sık kullanıma uygun olacak şekilde geliştirilmiş olup, uzun yıllar güvenle kullanılabilir.

Kolay montaj özelliği sayesinde araçlara hızlı ve pratik şekilde uygulanabilir. Kullanıcı dostu kontrol sistemi, ısıtma ayarlarının rahatça yapılmasına olanak tanır. Akıllı kontrol paneli sayesinde sıcaklık ayarları hassas biçimde yönetilebilir, böylece araç içi konfor en ideal seviyede tutulur.

Akıllı kontrol panelleri, enerji verimliliğini artırarak ısıtıcının gereksiz çalışmasını önler ve akü üzerindeki yükü minimize eder. Kullanıcılar, farklı zaman dilimlerine göre ısıtma ayarları yaparak araca binmeden önce ideal sıcaklık seviyesini belirleyebilir. Bu özellik, özellikle soğuk hava koşullarında büyük konfor avantajı sağlar.

5 kW PRO Dizel Isıtıcı, yüksek ısıtma kapasitesi sayesinde araç içini kısa sürede ısıtarak sıcak ve konforlu bir ortam oluşturur. Güçlü motor yapısı hızlı ısınma sağlarken, düşük enerji tüketimi ile uzun süreli kullanımlarda bile aküyü zorlamaz.

Kaliteli malzeme yapısı ve sağlam tasarımı sayesinde zorlu kış koşullarında dahi güvenilir performans sunan bu ısıtıcı, enerji verimliliği, kullanım kolaylığı ve yüksek performansı bir arada sunarak araç sahipleri için ideal bir ısıtma çözümüdür.

Kutu İçeriği:
LCD Kontrol Paneli
Krom Egzoz Borusu
Susturucu
Elektrik Tesisatı (8 metre makaronlu kablo)
Hava Filtresi
Hava Menfezi
Yakıt Filtresi
Yakıt Pompası
Yakıt Hortumu (5 metre)
Depo Yakıt Aparatı
Montaj Sacı
Kelepçeler
Paslanmaz Bağlantı Ekipmanları
Tüm montaj elemanları kutu içeriğine dahil olup, kullanıcı dostu yapısıyla kolay kurulum imkânı sunar.`, 
    category: 'Dizel Isıtıcılar',
    features: [
      'Hızlı ısıtma performansı',
      'Düşük yakıt tüketimi (ekonomik kullanım)',
      'Sessiz ve titreşimsiz çalışma',
      'Kompakt, hafif ve taşınabilir yapı',
      '10 kademeli hassas sıcaklık kontrolü',
      'Geniş kullanım alanı ve kolay montaj'
    ],
    technicalTable: {
      headers: ['Teknik Özellikler', 'Detay'],
      rows: [
        ['Çalışma Gerilimi', '12V - 24V'],
        ['Isı Yönetimi', 'Kuru Tip Hava Isıtıcısı'],
        ['Yakıt Tipi', 'Dizel'],
        ['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1500', '5500'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,35'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W', '20W'],
        ['Kademe Sayısı', '10 Kademeli'],
        ['Başlangıçta Güç Tüketimi', '60W'],
        ['Boyutlar', '390 x 140 x 140 mm'],
        ['Ağırlık', '5,6 Kg']
      ]
    }
  },
  { 
    id: 'coolman-vizyon-power-dizel-isitici', 
    brandId: 'coolman', 
    name: 'Vizyon Power Webasto Tipi Dizel Isıtıcı 5kW', 
    images: [
      '/coolman/vizyon-power-webasto-tipi-dizel-isitici-5kw.webp',
      '/coolman/vizyon-power-webasto-tipi-dizel-isitici-5kw-1.webp',
      '/coolman/vizyon-power-webasto-tipi-dizel-isitici-5kw-2.webp'
    ], 
    description: `Vizyon Power Dizel Isıtıcı 5 kW (12-24V)

Coolman güvencesiyle sunulan Vizyon Power Dizel Isıtıcı, yüksek performanslı ısıtma ihtiyaçlarına ideal bir çözüm sunar. Güçlü 5 kW kapasitesi ve sağlam dış yapısı sayesinde geniş araç ve mekanlarda konforlu bir ortam yaratır. Türkçe sesli uyarı sistemi, LCD ekran ve uzaktan kumanda ile kullanım kolaylığı sağlar. Coolman’ın kalite standartlarına uygun olarak geliştirilmiş bu cihaz, 3 yıl garantili alüminyum gövdesi ve dayanıklı bileşenleriyle uzun ömürlü bir kullanım sunar.

Kutu İçeriği:
Detaylı LCD Kontrol Paneli
Hava Menfezi
Kelepçeler
Hava Aktarma Boruları
Yakıt Pompası
Montaj Saçı
Elektrik Tesisatı (5/9 metre seçeneği)
Depo Yakıt Aparatı
Yakıt Hortumu
Egzoz Borusu
Paslanmaz Bağlantı Ekipmanları`, 
    category: 'Dizel Isıtıcılar',
    features: [
      'Türkçe sesli uyarı sistemi',
      'Detaylı LCD ekran ve uzaktan kumanda',
      '5 kW güç kapasitesi',
      'Isıya ve darbeye dayanıklı, koku yapmayan PC dış gövde',
      'Kapalı sistem elektronik devre kartı',
      'Zaman ayarı',
      '3 yıl garantili 606I alaşım alüminyum gövde',
      'Hava akış sensörü ile sıfır toleranslı termostat',
      'Otomatik ve manuel kullanım seçeneği',
      '3500 rakıma kadar sorunsuz çalışan yüksek irtifa kiti'
    ],
    technicalTable: {
      headers: ['Teknik Özellikler', 'Detay'],
      rows: [
        ['Çalışma Gerilimi', '12V - 24V'],
        ['Isı Yönetimi', 'Kuru Tip Hava Isıtıcısı'],
        ['Yakıt Tipi', 'Dizel'],
        ['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1500', '5000'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,25'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W', '20W'],
        ['Kademe Sayısı', '10 Kademeli'],
        ['Başlangıçta Güç Tüketimi', '60W'],
        ['Boyutlar', '370 x 140 x 115 cm'],
        ['Ağırlık', '4,1 Kg']
      ]
    }
  },
  { 
    id: 'coolman-thermon-2-digital-dizel-isitici', 
    brandId: 'coolman', 
    name: 'Thermon 2 Digital Dizel Isıtıcı 2.8 kW (12-24V)', 
    images: [
      '/coolman/thermon-2-digital-dizel-isitici-2-8-kw.webp',
      '/coolman/thermon-2-digital-dizel-isitici-2-8-kw-1.webp',
      '/coolman/thermon-2-digital-dizel-isitici-2-8-kw-2.webp',
      '/coolman/thermon-2-digital-dizel-isitici-2-8-kw-3.webp'
    ], 
    description: `Thermon 2 Digital Dizel Isıtıcı 2.8 kW (12-24V)

Thermon 2 Digital Dizel Isıtıcı, soğuk hava koşullarında araç içi ve dış mekân ısınma ihtiyaçlarınıza güçlü ve pratik çözümler sunar. Kullanıcı dostu tasarımı ve gelişmiş özellikleriyle konforlu bir deneyim sağlar.

Öne Çıkan Özellikler:
Joystick Düğmeli LCD Ekran: Pratik joystick kontrolüyle sıcaklık ayarlarınızı kolayca yapın.
Zaman Ayarı: Günlük ve haftalık çalışma programları ile esnek kullanım planlaması.
3 Farklı Çalışma Modu:
Uyku Modu: 22-30°C arasında otomatik olarak çalışır/durur.
Manuel Mod: 7 kademeli sıcaklık kontrolü.
Otomatik Mod: Ortam sıcaklığına göre otomatik ayarlama yapar.
Japon Marka Ateşleme Bujisi: Uzun ömürlü ve yüksek kaliteli ateşleme bujisi.
Koku Yapmaz: Darbeye ve ısıya dayanıklı PC dış gövde ile kötü kokuları önler.
3 Yıl Garantili 6061 Alüminyum Gövde: Hafif ve dayanıklı yapısıyla uzun süreli kullanım sağlar.
Kapalı Sistem Elektronik Devre Kartı: Toz ve neme karşı koruma sağlayarak performansı artırır.
Hava Akış Sensörü: Sıcaklığı hassas şekilde algılayan termostat ile mükemmel kontrol sağlar.
Yüksek İrtifa Kiti: 4500 metreye kadar performans kaybı yaşamadan çalışır.
Birinci Sınıf Montaj Ekipmanları: Kolay montaj için gereken tüm ekipmanlar kutu içeriğinde mevcuttur.

Thermon 2 ile aracınızda veya kamp alanında etkili ısınma deneyimini yaşayın! Soğuk hava koşullarına karşı tasarlanmış bu portatif ısıtıcı, her türlü ihtiyacınıza uygun çözümler sunar.`, 
    category: 'Dizel Isıtıcılar',
    technicalTable: {
      headers: ['Teknik Özellikler', 'Detay'],
      rows: [
        ['Çalışma Gerilimi', '12V - 24V'],
        ['Isı Yönetimi', 'Kuru Tip Hava Isıtıcısı'],
        ['Yakıt Tipi', 'Dizel'],
        ['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1000', '2500'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,25'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W', '20W'],
        ['Kademe Sayısı', '10 Kademeli'],
        ['Başlangıçta Güç Tüketimi', '60W'],
        ['Boyutlar', '316 x 115 x 110 cm'],
        ['Ağırlık', '4,6 Kg']
      ]
    }
  },
  {
    id: 'yp-tm16-klima-kompresor',
    brandId: 'yedek-parca',
    name: 'TM16 Klima Kompresör',
    images: ['/yedek-parcalar/tm16-klima-kompresoru-valeo.jpg'],
    description: `TM16 klima kompresörü, Valeo markası tarafından üretilen ve araçların klima sistemlerinde kullanılan bir bileşendir. Klima kompresörünün ana görevi, klima gazını sıkıştırarak aracın iç mekanını soğutmak ve klima sisteminin verimli çalışmasını sağlamaktır. TM16 kompresörü, güçlü ve dayanıklı yapısıyla bilinir, bu da onu uzun süreli kullanım için ideal bir seçenek haline getirir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-tm16-klima-kompresoru-valeo',
    brandId: 'yedek-parca',
    name: 'TM16 Klima Kompresörü Valeo',
    images: ['/yedek-parcalar/tm16-klima-kompresoru-valeo.jpg'],
    description: `TM16 klima kompresörü, Valeo tarafından üretilen ve araçların klima sistemlerinde kullanılan bir bileşendir. Klima kompresörleri, soğutma gazını sıkıştırarak aracın iç mekanının soğumasını sağlar. TM16 kompresörü, güçlü yapısı ve verimli çalışma özellikleri ile bilinir. Valeo, otomotiv sektöründe güvenilir markalardan biri olup, TM16 modeliyle de yüksek performanslı klima çözümleri sunmaktadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-tm31-klima-kompresor',
    brandId: 'yedek-parca',
    name: 'TM31 Klima Kompresör',
    images: ['/yedek-parcalar/TM31-klima-kompresoru-valeo.jpg'],
    description: `TM31 klima kompresörü, Valeo tarafından üretilen bir klima kompresörüdür. Araçların klima sistemlerinde kullanılan bu kompresör, klima gazını sıkıştırarak aracın iç mekanını soğutur. Aracın soğutma işlevini düzgün bir şekilde yerine getirebilmesi için, kompresörün yüksek verimle çalışması gerekir. TM31, dayanıklılığı ve verimliliği ile bilinen bir modeldir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-tm31-klima-kompresoru-valeo',
    brandId: 'yedek-parca',
    name: 'TM31 Klima Kompresörü Valeo',
    images: ['/yedek-parcalar/TM31-klima-kompresoru-valeo.jpg'],
    description: `TM31 klima kompresörü, Valeo tarafından üretilen ve araç klima sistemlerinde soğutma sağlayan önemli bir bileşendir. Bu kompresör, klima gazını sıkıştırarak aracın iç mekanını soğutur. TM31, dayanıklı yapısı ve yüksek verimliliği ile dikkat çeker. Soğutma sisteminin düzgün çalışabilmesi için kaliteli bir kompresör kullanmak önemlidir ve TM31, bu konuda mükemmel bir tercihtir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-tm21-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'TM21 Klima Kompresörü',
    images: ['/yedek-parcalar/TM21-klima-kompresoru.webp'],
    description: `TM21 klima kompresörü, otomobillerin klima sistemlerinde soğutma işlemi yapan önemli bir bileşendir. Valeo tarafından üretilen bu kompresör, klima gazını sıkıştırarak aracın iç mekanını serin tutmayı sağlar. Verimli bir klima kompresörü, aracın klima sisteminin uzun ömürlü olmasına ve iç mekanın konforlu kalmasına katkı sağlar. TM21, bu ihtiyacı karşılayan yüksek kaliteli bir üründür ve araç sahiplerinin en çok tercih ettiği kompresörlerden biridir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-tm21-klima-kompresoru-valeo',
    brandId: 'yedek-parca',
    name: 'TM21 Klima Kompresörü Valeo',
    images: ['/yedek-parcalar/TM21-klima-kompresoru-Valeo.png'],
    description: `TM21 klima kompresörü, Valeo markasının otomobiller için geliştirdiği yüksek kaliteli bir klima kompresörüdür. Valeo, dünya çapında bilinen güvenilir bir markadır ve otomotiv sektöründe klima sistemleri konusunda uzun yıllara dayanan tecrübesi ile öne çıkmaktadır. TM21 modeli, araçların klima sistemlerini verimli bir şekilde çalıştırmak için tasarlanmıştır ve genellikle farklı araç modellerinde kullanılır. Bu kompresör, klima gazını yüksek basınca çıkararak aracın iç mekanının serin kalmasını sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-sd7-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'SD7 Klima Kompresörü',
    images: ['/yedek-parcalar/sd7-klima-kompresoru.jpg'],
    description: `SD7 klima kompresörü, otomobillerde kullanılan önemli bir klima bileşenidir. Klima sisteminin verimli çalışabilmesi için kompresörün sağlıklı olması gerekir. SD7, özellikle yüksek performanslı araçlarda sıklıkla tercih edilen bir modeldir. Bu kompresör, soğutma gazını yüksek basınca çıkararak aracın iç mekanını serin tutar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-7h15-klima-kompresoru',
    brandId: 'yedek-parca',
    name: '7H15 Klima Kompresörü',
    images: ['/yedek-parcalar/7H15-klima-kompresoru.jpg'],
    description: `7H15 klima kompresörü, klima sistemlerinin en önemli bileşenlerinden biridir ve özellikle ticari araçlar ve ağır vasıtalar için kullanılır. Kompresör, soğutucu gazı sıkıştırarak klima sistemine yönlendirir, böylece araç içindeki hava soğutulur. 7H15 kompresörleri yüksek verimlilikleri ile bilinir ve aracın serin kalmasını sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-5h14-sanden-klima-kompresoru',
    brandId: 'yedek-parca',
    name: '5H14 Sanden Klima Kompresörü',
    images: ['/yedek-parcalar/5H14-sanden-klima-kompresoru.jpg'],
    description: `5H14 Sanden klima kompresörü, Sanden markasının ürettiği, özellikle otomotiv endüstrisinde yaygın olarak kullanılan bir klima kompresörüdür. Bu kompresör, araçların klima sistemlerinde soğutma gazını sıkıştırarak, aracın iç ortamını soğutmak için gerekli olan enerjiyi sağlar. 5H14, Sanden tarafından üretilen bir model olup, özellikle araç içi klima sistemlerinde verimli soğutma sağlamak amacıyla tasarlanmıştır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-5h14-klima-kompresoru',
    brandId: 'yedek-parca',
    name: '5H14 Klima Kompresörü',
    images: ['/yedek-parcalar/5H14-klima-kompresoru.webp'],
    description: `5H14 klima kompresörü, otomotiv ve ticari araçlarda kullanılan bir klima kompresörü türüdür. Bu kompresör, soğutma işlemi için kullanılan gazı sıkıştırarak klima sisteminin çalışmasını sağlar. “5H14” adı, bu kompresörün model numarasını ifade eder ve genellikle yüksek verimlilik, dayanıklılık ve uzun ömürlü performansıyla bilinir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-sd5-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'SD5 Klima Kompresörü',
    images: ['/yedek-parcalar/SD5-klima-kompresoru.webp'],
    description: `SD5 klima kompresörü, özellikle araç klima sistemlerinde yaygın olarak kullanılan ve yüksek verimlilik sağlayan bir kompresör türüdür. Bu kompresör, soğutucu gazı sıkıştırarak ve bir hava akışını yönlendirerek klima sistemine soğutma sağlamak için çalışır. SD5 kompresörleri, sağlamlıkları ve uzun ömürleri ile bilinirler ve otomobil, kamyon, minibüs gibi çeşitli araçlarda kullanılır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-transporter-denso-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Volkswagen Transporter Denso Klima Kompresörü',
    images: ['/yedek-parcalar/volkswagen-transporter-denso-klima-kompresoru.webp'],
    description: `Volkswagen Transporter Denso klima kompresörü, Volkswagen Transporter araçları için özel olarak üretilmiş, klima sisteminin düzgün çalışmasını sağlayan önemli bir bileşendir. Denso, dünya çapında otomotiv sektöründe kalitesiyle tanınan bir markadır ve bu nedenle Denso klima kompresörleri, verimlilik ve uzun ömürlü performans sunar.

Kompresör, klima sisteminin kalbini oluşturur. Soğutucu gazı sıkıştırarak, bu gazın klima sisteminde dolaşmasını sağlar ve araç içindeki sıcaklık kontrolünü mümkün kılar. Denso marka klima kompresörleri, güvenilirlikleri ve yüksek kaliteli üretimleriyle öne çıkar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-crafter-ckma-denso-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Crafter Çıkma Denso Klima Kompresörü',
    images: ['/yedek-parcalar/volkswagen-crafter-klima-kompresoru-denso.webp'],
    description: `Crafter çıkma Denso klima kompresörü, Volkswagen Crafter araçları için özel olarak üretilen ve aracın klima sisteminin verimli bir şekilde çalışmasını sağlayan bir parçadır. Denso, dünya çapında tanınan bir marka olup, klima sistemlerinde yüksek kalite ve güvenilirlik sunar. Çıkma Denso klima kompresörü, sıfır kompresörler yerine daha ekonomik bir alternatif arayan araç sahipleri için idealdir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-crafter-klima-kondenseri',
    brandId: 'yedek-parca',
    name: 'Crafter Klima Kondenseri',
    images: ['/yedek-parcalar/crafter-klima-kondenseri.jpg'],
    description: `Crafter klima kondenseri, araç klima sistemlerinin soğutma sürecinde önemli bir rol oynayan parçadır. Klimanın içinde dolaşan soğutucu gazın sıcaklığını düşürerek, gazın yoğunlaşmasını sağlar ve ardından soğutulmuş gazı klima sistemine geri gönderir. Bu sayede, araç içindeki sıcaklık kontrol altına alınır ve ferah bir ortam sağlanır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-crafter-universal-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Crafter Üniversal Klima Kompresörü',
    images: ['/yedek-parcalar/crafter-universal-klima-kompresoru.webp'],
    description: `Crafter üniversal klima kompresörü, Volkswagen Crafter araçları için farklı marka ve modeldeki klima sistemlerine uyumlu olan bir parçadır. Klima kompresörü, aracın klima sisteminin temel bileşenlerinden biridir ve klima gazını sıkıştırarak soğutma işleminin gerçekleşmesini sağlar. Eğer aracınızın orijinal klima kompresörü arızalandıysa veya değiştirilmesi gerekiyorsa, üniversal kompresörler bir alternatif olabilir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-denso-crafter-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Denso Crafter Klima Kompresörü',
    images: ['/yedek-parcalar/denso-crafter-klima-kompresoru.webp'],
    description: `Volkswagen Crafter, geniş iç hacmiyle ticari taşımacılığın önemli modellerinden biridir. Özellikle yaz aylarında araç içerisindeki sıcaklık, sürücü ve yolcu konforunu doğrudan etkiler. İşte bu noktada klima kompresörü, sistemin kalbi olarak görev yapar. ❄️`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-vito-ckma-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Mercedes Vito Çıkma Klima Kompresörü',
    images: ['/yedek-parcalar/mercedes-vito-denso-klima-kompresoru-scaled (1).webp'],
    description: `Klima kompresörü, aracın klima sisteminin kalbidir. Soğutucu gazı sıkıştırarak sisteme gönderir ve kabin içinin soğutulmasını sağlar. Arızalı kompresör, serinliği büyük ölçüde etkiler.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-vito-denso-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Mercedes Vito Denso Klima Kompresörü',
    images: ['/yedek-parcalar/mercedes-vito-denso-klima-kompresoru-scaled (1).webp'],
    description: `Mercedes Vito, ticari araç kategorisinde uzun yıllardır popülerliğini sürdüren bir modeldir. Hem şehir içi hem de uzun yolculuklar için tercih edilen bu araç, konforlu bir sürüş sağlamak amacıyla gelişmiş iklimlendirme sistemlerine sahiptir. Bu sistemin temel bileşenlerinden biri de klima kompresörüdür. Mercedes Vito’nun klima kompresörleri arasında, Denso marka kompresörler sıklıkla tercih edilir. Denso, otomotiv sektöründe kalite ve güvenilirliği ile bilinen bir markadır. Mercedes Vito Denso klima kompresörü, aracınızın klima sisteminin verimli çalışmasını sağlayan önemli bir bileşendir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-vito-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Mercedes Vito Klima Kompresörü',
    images: ['/yedek-parcalar/mercedes-vito-klima-kompresoru.webp'],
    description: `Mercedes Vito, uzun yolculuklar ve şehir içi kullanım için oldukça popüler bir araçtır. Ancak, bu araçlarda da tıpkı diğer araçlarda olduğu gibi, klima sisteminin düzenli çalışması için bazı bileşenlerin bakımı gerekir. Klima kompresörü, bu sistemin en önemli parçalarından biridir. Klima kompresörü, soğutma sisteminin çalışmasını sağlayan ve aracınızın klima performansını doğrudan etkileyen bir parçadır. Mercedes Vito klima kompresörünün arızalanması durumunda, aracınızın klima sistemi verimsiz çalışabilir ve rahat bir sürüş sağlanamayabilir. Bu yazıda, Mercedes Vito klima kompresörü hakkında bilmeniz gerekenleri ele alacağız.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-karsan-jest-klima-kondanser-petegi',
    brandId: 'yedek-parca',
    name: 'Karsan Jest Klima Kondanser Peteği',
    images: ['/yedek-parcalar/karsan-jest-klima-kondanser-petegi.jpg'],
    description: `Karsan Jest minibüslerinde klima sisteminin verimli çalışabilmesi için çeşitli bileşenler birbirleriyle uyumlu bir şekilde çalışmalıdır. Bu bileşenlerden biri de klima kondanser peteğidir. Kondanser peteği, klima sisteminde önemli bir rol oynar ve soğutma sisteminin verimli çalışmasını sağlamak için bakım gerektirir. Bu yazıda, Karsan Jest klima kondanser peteğinin görevini, arızalarını ve tamir sürecini detaylı bir şekilde ele alacağız.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-karsan-jest-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Karsan Jest Klima Kompresörü',
    images: ['/yedek-parcalar/karsan-jest-klima-kompresoru.webp'],
    description: `Karsan Jest minibüslerinde klima, yolcuların konforlu bir seyahat deneyimi yaşaması için önemli bir özelliktir. Klima sisteminin düzgün çalışabilmesi için ise birçok parçanın uyum içinde çalışması gerekmektedir. Bunlardan biri de klima kompresörüdür. Karsan Jest klima kompresörü, klima sisteminin kalbidir ve doğru çalışması, klima sisteminin performansını doğrudan etkiler.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-otokar-sultan-klima-kondenseri',
    brandId: 'yedek-parca',
    name: 'Otokar Sultan Klima Kondenseri',
    images: ['/yedek-parcalar/otokar-sultan-klima-kondenseri.jpg'],
    description: `Klima sistemlerinin sağlıklı çalışabilmesi için her bir parçasının uyum içinde işlemesi gerekir. Bu parçalardan biri olan klima kondenseri, Otokar Sultan gibi ticari araçlarda yaz-kış konforu sağlayan hayati bir unsurdur. Arızalanması durumunda klima sistemi çalışmaz hale gelir ve özellikle yaz aylarında sürüş konforu ciddi biçimde düşer`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-otokar-sultan-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Otokar Sultan Klima Kompresörü',
    images: ['/yedek-parcalar/otokar-sultan-klima-kompresoru.jpg'],
    description: `Klima sistemleri, şehir içi ve şehirler arası taşımacılıkta kullanılan Otokar Sultan midibüslerinde hem yolcular hem de şoför konforu açısından büyük önem taşır. Bu sistemlerin en kritik parçalarından biri olan klima kompresörü, arıza yaptığında tüm sistem devre dışı kalabilir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-sprinter-ckma-valeo-kompresor',
    brandId: 'yedek-parca',
    name: 'Sprinter Çıkma Valeo Kompresör',
    images: ['/yedek-parcalar/sprinter-cikma-valeo-kompresor.webp'],
    description: `Mercedes Sprinter araçlarında klima sistemlerinin en önemli parçası olan kompresörler, zaman içinde arızalanabilir ya da performans kaybı yaşayabilir. Orijinal yedek parça fiyatlarının yüksekliği nedeniyle, birçok araç sahibi çıkma Valeo kompresör gibi alternatif çözümlere yönelmektedir`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-sprinter-universal-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Sprinter Üniversal Klima Kompresörü',
    images: ['/yedek-parcalar/sprinter-klima-kompresoru-denso.jpg'],
    description: `Sprinter modellerinde klima sistemi, uzun yolculuklar ve sıcak hava koşullarında büyük bir konfor sağlar. Klima sisteminin en temel bileşeni ise klima kompresörüdür. Ancak orijinal parça maliyetleri bazı kullanıcılar için yüksek olabilmektedir. Bu noktada, Sprinter üniversal klima kompresörü alternatif bir çözüm olarak karşımıza çıkar. Hem fiyat avantajı hem de geniş uyumluluk özelliği sayesinde birçok araç sahibinin tercihi haline gelmiştir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-sprinter-klima-kompresoru-denso',
    brandId: 'yedek-parca',
    name: 'Sprinter Klima Kompresörü Denso',
    images: ['/yedek-parcalar/sprinter-klima-kompresoru-denso.jpg'],
    description: `Mercedes Sprinter kullanıcıları için konfor, performans kadar önemlidir. Özellikle yaz aylarında veya uzun yolculuklarda klima sisteminin sorunsuz çalışması büyük fark yaratır. Bu sistemin kalbinde yer alan parça ise klima kompresörüdür. Kalitesiyle öne çıkan Sprinter klima kompresörü Denso, güçlü performansı ve uzun ömrüyle tercih edilmektedir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-sprinter-klima-kompresoru-valeo',
    brandId: 'yedek-parca',
    name: 'Sprinter Klima Kompresörü Valeo',
    images: ['/yedek-parcalar/sprinter-klima-kompresoru-valeo.webp'],
    description: `Mercedes Sprinter, hafif ticari araç sınıfında dayanıklılığı ve geniş iç hacmi ile tercih edilen bir modeldir. Bu aracın konfor sistemleri içinde en kritik parçaların başında klima kompresörü gelir. Özellikle uzun yolculuklarda sürücü ve yolcu konforunu doğrudan etkileyen bu sistemin düzgün çalışması büyük önem taşır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-kondanser-isuzu-prestige-mitsubishi-nova-safkar-climart',
    brandId: 'yedek-parca',
    name: 'KONDANSER ISUZU PRESTİGE MITSUBİSHİ NOVA SAFKAR CLİMART',
    images: ['/yedek-parcalar/kondanser-isuzu-prestige-mitsubishi-nova-safkar-climart.png'],
    description: `Isuzu Prestige ve Mitsubishi Nova model araçlarda kullanılan klima sistemleri için özel olarak üretilmiş kondenser (klima radyatörü), Safkar ve Climart marka klima sistemleri ile uyumlu çalışacak şekilde tasarlanmıştır. Yüksek ısı transferi sağlayan yapısı sayesinde klima gazını verimli şekilde soğutarak sistemin maksimum performansla çalışmasına yardımcı olur.

1100 x 580 x 26 mm ölçülerindeki geniş yüzey alanı, özellikle otobüs ve midibüs tipi ticari araçlarda güçlü soğutma performansı sunar. Dayanıklı alüminyum yapısı sayesinde uzun ömürlü kullanım sağlar ve zorlu yol koşullarında yüksek dayanım gösterir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-avenue-bus-otobus-mercedes-travego-safkar-tip',
    brandId: 'yedek-parca',
    name: 'AVENUE BUS OTOBÜS MERCEDES TRAVEGO (SAFKAR TİP)',
    images: ['/yedek-parcalar/avenue-bus-otobus-mercedes-travego-safkar-tip.png'],
    description: `Safkar tip klima sistemleri için üretilmiş olan 1400 x 500 mm ölçülerindeki kondenser, otobüs ve büyük ticari araçların klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla tasarlanmıştır. Özellikle Avenue Bus ve Mercedes Travego model otobüslerde kullanılan Safkar klima sistemleri ile uyumlu çalışır.

Yüksek kaliteli alüminyum yapısı sayesinde klima gazının hızlı ve verimli şekilde soğutulmasını sağlar. Geniş yüzey alanı ve güçlü ısı transfer kapasitesi, klima sisteminin daha verimli çalışmasına yardımcı olur ve aracın iç ortamında ideal sıcaklık dengesinin korunmasını sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-kondanser-safkar-sogutucu-penguen-230-universal',
    brandId: 'yedek-parca',
    name: 'KONDANSER SAFKAR SOĞUTUCU PENGUEN 230 üniversal',
    images: ['/yedek-parcalar/kondanser-safkar-sogutucu-penguen-230-universal.png'],
    description: `Safkar Penguen 230 klima sistemleri ile uyumlu olarak tasarlanmış kondenser (klima soğutucu radyatör), ticari araç ve otobüs klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla üretilmiştir. Klima gazının hızlı ve verimli şekilde soğutulmasını sağlayarak klima sisteminin daha verimli çalışmasına yardımcı olur.

Dayanıklı alüminyum yapısı sayesinde uzun ömürlü kullanım sunan bu üniversal kondenser, Safkar Penguen 230 klima sistemine sahip araçlarda sorunsuz şekilde kullanılabilir. Geniş yüzey alanı sayesinde yüksek ısı transferi sağlayarak özellikle yoğun çalışan klima sistemlerinde güçlü performans suna`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-kondanser-safkar-climart-sogutucu-s75425485-art5000-80x40x26mm',
    brandId: 'yedek-parca',
    name: 'KONDANSER SAFKAR CLİMART SOĞUTUCU S75/425/485 ART5000 80X40X26MM',
    images: ['/yedek-parcalar/kondanser-safkar-climart-sogutucu.png'],
    description: `Safkar ve Climart marka klima sistemleri ile uyumlu olarak üretilmiş kondenser (klima soğutucu radyatörü), otobüs ve ticari araç klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla tasarlanmıştır. S75, 425, 485 ve ART5000 model klima sistemleri ile uyumlu olan bu kondenser, klima gazının hızlı şekilde soğutulmasını sağlayarak sistemin verimli çalışmasına yardımcı olur.

80 x 40 x 26 mm ölçülerindeki kompakt ve dayanıklı yapısı sayesinde yüksek ısı transferi sağlar. Kaliteli alüminyum malzemeden üretilmiş olup uzun ömürlü kullanım ve yüksek performans sunar. Yoğun çalışan araç klima sistemleri için ideal bir yedek parçadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-drier-filtre-yilkar-klima-universal-ayakli-aluminyum',
    brandId: 'yedek-parca',
    name: 'DRİER FİLTRE YILKAR KLİMA ÜNİVERSAL AYAKLI ALÜMİNYUM',
    images: ['/yedek-parcalar/drier-filtre-yilkar-klima-universal-ayakli-aluminyum.png'],
    description: `Yılkar marka klima sistemleri ile uyumlu drier filtre (klima kurutucu filtre), araç klima sistemlerinde gaz içerisindeki nemi ve kirli partikülleri filtreleyerek sistemin daha verimli ve uzun ömürlü çalışmasını sağlar. Klima sisteminin önemli parçalarından biri olan drier filtre, kompresör ve diğer klima bileşenlerinin korunmasına yardımcı olur.

Dayanıklı alüminyum gövde yapısına sahip olan bu ürün, ayaklı montaj tasarımı sayesinde kolay kurulum imkanı sunar. Üniversal yapısı sayesinde otobüs, minibüs ve ticari araç klima sistemlerinde geniş kullanım alanına sahiptir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-kondanser-yilkar-2-fanli-75055020mm',
    brandId: 'yedek-parca',
    name: 'KONDANSER YILKAR 2 FANLI 750*550*20MM',
    images: ['/yedek-parcalar/kondanser-yilkar-2-fanli.png'],
    description: `Yılkar klima sistemleri ile uyumlu olarak üretilmiş 2 fanlı kondenser, araç klima sistemlerinde yüksek soğutma performansı sağlamak amacıyla tasarlanmıştır. Üzerinde bulunan 2 adet güçlü fan, klima gazının hızlı ve verimli şekilde soğutulmasına yardımcı olarak sistemin daha verimli çalışmasını sağlar.

750 x 550 x 20 mm ölçülerindeki yapısı sayesinde yüksek ısı transferi sunar ve özellikle otobüs, minibüs ve ticari araç klima sistemlerinde etkili performans sağlar. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan bu ürün, araç klima sistemlerinin güvenli ve verimli çalışmasına katkı sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-ylkar-yk100-fanl-kondanser-universal-100040020mm',
    brandId: 'yedek-parca',
    name: 'Yılkar YK100 Fanlı KONDANSER ÜNİVERSAL 1000*400*20MM',
    images: ['/yedek-parcalar/yilkar-yk100-fanli-kondanser-universal.png'],
    description: `Yılkar YK100 klima sistemleri ile uyumlu olarak üretilmiş fanlı kondenser (klima radyatörü), araç klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla tasarlanmıştır. Üzerinde bulunan fan sayesinde klima gazının daha hızlı soğutulmasını sağlayarak klima sisteminin verimli ve stabil çalışmasına yardımcı olur.

1000 x 400 x 20 mm ölçülerindeki yapısı sayesinde geniş ısı transfer yüzeyi sunar ve özellikle otobüs, minibüs ve ticari araç klima sistemlerinde etkili performans sağlar. Dayanıklı malzeme yapısı sayesinde uzun ömürlü kullanım sunan bu ürün, araç klima sistemleri için ideal bir yedek parçadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-ylkar-yk-80-kondanser-universal66054020mm',
    brandId: 'yedek-parca',
    name: 'Yılkar YK 80 KONDANSER ÜNİVERSAL660*540*20MM',
    images: ['/yedek-parcalar/yilkar-yk-80-kondanser-universal.png'],
    description: `Yılkar YK 80 klima sistemleri ile uyumlu olarak üretilmiş üniversal kondenser (klima radyatörü), araç klima sistemlerinde yüksek soğutma performansı sağlamak amacıyla tasarlanmıştır. Klima gazının hızlı ve verimli şekilde soğutulmasını sağlayarak klima sisteminin daha stabil ve verimli çalışmasına yardımcı olur.

660 x 540 x 20 mm ölçülerindeki yapısı sayesinde yüksek ısı transferi sağlayan bu kondenser, özellikle otobüs, minibüs ve ticari araç klima sistemlerinde etkili performans sunar. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sağlar ve araç klima sistemleri için güvenilir bir yedek parçadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-fan-motoru-11-inc-12v-120w-emisuflec-dis',
    brandId: 'yedek-parca',
    name: 'FAN MOTORU 11 İNÇ 12V 120W EMİŞ/ÜFLEÇ DIŞ',
    images: ['/yedek-parcalar/fan-motoru-11-inc-12v-120w-emis-uflec-dis.png'],
    description: `Araç klima ve soğutma sistemlerinde kullanılmak üzere tasarlanmış 11 inç fan motoru, güçlü performansı sayesinde hava akışını artırarak sistemin daha verimli çalışmasını sağlar. 12V 120W güç kapasitesine sahip olan bu fan motoru, hem emiş hem de üfleç olarak kullanılabilen yapısı ile farklı soğutma ve klima uygulamalarında tercih edilir.

Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan bu fan motoru, özellikle otobüs, minibüs, ticari araç klima sistemleri ve kondenser radyatör soğutma sistemlerinde etkili performans sağlar. Dış montaj tipine uygun olarak üretilmiştir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-fan-motoru-12-inc-12v-120w-emisuflec-dis',
    brandId: 'yedek-parca',
    name: 'FAN MOTORU 12 İNÇ 12V 120W EMİŞ/ÜFLEÇ DIŞ',
    images: ['/yedek-parcalar/fan-motoru-12-inc-12v-120w-emis-uflec-dis.png'],
    description: `Araç klima ve soğutma sistemleri için tasarlanmış 12 inç fan motoru, güçlü hava akışı sağlayarak klima ve kondenser sistemlerinin daha verimli çalışmasına yardımcı olur. 12V 120W güç kapasitesine sahip olan bu fan motoru, hem emiş hem de üfleç olarak kullanılabilen yapısı sayesinde farklı soğutma uygulamalarında kullanılabilir.

Dayanıklı motor yapısı ve yüksek performansı sayesinde uzun ömürlü kullanım sunar. Özellikle otobüs, minibüs ve ticari araç klima sistemleri ile kondenser radyatör soğutma sistemlerinde etkili performans sağlar. Dış montaj tipine uygun olarak üretilmiştir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-fan-motoru-14-inc-12v-120w-emisuflec-dis',
    brandId: 'yedek-parca',
    name: 'FAN MOTORU 14 İNÇ 12V 120W EMİŞ/ÜFLEÇ DIŞ',
    images: ['/yedek-parcalar/fan-motoru-14-inc-12v-120w-emis-uflec-dis.jpg'],
    description: `Araç klima ve soğutma sistemleri için tasarlanmış 14 inç fan motoru, güçlü hava akışı sağlayarak klima ve kondenser sistemlerinin daha verimli çalışmasına yardımcı olur. 12V 120W güç kapasitesine sahip olan bu fan motoru, emiş ve üfleç olarak kullanılabilen yapısı sayesinde farklı soğutma ve havalandırma uygulamalarında tercih edilir.

Dayanıklı motor yapısı ve yüksek performansı sayesinde uzun ömürlü kullanım sunar. Özellikle otobüs, minibüs ve ticari araç klima sistemleri ile kondenser radyatör soğutma sistemlerinde etkili performans sağlar. Dış montaj tipine uygun olarak üretilmiştir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-otokar-sultan-klima-fani-motoru-bes-kanat',
    brandId: 'yedek-parca',
    name: 'Otokar Sultan Klima FANI MOTORU BEŞ KANAT',
    images: ['/yedek-parcalar/otokar-sultan-klima-fani-motoru-bes-kanat.jpg'],
    description: `Otokar Sultan model araçların klima sistemlerinde kullanılmak üzere tasarlanmış beş kanatlı klima fan motoru, güçlü hava akışı sağlayarak klima sisteminin verimli çalışmasına yardımcı olur. Fan kanat yapısı sayesinde kondenser ve radyatör üzerinden geçen havayı hızlandırarak klima gazının daha hızlı soğutulmasını sağlar. Dayanıklı motor yapısı ve 5 kanatlı fan tasarımı, yüksek performans ve uzun ömürlü kullanım sunar. Özellikle otobüs ve ticari araç klima sistemlerinde güvenilir bir soğutma performansı sağlar ve klima sisteminin stabil çalışmasına katkıda bulunur.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-700-blower-fan-1224-v',
    brandId: 'yedek-parca',
    name: '700 BLOWER FAN 12/24 V',
    images: ['/yedek-parcalar/700-blower-fan-12-24-v.png'],
    description: `700 blower fan, minibüs, midibüs ve otobüs klima sistemlerinde güçlü hava sirkülasyonu sağlamak için kullanılan yüksek performanslı bir klima fan motorudur. 700 blower fan, klima evaporatöründen geçen havayı hızlandırarak araç içi soğutma performansını artırır ve kabin içerisinde dengeli hava dağılımı sağlar. Dayanıklı motor yapısı sayesinde uzun süreli kullanım sunar ve ticari araç klima sistemlerinde güvenilir performans sağlar. Özellikle minibüs, midibüs ve otobüs gibi yolcu taşıma araçlarında klima sisteminin daha verimli çalışmasına yardımcı olur.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-webasto-klima-dugmesi',
    brandId: 'yedek-parca',
    name: 'Webasto Klima Düğmesi',
    images: ['/yedek-parcalar/webasto-klima-dugmesi.jpg'],
    description: `Webasto klima düğmesi, araç klima ve havalandırma sistemlerinin kontrol edilmesini sağlayan önemli bir klima kontrol parçasıdır. Webasto klima düğmesi, özellikle minibüs, midibüs ve otobüs gibi ticari araçlarda klima sisteminin fan ayarı ve çalışma kontrolünü kolaylaştırır. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan Webasto klima düğmesi, araç klima sistemlerinin stabil ve verimli çalışmasına yardımcı olur.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-delphi-klima-kondenseri',
    brandId: 'yedek-parca',
    name: 'Delphi Klima Kondenseri',
    images: ['/yedek-parcalar/delphi-klima-kondenseri.webp'],
    description: `Delphi klima kondenseri, araç klima sistemlerinde soğutucu gazın yoğunlaştırılmasını sağlayarak klima sisteminin verimli şekilde çalışmasına yardımcı olan önemli bir klima parçasıdır. Delphi klima kondenseri, klima gazının yüksek basınç altında soğutulmasını sağlayarak evaporatöre gönderilmeden önce gazın sıvı hale dönüşmesine yardımcı olur. Dayanıklı alüminyum yapısı sayesinde uzun ömürlü kullanım sunan Delphi klima kondenseri, özellikle minibüs, midibüs ve otobüs gibi ticari araç klima sistemlerinde güçlü soğutma performansı sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-webasto-klima-kondenseri',
    brandId: 'yedek-parca',
    name: 'Webasto Klima Kondenseri',
    images: ['/yedek-parcalar/webasto-klima-kondenseri.webp'],
    description: `Webasto klima kondenseri, araç klima sistemlerinde soğutucu gazın yoğunlaştırılmasını sağlayarak klima sisteminin verimli çalışmasına yardımcı olan önemli bir klima bileşenidir. Webasto klima kondenseri, klima kompresöründen gelen yüksek basınçlı gazı soğutarak sıvı hale dönüştürür ve klima sisteminin daha etkili soğutma performansı sağlamasını destekler. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan Webasto klima kondenseri, özellikle minibüs, midibüs ve otobüs gibi ticari araç klima sistemlerinde güvenilir bir şekilde kullanılmaktadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-delphi-klima-kompresoru-poli-trigal-kays',
    brandId: 'yedek-parca',
    name: 'Delphi Klima Kompresörü Poli Trigal Kayış',
    images: ['/yedek-parcalar/delphi-klima-kompresoru-v-kayis.jpg'],
    description: `Delphi klima kompresörü, araç klima sistemlerinde soğutucu gazın sıkıştırılmasını sağlayarak klima sisteminin çalışmasını mümkün kılan temel klima bileşenlerinden biridir. Delphi klima kompresörü, klima gazını yüksek basınç altında dolaştırarak sistemin soğutma performansını artırır ve araç içerisinde etkili bir soğutma sağlar. Dayanıklı yapısı ve yüksek performansı sayesinde Delphi klima kompresörü, özellikle minibüs, midibüs ve otobüs gibi ticari araçların klima sistemlerinde güvenilir şekilde kullanılmaktadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-delphi-klima-kompresoru-v-kays',
    brandId: 'yedek-parca',
    name: 'Delphi Klima Kompresörü V Kayış',
    images: ['/yedek-parcalar/delphi-klima-kompresoru-v-kayis.jpg'],
    description: `Delphi klima kompresörü V kayış, araç klima kompresörünün motor gücünü alarak çalışmasını sağlayan önemli bir aktarma parçasıdır. Delphi klima kompresörü V kayış, motor kasnağından aldığı hareketi klima kompresörüne ileterek klima sisteminin sorunsuz şekilde çalışmasına yardımcı olur. Dayanıklı kauçuk ve lif takviyeli yapısı sayesinde uzun ömürlü kullanım sunan Delphi klima kompresörü V kayış, özellikle minibüs, midibüs ve otobüs gibi ticari araç klima sistemlerinde güvenilir performans sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-transporter-klima-kompresoru-denso',
    brandId: 'yedek-parca',
    name: 'Volkswagen Transporter Klima Kompresörü (Denso)',
    images: ['/yedek-parcalar/volkswagen-transporter-klima-kompresoru-denso.webp'],
    description: `Volkswagen Transporter modelinizin klima sisteminin kalbi olan Denso marka Klima Kompresörü ile tanışın. Araç içi konforu en üst düzeye çıkarmak ve uzun ömürlü, güvenilir soğutma performansı elde etmek için tasarlanan bu yedek parça, orijinal ekipman kalitesini doğrudan kapınıza getiriyor.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-renault-master-klima-kompresoru-valeo',
    brandId: 'yedek-parca',
    name: 'Renault Master Klima Kompresörü (Valeo)',
    images: ['/yedek-parcalar/renault-master-klima-kompresoru-valeo.webp'],
    description: `Yaz sıcaklarında aracınızın içindeki konforu korumak, sürüş güvenliğinizin ayrılmaz bir parçasıdır. Renault Master ticari araçlarınız için özel olarak tasarlanmış, yüksek performanslı ve dayanıklı Renault Master Klima Kompresörü (Valeo) ile aracınızın soğutma sistemini en üst seviyede güvence altına alın. Orijinal ekipman üreticisi (OEM) kalitesiyle bilinen Valeo güvencesi, size uzun ömürlü ve sorunsuz bir çalışma performansı sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-transporter-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Volkswagen Transporter Klima Kompresörü',
    images: ['/yedek-parcalar/volkswagen-transporter-klima-kompresoru.webp'],
    description: `Volkswagen Transporter serisi ticari araçlarınızın klima sisteminin kalbi olan klima kompresörleri, yaz aylarında konforunuzu ve yolculuk güvenliğinizi doğrudan etkiler. Orijinal ekipman kalitesinde veya eşdeğeri yüksek standartlarda üretilmiş Volkswagen Transporter Klima Kompresörü arayışınızda, doğru adrestesiniz. Uzun ömürlü, yüksek verimli ve aracınızın orijinal spesifikasyonlarına tam uyumlu bu kompresörler ile aracınızın soğutma sistemini ilk günkü performansına geri kazandırın.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-crafter-klima-kompresoru-denso',
    brandId: 'yedek-parca',
    name: 'Volkswagen Crafter Klima Kompresörü (Denso)',
    images: ['/yedek-parcalar/volkswagen-crafter-klima-kompresoru-denso.webp'],
    description: `Volkswagen Crafter ticari aracınızın iklimlendirme sisteminin kalbi olan klima kompresörünün performans kaybı yaşadığını mı düşünüyorsunuz? İşte bu soruna kesin ve güvenilir çözüm: Volkswagen Crafter Klima Kompresörü (Denso). Denso, otomotiv sektöründe dünya çapında bilinen, orijinal ekipman kalitesinde parça üretimiyle tanınan bir markadır. Bu kompresör, aracınızın klima sisteminin en kritik bileşenidir ve yaz aylarında konforunuzu doğrudan etkiler.

Crafter modeliniz için özel olarak tasarlanmış bu Denso kompresör, orijinal ekipman standartlarına tam uyum sağlayarak sorunsuz montaj ve uzun ömürlü performans garantisi sunar. Eski veya arızalı kompresörünüzün neden olduğu soğutmama, sesli çalışma veya gaz kaçağı gibi tüm problemleri ortadan kaldırır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-crafter-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Volkswagen Crafter Klima Kompresörü',
    images: ['/yedek-parcalar/volkswagen-crafter-klima-kompresoru.webp'],
    description: `Volkswagen Crafter model aracınızın iklimlendirme sisteminin kalbi olan Klima Kompresörü, yaz aylarının bunaltıcı sıcağında konforunuzu garanti altına alan kritik bir yedek parçadır. Aracınızın orijinal performansını ve soğutma verimliliğini yeniden kazanmak için tasarlanmış bu yüksek kaliteli kompresör, uzun ömürlü kullanım ve mükemmel uyum sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-renault-master-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Renault Master Klima Kompresörü',
    images: ['/yedek-parcalar/renault-master-klima-kompresoru.webp'],
    description: `Yaz aylarında aracınızın içindeki konforu en üst seviyeye taşımak için kritik bir yedek parça olan Renault Master Klima Kompresörü, aracınızın iklimlendirme sisteminin kalbidir. Orijinal ekipman kalitesinde üretilmiş bu kompresör, Renault Master modelinizin klima performansını ilk günkü verimliliğine geri döndürmek üzere tasarlanmıştır. Klima sisteminde hissedilen yetersiz soğutma, gürültü veya kompresörden gelen anormal sesler, değiştirilmesi gerektiğinin en büyük işaretleridir. Bu yüksek kaliteli yedek parça ile Master aracınızda kesintisiz ve etkili soğutmanın keyfini yeniden yaşayın.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-vito-klima-kompresoru-denso',
    brandId: 'yedek-parca',
    name: 'Mercedes Vito Klima Kompresörü (Denso)',
    images: ['/yedek-parcalar/mercedes-vito-klima-kompresoru-denso.webp'],
    description: `Araç klima sistemlerinin kalbi olan klima kompresörü, özellikle Mercedes Vito gibi ticari ve binek araçlarda konforun ve güvenli sürüşün temel taşıdır. Yüksek performanslı ve dayanıklı bir çözüm arayanlar için Mercedes Vito Klima Kompresörü (Denso), orijinal ekipman kalitesini ve üstün verimliliği bir araya getiriyor.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-vito-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Mercedes Vito Klima Kompresörü',
    images: ['/yedek-parcalar/mercedes-vito-klima-kompresoru.webp'],
    description: `Mercedes Vito, ticari ve binek kullanımlarda konfor ve güvenilirliği bir araya getiren efsanevi bir araçtır. Ancak, yoğun kullanım koşullarında veya zamanla, aracınızın klima sistemi kritik bir bileşen olan klima kompresörüne ihtiyaç duyabilir. Orijinal ekipman standartlarında üretilmiş, yüksek performanslı Mercedes Vito Klima Kompresörü ile aracınızın soğutma kapasitesini ilk günkü seviyesine taşıyın.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-klima-kompresoru-valeo',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter Klima Kompresörü (Valeo)',
    images: ['/yedek-parcalar/mercedes-sprinter-klima-kompresoru-valeo.webp'],
    description: `Mercedes Sprinter aracınızın iklimlendirme sisteminin kalbi olan klima kompresörü, yolculuk konforunuzu doğrudan etkileyen kritik bir bileşendir. Yüksek performanslı ve güvenilir bir çözüm arıyorsanız, Valeo kalitesiyle üretilmiş bu orijinal ekipman kalitesindeki Mercedes Sprinter Klima Kompresörü tam size göre. Aracınızın orijinal klima performansını geri kazanmak ve uzun ömürlü bir çözüm elde etmek için ideal bir seçimdir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter Klima Kompresörü',
    images: ['/yedek-parcalar/mercedes-sprinter-klima-kompresoru.webp'],
    description: `Mercedes Sprinter, ticari araç kullanıcıları için güvenilirlik ve konforun simgesidir. Ancak, uzun yolculukların veya yoğun şehir trafiğinin vazgeçilmezi olan klima sisteminin kalbi olan Mercedes Sprinter Klima Kompresörü, zamanla aşınabilir ve performans kaybına uğrayabilir. Aracınızın kabin içi sıcaklığını ideal seviden tutmak, konforu artırmak ve sürücü yorgunluğunu azaltmak için orijinal standartlara uygun, yüksek kaliteli bir yedek kompresöre yatırım yapmalısınız.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-renault-master-3-hazrlksz-klima-braketi-2011-2019',
    brandId: 'yedek-parca',
    name: 'Renault Master 3 Hazırlıksız Klima Braketi (2011-2019)',
    images: ['/yedek-parcalar/renault-master-3-hazirliksiz-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, sürüş konforu ve iş verimliliği açısından büyük önem taşır. Renault Master 3 Hazırlıksız Klima Braketi (2011-2019) ile birlikte kullanılan Mercedes Sprinter Klima Kompresörü, güçlü ve verimli bir soğutma sistemi oluşturmanızı sağlar.

Sonradan klima takılacak araçlar için özel olarak geliştirilen bu sistem, doğru montaj ekipmanlarıyla birleştiğinde yüksek performans ve uzun ömürlü kullanım sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-ford-transit-155lik-kasnakl-klima-braketi',
    brandId: 'yedek-parca',
    name: 'Ford Transit 155’lik Kasnaklı Klima Braketi',
    images: ['/yedek-parcalar/ford-transit-155lik-kasnakli-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, özellikle yoğun kullanımda sürüş konforunu ve iş verimliliğini doğrudan etkiler. Ford Transit 155’lik Kasnaklı Klima Braketi, klima kompresörünün motora doğru ve sağlam şekilde bağlanmasını sağlayarak sistemin verimli çalışmasının temelini oluşturur.

Özellikle sonradan klima takılacak araçlar için geliştirilen bu braket sistemi, yüksek uyumluluk ve dayanıklılığı ile öne çıkar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-ford-custom-klima-braketi',
    brandId: 'yedek-parca',
    name: 'Ford Custom Klima Braketi',
    images: ['/yedek-parcalar/ford-custom-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, sürüş konforu ve iş verimliliği açısından büyük önem taşır. Ford Custom Klima Braketi, klima kompresörünün motora doğru ve sağlam şekilde monte edilmesini sağlayarak sistemin verimli ve uzun ömürlü çalışmasına katkı sağlar.

Özellikle sonradan klima sistemi kurulacak Ford Custom araçlar için tasarlanan bu braket, yüksek uyumluluk ve dayanıklılığı ile profesyonel çözümler sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-fiat-ducato-klima-braket-govdesi-2007-2017',
    brandId: 'yedek-parca',
    name: 'Fiat Ducato Klima Braket Gövdesi (2007-2017)',
    images: ['/yedek-parcalar/fiat-ducato-klima-braket-govdesi.png'],
    description: `Ticari araçlarda klima sistemi, özellikle uzun yol ve yoğun kullanımda sürüş konforunu doğrudan etkiler. Fiat Ducato Klima Braket Gövdesi (2007-2017), klima kompresörünün motora sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin verimli çalışmasının temelini oluşturur.

Bu parça, özellikle sonradan klima kurulumu yapılacak Ducato modelleri için geliştirilmiş olup yüksek uyumluluk ve dayanıklılık sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-2013-model-sag-klima-braketi',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter 2013 Model Sağ Klima Braketi',
    images: ['/yedek-parcalar/mercedes-sprinter-2013-model-sag-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, sürüş konforu ve verimlilik açısından büyük önem taşır. Mercedes Sprinter 2013 Model Sağ Klima Braketi, klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin verimli çalışmasına yardımcı olur.

Özellikle Sprinter araçlarda sağ taraf klima montajı için özel olarak tasarlanan bu braket, yüksek dayanıklılığı ve tam uyumu ile profesyonel çözümler sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-euro-5-klima-braketi-315',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter Euro 5 Klima Braketi (315)',
    images: ['/yedek-parcalar/mercedes-sprinter-euro-5-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, özellikle uzun yol ve yoğun kullanımda sürüş konforunu doğrudan etkiler. Mercedes Sprinter Euro 5 Klima Braketi (315), klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin maksimum verimle çalışmasına yardımcı olur.

Euro 5 motor yapısına sahip Sprinter 315 modeller için özel olarak tasarlanan bu braket, yüksek dayanıklılığı ve birebir uyumu ile profesyonel klima kurulumlarında tercih edilir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-euro-3-klima-braketi-313413',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter Euro 3 Klima Braketi (313/413)',
    images: ['/yedek-parcalar/mercedes-sprinter-euro-3-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, sürüş konforu ve iş verimliliği açısından büyük önem taşır. Mercedes Sprinter Euro 3 Klima Braketi (313/413), klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin verimli ve uzun ömürlü çalışmasına katkı sağlar.

Euro 3 motor yapısına sahip Sprinter 313 ve 413 modeller için özel olarak tasarlanan bu klima braketi, yüksek dayanıklılığı ve birebir uyumu ile profesyonel klima kurulumlarında tercih edilir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-euro-6-klima-braketi-515',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter Euro 6 Klima Braketi (515)',
    images: ['/yedek-parcalar/mercedes-sprinter-euro-6-klima-braketi.png'],
    description: `Ticari araçlarda klima sistemi, özellikle uzun yol ve yoğun kullanımda sürüş konforunu doğrudan etkiler. Mercedes Sprinter Euro 6 Klima Braketi (515), klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin maksimum verimle çalışmasına katkı sağlar.

Euro 6 motor teknolojisine sahip Sprinter 515 modeller için özel olarak tasarlanan bu klima braketi, yüksek dayanıklılığı ve tam uyumu ile profesyonel klima kurulumlarının vazgeçilmez parçalarından biridir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-sprinter-kabin-klima-seti',
    brandId: 'yedek-parca',
    name: 'Mercedes Sprinter Kabin Klima Seti',
    images: ['/yedek-parcalar/mercedes-sprinter-kabin-klima-seti.jpeg'],
    description: `Ticari araçlarda kabin içi konfor, sürüş güvenliği ve iş verimliliği açısından büyük önem taşır. Mercedes Sprinter Kabin Klima Seti, araç içinde ideal sıcaklık dengesini sağlayarak hem sürücü hem de yolcular için konforlu bir ortam oluşturur.

Özellikle sonradan klima sistemi kurulacak Sprinter araçlar için tasarlanan bu set, tüm gerekli bileşenleri bir arada sunarak pratik, güçlü ve uzun ömürlü bir çözüm sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-crafter-kabin-klima-seti',
    brandId: 'yedek-parca',
    name: 'Volkswagen Crafter Kabin Klima Seti',
    images: ['/yedek-parcalar/volkswagen-crafter-kabin-klima-seti.jpeg'],
    description: `Ticari araçlarda klima sistemi, özellikle uzun yolculuklarda ve yoğun kullanımda sürüş konforu için vazgeçilmezdir. Volkswagen Crafter Kabin Klima Seti, araç içi sıcaklığı dengede tutarak sürücü ve yolcular için maksimum konfor sağlar.

Sonradan klima sistemi kurulumu için ideal olan bu set, tüm gerekli bileşenleri bir arada sunarak güçlü, verimli ve uzun ömürlü bir çözüm oluşturur.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-fiat-ducato-kabin-klima-seti',
    brandId: 'yedek-parca',
    name: 'Fiat Ducato Kabin Klima Seti',
    images: ['/yedek-parcalar/fiat-ducato-kabin-klima-seti.jpg'],
    description: `Ticari araçlarda klima sistemi, özellikle yoğun kullanım ve uzun yol şartlarında sürüş konforunun en önemli unsurlarından biridir. Fiat Ducato Kabin Klima Seti, araç içi sıcaklığı dengede tutarak sürücü ve yolcular için ideal bir ortam oluşturur.

Sonradan klima sistemi kurulacak Ducato araçlar için özel olarak geliştirilen bu set, tüm gerekli bileşenleri bir arada sunarak güçlü, verimli ve uzun ömürlü bir çözüm sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-citroen-jumper-kabin-klima-seti',
    brandId: 'yedek-parca',
    name: 'Citroën Jumper Kabin Klima Seti',
    images: ['/yedek-parcalar/citroen-jumper-kabin-klima-seti.jpg'],
    description: `Ticari araçlarda klima sistemi, sürüş konforu ve verimlilik açısından kritik bir rol oynar. Citroën Jumper Kabin Klima Seti, araç içi sıcaklığı dengede tutarak hem sürücü hem de yolcular için konforlu bir ortam sağlar.

Sonradan klima sistemi kurulumu için özel olarak tasarlanan bu set, tüm gerekli bileşenleri bir arada sunarak güçlü, verimli ve uzun ömürlü bir klima çözümü sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-albatros-klima-kapag',
    brandId: 'yedek-parca',
    name: 'Albatros Klima Kapağı',
    images: ['/yedek-parcalar/albatros-klima-kapagi.png'],
    description: `Ticari araçlarda klima sisteminin dış etkenlerden korunması, sistemin uzun ömürlü ve verimli çalışması için büyük önem taşır. Albatros Klima Kapağı, klima sistemini darbelere, toza, güneş ışınlarına ve çevresel etkilere karşı koruyarak performansın korunmasına yardımcı olur.

Özellikle kabin üstü veya dış ünite klima sistemlerinde kullanılan bu kapak, hem koruma hem de estetik görünüm açısından önemli bir parçadır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-coolertech-klima-kapag',
    brandId: 'yedek-parca',
    name: 'COOLERTECH Klima Kapağı',
    images: ['/yedek-parcalar/coolertech-coolman-klima-kondansoru-petegi.png'],
    description: `Ticari araçlarda kullanılan klima sistemlerinin dış etkenlere karşı korunması, sistemin performansı ve ömrü açısından büyük önem taşır. CoolerTech Klima Kapağı, klima ünitesini güneş, yağmur, toz ve darbelere karşı koruyarak daha uzun ömürlü ve verimli kullanım sağlar.

Özellikle kabin üstü ve dış ünite klima sistemlerinde kullanılan bu kapak, hem koruyucu hem de estetik bir çözüm sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-coolertech-coolman-klima-dugmesi',
    brandId: 'yedek-parca',
    name: 'COOLERTECH / Coolman Klima Düğmesi',
    images: ['/yedek-parcalar/coolertech-coolman-klima-dugmesi.png'],
    description: `Ticari araçlarda klima sisteminin verimli kullanılabilmesi için kontrol bileşenleri büyük önem taşır. COOLERTECH / Coolman Klima Düğmesi, klima sistemini kolay, hızlı ve hassas bir şekilde kontrol etmenizi sağlayarak sürüş konforunu artırır.

Ergonomik tasarımı ve dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan bu klima düğmesi, özellikle yoğun kullanımda güvenilir performans sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-coolertech-coolman-klima-kondansoru-petegi',
    brandId: 'yedek-parca',
    name: 'COOLERTECH / Coolman Klima Kondansörü (Peteği)',
    images: ['/yedek-parcalar/coolertech-coolman-klima-kondansoru-petegi.png'],
    description: `Ticari araç klima sistemlerinde soğutma performansının en önemli parçalarından biri **kondansör (klima peteği)**dir. COOLERTECH / Coolman Klima Kondansörü (Peteği), klima gazının soğutulmasını sağlayarak sistemin verimli ve güçlü çalışmasına yardımcı olur.

Yüksek ısı transfer kapasitesi ve dayanıklı yapısı sayesinde, yoğun kullanımda bile maksimum performans sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-safkar-klima-sogutucu-kapag',
    brandId: 'yedek-parca',
    name: 'Safkar Klima Soğutucu Kapağı',
    images: ['/yedek-parcalar/safkar-klima-sogutucu-kapagi.jpg'],
    description: `Ticari araç klima sistemlerinde dış ünitenin korunması ve hava akışının doğru yönlendirilmesi, sistem performansı açısından büyük önem taşır. Safkar Klima Soğutucu Kapağı, klima sistemini dış etkenlere karşı korurken aynı zamanda hava sirkülasyonunu optimize ederek daha verimli soğutma sağlar.

Dayanıklı yapısı ve profesyonel tasarımı sayesinde özellikle otobüs ve ticari araçlarda uzun ömürlü kullanım sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-safkar-klima-dugmesi',
    brandId: 'yedek-parca',
    name: 'Safkar Klima Düğmesi',
    images: ['/yedek-parcalar/safkar-klima-dugmesi.jpg'],
    description: `Ticari araç klima sistemlerinde kontrol bileşenleri, sistemin verimli ve doğru çalışması açısından büyük önem taşır. Safkar Klima Düğmesi, klima sistemini kolay, hızlı ve hassas şekilde yönetmenizi sağlayarak sürüş konforunu artırır.

Ergonomik tasarımı ve dayanıklı yapısı sayesinde yoğun kullanımda bile uzun ömürlü ve stabil performans sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-volt-klima-braketi',
    brandId: 'yedek-parca',
    name: 'Volkswagen Volt Klima Braketi',
    images: ['/yedek-parcalar/volkswagen-volt-klima-braketi.png'],
    description: `Ticari araçlarda klima sisteminin verimli çalışabilmesi için montaj ekipmanlarının doğru seçilmesi büyük önem taşır. Volkswagen Volt Klima Braketi, klima kompresörünün motor üzerine sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin performansını maksimum seviyeye çıkarır.

Dayanıklı yapısı ve yüksek uyumluluğu sayesinde, hem sonradan klima kurulumu hem de mevcut sistemlerin güçlendirilmesi için ideal bir çözümdür.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-peugeot-boxer-citroen-jumper-yeni-model-klima-braketi',
    brandId: 'yedek-parca',
    name: 'Peugeot Boxer / Citroën Jumper Yeni Model Klima Braketi',
    images: ['/yedek-parcalar/peugeot-boxer-citroen-jumper-yeni-model-klima-braketi.png'],
    description: `Ticari araçlarda klima sisteminin verimli çalışabilmesi için doğru montaj ekipmanlarının kullanılması büyük önem taşır. Peugeot Boxer / Citroën Jumper Yeni Model Klima Braketi, klima kompresörünün motor üzerine sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin maksimum performansla çalışmasına yardımcı olur.

Yeni kasa Boxer ve Jumper modeller için özel olarak tasarlanan bu klima braketi, yüksek dayanıklılığı ve birebir uyumu ile profesyonel klima kurulumlarının vazgeçilmez parçalarından biridir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-peugeot-boxer-citroen-jumper-kasnakl-2007-2017',
    brandId: 'yedek-parca',
    name: 'Peugeot Boxer / Citroën Jumper Kasnaklı (2007-2017)',
    images: ['/yedek-parcalar/peugeot-boxer-citroen-jumper-yeni-model-klima-braketi.png'],
    description: `Ticari araçlarda klima sisteminin verimli çalışabilmesi için montaj ekipmanlarının doğru seçilmesi büyük önem taşır. Peugeot Boxer / Citroën Jumper Kasnaklı (2007-2017), klima kompresörünün motor üzerine sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin maksimum performansla çalışmasına yardımcı olur.

Kasnaklı yapısı sayesinde kayış sistemi ile tam uyum sağlayan bu braket, 2007-2017 model Boxer ve Jumper araçlar için özel olarak tasarlanmıştır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-otokar-sultan-klima-fan',
    brandId: 'yedek-parca',
    name: 'Otokar Sultan Klima Fanı',
    images: ['/yedek-parcalar/otokar-sultan-klima-fani.png'],
    description: `Ticari ve yolcu taşımacılığında kullanılan araçlarda klima sisteminin verimli çalışması, konfor açısından büyük önem taşır. Otokar Sultan Klima Fanı, kabin içi hava sirkülasyonunu artırarak klima sisteminin daha hızlı ve etkili soğutma sağlamasına yardımcı olur.

Yüksek performanslı motor yapısı ve dayanıklı tasarımı sayesinde, yoğun kullanımda bile stabil ve güçlü hava akışı sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-isuzu-nova-klima-kondansoru',
    brandId: 'yedek-parca',
    name: 'Isuzu Nova Klima Kondansörü',
    images: ['/yedek-parcalar/isuzu-nova-klima-kondansoru.jpeg'],
    description: `Toplu taşıma ve ticari araçlarda klima sisteminin verimli çalışması, yolcu konforu açısından kritik öneme sahiptir. Isuzu Nova Klima Kondansörü (Peteği), klima gazının soğutulmasını sağlayarak sistemin daha güçlü ve stabil çalışmasına yardımcı olur.

Yüksek ısı transfer kapasitesi ve dayanıklı yapısı sayesinde, yoğun kullanımda bile maksimum soğutma performansı sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-isuzu-nova-klima-kompresoru-tm21',
    brandId: 'yedek-parca',
    name: 'Isuzu Nova Klima Kompresörü TM21',
    images: ['/yedek-parcalar/isuzu-nova-klima-kompresoru-tm21.jpg'],
    description: `Toplu taşıma ve ticari araçlarda klima sisteminin en kritik parçası olan kompresör, sistemin verimli çalışmasını sağlar. Isuzu Nova Klima Kompresörü TM21, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak güçlü ve stabil bir soğutma performansı sunar.

Yoğun kullanım koşullarına uygun olarak üretilen TM21 kompresör, dayanıklı yapısı ve yüksek performansı ile uzun ömürlü bir çözüm sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-safkar-s75-klima-kondansoru',
    brandId: 'yedek-parca',
    name: 'Safkar S75 Klima Kondansörü',
    images: ['/yedek-parcalar/safkar-s75-klima-kondansoru.jpg'],
    description: `Toplu taşıma ve ticari araçlarda klima sisteminin verimli çalışması, yolcu konforu açısından kritik öneme sahiptir. Safkar S75 Klima Kondansörü (Peteği), klima gazını etkili şekilde soğutarak sistemin güçlü ve stabil çalışmasını sağlar.

Yüksek ısı transfer kapasitesi ve dayanıklı yapısı sayesinde, yoğun kullanımda bile maksimum performans sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-albatros-klima-kondansoru-petegi',
    brandId: 'yedek-parca',
    name: 'Albatros Klima Kondansörü (Peteği)',
    images: ['/yedek-parcalar/albatros-klima-kondansoru-petegi.jpg'],
    description: `Ticari araç klima sistemlerinde soğutma performansını belirleyen en önemli bileşenlerden biri kondansördür. Albatros Klima Kondansörü (Peteği), klima gazını hızlı ve etkili şekilde soğutarak sistemin yüksek verimle çalışmasını sağlar.

Dayanıklı yapısı ve yüksek ısı transfer kapasitesi sayesinde, yoğun kullanım şartlarında bile maksimum performans sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-2-fanl-klima-kapag',
    brandId: 'yedek-parca',
    name: '2 Fanlı Klima Kapağı',
    images: ['/yedek-parcalar/2-fanli-klima-kapagi.png'],
    description: `Ticari araç klima sistemlerinde dış ünitenin korunması ve hava sirkülasyonunun doğru sağlanması, sistem performansı açısından kritik öneme sahiptir. 2 Fanlı Klima Kapağı, klima sistemini dış etkenlerden korurken aynı zamanda çift fan yapısı sayesinde daha güçlü hava akışı sağlayarak soğutma performansını artırır.

Özellikle kabin üstü klima sistemlerinde tercih edilen bu ürün, hem koruma hem de performans odaklı bir çözümdür.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-3-fanl-klima-kapag',
    brandId: 'yedek-parca',
    name: '3 Fanlı Klima Kapağı',
    images: ['/yedek-parcalar/3-fanli-klima-kapagi.webp'],
    description: `Ticari araç klima sistemlerinde yüksek performans elde etmek için hava sirkülasyonu ve dış koruma büyük önem taşır. 3 Fanlı Klima Kapağı, üçlü fan sistemi sayesinde maksimum hava akışı sağlayarak klima performansını artırırken, dış üniteyi de çevresel etkenlere karşı korur.

Yoğun kullanımda ve büyük hacimli araçlarda tercih edilen bu sistem, güçlü soğutma ve uzun ömürlü kullanım sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-webasto-klima-kapag',
    brandId: 'yedek-parca',
    name: 'Webasto Klima Kapağı',
    images: ['/yedek-parcalar/webasto-klima-dugmesi.jpg'],
    description: `Ticari araçlarda klima sistemlerinin dış etkenlere karşı korunması, sistem performansı ve uzun ömür açısından kritik öneme sahiptir. Webasto Klima Kapağı, klima ünitesini güneş, yağmur, toz ve darbelere karşı koruyarak güvenli ve verimli kullanım sağlar.

Özellikle kabin üstü klima sistemlerinde tercih edilen bu kapak, hem koruyucu hem de estetik bir çözüm sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-webasto-klima-filtresi',
    brandId: 'yedek-parca',
    name: 'Webasto Klima Filtresi',
    images: ['/yedek-parcalar/webasto-klima-filtresi.png'],
    description: `Ticari araç klima sistemlerinde hava kalitesi ve sistem verimliliği açısından filtreler büyük önem taşır. Webasto Klima Filtresi, klima sistemine giren havayı toz, polen ve zararlı partiküllerden arındırarak hem sağlıklı hem de verimli bir kullanım sağlar.

Düzenli filtre kullanımı, klima sisteminin performansını artırırken aynı zamanda diğer bileşenlerin ömrünü de uzatır.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-webasto-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Webasto Klima Kompresörü',
    images: ['/yedek-parcalar/webasto-klima-kompresoru.webp'],
    description: `Ticari araç klima sistemlerinin kalbi olan kompresör, sistemin verimli çalışmasını sağlayan en önemli bileşendir. Webasto Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak güçlü ve stabil bir soğutma performansı sunar.

Yoğun kullanım şartlarına uygun olarak tasarlanan bu kompresör, dayanıklı yapısı ve yüksek verimliliği ile uzun ömürlü bir çözüm sağlar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-ylkar-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Yılkar Klima Kompresörü',
    images: ['/yedek-parcalar/sprinter-klima-kompresoru-denso.jpg'],
    description: `Ticari araç klima sistemlerinin en kritik bileşeni olan kompresör, sistemin verimli ve güçlü çalışmasını sağlar. Yılkar Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak hızlı ve dengeli bir soğutma performansı sunar.

Yoğun kullanım koşullarına uygun olarak tasarlanan bu kompresör, dayanıklı yapısı ve uzun ömürlü performansı ile ticari araçlar için ideal bir çözümdür.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-citroen-jumper-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Citroën Jumper Klima Kompresörü',
    images: ['/yedek-parcalar/citroen-jumper-klima-kompresoru.png'],
    description: `Ticari araç klima sistemlerinin en önemli bileşeni olan kompresör, sistemin verimli ve güçlü çalışmasını sağlar. Citroën Jumper Klima Kompresörü, klima gazını yüksek basınçla dolaştırarak kabin içi sıcaklığın hızlı ve dengeli şekilde düşmesini sağlar.

Yoğun kullanım şartlarına uygun olarak üretilen bu kompresör, dayanıklı yapısı ve yüksek performansı ile uzun ömürlü bir çözüm sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-mercedes-yeni-kasa-sanden-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Mercedes Yeni Kasa Sanden Klima Kompresörü',
    images: ['/yedek-parcalar/mercedes-yeni-kasa-sanden-klima-kompresoru.png'],
    description: `Ticari araç klima sistemlerinde performansı belirleyen en önemli bileşen kompresördür. Mercedes Yeni Kasa Sanden Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını güçlü şekilde dolaştırarak kabin içi sıcaklığı hızlı ve dengeli şekilde düşürür.

Sanden markası, dünya genelinde OEM (orijinal ekipman) üreticilerine yüksek kaliteli kompresörler sunan güvenilir bir markadır ve birçok araçta tercih edilmektedir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-volkswagen-crafter-sanden-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Volkswagen Crafter Sanden Klima Kompresörü',
    images: ['/yedek-parcalar/volkswagen-crafter-sanden-klima-kompresoru.jpg'],
    description: `Ticari araç klima sistemlerinde performansın temelini kompresör oluşturur. Volkswagen Crafter Sanden Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak kabin içi sıcaklığı hızlı ve dengeli şekilde düşürür.

Sanden kompresörler, ağır hizmet tipi yapıları ve OEM kaliteleri ile özellikle Volkswagen Crafter gibi ticari araçlarda yaygın olarak tercih edilmektedir.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-ford-transit-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Ford Transit Klima Kompresörü',
    images: ['/yedek-parcalar/ford-transit-klima-kompresoru.png'],
    description: `Ticari araç klima sistemlerinde en önemli bileşenlerden biri olan kompresör, sistemin verimli çalışmasını sağlar. Ford Transit Klima Kompresörü, klima gazını yüksek basınçla dolaştırarak kabin içi sıcaklığın hızlı ve dengeli şekilde düşmesini sağlar.

Ford Transit modellerine özel olarak üretilen kompresörler, farklı motor ve kasa seçeneklerine uyum sağlayarak uzun ömürlü ve yüksek performanslı kullanım sunar.`,
    category: 'Yedek Parça'
  },
  {
    id: 'yp-fiat-ducato-6pk-klima-kompresoru',
    brandId: 'yedek-parca',
    name: 'Fiat Ducato 6PK Klima Kompresörü',
    images: ['/yedek-parcalar/fiat-ducato-6pk-klima-kompresoru.jpg'],
    description: `Ticari araç klima sistemlerinde en kritik bileşenlerden biri olan kompresör, sistemin verimli çalışmasını sağlar. Fiat Ducato 6PK Klima Kompresörü, 6 kanallı kasnak yapısı sayesinde kayış sistemi ile uyumlu çalışarak klima gazını yüksek basınçla dolaştırır ve güçlü bir soğutma performansı sunar.

Özellikle Ducato, Boxer ve Jumper gibi aynı platform araçlarda yaygın olarak kullanılan bu kompresör tipi, dayanıklılığı ve yüksek performansı ile öne çıkar.`,
    category: 'Yedek Parça'
  }
]
;
export const services = [
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
  { id: 'yilkar-bakim', brandId: 'yilkar', name: 'Yılkar Bakım', image: '/yilkar-bakim-himzeti.png', description: 'Yılkar kuru tip ısıtıcılar and araç klimaları için yetkili servis güvencesiyle periyodik bakım hizmeti.' },
  { id: 'yilkar-onarim', brandId: 'yilkar', name: 'Yılkar Onarım', image: '/yilkar-tamir-ve-onarim-hizmeti.png', description: 'Yılkar ısıtma and soğutma sistemlerindeki tüm teknik arızaların orijinal parça desteğiyle onarımı.' },
  { id: 'yilkar-yedek-parca', brandId: 'yilkar', name: 'Yılkar Yedek Parça', image: '/yilkar-yedek-parca-hizmeti.png', description: 'Yılkar sistemleriniz için %100 orijinal, garantili and onaylı yedek parça tedarik and montaj desteği.' },
  { id: 'webasto-bakim', brandId: 'webasto', name: 'Webasto Bakım', image: '/webasto-bakim-hizmeti.png', description: 'Dünya devi Webasto ısıtma and soğutma sistemleri için küresel standartlarda periyodik bakım and kontrol.' },
  { id: 'webasto-onarim', brandId: 'webasto', name: 'Webasto Onarım', image: '/webasto-tamir-ve-onarim-hizmeti.png', description: 'Webasto servis uzmanlığıyla, ısıtıcı and klimalarınızdaki arızaların profesyonel tamir and yazılım desteği.' },
  { id: 'webasto-yedek-parca', brandId: 'webasto', name: 'Webasto Yedek Parça', image: '/webasto-yedek-parca-hizmeti.png', description: 'Webasto cihazlarınızın ömrünü uzatan orijinal yedek parçalar and uzman montaj işçiliği.' },
  { id: 'coolman-bakim', brandId: 'coolman', name: 'Coolman Bakım', image: '/coolman-bakim-hizmeti.png', description: 'Coolman elektrikli park klimaları and gizli klima sistemleri için düzenli bakım and performans testi.' },
  { id: 'coolman-onarim', brandId: 'coolman', name: 'Coolman Onarım', image: '/coolman-tamir-ve-onarim-hizmeti.png', description: 'Coolman 12V/24V elektrikli park klimalarındaki kompresör and kart arızalarının hızlı and garantili onarımı.' },
  { id: 'coolman-yedek-parca', brandId: 'coolman', name: 'Coolman Yedek Parça', image: '/coolman-yedek-parca-hizmeti.png', description: 'Coolman elektrikli klima setleri için orijinal yedek parça desteği and geniş stok avantajı.' }
];

export const faqs = [
  { question: 'Klima bakımı ne sıklıkla yapılmalıdır?', answer: 'Ticari araçlarda klima bakımı yılda en az bir kez, tercihen yaz mevsimi öncesinde yapılmalıdır.' },
  { question: 'Orijinal yedek parça kullanıyor musunuz?', answer: 'Evet, yetkili servisi olduğumuz tüm markaların (Climart, Yılkar, Webasto, Coolman, Delphi) %100 orijinal yedek parçalarını kullanıyoruz.' },
  { question: 'Montaj süresi ne kadardır?', answer: 'Araç tipine ve takılacak sisteme göre değişiklik göstermekle birlikte ortalama 4-6 saat sürmektedir.' },
];
