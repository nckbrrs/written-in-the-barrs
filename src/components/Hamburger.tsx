import { cn } from "~/lib/utils";

type HamburgerProps = { isOpen: boolean };

const bar = cn(
  "block h-px w-full",
  "bg-light-terracotta",
  "transition-all duration-200"
);

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div className={cn(
      "relative flex flex-col justify-between",
      "h-5 w-6"
    )}>
      <span className={cn(bar, "origin-center", isOpen ? "translate-y-[9px] rotate-45" : "")} />
      <span className={cn(bar, isOpen ? "opacity-0" : "")} />
      <span className={cn(bar, "origin-center", isOpen ? "-translate-y-[9px] -rotate-45" : "")} />
    </div>
  );
}
