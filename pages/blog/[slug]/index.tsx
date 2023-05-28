import Layout from "@/components/layout/Layout";
import { Posts } from "@/interface/postInterface";
import { getPost } from "@/sanity/sanity-utils";
import {
  BlogImageContainer,
  BlogPostContainer,
  PortableTextContainer,
  PublishDetailsContainer,
} from "@/styles/blogPost.style";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

const BlogPost = ({ post }: any) => {
  return (
    <Layout title={post.title} description={post.summary}>
      <BlogPostContainer>
        <h1>{post.title}</h1>
        <BlogImageContainer>
          <Image src={post.image} alt={post.title} fill />
        </BlogImageContainer>
        <PublishDetailsContainer>
          <p> Publish Date: {post.date_created}</p>
          <p>Author: {post.author} </p>
        </PublishDetailsContainer>
        <PortableTextContainer>
          <PortableText value={post.post} />
        </PortableTextContainer>
      </BlogPostContainer>
    </Layout>
  );
};

export default BlogPost;

export async function getServerSideProps({ params }: Props) {
  const slug = params.slug;
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}
