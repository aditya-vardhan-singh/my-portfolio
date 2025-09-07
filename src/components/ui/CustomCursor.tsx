"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    const checkHoverLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousemove", checkHoverLink);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousemove", checkHoverLink);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full bg-white opacity-30 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${
        visible ? "block" : "hidden"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Ripple when hovering over a link */}
      {isHoveringLink && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="block w-16 h-16 rounded-full border-2 border-green-400 opacity-50 animate-ripple" />
        </div>
      )}
    </div>
  );
}
