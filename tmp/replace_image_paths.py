with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    data = f.read()

data = data.replace("images: ['/yedek-parca/", "images: ['/yedek-parcalar/")

with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(data)
