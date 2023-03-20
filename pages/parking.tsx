import Image from 'next/image';
import { Col, Row } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import tw, { styled } from 'twin.macro';
import ParkingGuide from '../public/images/parkingGuide.png';

const Parking: React.FC = () => (
  <Page>
    <Content>
      <ContentHeader text="PARKING"/>
      <ImageContainer>
        <StyledImage src={ParkingGuide} fill alt='parking guide'/>
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
    drop-shadow-[0px 5px 5px rgb(0 0 0 / 0.05)]
    `
])