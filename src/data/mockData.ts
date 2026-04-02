const makeLogo = (text: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" fill="#0f2851" letter-spacing="-1">${text}</text></svg>`)}`;

export const brands = [
  { 
    id: 'climart', 
    name: 'Climart', 
    logo: '/logolar/climart-logo1.png',
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
  { id: 'climart-ticari-arac-klimalari', brandId: 'climart', name: 'Ticari Araç Klimaları Bakım ve Montajı', image: 'https://picsum.photos/seed/servis1/600/400', description: 'Climart ticari araç klimalarının profesyonel montajı ve periyodik bakımı.' },
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
