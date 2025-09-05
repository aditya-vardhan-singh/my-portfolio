import Image from "next/image";
import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";
import SlideShow from "@/components/ui/Slideshow";

export default function Home() {
  return (
    <div className="h-[95vh] flex flex-col overflow-hidden gap-1.5">
      {/* Heading */}
      <div className="flex flex-row justify-between items-center">
        <div>Icons</div>
        <div className="flex flex-row justify-between items-center w-[55%] gap-20">
          <SlideShow />
          <Button label="Contact" />
        </div>
      </div>

      {/* Break Line */}
      <div className="flex flex-row items-center gap-2">
        <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
        <hr className="w-full" />
        <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
      </div>

      {/* Title */}
      <div>
        <p className="w-full text-center text-7xl font-konexy leading-none">
          ADITYA VARDHAN SINGH
        </p>
      </div>

      {/* Break Line */}
      <div className="flex flex-row items-center gap-2">
        <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
        <hr className="w-full" />
        <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
      </div>

      {/* Body (takes remaining height) */}
      <div className="flex-1 grid grid-cols-7 gap-3 divide-x divide-white overflow-hidden">
        {/* About */}
        <div className="col-span-2 flex flex-col overflow-hidden">
          <p className="uppercase font-mono font-semibold text-lg">About</p>
          <div className="flex-1 overflow-y-scroll pr-2 flex flex-col gap-4 mt-4 text-md">
            <p>A computer scientist and a software developer. Worked on various full stack website </p>
            <p>
              <span className="text-md uppercase font-mono tracking-tighter">
                Early Life
              </span>
              <br />I didn't start early in life with computers but I will
              surely reach my goals as a successful computer scientist.
            </p>
            <p>TT and Badminton are my sport.</p>
          </div>
        </div>

        {/* Projects */}
        <div className="col-span-2 flex flex-col overflow-hidden">
          <p className="uppercase font-mono font-semibold text-lg">Projects</p>
          <div className="flex-1 overflow-y-scroll pr-2 flex flex-col gap-4 mt-4 text-md">
            <p>I am a computer scientist.</p>
            <p>I am also a student of physics.</p>
          </div>
        </div>

        {/* Project Details */}
        <div className="col-span-2 flex flex-col overflow-hidden">
          <p className="uppercase font-mono font-semibold text-lg">
            Project Detail
          </p>
          <div className="flex-1 overflow-y-scroll pr-2 flex flex-col gap-4 mt-4 text-md">
            <p>I am a computer scientist.</p>
            <p>I am also a student of physics.</p>
          </div>
        </div>
      </div>

      {/* Break Line */}
      <div className="flex flex-row items-center gap-2">
        <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
        <hr className="w-full" />
        <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
      </div>

      {/* Footer */}
      <footer className="grid grid-cols-12 uppercase text-sm font-mono">
        <div className="col-span-3 text-green-400">
          <p>
            <a href="#" className="flex flex-row">
              Download Resume{" "}
              <Image
                priority
                src="/icons/download.svg"
                alt="|"
                width={20}
                height={20}
              />
            </a>
          </p>
        </div>

        <div className="col-span-7 grid grid-cols-10 text-xs">
          <div className="col-span-2 flex flex-col gap-2">
            {/* <p><a href="#">Discord</a></p> */}
            <Link link="#" label="Discord" />
            <Link link="#" label="Github" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Link link="#" label="Twitter" />
            <Link link="#" label="Reddit" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Link link="#" label="StackOverflow" />
            <Link link="#" label="LinkedIn" />
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <p>P: +91 91515 84444</p>
            <p>E: aditya.vardhan.singh@outlook.com</p>
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-right">@2025</p>
        </div>
      </footer>
    </div>
  );
}
