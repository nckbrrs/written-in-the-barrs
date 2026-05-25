import Image from "next/image";
import { cn } from "~/lib/utils";

export default function Footer() {
  return (
    <div className={cn(
      "flex w-full justify-center items-start",
      "py-8"
    )}>
      <Image
        src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAVAoYqNPCl86eO5g4TaNQLHJYDkfcSWnMrPI1"
        alt="logo"
        width={0}
        height={0}
        sizes="100%"
        className="w-24 md:w-40"
        priority
      />
    </div>
  );
}
