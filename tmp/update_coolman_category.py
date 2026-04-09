import re

file_path = "src/data/mockData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update menuProducts
content = content.replace("label: 'Coolman Klimalar', path: 'elektrikli-klimalar'", "label: 'Elektrikli Kabin Kliması', path: 'elektrikli-kabin-klimasi'")

# 2. Update category globally
content = content.replace("category: 'Coolman Klimalar'", "category: 'Elektrikli Kabin Kliması'")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Coolman category updated successfully.")
