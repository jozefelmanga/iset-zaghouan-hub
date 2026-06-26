import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function optimizeImages() {
  console.log(`Scanning for images in ${IMAGES_DIR}...`);
  try {
    const files = await getFiles(IMAGES_DIR);
    let optimizedCount = 0;
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      
      // Process jpg/png files to webp
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        const stats = await fs.stat(file);
        const originalSizeKB = (stats.size / 1024).toFixed(2);
        
        const webpFile = file.substring(0, file.lastIndexOf(ext)) + '.webp';
        
        console.log(`Processing: ${path.basename(file)} (${originalSizeKB} KB) -> .webp`);
        
        try {
          const imageBuffer = await fs.readFile(file);
          await sharp(imageBuffer)
            .resize({ width: 1920, withoutEnlargement: true }) // Prevent enlarging small images
            .webp({ quality: 80, effort: 6 }) // High compression effort
            .toFile(webpFile);
            
          // Delete original file
          await fs.unlink(file);
          optimizedCount++;
          
          const newStats = await fs.stat(webpFile);
          const newSizeKB = (newStats.size / 1024).toFixed(2);
          console.log(`  Done: Reduced to ${newSizeKB} KB`);
        } catch (err) {
          console.error(`  Error processing ${file}:`, err.message);
        }
      } 
      // Also optimize existing webp files if they are large
      else if (ext === '.webp') {
        const stats = await fs.stat(file);
        if (stats.size > 200 * 1024) { // Only re-optimize if it's larger than 200KB
          const tempFile = file + '.tmp';
          try {
             const imageBuffer = await fs.readFile(file);
             await sharp(imageBuffer)
              .resize({ width: 1920, withoutEnlargement: true })
              .webp({ quality: 80, effort: 6 })
              .toFile(tempFile);
             
             const newStats = await fs.stat(tempFile);
             // Keep it only if we actually reduced the size
             if (newStats.size < stats.size) {
                 await fs.unlink(file);
                 await fs.rename(tempFile, file);
                 console.log(`Optimized existing WebP: ${path.basename(file)} (${(stats.size/1024).toFixed(2)} KB -> ${(newStats.size/1024).toFixed(2)} KB)`);
                 optimizedCount++;
             } else {
                 await fs.unlink(tempFile);
             }
          } catch(err) {
             console.error(`  Error optimizing ${file}:`, err.message);
          }
        }
      }
    }
    
    console.log(`\nOptimization complete! Processed ${optimizedCount} images.`);
    if (optimizedCount > 0) {
      console.log(`IMPORTANT: Since the script converted images to .webp, remember to update the image extensions in your code!`);
    }
  } catch (err) {
    console.error('Error scanning directory:', err);
  }
}

optimizeImages();
