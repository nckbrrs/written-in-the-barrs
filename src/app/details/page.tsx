import { Clock, MapPin } from "lucide-react";
import ContentHeader from "~/components/ContentHeader";
import Image from "next/image";
import { cn } from "~/lib/utils";

export default function Details() {
  return (
    <div className={cn(
      "flex flex-col h-full justify-start items-center",
      "max-h-screen md:max-h-[calc(100vh-16rem)]",
      "w-full",
      "pt-8 pb-8"
    )}>
      <ContentHeader text="DETAILS" />
      <div className={cn(
        "flex flex-col h-full justify-start",
        "w-full md:w-2xl lg:w-4xl",
        "overflow-hidden",
        "px-4",
        "relative",
      )}>
        <Image
          src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA0mazwOtxzKDG5VULlBdwZ3RFxyaToPgjIWiE"
          alt="map of Cary, NC with venue"
          width={0}
          height={0}
          sizes="100%"
          className="w-full min-h-0 object-scale-down"
          priority
        />
        <div className={cn(
          "flex flex-col md:flex-row h-min justify-center",
          "gap-3 md:gap-24"
        )}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row w-8 h-8 mb-2">
              <Clock className="stroke-dark-terracotta w-full h-full" />
            </div>
            <p className="font-weiss text-dark-terracotta font-bold text-xl">JUNE 24, 2022</p>
            <p className="font-weiss text-dark-terracotta">4:30 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row w-8 h-8 mb-2">
              <MapPin className="stroke-dark-terracotta w-full h-full" />
            </div>
            <p className="font-weiss text-dark-terracotta font-bold text-xl">CHATHAM STATION</p>
            <p className="font-weiss text-dark-terracotta">110 N WALKER ST, CARY, NC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
