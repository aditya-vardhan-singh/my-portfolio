"use client";

import { useState, useEffect } from "react";

type ProjectCardProps = {
  name: string;
  type: string;
  selected?: boolean;
  handleClick: () => void;
};

export default function ProjectCard({
  name,
  type,
  selected,
  handleClick,
}: ProjectCardProps) {
  const [showDot, setShowDot] = useState(selected);

  useEffect(() => {
    if (selected) {
      setShowDot(true);
    } else {
      const timeout = setTimeout(() => setShowDot(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [selected]);

  return (
    <div
      className={`p-4 pr-2 border-t-2 border-gray-500 uppercase transition-colors duration-300 ease-in-out ${
        selected ? "text-green-400" : "text-white"
      }`}
      onClick={handleClick}
    >
      <div
        className={`flex flex-row justify-between w-full cursor-pointer items-center transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-row items-center transition-all duration-300 ease-in-out">
          {showDot && (
            <div
              className={`w-4 h-4 bg-green-400 rounded-full blur-[5px] transition-all duration-300 ease-in-out ${
                selected ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            ></div>
          )}
          <div
            className={`font-black text-md transition-all duration-300 ease-in-out ${
              selected ? "ml-2" : "ml-0"
            }`}
          >
            {name}
          </div>
        </div>
        <p className="text-sm font-mono transition-colors duration-300 ease-in-out">
          {type}
        </p>
      </div>
    </div>
  );
}
