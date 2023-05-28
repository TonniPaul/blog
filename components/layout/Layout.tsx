import Head from "next/head";
import Navbar from "../navbar/Navbar";
import { ReactNode } from "react";
import Footer from "../footer/Footer";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "TonniPaul Blog - Exploring Frontend Development and Technologies"}
        </title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Tonnipaul is a blog dedicated to the world of frontend development and technologies. Explore insightful articles, tutorials, and resources covering the latest trends, frameworks, and tools in the frontend space. Stay up-to-date with the rapidly evolving field of frontend development and enhance your skills in HTML, CSS, JavaScript, React js, Next js, TypeScript, and more."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/blog.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
