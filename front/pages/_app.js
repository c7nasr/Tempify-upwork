import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
   <Head>
   <html className="dark" />
        <title>Tempify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <Component {...pageProps} />
  </>
}

export default MyApp
