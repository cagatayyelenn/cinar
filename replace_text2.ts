import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', function(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace orange text with black
  content = content.replace(/text-orange-500/g, 'text-black');
  
  // Replace hover:text-[#ffc107] with hover:text-black
  content = content.replace(/hover:text-\[\#ffc107\]/g, 'hover:text-black');
  
  // Replace group-hover:text-[#ffc107] with group-hover:text-black
  content = content.replace(/group-hover:text-\[\#ffc107\]/g, 'group-hover:text-black');

  // Replace text-[#ffc107] with text-black ONLY if it's not a Star icon or in Hero
  // Actually, let's just do it manually for the few places in Home.tsx
  if (filePath.includes('Home.tsx')) {
    content = content.replace(/className="md:hidden flex items-center text-\[\#ffc107\]/g, 'className="md:hidden flex items-center text-black');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
