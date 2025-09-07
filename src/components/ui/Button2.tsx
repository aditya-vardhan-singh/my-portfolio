import { text } from "stream/consumers";

type LinkProps = {
  label: string;
  handleClick: () => void;
};

export default function Button2({ label, handleClick }: LinkProps) {
  return (
    <div>
      <div
        className="
        relative
        text-sm
        text-green-400
        transition-colors
        duration-300
        hover:text-green-700
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[2px]
        after:w-0
        after:bg-green-700
        after:transition-all
        after:duration-300
        hover:after:w-full
        uppercase
        cursor-pointer
      "
      onClick={handleClick}
      >
        {label}
      </div>
    </div>
  );
}
