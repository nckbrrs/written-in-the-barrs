import ContentHeader from "~/components/ContentHeader";
import PlaceOfInterest from "~/components/PlaceOfInterest";

export default function Registry() {
	const registries = [
		{
			name: "CRATE & BARREL",
			imageSrc: "/images/registry/cb.png",
			websiteHref:
				"https://www.crateandbarrel.com/gift-registry/brooke-barrs-and-nick-barrs/r6515129"
		},
		{
			name: "AMAZON",
			imageSrc: "/images/registry/amazon.png",
			websiteHref:
				"https://www.amazon.com/wedding/share/writteninthebarrs"
		},
		{
			name: "TARGET",
			imageSrc: "/images/registry/target.png",
			websiteHref:
				"https://www.target.com/gift-registry/gift/writteninthebarrs"
		}
	];

	return (
		<div className={containerStyling}>
			<ContentHeader text="REGISTRY" />
			<div className={subContainerStyling}>
				{registries.map((r) => (
					<PlaceOfInterest
						key={`POI-${r.name}`}
						imageSrc={r.imageSrc}
						name={r.name}
						websiteHref={r.websiteHref}
					/>
				))}
			</div>
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	grow
	justify-start
	items-center
	px-12 sm:px-16 md:px-0
	max-w-[1000px]
	max-h-screen md:max-h-[calc(100vh-16rem)]
	pt-8
	pb-8
`;

const subContainerStyling = `
	flex
	flex-col
	grow
	items-center md:items-start
	justify-start
	w-full
    px-12
    space-y-7 md:space-y-0
    md:flex-row
    md:space-x-8
`;
