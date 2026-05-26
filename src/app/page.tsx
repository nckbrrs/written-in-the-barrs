import Image from "next/image";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <div className={cn(
      "flex flex-col grow justify-center items-center",
      "px-6 md:px-14 lg:px-24 md:pt-8 pb-8",
      "max-w-[1200px] max-h-[calc(100vh-16rem)]",
      "relative"
    )}>
      <div className="flex flex-row h-full 2xl:h-fit justify-center relative">
        <Image
          src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAllCUDILArLRp0cS1mTOjnFHVokd5XeuIl7WG"
          alt="Nick proposing to Brooke in his living room"
          className={cn(
            "w-full h-full grow",
            "object-cover object-[50%_70%]",
            "rounded-2xl"
          )}
          width={0}
          height={0}
          sizes="100%"
          priority
        />
        <div className={cn(
          "flex flex-row justify-center items-center",
          "w-48 md:w-64",
          "absolute -bottom-[3.4em] -right-3"
        )}>
          <Image
            src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAqOyixs57ZHRixrd0Ua3yoI8ukN6qKWMge2tA"
            alt="graphic blob with date and location of wedding"
            className="w-full h-full object-cover drop-shadow-md"
            width={0}
            height={0}
            sizes="100%"
            priority
          />
          <p className={cn(
            "absolute",
            "font-weiss text-dark-terracotta",
            "-translate-x-[20%] translate-y-[15%]",
            "md:text-xl"
          )}>
            JUNE 24, 2022
            <br />
            CARY, NC
          </p>
        </div>
      </div>
    </div>
  );
}
