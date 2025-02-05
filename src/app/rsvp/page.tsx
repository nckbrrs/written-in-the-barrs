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
	pt-8
	max-w-[1600px]
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
