import Image, { StaticImageData } from 'next/image';
import tw, { styled } from 'twin.macro';
import { Col, Row  } from './base';
import 'twin.macro';

interface PartyMemberProps {
    name: string;
    image: StaticImageData;
    title: string;
    picOnLeft?: boolean;
}

const PartyMember: React.FC<PartyMemberProps> = ({name, image, title, picOnLeft}) => {
    return (
        <Container picOnLeft={picOnLeft}>
            <ImageContainer picOnLeft={picOnLeft}>
                <StyledImage
                    fill
                    priority
                    src={image}
                    alt={`weddingParty-${name}`}
                />
            </ImageContainer>
            <NameLabel picOnLeft={picOnLeft}>
                <NameLabelText variant={'name'}>{name.toUpperCase()}</NameLabelText>
                <NameLabelText variant={'title'}>{title.toUpperCase()}</NameLabelText>
            </NameLabel>
        </Container>
    )
}

const StyledImage = styled(Image)(() => [
    tw`
        object-cover
        rounded-full
    `
])

const NameLabelText = styled.p<{variant: 'name' | 'title'}>((props) => [
    tw`
        font-sans
        text-darkTerracotta
        tracking-widest
    `,
    props.variant === 'name' ?
        tw`
            font-bold
            text-sm
        ` : tw`
            text-xs
        `

])

const Container = styled(Row)<{picOnLeft: boolean | undefined}>((props) => [
    tw`
        justify-center
        items-center
        w-full
        h-full
    `,
    !props.picOnLeft && tw`
        flex-row-reverse
    `
])

const ImageContainer = styled(Row)<{picOnLeft: boolean | undefined}>((props) => [
    tw`
        relative
        w-36 md:w-48 lg:w-64
        h-auto
        aspect-square
    `,
    props.picOnLeft ? 
        tw`
            translate-x-4
        ` : tw`
            -translate-x-4
        `
])

const NameLabel = styled(Col)<{picOnLeft: boolean | undefined}>((props) => [
    tw`
        bg-white
        w-fit
        rounded-lg
        py-3
        px-5
        w-fit
        whitespace-nowrap
    `,
    props.picOnLeft ? 
        tw`
            -translate-x-4
        ` : tw`
            translate-x-4
            text-right
        `
])

export default PartyMember;