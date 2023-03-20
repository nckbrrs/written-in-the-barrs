import Image from 'next/image';
import { Col, ColCentered } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import POI from '../components/poi';
import tw, { styled } from 'twin.macro';
import CB from '../public/images/registry/cb.png';
import Target from '../public/images/registry/target.png';
import Amazon from '../public/images/registry/amazon.png';

const Details: React.FC = () => (
  <Page>
    <ContentHeader text="REGISTRY"/>
    <Content>
      {registries.map((r) => 
        <POI
          image={r.image}
          name={r.name}
          websiteHref={r.websiteHref}
        />
      )}
    </Content>
  </Page>
)

export default Details;

const registries = [
  {
    name: 'CRATE & BARREL',
    image: CB,
    websiteHref: 'https://www.crateandbarrel.com/gift-registry/brooke-barrs-and-nick-barrs/r6515129'
  },
  {
    name: 'AMAZON',
    image: Amazon,
    websiteHref: 'https://www.amazon.com/wedding/share/writteninthebarrs'
  },
  {
    name: 'TARGET',
    image: Target,
    websiteHref: 'https://www.target.com/gift-registry/gift/writteninthebarrs'
  }
]

const Page = styled(Col)(() => [
  tw`
    h-full
    justify-start
    items-center
  `
])

const Content = styled(ColCentered)(() => [
  tw`
    w-full
    px-12
    max-w-[60rem]
    space-y-7 md:space-y-0
    md:flex-row
    md:space-x-8
    pt-8
  `
])