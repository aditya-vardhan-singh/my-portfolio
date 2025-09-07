"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Button,
  SlideShow,
  BreakLine,
  ProjectCard,
  ProjectDetailCard,
  Link,
  Button2,
  Footer,
} from "@/components/ui";
import { About, ProjectDetail, Projects } from "@/components/sections";
import { projects } from "@/config";
import Limk from "next/link";

export default function Home() {
  const [currentSelected, setCurrentSelected] = useState<number>(0);
  const [info, setInfo] = useState<boolean>(false);

  return (
    <div className="h-[95vh] flex flex-col overflow-hidden gap-1.5">
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
          <Button label="Contact" />
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
        />
      </div>

      <BreakLine />

      <Footer />
    </div>
  );
}
