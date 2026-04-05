import "server-only";

import fs from "fs";
import path from "path";
import sizeOf from "image-size";
import type { GalleryImage } from "./types";

export function getGalleryImages(folderParts: string[]): GalleryImage[] {
  const galleryDir = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery",
    ...folderParts,
  );

  const files = fs
    .readdirSync(galleryDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.match(/\.(jpg|jpeg|png)$/i))
    .map((entry) => entry.name)
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    );

  return files.map((file) => {
    const filePath = path.join(galleryDir, file);
    const buffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(buffer);

    return {
      id: file,
      src: `/images/gallery/${folderParts.join("/")}/${file}`,
      width: dimensions.width || 800,
      height: dimensions.height || 600,
    };
  });
}
