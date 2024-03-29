import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import Head from "next/head";

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/assets/tn.png" />
      </Head>
      <NextStudio config={config} />
    </>
  );
};

export default AdminPage;
