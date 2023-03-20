import { Col } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import tw, { styled } from 'twin.macro';

const RSVP: React.FC = () => (
  <Page>
    <Container>
      <ContentHeader text="RSVP"/>
      <Text>
        {'Sorry, RSVPs are no longer being processed.'.toUpperCase()}
      </Text>
    </Container>
  </Page>
)

export default RSVP

const Page = styled(Col)(() => [
  tw`
    h-full
    justify-start
    items-center
  `
])

const Container = styled(Col)(() => [
  tw`
    px-4
    w-full
    max-w-[60rem]
  `
])

const Text = styled.p(() => [
  tw`
    font-sans
    font-light
    text-darkTerracotta
    text-center
    mt-6
    tracking-[0.3rem]
  `
])