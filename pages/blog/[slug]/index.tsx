import { Posts } from "@/interface/postInterface";
import { getPost } from "@/sanity/sanity-utils";
import { BlogPostContainer } from "@/styles/blogPost.style";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

const BlogPost = ({ post }: any) => {
  return (
    <BlogPostContainer>
      <h1>{post.title}</h1>
      <Image src={post.image} alt={post.title} width={600} height={400} />
      <p> {post.date_created}</p>
      <PortableText value={post.post} />
    </BlogPostContainer>
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
