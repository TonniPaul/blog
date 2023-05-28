import PostCard from "@/components/cards/postCard/PostCard";
import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";
import { MyPosts, Posts } from "@/interface/postInterface";
import { getPosts } from "@/sanity/sanity-utils";
import { Container, FlexContainer } from "@/styles/home.styles";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({ posts }: MyPosts) {
  return (
    <Layout>
      <main>
        <Hero />
        <Container>
          <h3>All Articles</h3>
          <FlexContainer>
            {posts.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  slug={post.slug}
                  image={post.image}
                  title={post.title}
                />
              );
            })}
          </FlexContainer>
        </Container>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts: Posts[] = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
