import Image from "next/image";

type PartyMemberProps = {
	name: string;
	imageSrc: string;
	title: string;
	picOnLeft?: boolean;
};

export default function PartyMember(props: PartyMemberProps) {
	return (
		<div
			className={
				props.picOnLeft ? containerStylingLeft : containerStylingRight
			}
		>
			<div
				className={
					props.picOnLeft
						? imageContainerStylingLeft
						: imageContainerStylingRight
				}
			>
				<Image
					className={imgStyling}
					src={props.imageSrc}
					alt={`weddingParty-${props.name}`}
					width="0"
					height="0"
					sizes="100%"
					priority
					fetchPriority="high"
				/>
			</div>
			<div
				className={
					props.picOnLeft
						? nameLabelStylingLeft
						: nameLabelStylingRight
				}
			>
				<div className={nameLabelTextStylingName}>{props.name}</div>
				<div className={nameLabelTextStylingTitle}>{props.title}</div>
			</div>
		</div>
	);
}

const containerStylingBase = `
	flex
	justify-center
	items-center
	h-full
	w-full
`;

const containerStylingLeft = `
	${containerStylingBase}
	flex-row
`;

const containerStylingRight = `
	${containerStylingBase}
	flex-row-reverse
`;

const imageContainerStylingBase = `
	relative
	w-36 md:w-48 lg:w-64
	h-auto
	aspect-square
`;

const imageContainerStylingLeft = `
	${imageContainerStylingBase}
	translate-x-4
`;

const imageContainerStylingRight = `
	${imageContainerStylingBase}	
	-translate-x-4
`;

const nameLabelStylingBase = `
	bg-white
	w-fit
	rounded-lg
	py-3
	px-5
	w-fit
	whitespace-nowrap
	translate-y-4
`;

const nameLabelStylingLeft = `
	${nameLabelStylingBase}
	-translate-x-4
`;

const nameLabelStylingRight = `
	${nameLabelStylingBase}
	translate-x-4
	text-right
`;

const nameLabelTextStylingBase = `
	font-sans
	text-darkTerracotta
	tracking-widest
	uppercase
`;

const nameLabelTextStylingName = `
	${nameLabelTextStylingBase}
	font-bold
	text-sm
`;

const nameLabelTextStylingTitle = `
	${nameLabelTextStylingBase}
	text-xs
`;

const imgStyling = `
	w-full
	h-full
	object-cover
	rounded-full
	drop-shadow-sm
`;
