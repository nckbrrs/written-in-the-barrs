export default function Footer() {
	return (
		<div className={containerStyling}>
			<img
				src="images/footerNB.png"
				alt="logo"
				className="w-24 md:w-40"
			/>
		</div>
	);
}

const containerStyling = `
	flex
	w-full
	h-24 md:h-48
	justify-center
	items-start
	pt-8 md:pt-20
`;
