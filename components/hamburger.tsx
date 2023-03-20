import tw, { styled } from "twin.macro";
import { Col, Row } from "./base";
import 'twin.macro';

interface HamburgerProps {
    state: 'open' | 'closed';
    onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({state, onClick}) => {
    return (
        <Container animate={state} onClick={onClick}>
            <HamburgerBar variants={hamburgerBarMotionVariants.top}/>
            <HamburgerBar variants={hamburgerBarMotionVariants.middle}/>
            <HamburgerBar variants={hamburgerBarMotionVariants.bottom}/>
        </Container>
    )
}

const Container = styled(Col)(() => [
    tw`
       z-20
       w-6
       h-6
       absolute
       left-2
       top-11
       justify-evenly
       lg:hidden 
    `
])

const HamburgerBar = styled(Row)(() => [
    tw`
        w-full
        h-[1px]
        bg-darkTerracotta
    `
])

const hamburgerBarMotionVariants = {
    top: {
        closed: {},
        open: {
            rotate: 45,
            translateY: 6
        }
    },
    middle: {
        closed: {},
        open: {
            translateX: -100,
            opacity: 0
        }
    },
    bottom: {
        closed: {},
        open: {
            rotate: -45,
            translateY: -6
        }
    }
}

export default Hamburger;