import { motion } from "framer-motion";
import Link from "next/link";

type FullScreenMenuProps = {
	isOpen: boolean;
	links: { linkType: "external" | "local"; text: string; href: string }[];
	onClickLink: () => void;
};

export default function FullScreenMenu({
	isOpen,
	links,
	onClickLink
}: FullScreenMenuProps) {
	return isOpen ? (
		<motion.div
			className={fullScreenMenuContainerStyling}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={menuLinksColStyling}>
				{links.map((l) => (
					<Link
						key={l.text}
						href={`${l.href}`}
						target={l.linkType === "external" ? "_blank" : ""}
						rel={
							l.linkType === "external"
								? "noopener noreferrer"
								: ""
						}
						onClick={onClickLink}
					>
						<p className={linkTextStyling}>{l.text}</p>
					</Link>
				))}
			</div>
		</motion.div>
	) : null;
}

const fullScreenMenuContainerStyling = `
    flex
	flex-row 
    w-full
    h-full
	bg-bone
    left-0 
    top-0 
    justify-center 
    items-center
    fixed
    z-20
`;

const menuLinksColStyling = `
    flex
    flex-col
    flex-wrap
    group
    items-center
    justify-center
    space-y-2 lg:space-y-1
    translate-y-2 
`;

const linkTextStyling = `
	w-full
	px-2
    text-4xl md:text-5xl lg:text-7xl
	font-weiss
	font-semibold
	text-darkTerracotta
	text-center
	tracking-wide
    duration-200
    group-hover:opacity-25
    group-hover:blur-[1px]
    hover:!opacity-100
    hover:!blur-0
	hover:-translate-y-1
`;
