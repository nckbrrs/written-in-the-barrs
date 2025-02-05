type ContentHeaderProps = {
	text: string;
};

export default function ContentHeader({ text }: ContentHeaderProps) {
	return (
		<div className={containerStyling}>
			<p className={textStyling}>{text}</p>
			<div className={separatorStyling}></div>
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	justify-between
	items-center
	h-16 lg:h-20
	mb-6
`;

const textStyling = `
	font-weiss
	text-darkTerracotta
	tracking-[0.5rem]
	uppercase
	lg:text-xl
`;

const separatorStyling = `
	flex
	flex-col
	w-[1px]
	h-6 lg:h-8
	bg-darkTerracotta
`;
