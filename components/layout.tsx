import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Col, Row } from "./base";
import "twin.macro";
import Head from "next/head";
import tw, { styled } from "twin.macro";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <Head>
                <title>Nick & Brooke</title>
            </Head>
            <Screen>
                <Container>
                    <Header/>
                    <Content>
                        {children}
                    </Content>
                    <Footer/>
                </Container>
            </Screen>
        </>
    )
}

const Screen = styled(Row)(() => [
    tw`
        min-h-screen
        justify-center
        overflow-x-hidden
    `
])

const Container = styled(Col)(() => [
    tw`
        w-screen
        max-w-[2000px]
        justify-between
        px-3 md:px-8 lg:px-12
    `
])

const Content = styled(Col)(() => [
    tw`
        h-full
        justify-start
    `
])

export default Layout;

