import ContentHeader from "~/components/ContentHeader";
import PlaceOfInterest from "~/components/PlaceOfInterest";

export default function Registry() {
	const registries = [
		{
			name: "CRATE & BARREL",
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAGr6rHMqUvCAKTafW1Oprx4zwIyLVEMeX2gQo",
			websiteHref:
				"https://www.crateandbarrel.com/gift-registry/brooke-barrs-and-nick-barrs/r6515129"
		},
		{
			name: "AMAZON",
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA1Bw376UCrLKcVt7jz6qxduhmf8wQOP324YXk",
			websiteHref:
				"https://www.amazon.com/wedding/share/writteninthebarrs"
		},
		{
			name: "TARGET",
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCALPVdXv1UnBLz8ZsjXfQc0PqF9TAp5NSDtwYV",
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
