import re

file_path = "src/data/mockData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Webasto menuProducts
old_menu = """    menuProducts: [
      { label: 'Araç Isıtma Sistemleri', path: 'isitma-sistemleri' },
      { label: 'Araç Soğutma Sistemleri', path: 'sogutma-sistemleri' },
      { label: 'Elektrikli Klima', path: 'elektrikli-klima' }
    ],"""
new_menu = """    menuProducts: [
      { label: 'Araç Isıtma Sistemleri', path: 'arac-isitma-sistemleri' },
      { label: 'Split Klimalar', path: 'split-klimalar' },
      { label: 'İlave Split Klimalar', path: 'ilave-split-klimalar' },
      { label: 'İlave Tavan Kliması', path: 'ilave-tavan-klimasi' },
      { label: 'Kabin Kliması', path: 'kabin-klimasi' },
      { label: 'Frigorifik Soğutucu', path: 'frigorifik-sogutucu' },
      { label: 'Elektrikli Klima', path: 'elektrikli-klima' }
    ],"""
content = content.replace(old_menu, new_menu)

updates = [
  ('Webasto Air Top 2000 STC Hava Isıtıcı', 'Araç Isıtma Sistemleri'),
  ('Webasto Air Top Evo 40 Hava Isıtıcı', 'Araç Isıtma Sistemleri'),
  ('Webasto Air Top Evo 55 Hava Isıtıcı', 'Araç Isıtma Sistemleri'),
  ('Webasto Thermo Pro 90 Sulu Isıtıcı', 'Araç Isıtma Sistemleri'),

  ('Webasto Efes 2 Riga Split Klima', 'Split Klimalar'),
  ('Webasto Efes 3 Riga Split Klima', 'Split Klimalar'),
  ('Webasto Madrid Tavan Kliması', 'Split Klimalar'),
  ('Myra Newport Split Klima', 'Split Klimalar'),

  ('Webasto Quebec TR / Montreal TR Entegre Klima', 'İlave Split Klimalar'),
  ('Webasto London TR / Vancouver TR Entegre Klima', 'İlave Split Klimalar'),

  ('Cool Top 140 eRT-C Tavan Kliması', 'İlave Tavan Kliması'),

  ('Webasto Rimini Tavan Kliması', 'Kabin Kliması'),

  ('Webasto Frigo 20 RT-D Soğuk Depolama', 'Frigorifik Soğutucu'),
  ('Webasto Frigo 40 RT-D', 'Frigorifik Soğutucu'),
  ('Webasto Frigo 45 RT-D', 'Frigorifik Soğutucu'),

  ('Webasto Elektrikli Klima Cool Top RTE 23', 'Elektrikli Klima')
]

for name, cat in updates:
    pattern = r"(name:\s*['\"]" + re.escape(name) + r"['\"][\s\S]*?category:\s*['\"])[^'\"]+(['\"])"
    content = re.sub(pattern, r"\g<1>" + cat + r"\g<2>", content, count=1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated successfully")
