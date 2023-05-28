import { ClipArt } from "@/components/hero/hero.style";
import Layout from "@/components/layout/Layout";
import { dateFormat } from "@/helpers/dateFormat";
import { Posts } from "@/interface/postInterface";
import { getPost } from "@/sanity/sanity-utils";
import {
  BlogImageContainer,
  BlogPostContainer,
  GoBackBtn,
  PortableTextContainer,
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

        <PortableTextContainer>
          <PortableText value={post.post} />
        </PortableTextContainer>

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
