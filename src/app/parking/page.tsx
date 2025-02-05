import Image from "next/image";
import ContentHeader from "~/components/ContentHeader";

export default function Parking() {
	return (
		<div className={containerStyling}>
			<div className={contentStyling}>
				<ContentHeader text="PARKING" />
				<div className={imageContainerStyling}>
					<img
						className={imgStyling}
						src="/images/parkingGuide.png"
						alt="parking guide"
					/>
				</div>
			</div>
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	h-full
	justify-start
	items-center
	pt-8 
	pb-10 md:pb-0
	px-6 md:px-14 lg:px-24
`;

const contentStyling = `
	flex
	flex-col
	w-full
	h-full
`;

const imageContainerStyling = `
	flex
	justify-center
	items-start
	relative
	overflow-hidden
`;

const imgStyling = `
	object-cover
	h-full
	shrink
	rounded-xl
	drop-shadow-[0px 5px 5px rgb(0 0 0 / 0.05)]
`;
