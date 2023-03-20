import Head from 'next/head'
import Image from 'next/image'
import { Col, Row, RowCentered } from '../components/base';
import 'twin.macro';
import tw, { styled } from 'twin.macro';

const Home: React.FC = () => (
  <ContentContainer>
    <HeroAndBlobContainer>
      <HeroImage
        src="/images/hero.jpeg"
        fill
        alt='Nick on one knee, proposing to Brooke in his living room'
      />
      <BlobContainer>
        <BlobImage
          src={"/images/blobWithBranch.png"}
          fill
          alt='graphic blob with date and location of wedding'
          
        />
        <BlobText>
          JUNE 24, 2022
          <br/>
          CARY, NC
        </BlobText>
      </BlobContainer>
    </HeroAndBlobContainer>
  </ContentContainer>
)

const HeroImage = styled(Image)(() => [
  tw`
    object-cover
    object-center
    rounded-[20px]
    drop-shadow-md
  `
])

const BlobImage = styled(Image)(() => [
  tw`
    object-cover
    drop-shadow-md
  `
])

const ContentContainer = styled(Col)(() => [
  tw`
    h-full
    justify-start lg:justify-start 
    items-center
    px-2 md:p-12
  `
])

const HeroAndBlobContainer = styled(Row)(() => [
  tw`
    h-full
    w-full sm:w-auto
    max-w-[100%]
    min-h-[10rem]
    md:h-full
    relative
    aspect-auto
    sm:aspect-[3/4] md:aspect-[5/3]
  `
])

const BlobContainer = styled(RowCentered)(() => [
  tw`
    w-48 md:w-64
    absolute
    -bottom-[3.4rem]
    -right-3
    aspect-[1104/684]
  `
])

const BlobText = styled.p(() => [
  tw`
      font-weiss
      text-darkTerracotta
      -translate-x-[20%]
      translate-y-[15%]
      md:text-xl 
  `
])

export default Home