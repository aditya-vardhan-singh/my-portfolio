import { Button2, ProjectDetailCard } from "../ui";

type ProjectDetailProps = {
  info: boolean;
  setInfo: (value: boolean) => void;
  currentSelected: number;
  setIsOpen: (value: boolean) => void;
};

export default function ProjectDetail({
  info,
  setInfo,
  currentSelected,
  setIsOpen,
}: ProjectDetailProps) {
  return (
    <div className="col-span-4 flex flex-col overflow-hidden">
      <div className="uppercase font-mono font-semibold text-lg flex flex-row justify-between">
        <p className="text-gray-400">Project Detail</p>
        <Button2
          label={info ? "CLOSE" : "INFO"}
          handleClick={() => setInfo(!info)}
        />
      </div>
      <ProjectDetailCard
        index={currentSelected}
        info={info}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
