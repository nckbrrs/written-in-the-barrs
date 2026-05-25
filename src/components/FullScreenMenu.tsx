"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "~/lib/utils";

type FullScreenMenuProps = {
  isOpen: boolean;
  links: { linkType: "external" | "local"; text: string; href: string }[];
  onClickLink: () => void;
};

export default function FullScreenMenu({ isOpen, links, onClickLink }: FullScreenMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-20",
        "flex items-center justify-center",
        "bg-bone"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <nav className={cn(
        "group flex flex-col items-center",
        "gap-2 lg:gap-1"
      )}>
        {links.map((l) => (
          <Link
            key={l.text}
            href={l.href}
            target={l.linkType === "external" ? "_blank" : undefined}
            rel={l.linkType === "external" ? "noopener noreferrer" : undefined}
            onClick={onClickLink}
            className={cn(
              "w-full px-2 text-center",
              "font-weiss font-semibold text-dark-terracotta",
              "text-4xl md:text-5xl lg:text-7xl",
              "tracking-wide",
              "transition-all duration-200",
              "group-hover:opacity-25 group-hover:blur-[1px]",
              "hover:!opacity-100 hover:!blur-none hover:-translate-y-1"
            )}
          >
            {l.text}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
