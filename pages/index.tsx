import PostCard from "@/components/cards/postCard/PostCard";
import Hero from "@/components/hero/Hero";
import Layout from "@/components/layout/Layout";
import { dateFormat } from "@/helpers/dateFormat";
import { MyPosts, Posts } from "@/interface/postInterface";
import { getPosts } from "@/sanity/sanity-utils";
import { Container, FlexContainer, NoPostStyle } from "@/styles/home.styles";
import { ReactElement } from "react";

export default function Home({ posts }: MyPosts) {
  return (
    <>
      <Hero />
      {posts ? (
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
      ) : (
        <NoPostStyle>
          <p>No Post yet</p>
        </NoPostStyle>
      )}
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  const posts: Posts[] = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
