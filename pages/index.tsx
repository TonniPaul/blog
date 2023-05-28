import PostCard from "@/components/cards/postCard/PostCard";
import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";
import { dateFormat } from "@/helpers/dateFormat";
import { MyPosts, Posts } from "@/interface/postInterface";
import { getPosts } from "@/sanity/sanity-utils";
import { Container, FlexContainer } from "@/styles/home.styles";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({ posts }: MyPosts) {
  return (
    <Layout>
      <Hero />
      <Container>
        <h3>WEB TECHNOLOGIES</h3>
        <FlexContainer>
          {posts.map((post, index) => {
            {
              console.log(post.summary);
            }
            return (
              <PostCard
                key={index}
                slug={post.slug}
                image={post.image}
                title={post.title}
                date={dateFormat(post.date_created)}
                summary={post.summary}
              />
            );
          })}
        </FlexContainer>
      </Container>
    </Layout>
  );
}

export const revalidate = 2;

export async function getServerSideProps() {
  const posts: Posts[] = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
