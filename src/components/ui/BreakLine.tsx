import Image from "next/image";

export default function BreakLine() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
      <hr className="w-full" />
      <Image priority src="/icons/plus.svg" alt="+" width={20} height={20} />
    </div>
  );
}
