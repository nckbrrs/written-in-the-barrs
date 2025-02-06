"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ContentHeader from "~/components/ContentHeader";
import PlaceOfInterest from "~/components/PlaceOfInterest";

export default function City() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.refresh();
		}, 1000);
	}, []);

	const POIs = {
		COFFEE: [
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAUpugR638Yv9eAgGwudNTB6pMzkQa2cCniOZK",
				name: "Jubala\nCoffee",
				websiteHref: "http://jubalacoffee.com/",
				locationHref:
					"https://maps.apple.com/?address=200%20Park%20at%20North%20Hills%20St,%20Unit%20140,%20Raleigh,%20NC%20%2027609,%20United%20States&auid=9444065017328409905&ll=35.835876,-78.636929&lsp=9902&q=Jubala%20Coffee&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAQCgQIWRAGCgUIpAEQARImKdKcBkd16kFAMf2L4YcrqVPAOVByLKOb60FAQatakft1qFPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAaoAi6fjJdObmiIK45yv8p6Vn7qxNHtz2lMCY",
				name: "Sola\nCoffee",
				websiteHref: "http://solacoffee.com/",
				locationHref:
					"https://maps.apple.com/?address=7705%20Lead%20Mine%20Rd,%20Raleigh,%20NC%20%2027615,%20United%20States&auid=8683646674173236955&ll=35.885316,-78.660089&lsp=9902&q=Sola%20Coffee&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRANCgQIWRABCgUIpAEQARImKXzke9y+8EFAMcCrfrqZqlPAOfq5oTjl8UFAQcQNXxHkqVPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA07CrqyxzKDG5VULlBdwZ3RFxyaToPgjIWiEQ",
				name: "Idle Hour\nCoffee",
				websiteHref: "https://www.instagram.com/idlehour_coffee/",
				locationHref:
					"https://maps.apple.com/?address=1818%20Oberlin%20Rd,%20Unit%20103,%20Raleigh,%20NC%2027608,%20United%20States&auid=10343519929642603386&ll=35.808810,-78.655007&lsp=9902&q=Idle%20Hour%20Coffee%20Roasters&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKTHW7ZP05kFAMUO4LN1JqlPAOa+rE/Aa6EFAQUWg4WCUqVPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA9LrCrbRJolm4aZSpBrbzFNkEq7DeP8dxjI1G",
				name: "Iris\nCoffee Lab",
				websiteHref: "https://www.iriscoffeelab.com",
				locationHref:
					"https://maps.apple.com/?address=725%20Tucker%20St,%20Raleigh,%20NC%2027603,%20United%20States&auid=8322226606836200200&ll=35.786205,-78.649997&lsp=9902&q=Iris%20Coffee%20Lab%20and%20Cafe&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKUPXz50M5EFAMfvlX3n0qVPAOcGs9fky5UFAQQklWwo/qVPAUAQ%3D"
			}
		],
		FOOD: [
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAkmBfuRgAmpfzBjgeb6lHyZPR2E5ti0WxnTco",
				name: "Benchwarmers\nBagels",
				websiteHref: "http://benchwarmersbagels.com/",
				locationHref:
					"https://maps.apple.com/?address=500%20E%20Davie%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=13604684974940060779&ll=35.774963,-78.632176&lsp=9902&q=Benchwarmers%20Bagels&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAQCgQIWRADCgUIpAEQARImKZkkO8ye4kFAMYrDq0jQqFPAORf6YCjF40FAQdSiLOAaqFPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAQX5UAPONZGmDbRnH3l4Kvi6kW0LXPe2SrwfJ",
				name: "BB's Crispy\nChicken",
				websiteHref: "https://bbscrispychicken.com",
				locationHref:
					"https://maps.apple.com/?address=2920%20Sherman%20Oak%20Pl,%20Unit%20140,%20Raleigh,%20NC%2027609,%20United%20States&auid=4382506222248563131&ll=35.821608,-78.621284&lsp=9902&q=BB's%20Crispy%20Chicken%20-%20Raleigh%20Midtown%20East&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKfODX4CE6EFAMdjc+FcFqFPAOXFZhdyq6UFAQTJiidRPp1PAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCADiuZPukFaxh0mqb7rcvXGt5AEj3VQu8Pop6L",
				name: "Whiskey\nKitchen",
				websiteHref: "https://www.whiskey.kitchen",
				locationHref:
					"https://maps.apple.com/?address=201%20W%20Martin%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=8168066089560443249&ll=35.776735,-78.642122&lsp=9902&q=Whiskey%20Kitchen&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhARCgQIChAACgQIUhABCgQIVRANCgQIWRABCgUIpAEQARImKciBDS/Z4kFAMYXAD4tyqVPAOUZXM4v/40FAQRs1hiG9qFPAUAQ%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA1uy40FUCrLKcVt7jz6qxduhmf8wQOP324YXk",
				name: "Standard\nBeer+Food",
				websiteHref: "https://standardbeerandfood.com",
				locationHref:
					"https://maps.apple.com/?address=205%20E%20Franklin%20St,%20Raleigh,%20NC%20%2027604,%20United%20States&auid=13423184286177273294&ll=35.790364,-78.634919&lsp=9902&q=Standard%20Beer%20+%20Food&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhBoCgQIChAACgQIUhABCgQIVRAQCgQIWRADCgUIpAEQARImKZzMiXiX5EFAMYUEuj39qFPAORqir9S95UFAQcNHO8xHqFPAUAQ%3D"
			}
		],
		SWEETS: [
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAPBpNDYcwCMUHqYzt8hFuJABxvQTDecRSlb1O",
				name: "Two Roosters\nIce Cream",
				websiteHref: "https://www.tworoosters.com",
				locationHref:
					"https://maps.apple.com/?address=215%20E%20Franklin%20St,%20Raleigh,%20NC%2027604,%20United%20States&auid=15316697397330968349&ll=35.790374,-78.634890&lsp=9902&q=Two%20Roosters%20Ice%20Cream&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCdAgoECAoQAAoECFIQAQoECFUQDgoECFkQAQoFCKQBEAESJimczIl4l+RBQDGFBLo9/ahTwDkaoq/UveVBQEHDRzvMR6hTwFAE"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAnJLbNR8eTcVtGg01KQXuUqZbosBJCz65aLvh",
				name: "Idle Hour\nCoffee",
				websiteHref: "https://www.instagram.com/idlehour_coffee/",
				locationHref:
					"https://maps.apple.com/?address=1818%20Oberlin%20Rd,%20Unit%20103,%20Raleigh,%20NC%2027608,%20United%20States&auid=10343519929642603386&ll=35.808810,-78.655007&lsp=9902&q=Idle%20Hour%20Coffee%20Roasters&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAICgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKTHW7ZP05kFAMUO4LN1JqlPAOa+rE/Aa6EFAQUWg4WCUqVPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAizWQ0ahSEhQqOwDIT2p6lFHbCLJtvyu7rofV",
				name: "Layered\nCroissanterie",
				websiteHref: "https://layeredcroissanterie.com",
				locationHref:
					"https://maps.apple.com/?address=911%20N%20West%20Street,%20Unit%20107,%20Raleigh,%20NC%2027603,%20United%20States&auid=13990517492715526129&ll=35.791442,-78.644379&lsp=9902&q=Layered%20Croissanterie&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCZAgoECAoQAAoECFIQAQoECFUQDwoECFkQAgoFCKQBEAESJim6avnNuuRBQDHSWCg8mKlTwDk4QB8q4eVBQEHYQgjK4qhTwFAD"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCANEIGCPSidxQ8ny3zE2AtJujcWZV6kC1DobGR",
				name: "The Cupcake\nShoppe",
				websiteHref: "https://www.thecupcakeshopperaleigh.com",
				locationHref:
					"https://maps.apple.com/?address=104%20Glenwood%20Ave,%20Raleigh,%20NC%20%2027603,%20United%20States&auid=3712754168317508805&ll=35.782047,-78.647259&lsp=9902&q=The%20Cupcake%20Shoppe%20Bakery&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCZAgoECAoQAAoECFIQAQoECFUQDwoECFkQAgoFCKQBEAESJimZjkrshuNBQDGsHelmx6lTwDkXZHBIreRBQEEUqEb6EalTwFAE"
			}
		],
		FUN: [
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCABaKSWadTI41D2dWwpgELZxAmiXeO8qjHbzVl",
				name: "Boxcar\nBarcade",
				websiteHref: "http://www.theboxcarbar.com/raleigh",
				locationHref:
					"https://maps.apple.com/?address=330%20W%20Davie%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=4585197023170764614&ll=35.775960,-78.645022&lsp=9902&q=Boxcar%20Bar%20+%20Arcade&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhARCgQIChAACgQIUhABCgQIVRANCgQIWRABCgUIpAEQARImKT/ubMrB4kFAMSbUeDyiqVPAOb3Dkibo40FAQbQHWtPsqFPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCArXqH4kz46UaQ2E5wN7lGqgt0HofPsuAh8SjR",
				name: "Moore Square\nPark",
				websiteHref: "https://raleighnc.gov/moore-square",
				locationHref:
					"https://maps.apple.com/?address=200%20S%20Blount%20St,%20Raleigh,%20NC%20%2027601,%20United%20States&auid=18420811275843648314&ll=35.776643,-78.635412&lsp=9902&q=Moore%20Square&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhASCgQIChABCgQIUhAHCgQIVRAOCgQIWRABCgUIpAEQARImKak3WUrn4kFAMX3LAGodqVPAOScNf6YN5EFAQcHgNgBoqFPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCA9lMtZDKRJolm4aZSpBrbzFNkEq7DeP8dxjI1",
				name: "Crabtree\nValley Mall",
				websiteHref: "https://shopcrabtree.com",
				locationHref:
					"https://maps.apple.com/?address=4325%20Glenwood%20Ave,%20Raleigh,%20NC%20%2027612,%20United%20States&auid=4367200770715982651&ll=35.840118,-78.679186&lsp=9902&q=Crabtree%20Valley%20Mall&_ext=CjkKBQgEEOIBCgQIBRADCgUIBhCHAgoECAoQAAoECFIQCwoECFMQAwoECFUQDAoECFkQAQoFCKQBEAESJimiuanN9epBQDHI9QWP0qtTwDkgj88pHOxBQEFkfmkAHatTwFAE"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAcsjMZWQ71JPar2AI3GBQpDjo09ONwyl6WfCs",
				name: "NC Museum\nof Art",
				websiteHref: "https://ncartmuseum.org",
				locationHref:
					"https://maps.apple.com/?address=2110%20Blue%20Ridge%20Rd,%20Raleigh,%20NC%20%2027607,%20United%20States&auid=999115317294492985&ll=35.810068,-78.702528&lsp=9902&q=North%20Carolina%20Museum%20of%20Art&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAQCgQIChAACgQIUhAMCgQIVRAMCgQIWRABCgUIpAEQARImKcv9af7z5kFAMfag+UBQrVPAOYSAIV9M6EFAQfelyGtvrFPAUAM%3D"
			}
		],
		STAY: [
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAguVhOJGrYPjORSlNuAvTEGzamD5y4d9Ue0ct",
				name: "The Mayton\nInn",
				websiteHref: "https://www.themayton.com",
				locationHref:
					"https://maps.apple.com/?address=301%20S%20Academy%20St,%20Cary,%20NC%2027511,%20United%20States&auid=166893308128289463&ll=35.784894,-78.780877&lsp=9902&q=The%20Mayton&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARImKREpF2Xi40FAMSvauX5QslPAOY/+PMEI5UFAQSHZdRCbsVPAUAQ%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAVUncfZPCl86eO5g4TaNQLHJYDkfcSWnMrPI1",
				name: "Springhill\nSuites",
				websiteHref:
					"https://www.marriott.com/en-us/hotels/rdurh-springhill-suites-raleigh-cary/overview/",
				locationHref:
					"https://maps.apple.com/?address=1128%20Ledsome%20Ln,%20Cary,%20NC%20%2027511,%20United%20States&auid=3649897677149774357&ll=35.761714,-78.748777&lsp=9902&q=SpringHIll%20Suites&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRAQCgQIWRADCgUIpAEQARImKYloKmvs4EFAMTYsnxVGsFPAOQc+UMcS4kFAQT5k3bSQr1PAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCAcZAFZ3Q71JPar2AI3GBQpDjo09ONwyl6WfCs",
				name: "Homewood\nSuites",
				websiteHref:
					"https://www.hilton.com/en/locations/usa/north-carolina/cary/homewood",
				locationHref:
					"https://maps.apple.com/?address=555%20Crossroads%20Blvd,%20Cary,%20NC%20%2027518,%20United%20States&auid=438233541865160812&ll=35.758184,-78.732827&lsp=9902&q=Homewood%20Suites%20by%20Hilton%20Raleigh%20Cary%20I-40&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRAQCgQIWRADCgUIpAEQARImKdhOSuh/4EFAMQJi7GVBr1PAOVYkcESm4UFAQdZaGQeMrlPAUAM%3D"
			},
			{
				imageSrc:
					"https://huy0t4exz6.ufs.sh/f/G7HhnnrqUvCALPYYXy1UnBLz8ZsjXfQc0PqF9TAp5NSDtwYV",
				name: "Hyatt\nHouse",
				websiteHref:
					"https://www.hyatt.com/en-US/shop/RDUXR?rooms=1&adults=2&checkinDate=2022-04-26&checkoutDate=2022-04-27&kids=0&currency=USD",
				locationHref:
					"https://maps.apple.com/?address=10030%20Sellona%20St,%20Raleigh,%20NC%2027617,%20United%20States&auid=4448840612354890874&ll=35.895570,-78.806377&lsp=9902&q=Hyatt%20House%20Raleigh%20/%20Rdu%20/%20Brier%20Creek&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhALCgQIChAACgQIUhADCgQIVRANCgQIWRABCgUIpAEQARIkKekvquwM8kFAMXsjGnn3s1PAOWcF0Egz80FAQUmJ/clBs1PA"
			}
		]
	};

	return (
		<div className={pageContainerStyling}>
			<ContentHeader text="OUR CITY" />
			{Object.entries(POIs).map(([category, pois]) => {
				return (
					<React.Fragment key={`poi-category-container-${category}`}>
						<div className={categoryHeaderStyling}>{category}</div>
						<div className={poiRowStyling}>
							{pois.map((p) => (
								<div
									key={`poiContainer-${category}-${p.name}`}
									className={poiContainerStyling}
								>
									<PlaceOfInterest
										name={p.name}
										imageSrc={p.imageSrc}
										websiteHref={p.websiteHref}
										locationHref={p.locationHref}
									/>
								</div>
							))}
						</div>
					</React.Fragment>
				);
			})}
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
	px-6 md:px-24 lg:px-16 xl:px-36
`;

const categoryHeaderStyling = `
	font-weiss
    tracking-widest
    text-darkTerracotta
    text-center
    text-4xl
	uppercase
    mb-2
`;

const poiContainerStyling = `
	flex
	flex-col
    w-1/2 lg:w-1/4
    p-1 md:p-3
`;

const poiRowStyling = `
	flex
	flex-row
	flex-wrap
	w-full
	justify-evenly
	mb-8
`;
