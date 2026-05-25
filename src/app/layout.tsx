import "~/app/globals.css";
import { type Viewport, type Metadata } from "next";
import localFont from "next/font/local";
import TopNav from "~/components/TopNav";
import Footer from "~/components/Footer";
import { cn } from "~/lib/utils";

const paris = localFont({
  src: [{ path: "../../public/fonts/paris.otf", weight: "400", style: "normal" }],
  variable: "--font-paris-var",
});

const weiss = localFont({
  src: [
    { path: "../../public/fonts/weiss.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/weiss-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-weiss-var",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://writteninthebarrs.com"
  ),
  title: "Written in the Barrs",
  description: "Nick and Brooke's wedding website",
  openGraph: {
    title: "Written in the Barrs",
    description: "Nick and Brooke's wedding website",
    siteName: "Written in the Barrs",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/w6IT0Ul.png",
        width: 1200,
        height: 630,
        alt: "Preview image for writteninthebarrs.com",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(paris.variable, weiss.variable)}>
      <body className={cn(
        "antialiased",
        "flex flex-col h-screen w-full items-center justify-between",
        "bg-bone"
      )}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
