import json
import re

file_path = "src/data/mockData.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# I will find all brandId: 'coolman' and print their names and descriptions/features
lines = content.split('\n')
in_coolman = False
coolman_products = []
current_prod = {}

for i, line in enumerate(lines):
    if "brandId: 'coolman'," in line:
        # find the name
        name_match = re.search(r"name:\s*'([^']+)'", lines[i+1])
        if name_match:
            print("---", name_match.group(1), "---")
        # print some lines after to see description
        print(lines[i+3][:100])
        print(lines[i+4][:100])
