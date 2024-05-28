import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

/** 각 page component의 getLayout함수를 수용 */
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode;
};
