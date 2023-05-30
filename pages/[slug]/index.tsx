import { ClipArt } from "@/components/hero/hero.style";
import Layout from "@/components/layout/Layout";
import { RichTextComponents } from "@/components/richTextComponent/RichTextComponent";
import { dateFormat } from "@/helpers/dateFormat";
import { getPost, getPosts } from "@/sanity/sanity-utils";
import {
  BlogImageContainer,
  BlogPostContainer,
  GoBackBtn,
  PublishDetailsContainer,
  TitleText,
} from "@/styles/blogPost.style";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  params: { slug: string };
}

const BlogPost = ({ post }: any) => {
  const router = useRouter();

  return (
    <Layout title={post.title} description={post.summary}>
      <BlogPostContainer>
        <TitleText>
          <ClipArt>{post.title}</ClipArt>
        </TitleText>
        <PublishDetailsContainer>
          <p> {dateFormat(post.date_created)}</p>-<p>{post.author} </p>
        </PublishDetailsContainer>
        <BlogImageContainer>
          <Image src={post.image} alt={post.title} fill />
        </BlogImageContainer>

        <PortableText value={post.post} components={RichTextComponents} />

        <GoBackBtn onClick={() => router.back()}>
          <Image
            src={"/assets/back-icon.png"}
            alt="back-icon"
            width={20}
            height={20}
          />
          Go Back
        </GoBackBtn>
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

export const revalidate = 2;

export const generateStaticParams = async () => {
  // Retrieve all posts from the API
  const posts = await getPosts();

  // Extract the slugs from each post
  const slugs = posts.map((post) => post.slug);

  // Return an array of objects with the required `params` structure
  return slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));
};
