import Link from "next/link";
import { LinkIcon, MapPin } from "lucide-react";
import Image from "next/image";
import { cn } from "~/lib/utils";

type POIProps = {
  name: string;
  imageSrc: string;
  websiteHref: string;
  locationHref?: string;
  priority?: boolean;
};

export default function PlaceOfInterest({ name, imageSrc, websiteHref, locationHref, priority }: POIProps) {
  const displayName = name.includes("\n")
    ? name
        .split("\n")
        .map((s) => s.toUpperCase())
        .join("\n")
    : name.toUpperCase();

  return (
    <div className={cn(
      "flex flex-col min-w-32 justify-center items-center",
      "bg-white rounded-3xl",
      "p-3 lg:p-5 gap-3",
      "drop-shadow-sm transition-transform"
    )}>
      <Link className="w-full relative" href={websiteHref} target="_blank" rel="noopener noreferrer">
        <Image
          className="w-full h-full rounded-2xl object-cover"
          src={imageSrc}
          alt={`${name}-logo`}
          width={400}
          height={400}
          sizes="(max-width: 1024px) 45vw, 350px"
          quality={85}
          priority={priority}
        />
      </Link>
      <div className="flex flex-row w-full">
        <div className={cn(
          "font-sans font-bold text-dark-terracotta",
          "text-left whitespace-pre",
          "text-sm lg:text-base"
        )}>
          {displayName}
        </div>
      </div>
      <div className={cn(
        "flex flex-row w-full justify-start",
        "gap-2 lg:gap-4"
      )}>
        <Link className="w-1/2" href={websiteHref} target="_blank" rel="noopener noreferrer">
          <div className={cn(
            "flex flex-row justify-center",
            "w-full h-8 rounded-3xl",
            "bg-light-terracotta hover:bg-dark-terracotta",
            "duration-100"
          )}>
            <LinkIcon className="h-full stroke-bone p-[2px]" />
          </div>
        </Link>
        {locationHref && (
          <Link className="w-1/2" href={locationHref} target="_blank" rel="noopener noreferrer">
            <div className={cn(
              "flex flex-row justify-center",
              "w-full h-8 rounded-3xl",
              "bg-light-terracotta hover:bg-dark-terracotta",
              "duration-100"
            )}>
              <MapPin className="h-full stroke-bone p-[2px]" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
