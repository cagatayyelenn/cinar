import fs from 'fs';

const filePath = './src/data/mockData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update menuProducts for webasto
const webastoMenuProductsRegex = /brandId:\s*'webasto'[\s\S]*?menuProducts:\s*\[([\s\S]*?)\]/;
// Wait, menuProducts is inside the brands array.
const oldMenuProducts = `    menuProducts: [
      { label: 'Araç Isıtma Sistemleri', path: 'isitma-sistemleri' },
      { label: 'Araç Soğutma Sistemleri', path: 'sogutma-sistemleri' },
      { label: 'Elektrikli Klima', path: 'elektrikli-klima' }
    ],`;
const newMenuProducts = `    menuProducts: [
      { label: 'Araç Isıtma Sistemleri', path: 'arac-isitma-sistemleri' },
      { label: 'Split Klimalar', path: 'split-klimalar' },
      { label: 'İlave Split Klimalar', path: 'ilave-split-klimalar' },
      { label: 'İlave Tavan Kliması', path: 'ilave-tavan-klimasi' },
      { label: 'Kabin Kliması', path: 'kabin-klimasi' },
      { label: 'Frigorifik Soğutucu', path: 'frigorifik-sogutucu' },
      { label: 'Elektrikli Klima', path: 'elektrikli-klima' }
    ],`;
content = content.replace(oldMenuProducts, newMenuProducts);

// 2. Update product categories
const updates = [
  { name: 'Webasto Air Top 2000 STC Hava Isıtıcı', cat: 'Araç Isıtma Sistemleri' },
  { name: 'Webasto Air Top Evo 40 Hava Isıtıcı', cat: 'Araç Isıtma Sistemleri' },
  { name: 'Webasto Air Top Evo 55 Hava Isıtıcı', cat: 'Araç Isıtma Sistemleri' },
  { name: 'Webasto Thermo Pro 90 Sulu Isıtıcı', cat: 'Araç Isıtma Sistemleri' },

  { name: 'Webasto Efes 2 Riga Split Klima', cat: 'Split Klimalar' },
  { name: 'Webasto Efes 3 Riga Split Klima', cat: 'Split Klimalar' },
  { name: 'Webasto Madrid Tavan Kliması', cat: 'Split Klimalar' },
  { name: 'Myra Newport Split Klima', cat: 'Split Klimalar' },

  { name: 'Webasto Quebec TR / Montreal TR Entegre Klima', cat: 'İlave Split Klimalar' },
  { name: 'Webasto London TR / Vancouver TR Entegre Klima', cat: 'İlave Split Klimalar' },

  { name: 'Cool Top 140 eRT-C Tavan Kliması', cat: 'İlave Tavan Kliması' }, // from user's list, putting it here.

  { name: 'Webasto Rimini Tavan Kliması', cat: 'Kabin Kliması' },

  { name: 'Webasto Frigo 20 RT-D Soğuk Depolama', cat: 'Frigorifik Soğutucu' },
  { name: 'Webasto Frigo 40 RT-D', cat: 'Frigorifik Soğutucu' },
  { name: 'Webasto Frigo 45 RT-D', cat: 'Frigorifik Soğutucu' },

  { name: 'Webasto Elektrikli Klima Cool Top RTE 23', cat: 'Elektrikli Klima' }
];

updates.forEach(u => {
  // Regex to find: name: '...', \n optionally images... \n description: '...', \n category: 'OLD',
  // Since order of properties varies or we don't know it exactly, we can use a focused regex block.
  const regex = new RegExp(\`(name:\\s*['"]\${u.name}['"][\\s\\S]*?category:\\s*['"])[^'"]+(['"])\`);
  content = content.replace(regex, \`$1\${u.cat}$2\`);
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Update finished.');
