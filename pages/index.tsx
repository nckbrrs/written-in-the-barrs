import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>TITLE / Home</title>
    </Head>
    <Col tw="h-full justify-center items-center">
      <p tw="text-5xl">content</p>
    </Col>
  </>
)

export default Home