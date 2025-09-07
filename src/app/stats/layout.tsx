import Link from "next/link";

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[95vh] flex flex-col">
      <Link href="/" className="text-green-400 text-lg uppercase font-mono">Back</Link>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
