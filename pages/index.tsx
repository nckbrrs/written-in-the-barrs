import Image from 'next/image'
import { Col, Row, RowCentered } from '../components/base';
import 'twin.macro';
import tw, { styled } from 'twin.macro';
import Hero from '../public/images/hero.jpeg';
import BlobWithBranch from '../public/images/blobWithBranch.png';

const Home: React.FC = () => (
  <ContentContainer>
    <HeroAndBlobContainer>
      <HeroImage
        src={Hero}
        fill
        priority
        alt='Nick on one knee, proposing to Brooke in his living room'
      />
      <BlobContainer>
        <BlobImage
          src={BlobWithBranch}
          fill
          priority
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
    drop-shadow-[0px 3px 3px rgb(0 0 0 / 0.05)]
    `
])

const BlobImage = styled(Image)(() => [
  tw`
    object-cover
    drop-shadow-[0px 3px 3px rgb(0 0 0 / 0.05)]
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