export default function Footer() {
	const containerStyling = `
		hidden md:flex	
		w-full
		h-48
		justify-center
		items-start
		pt-20
	`;
	return (
		<div className={containerStyling}>
			<img src="images/footerNB.png" alt="logo" className="w-40" />
		</div>
	);
}
