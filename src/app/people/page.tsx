import ContentHeader from "~/components/ContentHeader";
import PartyMember from "~/components/PartyMember";
import { cn } from "~/lib/utils";
import { girls, boys } from "./data";

export default function People() {
  return (
    <div className={cn(
      "flex flex-col grow justify-start items-center",
      "pt-8"
    )}>
      <ContentHeader text="OUR PEOPLE" />
      <div className={cn(
        "flex flex-col lg:flex-row grow w-full justify-start",
        "gap-8",
        "px-4 md:px-0",
        "relative",
        "lg:-mt-6"
      )}>
        <div className="flex flex-col flex-1 items-center">
          <h2 className={cn(
            "font-weiss text-dark-terracotta",
            "tracking-[0.25rem] text-xl font-bold",
            "mb-8"
          )}>
            THE LADIES
          </h2>
          {girls.map((g, i) => (
            <PartyMember key={g.name} name={g.name} imageSrc={g.imageSrc} title={g.title} picOnLeft={i % 2 === 0} />
          ))}
        </div>
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[1px] bg-dark-terracotta lg:-translate-x-[0.5px]" />
        <div className="flex flex-col flex-1 items-center">
          <h2 className={cn(
            "font-weiss text-dark-terracotta",
            "tracking-[0.25rem] text-xl font-bold",
            "mb-8"
          )}>
            THE BOYS
          </h2>
          {boys.map((g, i) => (
            <PartyMember key={g.name} name={g.name} imageSrc={g.imageSrc} title={g.title} picOnLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
