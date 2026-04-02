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

  // Replace blue text with black
  content = content.replace(/text-blue-900/g, 'text-black');
  content = content.replace(/text-blue-800/g, 'text-black');
  content = content.replace(/text-blue-700/g, 'text-black');
  content = content.replace(/text-blue-600/g, 'text-black');
  
  // Replace green text with black
  content = content.replace(/text-green-700/g, 'text-black');
  
  // Replace orange text with black
  content = content.replace(/text-orange-700/g, 'text-black');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
