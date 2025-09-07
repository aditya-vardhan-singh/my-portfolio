import Link from "./Link";
import Image from "next/image";

export default function Footer() {
  return (
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
          <Link link="https://github.com/aditya-vardhan-singh" label="Github" />
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
  );
}
