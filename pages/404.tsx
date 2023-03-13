import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import { ColCentered } from "../components/base";
import 'twin.macro';

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
        <>
            <Head>
                <title>TITLE / 404</title>
            </Head>
            <ColCentered tw="h-full text-white font-serif">
                <p>Oops! There's nothing here!</p>
                <p>In {secondsToWaitBeforeRerouting - secondsOnPage} seconds, you will be navigated to the <Link href="/">home page.</Link></p>
            </ColCentered>
        </>
    )
}

export default NotFound;