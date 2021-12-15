import "../styles/globals.css";

import Head from "next/head";
import NextNProgress from 'nextjs-progressbar';
import {Toaster} from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNProgress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
      <Toaster  position="bottom-right" reverseOrder={false} />

      <Head>
        <title>Tempify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
