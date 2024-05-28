import { type AppProps } from 'next/app';
import Head from 'next/head';

import { type NextPageWithLayout } from 'src/types/common';

import 'src/styles/globals.css';
import 'src/styles/animation.css';
import 'src/styles/use-guide.css';
import { fontNotoSansKr } from 'src/fonts';

const NAME = 'PICKCLE';

type CustomAppProps = AppProps<any> & { Component: NextPageWithLayout };

export default function MyApp(props: CustomAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <title>{NAME}</title>
        <meta content='width=device-width' name='viewport' />
        <meta content={NAME} name='description' />
        <meta content={NAME} property='og:site_name' />
        <meta content={NAME} property='og:title' />
        <meta content={NAME} property='og:description' />
        <meta content='website' property='og:type' />
        {/* <meta content='https://localhost:3000' property='og:url' /> */}
      </Head>
      <>
        <style jsx global>{`
          :root {
            --font-noto-sans-kr: ${fontNotoSansKr.style.fontFamily};
          }
        `}</style>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </>
    </>
  );
}
