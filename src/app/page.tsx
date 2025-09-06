import Image from "next/image";
import Link from "@/components/ui/Link";
import {Button, SlideShow, BreakLine} from "@/components/ui";

export default function Home() {
  return (
    <div className="h-[95vh] flex flex-col overflow-hidden gap-1.5">
      {/* Heading */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <a href="#">
            <Image
              src="/icons/jedi-logo-symbol.png"
              alt="at-at-walker"
              width={25}
              height={25}
            />
          </a>
          <a href="#">
            <Image
              src="/icons/millennium-falcon.png"
              alt="at-at-walker"
              width={25}
              height={25}
            />
          </a>
          <a href="#">
            <Image
              src="/icons/space-station.png"
              alt="at-at-walker"
              width={25}
              height={25}
            />
          </a>
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
      <div className="flex-1 grid grid-cols-7 gap-3 divide-x divide-white overflow-hidden">
        {/* About */}
        <div className="col-span-2 flex flex-col overflow-hidden">
          <p className="uppercase font-mono font-semibold text-lg">About</p>
          <div className="flex-1 overflow-y-scroll pr-2 flex flex-col gap-4 mt-4 text-md">
            <p>
              A computer scientist and a software developer. Worked on various
              full stack website{" "}
            </p>
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

      <BreakLine />

      {/* Footer */}
      <footer className="grid grid-cols-12 uppercase text-sm font-mono">
        <div className="col-span-3 text-green-400">
          <p>
            <a
              href="/pdfs/Aditya Vardhan Singh.pdf"
              className="flex flex-row"
              download={true}
            >
              Resume Deck{" "}
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
            <Link
              link="https://discordapp.com/users/752882644303216700"
              label="Discord"
            />
            <Link
              link="https://github.com/aditya-vardhan-singh"
              label="Github"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Link link="https://x.com/AVS999" label="Twitter" />
            <Link link="https://www.reddit.com/user/84444v/" label="Reddit" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <Link
              link="https://stackoverflow.com/users/25743252/aditya-vardhan-singh"
              label="StackOverflow"
            />
            <Link
              link="https://linkedin.com/in/aditya-vardhan-singh"
              label="LinkedIn"
            />
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <Link link="tel:+91 9151584444" label="P: +91 91515 84444" />
            <Link
              link="mailto:aditya.vardhan.singh@outlook.com"
              label="E: aditya.vardhan.singh@outlook.com"
            />
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-right">&copy;2025</p>
        </div>
      </footer>
    </div>
  );
}
