import Navbar from "@/components/navbar/Navbar";
import { play } from "@/helpers/fonts";
import GlobalStyles from "@/styles/app.style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={play.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
