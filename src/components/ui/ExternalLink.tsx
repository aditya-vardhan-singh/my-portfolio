import { Righteous } from "next/font/google";
import Image from "next/image";
import { text } from "stream/consumers";

type ExternalLinkProps = {
  label: string;
  link: string;
};

export default function ExternalLink({link, label}: ExternalLinkProps) {
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
        flex
        gap-0
      "
      target="_blank"
      >
        {label}
        <Image src="/icons/move-up-right.svg" alt="" width={12} height={12} className="inline-block ml-1 mb-1" />
      </a>
    </p>
  );
}
