import Link from 'next/link';
import { ColCentered, Row } from './base';
import 'twin.macro';
import tw, { styled } from "twin.macro";
import { useState } from 'react';
import Hamburger from './hamburger';

const Header: React.FC = () => {
    const [hamburgerState, setHamburgerState] = useState<'open' | 'closed'>('closed');

    const onClickHamburger = () => {
        setHamburgerState(hamburgerState === 'closed' ? 'open' : 'closed');
    }

    const hamburgerLinks = links.map((l) => 
        <HeaderLink
            variant={'hamburger'}
            key={`hamburgerLink-${l}`}
            href={`/${l.toLowerCase()}`}
            onClick={() => setTimeout(() => setHamburgerState('closed'), 300)}
        >
            <HeaderLinkText>{l}</HeaderLinkText>
        </HeaderLink>
    )

    const headerLinks = links.map((l, i) => {
        return [(
            <HeaderLink
                variant={'header'}
                key={`headerLink-${l}`}
                href={`/${l.toLowerCase()}`}
            >
                <HeaderLinkText>{l}</HeaderLinkText>
            </HeaderLink>
        )].concat(i === 2 ? (
            <Link key={`headerLink-LOGO`} href="/">
                <ColCentered>
                    <LogoText variant={'names'} >NICK <span tw="font-paris">&</span> BROOKE</LogoText>
                    <LogoText variant={'date'}>06.24.2022</LogoText>
                </ColCentered>
            </Link>
        ) : [])
    }).flat(Infinity);

    return (
        <Container>
            <Hamburger state={hamburgerState} onClick={onClickHamburger}/>
            {(hamburgerState === 'open') && 
                <HamburgerContainer animate={hamburgerState} variants={hamburgerContainerMotionVariants}>
                    {hamburgerLinks}
                </HamburgerContainer>
            }
            {headerLinks}

        </Container>
    )
}

export default Header;

const links = ['RSVP', 'DETAILS', 'REGISTRY', 'STORY', 'PEOPLE', 'CITY'];

const Container = styled(Row)(() => [
    tw`
        justify-evenly
        items-center
        pt-10 lg:pt-20
        pb-10
        relative
    `
])

const HamburgerContainer = styled(ColCentered)(() => [
    tw`
        w-full
        h-screen
        space-y-2
        bg-bone
        top-0 // maybe negative for some reason
        z-10
        absolute
        lg:hidden
    `
])

const hamburgerContainerMotionVariants = {
    open: {
        display: 'flex'
    },
    closed: {
        display: 'none'
    }
}

const HeaderLink = styled(Link)<{variant: 'hamburger' | 'header'}>((props) => [
    props.variant === 'hamburger' ? 
        tw`
            text-4xl
        ` : tw`
            hidden
            lg:flex
        `
])

const LogoText = styled.p<{variant: 'names' | 'date'}>((props) => [
    tw`
        text-darkTerracotta
    `,
    props.variant === 'names' ? 
        tw`
            text-3xl lg:text-5xl 
            font-weiss
            whitespace-nowrap
        ` : tw`
            font-sans 
            font-light
            text-xs
            tracking-[0.375rem]
        `
])

const HeaderLinkText = styled.p(() => [
    tw`
        font-weiss
        tracking-[0.2rem]
        text-darkTerracotta
        duration-200
        hover:-translate-y-1
        hover:drop-shadow-sm
    `   
])