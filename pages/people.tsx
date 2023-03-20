import { Col } from '../components/base';
import 'twin.macro';
import ContentHeader from '../components/contentHeader';
import PartyMember from '../components/partyMember';
import tw, { styled } from 'twin.macro';

const People: React.FC = () => (
  <Page>
    <Content>
      <ContentHeader text="OUR PEOPLE"/>
      <SubContainer>
        <PeopleCol>
          <PeopleHeaderText>
            THE LADIES
          </PeopleHeaderText>
          {Girls.map((b, i) => 
            <PartyMember
              name={b}
              title={i === 0 ? 'Maid of Honor' : 'Bridesmaid'}
              imagePath={`/images/bridalParty/${b.split(' ')[0]}.png`}
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
              name={b}
              title={i === 0 ? 'Best Man' : 'Groomsman'}
              imagePath={`/images/bridalParty/${b.split(' ')[0]}.png`}
              picOnLeft={i % 2 === 0}
            />
          )}
        </PeopleCol>
      </SubContainer>
    </Content>
  </Page>
)

export default People

const Boys = [
  'Win Marks',
  'John Wheeler',
  'Thomas Riedy',
  'Eric White',
  'Sam Lopane',
  'Kevin Wright',
  'Ryan Barrs',
  'Joe Barrs',
  'Stephen Odom',
  'Wes Forehand'
]

const Girls = [
  'Kassidy Gomes',
  'Amberlyn White',
  'Zoe Swift',
  'Maddi Martin',
  'Claire Smith',
  'Sarah Wills',
  'Hannah Forehand',
  'Holly Powell',
  'Ashley Carsten',
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