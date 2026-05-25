import Image from "next/image";
import { cn } from "~/lib/utils";

type PartyMemberProps = {
  name: string;
  imageSrc: string;
  title: string;
  picOnLeft?: boolean;
};

export default function PartyMember({ name, imageSrc, title, picOnLeft }: PartyMemberProps) {
  return (
    <div className={cn(
      "flex justify-center items-center",
      "h-full w-full",
      picOnLeft ? "flex-row" : "flex-row-reverse"
    )}>
      <div className={cn(
        "relative h-auto aspect-square",
        "w-36 md:w-48 lg:w-64",
        picOnLeft ? "translate-x-4" : "-translate-x-4"
      )}>
        <Image
          className={cn(
            "w-full h-full",
            "object-cover rounded-full",
            "drop-shadow-sm"
          )}
          src={imageSrc}
          alt={`weddingParty-${name}`}
          width={256}
          height={256}
          sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 256px"
          quality={85}
        />
      </div>
      <div className={cn(
        "bg-white w-fit rounded-lg",
        "py-3 px-5 whitespace-nowrap",
        "translate-y-4",
        picOnLeft ? "-translate-x-4" : "translate-x-4 text-right"
      )}>
        <div className={cn(
          "font-sans text-dark-terracotta",
          "tracking-widest uppercase",
          "font-bold text-sm"
        )}>{name}</div>
        <div className={cn(
          "font-sans text-dark-terracotta",
          "tracking-widest uppercase",
          "text-xs"
        )}>{title}</div>
      </div>
    </div>
  );
}
