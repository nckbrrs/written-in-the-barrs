import "~/styles/globals.css";
import { Viewport, type Metadata } from "next";
import TopNav from "~/components/TopNav";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss";
import localFont from "next/font/local";
import Footer from "~/components/Footer";

const twFullConfig = resolveConfig(
	tailwindConfig as Config & typeof tailwindConfig
);

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV == "development"
			? "http://localhost:3000"
			: "https://written-in-the-barrs.vercel.app"
	),
	title: "Written in the Barrs",
	description: "Nick and Brooke's wedding website",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	openGraph: {
		title: "Written in the Barrs",
		description: "Nick and Brooke's wedding website",
		siteName: "Written in the Barrs",
		type: "website",
		images: [
			{
				url: "/open-graph-img.png",
				width: 1200,
				height: 630,
				alt: "Preview image for written-in-the-barrs.vercel.app"
			}
		]
	}
};

export const viewport: Viewport = {
	themeColor: twFullConfig.theme.colors["bone"]
};

const paris = localFont({
	src: [
		{
			path: "../../public/fonts/paris.otf",
			weight: "400",
			style: "normal"
		}
	],
	variable: "--font-paris"
});

const weiss = localFont({
	src: [
		{
			path: "../../public/fonts/weiss.otf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../../public/fonts/weiss-bold.otf",
			weight: "700",
			style: "bold"
		}
	],
	variable: "--font-weiss"
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={bodyContainerStyling}>
				<TopNav />
				{children}
				<Footer />
			</body>
		</html>
	);
}

const bodyContainerStyling = `
	${paris.variable}
	${weiss.variable}
	antialiased
	flex
	flex-col
	h-screen
	w-full
	items-center
`;
