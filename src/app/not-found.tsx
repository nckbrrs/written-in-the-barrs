"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

const REDIRECT_DELAY = 5;

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(REDIRECT_DELAY);

  useEffect(() => {
    if (seconds === 0) {
      router.push("/");
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, router]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <p className="text-4xl mb-2">🤷‍♂️</p>
      <p className={cn(
        "font-weiss font-bold text-dark-sky",
        "text-2xl lg:text-5xl text-center"
      )}>
        Oops! There&apos;s nothing here!
      </p>
      <p className={cn(
        "font-weiss text-dark-sky",
        "text-lg lg:text-2xl text-center",
        "px-4"
      )}>
        In <span className="font-bold text-2xl">{seconds}</span> seconds, you will be navigated
        <br />
        to the <Link href="/">home page.</Link>
      </p>
    </div>
  );
}
