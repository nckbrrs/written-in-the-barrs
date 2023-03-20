import Image from 'next/image';
import { Col, Row } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import tw, { styled } from 'twin.macro';

const Parking: React.FC = () => (
  <Page>
    <Content>
      <ContentHeader text="PARKING"/>
      <ImageContainer>
        <StyledImage src="/images/parkingGuide.png" fill alt='parking guide'/>
      </ImageContainer>
    </Content>
  </Page>
)

export default Parking

const Page = styled(Col)(() => [
  tw`
    h-full
    justify-start
    items-center
  `
])

const Content = styled(Col)(() => [
  tw`
    w-full
    h-full
    max-w-[60rem]
  `
])

const ImageContainer = styled(Row)(() => [
  tw`
    h-screen
    relative
    mt-6
    overflow-hidden
  `
])

const StyledImage = styled(Image)(() => [
  tw`
    object-contain
    drop-shadow-lg
  `
])