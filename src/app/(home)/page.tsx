"use client";

import { useState } from "react";
import Image from "next/image";
import Limk from "next/link";
import {
  Button,
  SlideShow,
  BreakLine,
  Footer,
  Modal,
  Button2,
  ProjectDetailCard,
  Drawer,
} from "@/components/ui";
import { About, ProjectDetail, Projects } from "./components";

export default function Home() {
  const [currentSelected, setCurrentSelected] = useState<number>(0);
  const [info, setInfo] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className={`h-[95vh] flex flex-col overflow-hidden gap-1.5 ${
        drawerOpen ? "opacity-100" : ""
      }`}
    >
      {/* Heading */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <Limk href="/stats">
            <Image
              src="/icons/jedi-logo-symbol.png"
              alt="at-at-walker"
              width={25}
              height={25}
            />
          </Limk>
          <Limk href="/blogs">
            <Image
              src="/icons/millennium-falcon.png"
              alt="at-at-walker"
              width={25}
              height={25}
            />
          </Limk>
          <Limk href="/gallery">
            <Image
              src="/icons/space-station.png"
              alt="at-at-walker"
              width={25}
              height={25}
            />
          </Limk>
        </div>

        <div className="flex flex-row justify-between items-center w-[55%] gap-20">
          <SlideShow />
          <div onClick={() => setDrawerOpen(true)}>
            <Button label="Contact" />
          </div>
        </div>
      </div>

      <BreakLine />

      {/* Title */}
      <div>
        <p className="w-full text-center text-7xl font-konexy leading-none">
          ADITYA VARDHAN SINGH
        </p>
      </div>

      <BreakLine />

      {/* Body (takes remaining height) */}
      <div className="flex-1 grid grid-cols-8 gap-3 divide-x divide-white overflow-hidden">
        <About />
        <Projects
          currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          setInfo={setInfo}
        />
        <ProjectDetail
          info={info}
          setInfo={setInfo}
          currentSelected={currentSelected}
          setIsOpen={setIsOpen}
        />
      </div>

      <BreakLine />

      <Footer />

      {/* Modal */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="w-[80vw] h-[80vh] flex flex-col overflow-hidden">
          <div className="w-min">
            <Button2 label="Close" handleClick={() => setIsOpen(false)} />
          </div>
          <ProjectDetailCard
            index={currentSelected}
            info={info}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </Modal>

      {/* Drawer */}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="text-2xl font-bold mb-2 uppercase font-mono">Contact</h2>
        <BreakLine />
        <div className="my-2">
          <p>Having experience in full-stack development.</p>
          <p>Currently looking for internships and full-time opportunities.</p>
        </div>
        <BreakLine />
        <form className="flex flex-col gap-4 mt-2">
          <h2 className="text-lg uppercase font-mono text-gray-400 font-bold">Reach me</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Your Designation"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="border p-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </Drawer>
    </div>
  );
}
