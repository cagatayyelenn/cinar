import re

file_path = "src/data/mockData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# I will replace the rows section of technicalTable for each Dizel product
def replace_stats(match):
    full_str = match.group(0)
    # We want to replace these exact substrings within full_str:
    # ['Kalorifik Değer', 'Minimum 1500 - Maximum 5000'] -> ['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],\n        ['Kalorifik Değer', '1500', '5000']
    
    # Generic replacement:
    full_str = re.sub(r"\['Kalorifik Değer',.*?\]", lambda m: """['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1500', '5000']""" if "5000" in m.group(0) else ("""['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1500', '5500']""" if "5500" in m.group(0) else """['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],
        ['Kalorifik Değer', '1000', '2500']""") , full_str)
        
    full_str = re.sub(r"\['Çalışma Sırasında Yakıt Tüketimi \(Litre / Saat\)', '0,12 - 0,25'\]", r"['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,25']", full_str)
    full_str = re.sub(r"\['Çalışma Sırasında Yakıt Tüketimi \(Litre / Saat\)', '0,12 - 0,35'\]", r"['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,35']", full_str)
    
    full_str = re.sub(r"\['Çalışma Sırasında Elektrik Tüketimi \(W/S\)', '4W - 20W'\]", r"['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W', '20W']", full_str)

    return full_str

content = re.sub(r"technicalTable:\s*\{\s*headers:.*?\}\s*\}\s*\},", replace_stats, content, flags=re.DOTALL)
# actually technicalTable might not have `},` right after it for the last item.
# let's just do targeted replace for the specific rows.

content = content.replace("['Kalorifik Değer', 'Minimum 1500 - Maximum 5000'],", "['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],\n        ['Kalorifik Değer', '1500', '5000'],")
content = content.replace("['Kalorifik Değer', 'Minimum 1500 - Maximum 5500'],", "['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],\n        ['Kalorifik Değer', '1500', '5500'],")
content = content.replace("['Kalorifik Değer', 'Minimum 1000 - Maximum 2500'],", "['Teknik Değerler', 'Minimum Sıcaklık', 'Maximum Sıcaklık'],\n        ['Kalorifik Değer', '1000', '2500'],")

content = content.replace("['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12 - 0,25'],", "['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,25'],")
content = content.replace("['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12 - 0,35'],", "['Çalışma Sırasında Yakıt Tüketimi (Litre / Saat)', '0,12', '0,35'],")

content = content.replace("['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W - 20W'],", "['Çalışma Sırasında Elektrik Tüketimi (W/S)', '4W', '20W'],")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated mockData.ts with new 3-col format")
