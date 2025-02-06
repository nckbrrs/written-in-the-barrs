import Image from "next/image";

export default function Footer() {
	return (
		<div className={containerStyling}>
			<Image
				src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAVAoYqNPCl86eO5g4TaNQLHJYDkfcSWnMrPI1"
				alt="logo"
				width="0"
				height="0"
				sizes="100%"
				className={imgStyling}
			/>
		</div>
	);
}

const containerStyling = `
	flex
	w-full
	justify-center
	items-start
	py-8
`;

const imgStyling = `
	w-24 md:w-40
`;
