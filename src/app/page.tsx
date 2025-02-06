import Image from "next/image";

export default function Home() {
	return (
		<div className={containerStyling}>
			<div className={subContainerStyling}>
				<Image
					src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAllCUDILArLRp0cS1mTOjnFHVokd5XeuIl7WG"
					alt="Nick proposing to Brooke in his living room"
					className={heroImageStyling}
					width={0}
					height={0}
					sizes="100%"
				/>
				<div className={blobContainerStyling}>
					<Image
						src="https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAqOyixs57ZHRixrd0Ua3yoI8ukN6qKWMge2tA"
						alt="graphic blob with date and location of wedding"
						className={blogImgStyling}
						width={0}
						height={0}
						sizes="100%"
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
	justify-center
	items-center
	px-6 md:px-14 lg:px-24
	max-w-[1600px]
	max-h-screen md:max-h-[calc(100vh-16rem)]
	pt-8
	pb-8
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
	w-full
	h-full
	object-cover
	object-[50%_70%]
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
	w-full
	h-full
	object-cover
	drop-shadow-md
`;
