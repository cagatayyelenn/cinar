import re

file_path = "src/data/mockData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update menuProducts
# It looks like:
#     menuProducts: [
#       { label: 'Elektrikli Kabin Kliması', path: 'elektrikli-kabin-klimasi' }
#     ],
old_menu = """    menuProducts: [
      { label: 'Elektrikli Kabin Kliması', path: 'elektrikli-kabin-klimasi' }
    ],"""
new_menu = """    menuProducts: [
      { label: 'Elektrikli Kabin Kliması', path: 'elektrikli-kabin-klimasi' },
      { label: 'Dizel Isıtıcılar', path: 'dizel-isiticilar' }
    ],"""

if old_menu in content:
    content = content.replace(old_menu, new_menu)
else:
    print("Warning: old menu not found exactly as expected. I'll dynamically insert.")
    pattern = r"(brandId\s*:\s*'coolman'[\s\S]*?menuProducts\s*:\s*\[[\s\S]*?)(\n\s*\])"
    content = re.sub(pattern, r"\g<1>,\n      { label: 'Dizel Isıtıcılar', path: 'dizel-isiticilar' }\g<2>", content)

# 2. Add products
new_products = """
  { 
    id: 'coolman-s44-portatif-dizel-isitici', 
    brandId: 'coolman', 
    name: 'S44 Portatif Dizel Isıtıcı (5kW)', 
    images: [
      '/coolman/s44-portatif-dizel-isitici.webp',
      '/coolman/s44-portatif-dizel-isitici-1.webp'
    ], 
    description: `Coolman Webasto Tipi S44 Portatif Dizel Isıtıcı\n\nSTANDART PAKETLERİMİZE EK OLARAK;\n\n.7.5 METRE UZUNLUĞUNDA SİGORTALI ELEKTRİK TESİSATI\n.2 METRE UZUNLUĞUNDA AKORDEON BORU\nBU SEZONA ÖZEL HEDİYEMİZDİR. KAMPANYAMIZI KAÇIRMAYIN\n\nS44 PORTATİF DİZEL ISITICI ÜRÜN ÖZELLİKLERİ\n\n.Hem 220 Volt hem de 12V – 24V ile çalışabilme özelliği\n.7.5 m elektrik tesisatı\n.Türkçe sesli uyarı sistemi\n.Detaylı LCD ekran\n.Uzaktan kumanda\n.5 KW güç\n.Koku yapmaz, ısıya ve darbeye dayanıklı çelik dış gövde\n.Kapalı sistem elektronik devre kartı\n.5 litre dahili depo\n.5 yıl garantili 606I alaşım alüminyum gövde\n.Hava akış sensörü\n.Hava akış sensörü ile sıfır tolerans ortam termostatı\n.Otomatik ve manuel kullanma seçeneği\n.Boyutları 260x 250 x 380 cm (Yükseklik: 260 cm, Genişlik: 250 cm ve Derinlik: 380 cm)`, 
    category: 'Dizel Isıtıcılar',
    technicalTable: {
      headers: ['Teknik Özellikler', 'Detay'],
      rows: [
        ['Çalışma Gerilimi', '220V - 12V - 24V'],
        ['Isı Yönetimi', 'Kuru Tip Hava Isıtıcısı'],
        ['Yakıt Tipi', 'Dizel'],
        ['Kalorifik Değer', 'Minimum 1500 - Maximum 5000'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12 - 0,25'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W - 20W'],
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
    description: `Coolman Webasto Tipi Pro Dizel Isıtıcı 5kW (12-24V)\n\nCoolman Webasto Tipi Pro Dizel Isıtıcı 5 kW (12-24V), güçlü performansı ve dayanıklı yapısıyla zorlu koşullarda uzun süreli ve sorunsuz kullanım sunmak üzere tasarlanmıştır. PRO serisi 5 kW araç ısıtıcıları, paslanmaz çelik ve alüminyum alaşımlı bileşenlerden üretilerek çevresel etkilere karşı yüksek direnç sağlar ve uzun ömürlü bir yapı sunar.\n\nYüksek kaliteli ısıtma elemanları sayesinde güçlü bir ısıtma performansı sunarken, enerji tüketimini optimize ederek araç aküsünün korunmasına yardımcı olur. Bu sayede hem verimli hem de ekonomik bir ısıtma çözümü sağlar. Dayanıklı iç yapısı, yoğun ve sık kullanıma uygun olacak şekilde geliştirilmiş olup, uzun yıllar güvenle kullanılabilir.\n\nKolay montaj özelliği sayesinde araçlara hızlı ve pratik şekilde uygulanabilir. Kullanıcı dostu kontrol sistemi, ısıtma ayarlarının rahatça yapılmasına olanak tanır. Akıllı kontrol paneli sayesinde sıcaklık ayarları hassas biçimde yönetilebilir, böylece araç içi konfor en ideal seviyede tutulur.\n\nAkıllı kontrol panelleri, enerji verimliliğini artırarak ısıtıcının gereksiz çalışmasını önler ve akü üzerindeki yükü minimize eder. Kullanıcılar, farklı zaman dilimlerine göre ısıtma ayarları yaparak araca binmeden önce ideal sıcaklık seviyesini belirleyebilir. Bu özellik, özellikle soğuk hava koşullarında büyük konfor avantajı sağlar.\n\n5 kW PRO Dizel Isıtıcı, yüksek ısıtma kapasitesi sayesinde araç içini kısa sürede ısıtarak sıcak ve konforlu bir ortam oluşturur. Güçlü motor yapısı hızlı ısınma sağlarken, düşük enerji tüketimi ile uzun süreli kullanımlarda bile aküyü zorlamaz.\n\nKaliteli malzeme yapısı ve sağlam tasarımı sayesinde zorlu kış koşullarında dahi güvenilir performans sunan bu ısıtıcı, enerji verimliliği, kullanım kolaylığı ve yüksek performansı bir arada sunarak araç sahipleri için ideal bir ısıtma çözümüdür.\n\nKutu İçeriği:\nLCD Kontrol Paneli\nKrom Egzoz Borusu\nSusturucu\nElektrik Tesisatı (8 metre makaronlu kablo)\nHava Filtresi\nHava Menfezi\nYakıt Filtresi\nYakıt Pompası\nYakıt Hortumu (5 metre)\nDepo Yakıt Aparatı\nMontaj Sacı\nKelepçeler\nPaslanmaz Bağlantı Ekipmanları\nTüm montaj elemanları kutu içeriğine dahil olup, kullanıcı dostu yapısıyla kolay kurulum imkânı sunar.`, 
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
        ['Kalorifik Değer', 'Minimum 1500 - Maximum 5500'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12 - 0,35'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W - 20W'],
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
    description: `Vizyon Power Dizel Isıtıcı 5 kW (12-24V)\n\nCoolman güvencesiyle sunulan Vizyon Power Dizel Isıtıcı, yüksek performanslı ısıtma ihtiyaçlarına ideal bir çözüm sunar. Güçlü 5 kW kapasitesi ve sağlam dış yapısı sayesinde geniş araç ve mekanlarda konforlu bir ortam yaratır. Türkçe sesli uyarı sistemi, LCD ekran ve uzaktan kumanda ile kullanım kolaylığı sağlar. Coolman’ın kalite standartlarına uygun olarak geliştirilmiş bu cihaz, 3 yıl garantili alüminyum gövdesi ve dayanıklı bileşenleriyle uzun ömürlü bir kullanım sunar.\n\nKutu İçeriği:\nDetaylı LCD Kontrol Paneli\nHava Menfezi\nKelepçeler\nHava Aktarma Boruları\nYakıt Pompası\nMontaj Saçı\nElektrik Tesisatı (5/9 metre seçeneği)\nDepo Yakıt Aparatı\nYakıt Hortumu\nEgzoz Borusu\nPaslanmaz Bağlantı Ekipmanları`, 
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
        ['Kalorifik Değer', 'Minimum 1500 - Maximum 5000'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12 - 0,25'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W - 20W'],
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
    description: `Thermon 2 Digital Dizel Isıtıcı 2.8 kW (12-24V)\n\nThermon 2 Digital Dizel Isıtıcı, soğuk hava koşullarında araç içi ve dış mekân ısınma ihtiyaçlarınıza güçlü ve pratik çözümler sunar. Kullanıcı dostu tasarımı ve gelişmiş özellikleriyle konforlu bir deneyim sağlar.\n\nÖne Çıkan Özellikler:\nJoystick Düğmeli LCD Ekran: Pratik joystick kontrolüyle sıcaklık ayarlarınızı kolayca yapın.\nZaman Ayarı: Günlük ve haftalık çalışma programları ile esnek kullanım planlaması.\n3 Farklı Çalışma Modu:\nUyku Modu: 22-30°C arasında otomatik olarak çalışır/durur.\nManuel Mod: 7 kademeli sıcaklık kontrolü.\nOtomatik Mod: Ortam sıcaklığına göre otomatik ayarlama yapar.\nJapon Marka Ateşleme Bujisi: Uzun ömürlü ve yüksek kaliteli ateşleme bujisi.\nKoku Yapmaz: Darbeye ve ısıya dayanıklı PC dış gövde ile kötü kokuları önler.\n3 Yıl Garantili 6061 Alüminyum Gövde: Hafif ve dayanıklı yapısıyla uzun süreli kullanım sağlar.\nKapalı Sistem Elektronik Devre Kartı: Toz ve neme karşı koruma sağlayarak performansı artırır.\nHava Akış Sensörü: Sıcaklığı hassas şekilde algılayan termostat ile mükemmel kontrol sağlar.\nYüksek İrtifa Kiti: 4500 metreye kadar performans kaybı yaşamadan çalışır.\nBirinci Sınıf Montaj Ekipmanları: Kolay montaj için gereken tüm ekipmanlar kutu içeriğinde mevcuttur.\n\nThermon 2 ile aracınızda veya kamp alanında etkili ısınma deneyimini yaşayın! Soğuk hava koşullarına karşı tasarlanmış bu portatif ısıtıcı, her türlü ihtiyacınıza uygun çözümler sunar.`, 
    category: 'Dizel Isıtıcılar',
    technicalTable: {
      headers: ['Teknik Özellikler', 'Detay'],
      rows: [
        ['Çalışma Gerilimi', '12V - 24V'],
        ['Isı Yönetimi', 'Kuru Tip Hava Isıtıcısı'],
        ['Yakıt Tipi', 'Dizel'],
        ['Kalorifik Değer', 'Minimum 1000 - Maximum 2500'],
        ['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12 - 0,25'],
        ['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W - 20W'],
        ['Kademe Sayısı', '10 Kademeli'],
        ['Başlangıçta Güç Tüketimi', '60W'],
        ['Boyutlar', '316 x 115 x 110 cm'],
        ['Ağırlık', '4,6 Kg']
      ]
    }
  },\n"""

# Insert right before export const services
target_line = "export const services = ["
if target_line in content:
    content = content.replace(target_line, new_products + "]\n;\n" + target_line)
    # wait... we want to append BEFORE the `];` that precedes `export const services = [`
    # Let me clean this up safely.
    # We will look for:
    #   }
    # ];
    # 
    # export const services = [
    pattern_to_replace = r"(\}[\s]*\];[\s]*export const services = \[)"
    # oops, I need to match the end of products array
    pass

import re
# Simpler way: find the exact end of products array.
# The previous products array ends with:
#   }
# ];
# export const services = [
# So we can just replace:
# ];
# export const services = [
# with:
#  }, (new products without leading , depending on what we append)

pattern2 = r"(\}[\s\n]*)\];([\s\n]*export const services = \[)"
content = re.sub(pattern2, r"\g<1>," + new_products + r"];\g<2>", content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Add Coolman dizel products successfully.")
