import fs from "fs";
import path from "path";

export function getClubGalleryImages(clubId: string, excludeKeywords: string[] = []): string[] {
  const directoryPath = path.join(process.cwd(), `public/images/clubs/${clubId}`);
  let images: string[] = [];

  try {
    const files = fs.readdirSync(directoryPath);
    images = files
      .filter((file) => file.match(/\.(webp|png|jpg|jpeg)$/i))
      .filter((file) => {
        // Exclude banners and logos by keywords
        const lowerFile = file.toLowerCase();
        return !excludeKeywords.some((keyword) => lowerFile.includes(keyword.toLowerCase()));
      })
      .map((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        return { file, mtime: stats.mtime.getTime() };
      })
      .sort((a, b) => b.mtime - a.mtime)
      .map(({ file }) => `/images/clubs/${clubId}/${file}`);
  } catch (error) {
    console.error(`Error reading directory for ${clubId} images`, error);
  }

  return images;
}
