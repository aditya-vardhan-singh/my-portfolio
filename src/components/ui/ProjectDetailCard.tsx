"use client";

import { projects } from "@/config";
import { useEffect, useState, useRef } from "react";
import { projectsType } from "@/config/projects";
import Image from "next/image";

type ProjectDetailCardProps = {
  index: number;
  info: boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function ProjectDetailCard({
  index,
  info,
  isOpen,
  setIsOpen,
}: ProjectDetailCardProps) {
  const [project, setProject] = useState<projectsType>(projects[index]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [index]);

  useEffect(() => {
    setProject(projects[index]);
  }, [index]);

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-hidden overflow-y-auto mt-4"
    >
      {info ? (
        <div className="flex flex-col gap-4 pr-44">
          {project.details.description.map((desc, idx) => {
            return <p key={idx}>{desc}</p>;
          })}
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-mono uppercase font-bold text-gray-400 text-lg mb-4">
                Services
              </p>
              <p className="font-mono uppercase text-sm">
                {project.details.services}
              </p>
            </div>
            <div>
              <p className="font-mono uppercase font-bold text-gray-400 text-lg mb-4">
                Stack
              </p>
              <p className="font-mono uppercase text-sm">
                {project.details.stack}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={() => setIsOpen(true)} className={`${isOpen ? "" : "cursor-pointer"}`}>
          {project.videos?.map((vdo, idx) => (
            <video
              key={vdo}
              autoPlay
              muted
              loop
              className="rounded-lg shadow-lg w-full h-auto mb-4"
            >
              <source src={vdo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
          {project.images?.map((img, idx) => {
            return (
              <Image
                src={img}
                alt="Image"
                width={2000}
                height={2000}
                key={img} // ✅ Use img URL as key for consistency
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVQIW2NkYGBgYAAAAAMAAVxnm0YAAAAASUVORK5CYII="
                className="rounded-lg shadow-lg w-full h-auto mb-4"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
