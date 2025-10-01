import { projects } from "@/config";
import { ProjectCard } from "../../../components/ui";

type ProjectsProps = {
  currentSelected: number;
  setCurrentSelected: (index: number) => void;
  setInfo: (value: boolean) => void;
}

export default function Projects({currentSelected, setCurrentSelected, setInfo}: ProjectsProps) {
  return (
    <div className="col-span-2 flex flex-col overflow-hidden">
      <p className="uppercase font-mono font-semibold text-lg text-gray-400">
        Projects
      </p>
      <div className="flex-1 overflow-y-scroll pr-2 flex flex-col gap-0 mt-4 text-md">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              name={project.name}
              type={project.type}
              key={index}
              selected={currentSelected === index}
              handleClick={() => {
                setCurrentSelected(index);
                setInfo(false);
              }}
            />
          );
        })}
        <hr className="border-gray-500 border-t-2 h-2" />
      </div>
    </div>
  );
}
