import { Col } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import PartyMember from '../components/partyMember';
import tw, { styled } from 'twin.macro';
import Amberlyn from '../public/images/bridalParty/amberlyn.png';
import Ashley from '../public/images/bridalParty/ashley.png';
import Claire from '../public/images/bridalParty/claire.png';
import Eric from '../public/images/bridalParty/eric.png';
import Hannah from '../public/images/bridalParty/hannah.png';
import Holly from '../public/images/bridalParty/holly.png';
import Joe from '../public/images/bridalParty/joe.png';
import John from '../public/images/bridalParty/john.png';
import Kassidy from '../public/images/bridalParty/kassidy.png';
import Kevin from '../public/images/bridalParty/kevin.png';
import Maddi from '../public/images/bridalParty/maddi.png';
import Ryan from '../public/images/bridalParty/ryan.png';
import Sam from '../public/images/bridalParty/sam.png';
import Sarah from '../public/images/bridalParty/sarah.png';
import Stephen from '../public/images/bridalParty/stephen.png';
import Thomas from '../public/images/bridalParty/thomas.png';
import Wes from '../public/images/bridalParty/wes.png';
import Win from '../public/images/bridalParty/win.png';
import Zoe from '../public/images/bridalParty/zoe.png';


const People: React.FC = () => (
  <Page>
    <Content>
      <ContentHeader text="OUR PEOPLE"/>
      <SubContainer>
        <PeopleCol>
          <PeopleHeaderText>
            THE LADIES
          </PeopleHeaderText>
          {Girls.map((g, i) => 
            <PartyMember
              name={g.name}
              title={g.title}
              image={g.image}
              picOnLeft={i % 2 === 0}
            />
          )}
        </PeopleCol>
        <BigSeparator/>
        <PeopleCol>
          <PeopleHeaderText>
            THE BOYS
          </PeopleHeaderText>
          {Boys.map((b, i) => 
            <PartyMember
              name={b.name}
              title={b.title}
              image={b.image}
              picOnLeft={i % 2 === 0}
            />
          )}
        </PeopleCol>
      </SubContainer>
    </Content>
  </Page>
)

export default People

const Girls = [
  {
      image: Kassidy,
      name: 'Kassidy Gomes',
      title: 'Maid of Honor'
  },
  {
      image: Amberlyn,
      name: 'Amberlyn White',
      title: 'Bridesmaid'
  },
  {
      image: Zoe,
      name: 'Zoë Swift',
      title: 'Bridesmaid'
  },
  {
      image: Maddi,
      name: 'Maddi Martin',
      title: 'Bridesmaid'
  },
  {
      image: Claire,
      name: 'Claire Smith',
      title: 'Bridesmaid'
  },
  {
      image: Sarah,
      name: 'Sarah Wills',
      title: 'Bridesmaid'
  },
  {
      image: Hannah,
      name: 'Hannah Forehand',
      title: 'Bridesmaid'
  },
  {
      image: Holly,
      name: 'Holly Powell',
      title: 'Bridesmaid'
  },
  {
      image: Ashley,
      name: 'Ashley Carsten',
      title: 'Bridesmaid'
  }
]

const Boys = [
  {
      image: Win,
      name: 'Win Marks',
      title: 'Best Man'
  },
  {
      image: John,
      name: 'John Wheeler',
      title: 'Groomsman'
  },
  {
      image: Thomas,
      name: 'Thomas Riedy',
      title: 'Groomsman'
  },
  {
      image: Eric,
      name: 'Eric White',
      title: 'Groomsman'
  },
  {
      image: Sam,
      name: 'Sam Lopane',
      title: 'Groomsman'
  },
  {
      image: Kevin,
      name: 'Kevin Wright',
      title: 'Groomsman'
  },
  {
      image: Ryan,
      name: 'Ryan Barrs',
      title: 'Groomsman'
  },
  {
      image: Joe,
      name: 'Joe Barrs',
      title: 'Groomsman'
  },
  {
      image: Stephen,
      name: 'Stephen Odom',
      title: 'Groomsman'
  },
  {
      image: Wes,
      name: 'Wes Forehand',
      title: 'Groomsman'
  },
]

const Page = styled(Col)(() => [
  tw`
    h-full
    justify-start
    items-center
  `
])

const Content = styled(Col)(() => [
  tw`
    px-4
    w-full
    max-w-[80rem]
  `
])

const SubContainer = styled(Col)(() => [
  tw`
    w-full
    lg:flex-row
    space-y-8 lg:space-y-0
    lg:space-x-4
    mt-4 lg:mt-0
  `
])

const PeopleCol = styled(Col)(() => [
  tw`
    w-full
    items-center
  `
])

const PeopleHeaderText = styled.p(() => [
  tw`
    font-weiss
    text-darkTerracotta
    tracking-[0.25rem]
    mb-8
  `
])

const BigSeparator = styled(Col)(() => [
  tw`
    hidden lg:flex
    bg-darkTerracotta
    w-[2px]
    h-full
  `
])