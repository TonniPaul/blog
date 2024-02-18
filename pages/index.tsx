import PostCard from "@/components/cards/postCard/PostCard";
import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";
import NewsLetter from "@/components/news-letter/newsletter";
import ShowView from "@/components/show-view/show-view";
import { dateFormat } from "@/helpers/dateFormat";
import { MyPosts, Posts } from "@/interface/postInterface";
import { client } from "@/sanity/config/client.config";
import { allPostsQuery } from "@/sanity/fetch";
import { Container, FlexContainer, NoPostStyle } from "@/styles/home.styles";
import { GetStaticProps } from "next";
import { ReactElement } from "react";

interface IPostProps {
  posts: Posts[] | null;
}

export default function Home({ posts }: MyPosts) {
  return (
    <>
      <Hero />
      <ShowView when={posts !== null}>
        <div>
          <Container>
            <h3>BLOG POSTS</h3>
            <FlexContainer>
              {posts.map((post) => {
                return (
                  <PostCard
                    key={post._createdAt}
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
        </div>
      </ShowView>

      <ShowView when={!posts}>
        <NoPostStyle>
          <p>No posts have been published yet. Check back soon for updates!</p>
        </NoPostStyle>
      </ShowView>

      <NewsLetter />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps<IPostProps> = async () => {
  if (!client) {
    return {
      props: {
        posts: null,
      },
    };
  }

  const posts = await client.fetch(allPostsQuery)

  return {
    props: {
      posts
    },
  };
}
