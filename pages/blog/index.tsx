import PostCard from "@/components/cards/postCard/PostCard";
import Layout from "@/components/layout/Layout";
import { MyPosts, Posts } from "@/interface/postInterface";
import { getPosts } from "@/sanity/sanity-utils";
import { Container, FlexContainer } from "@/styles/home.styles";

const BlogPage = ({ posts }: MyPosts) => {
  const formattedDate = new Date(posts[0].date_created).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
  return (
    <Layout>
      <Container>
        <h3>WEB TECHNOLOGIES</h3>
        <FlexContainer>
          {posts.map((post, index) => {
            return (
              <PostCard
                key={index}
                slug={post.slug}
                image={post.image}
                title={post.title}
                date={formattedDate}
                summary={post.summary}
              />
            );
          })}
        </FlexContainer>
      </Container>
    </Layout>
  );
};

export default BlogPage;

export async function getServerSideProps() {
  const posts: Posts[] = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
