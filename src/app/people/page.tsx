import ContentHeader from "~/components/ContentHeader";
import PartyMember from "~/components/PartyMember";

export default function People() {
	const Girls = [
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAtnVAwOvU8aboeg1TwsQBWmDGlMHPkihE3nSO",
			name: "Kassidy Gomes",
			title: "Maid of Honor"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAAbDJCzlueCLra9Qbl8zvcJ5iWH4fOxFDXkZ3",
			name: "Amberlyn White",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAXi4IBZF9JXp5nFkG2TyrbUtxPjlC0mB1au4K",
			name: "Zoë Swift",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAV3bb6nPCl86eO5g4TaNQLHJYDkfcSWnMrPI1",
			name: "Maddi Martin",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAMpuEbk4yXDkvswV4BdPhzGuxHKlpf8NITy6O",
			name: "Claire Smith",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAUci4tQ38Yv9eAgGwudNTB6pMzkQa2cCniOZK",
			name: "Sarah Wills",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAlDBriLArLRp0cS1mTOjnFHVokd5XeuIl7WG2",
			name: "Hannah Forehand",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAjACQ1nC9Ns61auXSwFp4yLlkZQ3BfmTYeEGc",
			name: "Holly Powell",
			title: "Bridesmaid"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAJ9iyXippXAwH7qJckg5Zl3RU48rBy9WbhLo0",
			name: "Ashley Carsten",
			title: "Bridesmaid"
		}
	];

	const Boys = [
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA16ocLnUCrLKcVt7jz6qxduhmf8wQOP324YXk",
			name: "Win Marks",
			title: "Best Man"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA0mT5ZJmxzKDG5VULlBdwZ3RFxyaToPgjIWiE",
			name: "John Wheeler",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA5o2i00K7F2Qpn9eJrkf3RVv1tgzT5sdwDWab",
			name: "Thomas Riedy",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAQ880bjkONZGmDbRnH3l4Kvi6kW0LXPe2Srwf",
			name: "Eric White",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA29KHk50awl4qQepVfLhAjbK3XZyH6zDEWMvk",
			name: "Sam Lopane",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAqJArU057ZHRixrd0Ua3yoI8ukN6qKWMge2tA",
			name: "Kevin Wright",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAh9bkkR0JmTSnDOVNYRB38IGtkMqZWK1H2if5",
			name: "Ryan Barrs",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAQxAyXZONZGmDbRnH3l4Kvi6kW0LXPe2SrwfJ",
			name: "Joe Barrs",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAjAp3D2P9Ns61auXSwFp4yLlkZQ3BfmTYeEGc",
			name: "Stephen Odom",
			title: "Groomsman"
		},
		{
			imageSrc:
				"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAshpuOWNJptyKgXqIUeZzQORPi5rxbcAYH8BV",
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
