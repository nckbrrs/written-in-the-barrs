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
	justify-center
	items-start
	py-8
`;
