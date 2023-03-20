import Image, { StaticImageData } from 'next/image';
import tw, { styled } from 'twin.macro';
import { Col, Row  } from './base';
import 'twin.macro';
import LinkIcon from './icons/Link';
import LocationIcon from './icons/Location';

interface POIProps {
    name: string;
    image: StaticImageData;
    websiteHref: string;
    locationHref?: string;
}

const POI: React.FC<POIProps> = ({image, name, websiteHref, locationHref}) => {
    return (
        <Container>
            <ImageContainer>
                <a href={websiteHref} target="_blank" rel="noopener noreferrer" tw="relative w-full h-full">
                    <StyledImage
                        fill
                        priority
                        sizes={'200px'}
                        src={image}
                        alt={`${name}-logo`}
                    />
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
        duration-100
    `
])

const LinkRow = styled(Row)(() => [
    tw`
        w-full
        justify-start
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
        shadow-[0px 3px 3px rgb(0 0 0 / 0.05)]
    `
])

export default POI;