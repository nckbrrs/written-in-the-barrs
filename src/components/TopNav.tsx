"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import { cn } from "~/lib/utils";

const links: { linkType: "external" | "local"; text: string; href: string }[] = [
  { linkType: "local", text: "RSVP", href: "/rsvp" },
  { linkType: "local", text: "DETAILS", href: "/details" },
  { linkType: "local", text: "REGISTRY", href: "/registry" },
  { linkType: "local", text: "STORY", href: "/story" },
  { linkType: "local", text: "PEOPLE", href: "/people" },
  { linkType: "local", text: "CITY", href: "/city" },
];

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    document.body.style.overflow = "";
    setTimeout(() => setIsOpen(false), 100);
  };

  const toggle = () => (isOpen ? close() : open());

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <FullScreenMenu isOpen={isOpen} links={links} onClickLink={close} />
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={cn(
          "flex items-center justify-center",
          "w-14 h-14",
          "absolute left-4 md:left-10 top-8 md:top-14 z-20",
          "scale-75 md:scale-100",
          "cursor-pointer rounded-md",
          "transition-transform duration-75",
          "hover:scale-90 md:hover:scale-110",
          "lg:hidden"
        )}
      >
        <Hamburger isOpen={isOpen} />
      </button>
      <nav className={cn(
        "flex flex-row justify-evenly items-center",
        "w-full max-w-[1600px]",
        "pb-4 px-12 pt-10 md:pt-14",
        "relative"
      )}>
        {links.slice(0, 3).map((link) => (
          <Link key={link.text} className="hidden lg:flex" href={link.href}>
            <p className={cn(
              "font-weiss font-semibold text-dark-terracotta",
              "tracking-widest",
              "transition-transform duration-100",
              "hover:-translate-y-1"
            )}>
              {link.text}
            </p>
          </Link>
        ))}
        <Link href="/" className="flex flex-col items-center justify-center">
          <p className={cn(
            "font-weiss text-dark-terracotta",
            "text-3xl md:text-5xl",
            "whitespace-nowrap"
          )}>
            NICK <span className="font-paris">&</span> BROOKE
          </p>
          <p className={cn(
            "font-sans text-dark-terracotta",
            "text-sm tracking-[0.375rem]"
          )}>06.24.2022</p>
        </Link>
        {links.slice(3).map((link) => (
          <Link key={link.text} className="hidden lg:flex" href={link.href}>
            <p className={cn(
              "font-weiss font-semibold text-dark-terracotta",
              "tracking-widest",
              "transition-transform duration-100",
              "hover:-translate-y-1"
            )}>
              {link.text}
            </p>
          </Link>
        ))}
      </nav>
    </>
  );
}
