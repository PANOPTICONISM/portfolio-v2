import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Panopticonism</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Software Developer" />
        <meta
          name="keywords"
          content="Software Developer, Frontend Developer, Software Engineer, HTML, CSS, JavaScript, React, NextJS, Angular, NodeJS, SASS, Docker"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
