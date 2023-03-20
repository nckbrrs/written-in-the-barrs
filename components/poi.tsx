import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { Col, Row  } from './base';
import 'twin.macro';
import LinkIcon from './icons/Link';
import LocationIcon from './icons/Location';

interface POIProps {
    name: string;
    imagePath: string;
    websiteHref: string;
    locationHref?: string;
}

const POI: React.FC<POIProps> = ({imagePath, name, websiteHref, locationHref}) => {
    return (
        <Container>
            <ImageContainer>
                <a href={websiteHref} target="_blank" rel="noopener noreferrer">
                    <StyledImage fill src={imagePath} alt={`${name}-logo`}/>
                </a>
            </ImageContainer>
            <Row tw="w-full">
                <NameText>
                    {name.includes('\n') ? <>
                        {name.split('\n')[0].toUpperCase()}
                        <br/>
                        {name.split('\n')[1].toUpperCase()}
                    </> : <>
                        {name.toUpperCase()}
                    </>}
                </NameText>
            </Row>
            <LinkRow>
                <a href={websiteHref} target="_blank" rel="noopener noreferrer" tw="w-1/2">
                    <LinkIconContainer>
                        <LinkIcon/>
                    </LinkIconContainer>
                </a>
                {locationHref && 
                    <a href={locationHref} target="_blank" rel="noopener noreferrer" tw="w-1/2">
                        <LinkIconContainer>
                            <LocationIcon/>
                        </LinkIconContainer>
                    </a>
                }
            </LinkRow>
        </Container>
    )
}

const LinkIconContainer = styled(Row)(() => [
    tw`
        justify-center
        w-full
        h-8
        p-2
        bg-lightTerracotta
        fill-white
        rounded-3xl
        hover:bg-darkTerracotta
    `
])

const LinkRow = styled(Row)(() => [
    tw`
        w-full
        justify-start
        drop-shadow-sm
        space-x-2 lg:space-x-4
    `
])

const NameText = styled.p(() => [
    tw`
        font-sans
        font-bold
        text-darkTerracotta
        text-left
        whitespace-nowrap
        text-sm lg:text-base
    `
])

const ImageContainer = styled(Row)(() => [
    tw`
        relative
        w-full
        h-full
        aspect-square
        drop-shadow-md
    `
])

const StyledImage = styled(Image)(() => [
    tw`
        rounded-2xl
        object-cover
    `
])

const Container = styled(Col)(() => [
    tw`
        justify-center
        items-center
        bg-white
        rounded-3xl
        p-3 lg:p-5
        w-full
        space-y-3
        drop-shadow-md
    `
])

export default POI;