"use client";

import { useEffect, useRef, useState } from "react";

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
}

export function TransparentImage({ 
  src, 
  alt, 
  className, 
  threshold = 245 
}: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If pixel is near white, make it transparent
        if (r > threshold && g > threshold && b > threshold) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
  }, [src, threshold]);

  return (
    <img 
      src={processedSrc} 
      alt={alt} 
      className={className} 
    />
  );
}
