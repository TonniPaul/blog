"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import Head from "next/head";

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/assets/blog.png" />
      </Head>
      <NextStudio config={config} />
    </>
  );
};

export default AdminPage;
