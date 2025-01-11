import { DottedSeparator } from "@/components/dotted-separator";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
