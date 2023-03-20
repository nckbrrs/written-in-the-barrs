import tw, { styled } from "twin.macro";
import { Col } from "./base";
import "twin.macro";

interface ContentHeaderProps {
    text: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({text}) => {
    return (
        <Container>
            <Text>{text.toUpperCase()}</Text>
            <Separator/>
        </Container>   
    )
}

const Container = styled(Col)(() => [
    tw`
        items-center
        justify-between
        h-16 lg:h-20
    `
])

const Text = styled.p(() => [
    tw`
        font-weiss
        text-darkTerracotta
        tracking-[0.5rem]
        lg:text-xl
    `
])

const Separator = styled(Col)(() => [
    tw`
        w-[1px]
        h-6 lg:h-8
        bg-darkTerracotta
    `
])

export default ContentHeader;

