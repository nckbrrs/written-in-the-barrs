"use client";
import { useEffect, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import Link from "next/link";

export default function TopNav() {
	const [fullScreenMenuIsOpen, setFullScreenMenuIsOpen] =
		useState<boolean>(false);

	const onClickHamburger = () => {
		fullScreenMenuIsOpen ? closeFullScreenMenu() : openFullScreenMenu();
	};

	const openFullScreenMenu = () => {
		setFullScreenMenuIsOpen(true);
		disableScroll();
	};

	const closeFullScreenMenu = () => {
		enableScroll();
		setTimeout(() => {
			setFullScreenMenuIsOpen(false);
		}, 100);
	};

	const disableScroll = () => {
		document.body.style.overflowY = "hidden";
		document.documentElement.style.overflowY = "hidden";
	};

	const enableScroll = () => {
		document.body.style.overflowY = "visible";
		document.documentElement.style.overflowY = "visible";
	};

	// First-render things
	useEffect(() => {
		// Handler to call on window resize
		const handleResize = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		// Add event listener for resize
		window.addEventListener("resize", handleResize);

		// Call resize handler right away so state gets updated with initial window size
		handleResize();

		// Add listener to make esc key to close full-screen menu
		document.onkeydown = (event) => {
			if (event.key === "Escape") {
				closeFullScreenMenu();
			}
		};

		// Remove resize event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const links: {
		linkType: "external" | "local";
		text: string;
		href: string;
	}[] = [
		{
			linkType: "local",
			text: "RSVP",
			href: "/rsvp"
		},
		{
			linkType: "local",
			text: "DETAILS",
			href: "/details"
		},
		{
			linkType: "local",
			text: "REGISTRY",
			href: "/registry"
		},
		{
			linkType: "local",
			text: "STORY",
			href: "/story"
		},
		{
			linkType: "local",
			text: "PEOPLE",
			href: "/people"
		},
		{
			linkType: "local",
			text: "CITY",
			href: "/city"
		}
	];

	return (
		<>
			<FullScreenMenu
				isOpen={fullScreenMenuIsOpen}
				links={links}
				onClickLink={closeFullScreenMenu}
			/>
			<div
				id="hamburgerContainer"
				className={hamburgerContainerStyling}
				onClick={onClickHamburger}
			>
				<Hamburger
					isOpen={fullScreenMenuIsOpen}
					onClick={onClickHamburger}
					variant={"thin"}
				/>
			</div>
			<div className={topNavContainerStyling}>
				{links.map((link, idx) => {
					return [
						<Link
							key={`headerLink-${link.text}`}
							className="hidden lg:flex"
							href={link.href}
						>
							<p className={headerLinkStyling}>{link.text}</p>
						</Link>
					].concat(
						idx === 2 ? (
							<Link
								key={`headerLink-LOGO`}
								href="/"
								className={logoContainerStyling}
							>
								<p className={logoNameStyling}>
									NICK <span className="font-paris">&</span>{" "}
									BROOKE
								</p>
								<p className={logoDateStyling}>06.24.2022</p>
							</Link>
						) : (
							[]
						)
					);
				})}
			</div>
		</>
	);
}

const topNavContainerStyling = `
	flex
	flex-row
	justify-evenly
	w-full
	max-w-[1600px]
	px-12
	items-center
	pt-10 md:pt-14
	relative
`;

const hamburgerContainerStyling = `
	flex
	flex-col
	w-14
	h-14
	scale-75 md:scale-100
	absolute
	cursor-pointer
	duration-75
	hover:scale-90 md:hover:scale-110
	left-4 md:left-10
	top-8 md:top-14
	z-20
	p-2
	rounded-md
	lg:hidden
`;

const logoContainerStyling = `
	flex
	flex-col
	items-center
	justify-center
`;

const headerLinkStyling = `
	font-weiss
	tracking-widest
	font-semibold
	text-darkTerracotta
	duration-100
	transition-transform
	hover:-translate-y-1
`;

const logoNameStyling = `
	text-darkTerracotta
	text-3xl
	md:text-5xl
	font-weiss
	whitespace-nowrap
`;

const logoDateStyling = `
	text-darkTerracotta
	font-sans 
	text-sm
	tracking-[0.375rem]
`;
