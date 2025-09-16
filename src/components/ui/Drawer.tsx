import React from "react";
import NoiseBackground from "./NoiseBackground";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-brightness-100 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[55vw] shadow-xl transition-transform duration-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className="opacity-100 -z-10 absolute inset-0">
          <NoiseBackground />
        </div> */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          Close
        </button>
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}
