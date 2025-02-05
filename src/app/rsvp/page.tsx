import ContentHeader from "~/components/ContentHeader";

export default function RSVP() {
	return (
		<div className={pageContainer}>
			<div className={subContainer}>
				<ContentHeader text="RSVP" />
				<h1 className={textStyling}>
					Sorry, RSVPs are no longer being processed.
				</h1>
			</div>
		</div>
	);
}

const pageContainer = `
	flex
	flex-col
	h-full
	justify-start
	items-center
	max-w-[1600px]
	max-h-screen md:max-h-[calc(100vh-16rem)]
	pt-8
	pb-8
`;

const subContainer = `
	flex
	flex-col
	w-full
	px-4
`;

const textStyling = `
	font-weiss
	font-bold
	text-darkTerracotta
	text-center
	text-2xl
	tracking-wide
	px-12
`;
