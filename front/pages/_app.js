import "../styles/globals.css";

import Head from "next/head";
import {Toaster} from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
