import Image from "next/image";
import ContentHeader from "~/components/ContentHeader";
import { cn } from "~/lib/utils";

export default function Parking() {
  return (
    <div className={cn(
      "flex flex-col grow justify-start items-center",
      "pt-8 pb-8 px-6 md:px-14 lg:px-24",
      "max-w-[1000px]",
      "relative"
    )}>
      <ContentHeader text="PARKING" />
      <Image
        src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAGYSMQfqUvCAKTafW1Oprx4zwIyLVEMeX2gQo"
        alt="parking guide"
        width={0}
        height={0}
        sizes="100%"
        className="w-full shrink rounded-xl drop-shadow-sm"
        priority
      />
    </div>
  );
}
