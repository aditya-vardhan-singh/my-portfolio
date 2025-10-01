"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringCD, setIsHoveringCD] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    const checkHoverLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (link) {
        setIsHoveringLink(true);
        const wantsCD =
          link.dataset?.cursor === "cd" ||
          link.classList.contains("cd-cursor") ||
          link.dataset?.cursor === "cd-green" ||
          link.classList.contains("cd-cursor--green");
        setIsHoveringCD(!!wantsCD);
      } else {
        setIsHoveringLink(false);
        setIsHoveringCD(false);
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

  // Toggle CSS class on root to reliably hide native cursor (overrides anchor pointer)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("custom-cursor--hidden");
    return () => {
      root.classList.remove("custom-cursor--hidden");
    };
  }, []);

  const imgSrc = isHoveringCD ? "/favicon1.ico" : "/favicon.ico";
  const imgSize = isHoveringCD ? 48 : 20;

  // tint the CD to green when active (covers cases where you don't have a separate green file)
  const imgFilter = isHoveringCD
    ? "sepia(1) saturate(3) hue-rotate(80deg) contrast(0.95)"
    : "none";

  return (
    <>
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${imgSize}px`,
          height: `${imgSize}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          display: visible ? "block" : "none",
          filter: imgFilter,
        }}
        className="select-none"
      />

      {/* Ripple when hovering over a link */}
      {isHoveringLink && visible && (
        <span
          aria-hidden="true"
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "48px",
            height: "48px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9998,
            borderRadius: "9999px",
            border: "2px solid rgba(34,197,94,0.5)",
            animation: "ripple 700ms ease-out",
          }}
        />
      )}
    </>
  );
}
