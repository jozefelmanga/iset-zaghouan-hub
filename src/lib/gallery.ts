import fs from "fs";
import path from "path";

export function getGalleryImages(folderRelativePath: string, excludeKeywords: string[] = []): string[] {
  // folderRelativePath e.g. "clubs/securinets" or "resto"
  const directoryPath = path.join(process.cwd(), `public/images/${folderRelativePath}`);
  let images: string[] = [];

  try {
    const files = fs.readdirSync(directoryPath);
    images = files
      .filter((file) => file.match(/\.(webp|png|jpg|jpeg)$/i))
      .filter((file) => {
        // Exclude specific files by keywords
        const lowerFile = file.toLowerCase();
        return !excludeKeywords.some((keyword) => lowerFile.includes(keyword.toLowerCase()));
      })
      .map((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        return { file, mtime: stats.mtime.getTime() };
      })
      .sort((a, b) => b.mtime - a.mtime)
      .map(({ file }) => `/images/${folderRelativePath}/${file}`);
  } catch (error) {
    console.error(`Error reading directory for ${folderRelativePath} images`, error);
  }

  return images;
}

