import Image from "next/image";
import Link from "next/link";
import { LinkIcon, MapPin } from "lucide-react";

type POIProps = {
	name: string;
	imageSrc: string;
	websiteHref: string;
	locationHref?: string;
};

export default function PlaceOfInterest(props: POIProps) {
	return (
		<div className={containerStyling}>
			<div className={imageContainerStyling}>
				<Link
					className="relative w-full h-full"
					href={props.websiteHref}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className={imageStyling}
						src={props.imageSrc}
						alt={`${props.name}-logo`}
					/>
				</Link>
			</div>
			<div className="flex flex-row w-full">
				<div className={nameTextStyling}>
					{props.name.includes("\n") ? (
						<>
							{props.name.split("\n")[0]!.toUpperCase()}
							<br />
							{props.name.split("\n")[1]!.toUpperCase()}
						</>
					) : (
						<>{props.name.toUpperCase()}</>
					)}
				</div>
			</div>
			<div className={linkRowStyling}>
				<Link
					className={"w-1/2"}
					href={props.websiteHref}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={linkIconContainerStyling}>
						<LinkIcon className={linkIconStyling} />
					</div>
				</Link>
				{props.locationHref && (
					<Link
						className="w-1/2"
						href={props.locationHref}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className={linkIconContainerStyling}>
							<MapPin className={linkIconStyling} />
						</div>
					</Link>
				)}
			</div>
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	justify-center
	items-center
	bg-white
	rounded-3xl
	p-3 lg:p-5
	w-full
	space-y-3
	shadow-[0px 3px 3px rgb(0 0 0 / 0.05)]
	transition-transform
	duration-200
	hover:-translate-y-1
`;

const imageStyling = `
	rounded-2xl
	object-cover
`;

const imageContainerStyling = `
	flex
	flex-row
	relative
	w-full
	h-full
	aspect-square
`;

const nameTextStyling = `
	font-sans
	font-bold
	text-darkTerracotta
	text-left
	whitespace-nowrap
	text-sm lg:text-base
`;

const linkRowStyling = `
	flex
	flex-row
	w-full
	justify-start
	space-x-2 lg:space-x-4
`;

const linkIconContainerStyling = `
	flex
	flex-row
	justify-center
	w-full
	h-8
	bg-lightTerracotta
	fill-white
	rounded-3xl
	hover:bg-darkTerracotta
	duration-100
`;

const linkIconStyling = `
	h-full
	stroke-bone
	p-[2px]
`;
