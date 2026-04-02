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

  // Replace dark slate colors with black
  content = content.replace(/text-slate-500/g, 'text-black');
  content = content.replace(/text-slate-600/g, 'text-black');
  content = content.replace(/text-slate-700/g, 'text-black');
  content = content.replace(/text-slate-800/g, 'text-black');
  content = content.replace(/text-slate-900/g, 'text-black');
  
  // Replace #0f2851 text with black
  content = content.replace(/text-\[\#0f2851\]/g, 'text-black');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
