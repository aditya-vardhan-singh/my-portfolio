"use client";

import { projects } from "@/config";
import { useEffect, useState } from "react";

type ProjectDetailCardProps = {
  index: number;
  info: boolean;
};

export default function ProjectDetailCard({
  index,
  info,
}: ProjectDetailCardProps) {
  const [project, setProject] = useState(projects[index]);

  useEffect(() => {
    setProject(projects[index]);
  }, [index]);

  return (
    <div className="h-full overflow-hidden overflow-y-auto mt-4">
      {info ? <p>{project.details?.description}</p> : <p>Project Images / Videos</p>}
    </div>
  );
}
