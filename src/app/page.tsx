"use client";

export default function Home() {
	return (
		<div className={containerStyling}>
			<div className={subContainerStyling}>
				<img
					src="images/hero.jpeg"
					alt="Nick proposing to Brooke in his living room"
					className={heroImageStyling}
				/>
				<div className={blobContainerStyling}>
					<img
						src="images/blobWithBranch.png"
						alt="graphic blob with date and location of wedding"
						className={blogImgStyling}
					/>
					<p className={blobTextStyling}>
						JUNE 24, 2022
						<br />
						CARY, NC
					</p>
				</div>
			</div>
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	grow
	max-h-screen md:max-h-[calc(100vh-15rem)]
	justify-center
	items-center
	pt-8 
	pb-10 md:pb-6
	px-6 md:px-14 lg:px-24
	max-w-[1600px]
	relative
`;

const subContainerStyling = `
	flex
	flex-row
	h-full 2xl:h-fit
	justify-center
	relative
`;

const heroImageStyling = `
	object-cover
	object-center
	rounded-2xl
	drop-shadow-md
	grow
	
`;

const blobContainerStyling = `
	flex
	flex-row
	justify-center
	items-center
	w-48 md:w-64
	absolute
	-bottom-[3.4em]
	-right-3
`;

const blobTextStyling = `
	absolute
	font-weiss
	text-darkTerracotta
	-translate-x-[20%]
	translate-y-[15%]
	md:text-xl 
`;

const blogImgStyling = `
	object-cover
	drop-shadow-md
`;
