import React from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="theme-color" content="#e9e9e9" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nick & Brooke"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content="https://i.imgur.com/w6IT0Ul.png"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@nckbrrs" />
        <meta name="twitter:image" content="https://i.imgur.com/P6AL6S8.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheet.getStyleElement()}
        </React.Fragment>,
      ],
    }
  } finally {
    sheet.seal()
  }
}

export default MyDocument;