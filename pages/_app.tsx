import Navbar from "@/components/navbar/Navbar";
import { play } from "@/helpers/fonts";
import GlobalStyles from "@/styles/app.style";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";


export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <main className={play.className}>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
        <Analytics />
      </main>
    </>
  );
}
