import ContentHeader from "~/components/ContentHeader";
import PlaceOfInterest from "~/components/PlaceOfInterest";
import { cn } from "~/lib/utils";
import { registries } from "./data";

export default function Registry() {
  return (
    <div className={cn(
      "flex flex-col grow justify-start items-center",
      "px-12 sm:px-16 md:px-0",
      "max-w-[1000px]",
      "pt-8 pb-8"
    )}>
      <ContentHeader text="REGISTRY" />
      <div className={cn(
        "flex flex-col md:flex-row grow justify-start",
        "items-center md:items-start",
        "w-full px-12",
        "gap-7 md:gap-0 md:gap-x-8"
      )}>
        {registries.map((r) => (
          <PlaceOfInterest key={r.name} imageSrc={r.imageSrc} name={r.name} websiteHref={r.websiteHref} priority />
        ))}
      </div>
    </div>
  );
}
