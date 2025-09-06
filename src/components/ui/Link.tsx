import { text } from "stream/consumers";

type LinkProps = {
  label: string;
  link: string;
};

export default function Link({link, label}: LinkProps) {
  return (
    <p>
      <a
        href={link}
        className="
        relative
        text-white
        transition-colors
        duration-300
        hover:text-green-400
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[2px]
        after:w-0
        after:bg-green-400
        after:transition-all
        after:duration-300
        hover:after:w-full
        uppercase
      "
      target="_blank"
      >
        {label}
      </a>
    </p>
  );
}
