import { cn } from "~/lib/utils";

type ContentHeaderProps = { text: string };

export default function ContentHeader({ text }: ContentHeaderProps) {
  return (
    <div className={cn(
      "flex flex-col justify-between items-center",
      "h-16 lg:h-20 mb-6"
    )}>
      <p className={cn(
        "font-weiss text-dark-terracotta",
        "tracking-[0.5rem] uppercase",
        "lg:text-xl"
      )}>{text}</p>
      <div className={cn(
        "flex flex-col",
        "w-[1px] h-6 lg:h-8",
        "bg-dark-terracotta"
      )} />
    </div>
  );
}
