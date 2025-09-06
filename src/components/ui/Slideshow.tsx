"use client";

export default function SlideShow() {
  const items = [
    "01 THINK LOGICALLY",
    "//",
    "02 DOCUMENT THINGS",
    "//",
    "03 CREATE ROADMAP",
    "//",
    "04 IMPLEMENT WORK",
    "//",
    "05 FINALIZE OUTCOME",
    "//",
    "06 CHECK FOR ERRORS",
    "//",
    "07 MAINTAIN WORK",
    "//",
  ];

  return (
    <div className="relative w-full overflow-hidden text-white">
      {/* Scrolling container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {items.concat(items).map((text, index) => (
          <span
            key={index}
            className="mx-2 text-lg font-semibold blur-[2px] hover:blur-none transition-all duration-300 cursor-default"
          >
            {text}
          </span>
        ))}
      </div>

      {/* Tailwind keyframes for infinite scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
