import Layout from "@/components/layout/Layout";
import { Posts } from "@/interface/postInterface";
import { getPost } from "@/sanity/sanity-utils";
import {
  BlogImageContainer,
  BlogPostContainer,
  GoBackBtn,
  PortableTextContainer,
  PublishDetailsContainer,
} from "@/styles/blogPost.style";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  params: { slug: string };
}

const BlogPost = ({ post }: any) => {
  const router = useRouter();

  const formattedDate = new Date(post.date_created).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Layout title={post.title} description={post.summary}>
      <BlogPostContainer>
        <GoBackBtn onClick={() => router.back()}>
          <Image
            src={"/assets/back-icon.png"}
            alt="back-icon"
            width={20}
            height={20}
          />
          Go Back
        </GoBackBtn>
        <h1>{post.title}</h1>
        <BlogImageContainer>
          <Image src={post.image} alt={post.title} fill />
        </BlogImageContainer>
        <PublishDetailsContainer>
          <p> Publish Date: {formattedDate}</p>{" "}
          {/* Display the formatted date */}
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
