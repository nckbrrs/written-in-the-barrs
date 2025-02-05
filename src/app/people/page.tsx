import ContentHeader from "~/components/ContentHeader";
import PartyMember from "~/components/PartyMember";

export default function People() {
	const Girls = [
		{
			imageSrc: "/images/bridalParty/kassidy.png",
			name: "Kassidy Gomes",
			title: "Maid of Honor"
		},
		{
			imageSrc: "/images/bridalParty/amberlyn.png",
			name: "Amberlyn White",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/zoe.png",
			name: "Zoë Swift",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/maddi.png",
			name: "Maddi Martin",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/claire.png",
			name: "Claire Smith",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/sarah.png",
			name: "Sarah Wills",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/hannah.png",
			name: "Hannah Forehand",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/holly.png",
			name: "Holly Powell",
			title: "Bridesmaid"
		},
		{
			imageSrc: "/images/bridalParty/ashley.png",
			name: "Ashley Carsten",
			title: "Bridesmaid"
		}
	];

	const Boys = [
		{
			imageSrc: "/images/bridalParty/win.png",
			name: "Win Marks",
			title: "Best Man"
		},
		{
			imageSrc: "/images/bridalParty/john.png",
			name: "John Wheeler",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/thomas.png",
			name: "Thomas Riedy",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/eric.png",
			name: "Eric White",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/sam.png",
			name: "Sam Lopane",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/kevin.png",
			name: "Kevin Wright",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/ryan.png",
			name: "Ryan Barrs",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/joe.png",
			name: "Joe Barrs",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/stephen.png",
			name: "Stephen Odom",
			title: "Groomsman"
		},
		{
			imageSrc: "/images/bridalParty/wes.png",
			name: "Wes Forehand",
			title: "Groomsman"
		}
	];

	return (
		<div className={pageContainerStyling}>
			<ContentHeader text={"OUR PEOPLE"} />
			<div className={subContainerStyling}>
				<div className={peopleColStyling}>
					<h2 className={peopleHeaderTextStyling}>THE LADIES</h2>
					{Girls.map((g, i) => (
						<PartyMember
							key={g.name}
							name={g.name}
							imageSrc={g.imageSrc}
							title={g.title}
							picOnLeft={i % 2 === 0}
						/>
					))}
				</div>
				<div className={bigSeparatorStyling} />
				<div className={peopleColStyling}>
					<h2 className={peopleHeaderTextStyling}>THE BOYS</h2>
					{Boys.map((g, i) => (
						<PartyMember
							key={g.name}
							name={g.name}
							imageSrc={g.imageSrc}
							title={g.title}
							picOnLeft={i % 2 === 0}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const pageContainerStyling = `
	flex
	flex-col
	grow
	justify-start
	items-center
	pt-8

`;

const subContainerStyling = `
	flex
	flex-col lg:flex-row
	grow
	w-full
	space-y-8 lg:space-y-0
	lg:space-x-4
	px-4 md:px-0
	lg:-translate-y-6
	lg:-translate-x-4
	justify-start
`;

const peopleColStyling = `
	flex
	flex-col
	w-full
	items-center
`;

const peopleHeaderTextStyling = `
	font-weiss
    text-darkTerracotta
    tracking-[0.25rem]
	text-xl
	font-bold
    mb-8
`;

const bigSeparatorStyling = `
	flex
	flex-col
	hidden lg:flex
    bg-darkTerracotta
    w-[2px]
    h-full
`;
