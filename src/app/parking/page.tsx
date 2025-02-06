import Image from "next/image";
import ContentHeader from "~/components/ContentHeader";

export default function Parking() {
	return (
		<div className={containerStyling}>
			<ContentHeader text="PARKING" />
			<Image
				className={imgStyling}
				src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAGYSMQfqUvCAKTafW1Oprx4zwIyLVEMeX2gQo"
				alt="parking guide"
				width="0"
				height="0"
				sizes="100%"
				priority
				fetchPriority="high"
			/>
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	grow
	justify-start
	items-center
	pt-8 
	pb-8
	px-6 md:px-14 lg:px-24
	max-w-[1000px]
	relative
`;

const imgStyling = `
	w-full
	shrink
	rounded-xl
	drop-shadow-sm
`;
