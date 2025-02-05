import { motion } from "framer-motion";

type HamburgerProps = {
	isOpen: boolean;
	onClick: () => void;
	variant: "thick" | "thin";
};

export default function Hamburger({
	isOpen,
	onClick,
	variant
}: HamburgerProps) {
	const hamburgerBarMotionVariants = {
		top: {
			closed: {},
			open: {
				rotate: 45,
				translateY: `${variant === "thick" ? 275 : 525}%`,
				scale: -0.75
			}
		},
		middle: {
			closed: {},
			open: {
				translateX: 100,
				opacity: 0
			}
		},
		bottom: {
			closed: {},
			open: {
				rotate: -45,
				translateY: `-${variant === "thick" ? 275 : 525}%`,
				scale: -0.75
			}
		}
	};

	const hamburgerStyling = `
		flex
		flex-col
		h-full
		w-full
		justify-evenly
		duration-100
		rounded-xl
		p-0
		drop-shadow-sm
	`;

	const hamburgerBarStyling = `
		hamburgerBar
		flex
		flex-row
		w-full
		bg-lightTerracotta
	`;

	const hamburgerBarThickStyling = `
		${hamburgerBarStyling}
		h-[10%]
	`;

	const hamburgerBarThinStyling = `
		${hamburgerBarStyling}
		h-[5%]
	`;

	return (
		<motion.div
			className={hamburgerStyling}
			animate={isOpen ? "open" : "closed"}
			onClick={onClick}
		>
			<motion.div
				className={
					variant === "thick"
						? hamburgerBarThickStyling
						: hamburgerBarThinStyling
				}
				variants={hamburgerBarMotionVariants.top}
			/>
			<motion.div
				className={
					variant === "thick"
						? hamburgerBarThickStyling
						: hamburgerBarThinStyling
				}
				variants={hamburgerBarMotionVariants.middle}
			/>
			<motion.div
				className={
					variant === "thick"
						? hamburgerBarThickStyling
						: hamburgerBarThinStyling
				}
				variants={hamburgerBarMotionVariants.bottom}
			/>
		</motion.div>
	);
}
