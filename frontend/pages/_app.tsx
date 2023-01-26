import "styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "contexts/theme-context";
import { ThemeSwitch } from "components/ThemeSwitch/ThemeSwitch";

function MyApp({ Component, pageProps }: AppProps) {
  const GTM_ID = "GTM-W7FJHRQ";
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
      <ThemeProvider>
        <Component {...pageProps} />
        <ThemeSwitch />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
