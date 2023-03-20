import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { ColCentered } from "../components/base";
import 'twin.macro';
import tw, { styled } from "twin.macro";

const NotFound: React.FC = () => {
    const router = useRouter();
    const [secondsOnPage, setSecondsOnPage] = useState(0);
    const secondsToWaitBeforeRerouting = 5;

    useEffect(() => {
        setTimeout(() => {
            setSecondsOnPage(secondsOnPage + 1)
        }, 1000)
        
        if (secondsOnPage >= secondsToWaitBeforeRerouting) {
            router.push('/')
        }
    }, [secondsOnPage])
    
    return (
        <Container>
            <p>Oops! There's nothing here!</p>
            <p>In {secondsToWaitBeforeRerouting - secondsOnPage} seconds, you will be navigated to the <Link href="/">home page.</Link></p>
        </Container>
    )
}

const Container = styled(ColCentered)(() => [
    tw`
        h-full
        text-darkTerracotta
        font-weiss
    `
])

export default NotFound;