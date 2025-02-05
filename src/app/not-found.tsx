"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
	const router = useRouter();
	const [secondsOnPage, setSecondsOnPage] = useState(0);
	const secondsToWaitBeforeRerouting = 5;

	useEffect(() => {
		setTimeout(() => {
			setSecondsOnPage(secondsOnPage + 1);
		}, 1000);

		if (secondsOnPage >= secondsToWaitBeforeRerouting) {
			router.push("/");
		}
	}, [secondsOnPage]);

	const containerStyling = `
		flex
		flex-col
		justify-center
		items-center
		w-full
		h-full
	`;

	const oopsStyling = `
		font-weiss
		text-2xl lg:text-5xl
		font-bold
		text-darkSky
		text-center
	`;

	const redirectStyling = `
		font-weiss
		text-lg lg:text-2xl
		text-darkSky
		text-center
		px-4
	`;

	const secondsStyling = `
		font-bold
		text-2xl
	`;

	return (
		<div className={containerStyling}>
			<p className={oopsStyling}>Oops! There's nothing here!</p>
			<p className={redirectStyling}>
				In{" "}
				<span className={secondsStyling}>
					{secondsToWaitBeforeRerouting - secondsOnPage}
				</span>{" "}
				seconds, you will be navigated
				<br />
				to the <Link href="/">home page.</Link>
			</p>
		</div>
	);
}
