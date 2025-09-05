"use client";

import { useEffect, useRef } from "react";

export default function NoiseBackground() {
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
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        buffer[i] =
          (255 << 24) | // Alpha
          (Math.random() * 255 << 16) | // Red
          (Math.random() * 255 << 8) | // Green
          (Math.random() * 255); // Blue
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let animationId: number;
    const loop = () => {
      generateNoise();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
