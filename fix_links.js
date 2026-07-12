const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  content = content.replace(/target='_blank'/g, 'target="_blank"');
  
  let index = content.indexOf('target="_blank"');
  let newContent = '';
  let lastIndex = 0;
  
  while (index !== -1) {
    newContent += content.substring(lastIndex, index + 15); 
    
    let tagStart = content.lastIndexOf('<', index);
    let tagEnd = content.indexOf('>', index);
    
    if (tagStart !== -1 && tagEnd !== -1) {
      let fullTag = content.substring(tagStart, tagEnd + 1);
      if (!fullTag.includes('noopener')) {
        newContent += ' rel="noopener noreferrer"';
      }
    } else {
       newContent += ' rel="noopener noreferrer"';
    }
    
    lastIndex = index + 15;
    index = content.indexOf('target="_blank"', lastIndex);
  }
  newContent += content.substring(lastIndex);
  
  if (original !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
    changedFiles++;
  }
});

console.log('Total files updated:', changedFiles);
