// components/NoiseBackground.tsx
"use client";

import { useEffect, useRef } from "react";

export default function NoiseBackground({
  pixelSize = 2,
  fps = 30, // control speed here (frames per second)
}: {
  pixelSize?: number;
  fps?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const generateNoise = () => {
      const w = Math.ceil(canvas.width / pixelSize);
      const h = Math.ceil(canvas.height / pixelSize);
      const imageData = ctx.createImageData(w, h);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        const gray = Math.random() < 0.5 ? 0 : 32; // only black & gray
        buffer[i] =
          (255 << 24) | (gray << 16) | (gray << 8) | gray;
      }

      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.putImageData(imageData, 0, 0);

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(offscreen, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    };

    const interval = setInterval(generateNoise, 1000 / fps);
    generateNoise(); // run once immediately

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [pixelSize, fps]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 "
    />
  );
}
