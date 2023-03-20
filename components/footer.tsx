import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { Row  } from './base';
import 'twin.macro';

const Footer: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={"/images/footerNB.png"} fill alt='N+B logo' tw="object-contain"/>
            </ImageContainer>
        </Container>
    )
}

const Container = styled(Row)(() => [
    tw`
        justify-center
        items-center
        pt-10 
        pb-8 
        xl:pb-20
        opacity-0 lg:opacity-100
    `
])

const ImageContainer = styled(Row)(() => [
    tw`
        relative
        w-full
        h-10
    `
])

export default Footer;