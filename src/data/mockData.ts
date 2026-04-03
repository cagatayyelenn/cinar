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
      { label: 'Climart Bakım', path: 'bakim' },
      { label: 'Climart Onarım', path: 'onarim' },
      { label: 'Climart Yedek Parça', path: 'yedek-parca' }
    ]
  },
  { id: 'yilkar', name: 'Yılkar', logo: '/logolar/yilkar-logo.png' },
  { id: 'webasto', name: 'Webasto', logo: '/logolar/webasto-logo1.png' },
  { id: 'coolman', name: 'Coolman', logo: '/logolar/coolman-logo1.png' },
  { id: 'delphi', name: 'Delphi', logo: '/logolar/delphi-logo1.png' },
];

export const products = [
  { 
    id: 'art1000', 
    brandId: 'climart', 
    name: 'ART1000', 
    images: ['/urunler/climart/ticari-arac-sogutuculari/art1000-art1000d/art1000-art1000d.png', '/urunler/climart/ticari-arac-sogutuculari/art1000-art1000d/art1000-art1000d-1.png'], 
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
    images: ['/urunler/climart/ticari-arac-sogutuculari/art1000-art1000d/art1000-art1000d.png', '/urunler/climart/ticari-arac-sogutuculari/art1000-art1000d/art1000-art1000d-1.png'], 
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
    images: ['/urunler/climart/ticari-arac-sogutuculari/art2000-art2000d/art2000-art2000d.png', '/urunler/climart/ticari-arac-sogutuculari/art2000-art2000d/art2000-art2000d-1.png', '/urunler/climart/ticari-arac-sogutuculari/art2000-art2000d/art2000-art2000d-2.png'], 
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
    images: ['/urunler/climart/ticari-arac-sogutuculari/art2000-art2000d/art2000-art2000d.png', '/urunler/climart/ticari-arac-sogutuculari/art2000-art2000d/art2000-art2000d-1.png', '/urunler/climart/ticari-arac-sogutuculari/art2000-art2000d/art2000-art2000d-2.png'], 
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
    images: ['/urunler/climart/ticari-arac-sogutuculari/art2200-art2200d/art2200-art2200d.png', '/urunler/climart/ticari-arac-sogutuculari/art2200-art2200d/art2200-art2200d-1.png'], 
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
    images: ['/urunler/climart/ticari-arac-sogutuculari/art2200-art2200d/art2200-art2200d.png', '/urunler/climart/ticari-arac-sogutuculari/art2200-art2200d/art2200-art2200d-1.png'], 
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
  { id: 'climart-tavan-tipi-klima', brandId: 'climart', name: 'Climart Tavan Tipi Klima 12V', images: ['https://picsum.photos/seed/klima1/400/300'], description: 'Yüksek soğutma kapasiteli ticari araç kliması.', category: 'Klima' },
  { id: 'climart-panelvan-klima', brandId: 'climart', name: 'Climart Panelvan Klima 24V', images: ['https://picsum.photos/seed/klima11/400/300'], description: 'Panelvan araçlar için özel tasarım, yüksek performanslı soğutma.', category: 'Klima' },
  { id: 'climart-tepe-klimasi', brandId: 'climart', name: 'Climart Tepe Kliması', images: ['https://picsum.photos/seed/klima12/400/300'], description: 'Kamyon ve tırlar için aerodinamik tepe kliması.', category: 'Klima' },
  { id: 'climart-yedek-parca-seti', brandId: 'climart', name: 'Climart Orijinal Filtre Seti', images: ['https://picsum.photos/seed/klima13/400/300'], description: 'Climart klimaları için orijinal polen ve hava filtre seti.', category: 'Yedek Parça' },
  { id: 'yilkar-panelvan-klima', brandId: 'yilkar', name: 'Yılkar Panelvan Klima YK-12', images: ['https://picsum.photos/seed/klima2/400/300'], description: 'Panelvan araçlar için özel tasarım, yüksek performanslı soğutma.', category: 'Klima' },
  { id: 'yilkar-tavan-klimasi', brandId: 'yilkar', name: 'Yılkar Tavan Tipi Klima YK-24', images: ['https://picsum.photos/seed/klima4/400/300'], description: 'Minibüs ve midibüsler için ideal tavan tipi klima sistemi.', category: 'Klima' },
  { id: 'yilkar-kuru-isitici', brandId: 'yilkar', name: 'Yılkar Kuru Tip Isıtıcı (Webasto)', images: ['https://picsum.photos/seed/isitici2/400/300'], description: 'Düşük yakıt tüketimi ile kabin içi hızlı ısıtma çözümü.', category: 'Isıtıcı' },
  { id: 'webasto-sulu-isitici', brandId: 'webasto', name: 'Webasto Sulu Isıtıcı', images: ['https://picsum.photos/seed/isitici1/400/300'], description: 'Motor bağımsız sulu ısıtıcı sistemi.', category: 'Isıtıcı' },
  { id: 'coolman-tepe-klimasi', brandId: 'coolman', name: 'Coolman Tepe Kliması', images: ['https://picsum.photos/seed/klima3/400/300'], description: 'Kamyon ve tırlar için tepe kliması.', category: 'Klima' },
  { id: 'delphi-kompresor', brandId: 'delphi', name: 'Delphi Klima Kompresörü', images: ['https://picsum.photos/seed/kompresor1/400/300'], description: 'Orijinal Delphi klima kompresörü.', category: 'Yedek Parça' },
];

export const services = [
  { id: 'climart-bakim', brandId: 'climart', name: 'Climart Bakım', image: 'https://picsum.photos/seed/servis1/600/400', description: 'Climart ticari araç soğutucu ve klimalarının uzun ömürlü olması için periyodik, detaylı bakım hizmeti.' },
  { id: 'climart-onarim', brandId: 'climart', name: 'Climart Onarım', image: 'https://picsum.photos/seed/serviscoolman/600/400', description: 'Klimalarınızda meydana gelen tüm arızaların uzman teknisyenlerimiz tarafından kalıcı ve hızlı onarımı.' },
  { id: 'climart-yedek-parca', brandId: 'climart', name: 'Climart Yedek Parça', image: 'https://picsum.photos/seed/servisdelphi/600/400', description: 'Cihazlarınızın tam performansını koruması için garantili, %100 orijinal ve onaylı Climart yedek parçaları.' },
  { id: 'yilkar-ticari-arac-klimalari', brandId: 'yilkar', name: 'Yılkar Ticari Araç Klimaları Bakım ve Montajı', image: 'https://picsum.photos/seed/servisyilkar/600/400', description: 'Yılkar marka ticari araç klimalarının profesyonel montajı, onarımı ve periyodik bakımı.' },
  { id: 'webasto-ticari-arac-klimalari', brandId: 'webasto', name: 'Webasto Isıtıcı ve Klima Bakımı', image: 'https://picsum.photos/seed/serviswebasto/600/400', description: 'Webasto sistemlerinizin kışa hazırlığı, arıza onarımı ve periyodik bakımı.' },
  { id: 'coolman-ticari-arac-klimalari', brandId: 'coolman', name: 'Coolman Tepe Kliması Montajı', image: 'https://picsum.photos/seed/serviscoolman/600/400', description: 'Coolman tepe klimalarının profesyonel montajı ve garantili bakım hizmetleri.' },
  { id: 'delphi-ticari-arac-klimalari', brandId: 'delphi', name: 'Delphi Klima Sistemleri Onarımı', image: 'https://picsum.photos/seed/servisdelphi/600/400', description: 'Delphi kompresör ve klima sistemlerinin arıza tespiti, onarımı ve bakımı.' },
  { id: 'yilkar-klima-gazi-dolumu', brandId: 'yilkar', name: 'Klima Gazı Dolumu', image: 'https://picsum.photos/seed/servis2/600/400', description: 'Orijinal gaz ile Yılkar klimalarınızın gaz dolumu.' },
  { id: 'webasto-isitici-tamiri', brandId: 'webasto', name: 'Isıtıcı Tamiri ve Bakımı', image: 'https://picsum.photos/seed/servis3/600/400', description: 'Webasto ısıtıcılarınızın kışa hazırlığı ve arıza onarımı.' },
];

export const faqs = [
  { question: 'Klima bakımı ne sıklıkla yapılmalıdır?', answer: 'Ticari araçlarda klima bakımı yılda en az bir kez, tercihen yaz mevsimi öncesinde yapılmalıdır.' },
  { question: 'Orijinal yedek parça kullanıyor musunuz?', answer: 'Evet, yetkili servisi olduğumuz tüm markaların (Climart, Yılkar, Webasto, Coolman, Delphi) %100 orijinal yedek parçalarını kullanıyoruz.' },
  { question: 'Montaj süresi ne kadardır?', answer: 'Araç tipine ve takılacak sisteme göre değişiklik göstermekle birlikte ortalama 4-6 saat sürmektedir.' },
];
