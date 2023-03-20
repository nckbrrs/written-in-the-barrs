import Image from 'next/image';
import { Col, Row } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import ClockIcon from '../components/icons/Clock';
import LocationIcon from '../components/icons/Location';
import tw, { styled } from 'twin.macro';
import Map from '../public/images/map.png';

const Details: React.FC = () => (
  <Page>
    <Content>
      <ContentHeader text="DETAILS"/>
      <SubContainer>
        <ImageContainer>
          <StyledImage
            src={Map}
            fill
            priority
            alt='map of cary with venue'
          />
        </ImageContainer>
        <DetailsContainer>
          <Col tw="items-center">
            <IconContainer>
              <ClockIcon/>
            </IconContainer>
            <DetailText variant={'big'}>
              JUNE 24, 2022
            </DetailText>
            <DetailText variant={'small'}>
              4:30 PM
            </DetailText>
          </Col>
          <Col tw="items-center">
            <IconContainer>
              <LocationIcon/>
            </IconContainer>
            <DetailText variant={'big'}>
              CHATHAM STATION
            </DetailText>
            <DetailText variant={'small'}>
              110 N WALKER ST, CARY, NC
            </DetailText>
          </Col>
        </DetailsContainer>
      </SubContainer>
    </Content>
  </Page>
)

export default Details


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
    max-w-[60rem]
    px-4
  `
])

const SubContainer = styled(Col)(() => [
  tw`
    w-full
    h-full
    justify-start
    p-2
  `
])

const ImageContainer = styled(Row)(() => [
  tw`
    h-40 md:h-64 lg:h-96
    relative
    mb-2
  `
])

const StyledImage = styled(Image)(() => [
  tw`
    object-contain
    drop-shadow-[0px 3px 3px rgb(0 0 0 / 0.05)]
  `
])

const DetailsContainer = styled(Col)(() => [
  tw`
    h-fit
    justify-center
    space-y-3 lg:space-y-0
    lg:flex-row
    lg:space-x-24
  `
])

const IconContainer = styled(Row)(() => [
  tw`
    w-8
    h-8
    fill-darkTerracotta
    mb-2
  `
])

const DetailText = styled.p<{variant: 'big' | 'small'}>((props) => [
  tw`
    font-weiss text-darkTerracotta
  `,
  props.variant === 'big' && tw`font-bold text-xl`
])