import { Button2, ProjectDetailCard } from "../ui";

type ProjectDetailProps = {
  info: boolean;
  setInfo: (value: boolean) => void;
  currentSelected: number;
};

export default function ProjectDetail({
  info,
  setInfo,
  currentSelected,
}: ProjectDetailProps) {
  return (
    <div className="col-span-4 flex flex-col overflow-hidden">
      <p className="uppercase font-mono font-semibold text-lg flex flex-row justify-between">
        <p className="text-gray-400">Project Detail</p>
        <Button2
          label={info ? "CLOSE" : "INFO"}
          handleClick={() => setInfo(!info)}
        />
      </p>
      <ProjectDetailCard index={currentSelected} info={info} />
    </div>
  );
}
