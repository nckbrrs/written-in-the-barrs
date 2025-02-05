import { Clock, MapPin } from "lucide-react";
import ContentHeader from "~/components/ContentHeader";

export default function Details() {
	return (
		<div className={pageContainerStyling}>
			<ContentHeader text="DETAILS" />
			<div className={subContainerStyling}>
				<img
					src="/images/map.png"
					alt="map of Cary, NC with venue"
					className={"min-h-[0px] object-scale-down "}
				/>
				<div className={detailsContainerStyling}>
					<div className={"flex flex-col items-center"}>
						<div className={iconContainerStyling}>
							<Clock className="stroke-darkTerracotta" />
						</div>
						<p className={detailTextStylingBig}>JUNE 24, 2022</p>
						<p className={detailTextStylingSmall}>4:30 PM</p>
					</div>
					<div className={"flex flex-col items-center"}>
						<div className={iconContainerStyling}>
							<MapPin className="stroke-darkTerracotta" />
						</div>
						<p className={detailTextStylingBig}>CHATHAM STATION</p>
						<p className={detailTextStylingSmall}>
							110 N WALKER ST, CARY, NC
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

const pageContainerStyling = `
	flex
	flex-col
	h-full
	justify-start
	items-center
	max-h-screen md:max-h-[calc(100vh-20rem)]
	pt-8
`;

const subContainerStyling = `
	flex
	flex-col
	h-full
	overflow-hidden
	px-4 md:px-0
	justify-start
`;

const detailsContainerStyling = `
	flex
	flex-col md:flex-row
	h-min
	justify-center
	space-y-3 md:space-y-0
	md:space-x-24
`;

const iconContainerStyling = `
	flex
	flex-row
	w-8
	h-8
	fill-darkTerracotta
	mb-2
`;

const detailTextStylingSmall = `
	font-weiss
	text-darkTerracotta
`;

const detailTextStylingBig = `
	font-weiss
	text-darkTerracotta
	font-bold
	text-xl
`;
