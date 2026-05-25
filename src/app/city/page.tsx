import React from "react";
import ContentHeader from "~/components/ContentHeader";
import PlaceOfInterest from "~/components/PlaceOfInterest";
import { cn } from "~/lib/utils";
import { POIs } from "./data";

export default function City() {
  return (
    <div className={cn(
      "flex flex-col grow justify-start items-center",
      "pt-8 px-6 md:px-24 lg:px-16 xl:px-36",
      "max-w-[1600px]"
    )}>
      <ContentHeader text="OUR CITY" />
      {Object.entries(POIs).map(([category, pois]) => (
        <React.Fragment key={category}>
          <div className={cn(
            "font-weiss text-dark-terracotta",
            "tracking-widest uppercase text-center",
            "text-4xl mb-2"
          )}>
            {category}
          </div>
          <div className="flex flex-row flex-wrap w-full justify-evenly mb-8">
            {pois.map((p) => (
              <div key={p.name} className="flex flex-col w-1/2 lg:w-1/4 p-1 md:p-3">
                <PlaceOfInterest
                  name={p.name}
                  imageSrc={p.imageSrc}
                  websiteHref={p.websiteHref}
                  locationHref={p.locationHref}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
