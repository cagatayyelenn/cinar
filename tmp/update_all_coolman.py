import re

file_path = "src/data/mockData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def inject_table_for_old_products(content):
    # WS2000
    content = content.replace(
        "features: ['Soğutma: 3800W', 'Scroll Kompresör', 'Hava Debisi: 540 m³/h']",
        "features: ['Soğutma: 3800W', 'Scroll Kompresör', 'Hava Debisi: 540 m³/h'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '3800W'], ['Kompresör Tipi', 'Scroll Kompresör'], ['Hava Debisi', '540 m³/h']] }"
    )
    # MD2000
    content = content.replace(
        "features: ['Soğutma: 2300W', 'Hafif Tasarım', 'Scroll Kompresör']",
        "features: ['Soğutma: 2300W', 'Hafif Tasarım', 'Scroll Kompresör'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2300W'], ['Tasarım', 'Hafif Tasarım'], ['Kompresör Tipi', 'Scroll Kompresör']] }"
    )
    # Yatay 405
    content = content.replace(
        "features: ['Kondanser: 340x400x25 mm', 'Evaporatör: 350x400x150 mm', 'Soğutma: 2400W']",
        "features: ['Kondanser: 340x400x25 mm', 'Evaporatör: 350x400x150 mm', 'Soğutma: 2400W'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Kondanser Boyutları', '340x400x25 mm'], ['Evaporatör Boyutları', '350x400x150 mm'], ['Soğutma Kapasitesi', '2400W']] }"
    )
    # Haier
    content = content.replace(
        "features: ['Soğutma: 2800W', 'Bakır Evaporatör', 'Fırçasız Fan']",
        "features: ['Soğutma: 2800W', 'Bakır Evaporatör', 'Fırçasız Fan'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2800W'], ['Evaporatör Tipi', 'Bakır Evaporatör'], ['Fan Tipi', 'Fırçasız Fan']] }"
    )
    # Gizli Klima 12V/24V
    content = content.replace(
        "features: ['Soğutma: 2400W Max', 'Split Sistem', 'Akü Koruması']",
        "features: ['Soğutma: 2400W Max', 'Split Sistem', 'Akü Koruması'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2400W Max'], ['Sistem Tipi', 'Split Sistem'], ['Koruma', 'Akü Koruması']] }"
    )
    # D-10000 Plus
    content = content.replace(
        "features: ['Soğutma: 3100W', 'Çift Voltaj: 12V/24V', 'Alüminyum Evaporatör']",
        "features: ['Soğutma: 3100W', 'Çift Voltaj: 12V/24V', 'Alüminyum Evaporatör'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '3100W'], ['Çalışma Gerilimi', '12V / 24V Çift Voltaj'], ['Evaporatör Tipi', 'Alüminyum Evaporatör']] }"
    )
    # CT-1500 MD-X
    content = content.replace(
        "features: ['Soğutma: 2600W', 'Bakır Evaporatör', 'Kompakt Tasarım']",
        "features: ['Soğutma: 2600W', 'Bakır Evaporatör', 'Kompakt Tasarım'],\n    technicalTable: { headers: ['Teknik Özellikler', 'Detay'], rows: [['Soğutma Kapasitesi', '2600W'], ['Evaporatör Tipi', 'Bakır Evaporatör'], ['Tasarım', 'Kompakt Tasarım']] }"
    )
    # CT1500 Split
    # The CT1500 Split doesn't have features explicitly listed in my previous grep. Wait...
    return content

content = inject_table_for_old_products(content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated older coolman products with technical tables!")
