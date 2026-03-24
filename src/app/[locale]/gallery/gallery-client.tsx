"use client";

import React, { useMemo, useEffect, useState } from "react";
import Image from "next/image";

type ImageItem = {
  id: string;
  src: string;
  width: number;
  height: number;
};

// Simple masonry card component
const MasonryCard = ({ data }: { data: ImageItem }) => {
  return (
    <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-md">
      <Image
        src={data.src}
        alt={data.id}
        width={data.width}
        height={data.height}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        quality={75}
      />
    </div>
  );
};

export default function GalleryClient({
  initialImages,
}: {
  initialImages: ImageItem[];
}) {
  const items = useMemo(() => initialImages, [initialImages]);

  // Handle hydration mismatch with browser window
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
      {items.map((item) => (
        <MasonryCard key={item.id} data={item} />
      ))}
    </div>
  );
}
