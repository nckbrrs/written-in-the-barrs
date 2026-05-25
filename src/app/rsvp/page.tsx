import ContentHeader from "~/components/ContentHeader";
import { cn } from "~/lib/utils";

export default function RSVP() {
  return (
    <div className={cn(
      "flex flex-col h-full justify-start items-center",
      "max-w-[1600px] max-h-screen md:max-h-[calc(100vh-16rem)]",
      "pt-8 pb-8"
    )}>
      <div className="flex flex-col w-full px-4">
        <ContentHeader text="RSVP" />
        <h1 className={cn(
          "font-weiss font-bold text-dark-terracotta",
          "text-center text-2xl tracking-wide",
          "px-12"
        )}>
          Sorry, RSVPs are no longer being processed.
        </h1>
      </div>
    </div>
  );
}
