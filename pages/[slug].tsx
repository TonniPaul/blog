import CommentCard from "@/components/cards/commentCard/CommentCard";
import CommentForm from "@/components/commentForm/CommentForm";
import { ClipArt } from "@/components/hero/hero.style";
import Layout from "@/components/layout/Layout";
import { RichTextComponents } from "@/components/richTextComponent/RichTextComponent";
import ShareToSocialMedia from "@/components/share-to-social/share-to-social";
import { dateFormat } from "@/helpers/dateFormat";
import getTimeAgoString from "@/helpers/time-difference";
import { CommentInterface } from "@/interface/comment.interface";
import { Posts } from "@/interface/postInterface";
import { client } from "@/sanity/config/client.config";
import { currentPath, postQuery } from "@/sanity/fetch";
import {
  BlogBodyContainer,
  BlogImageContainer,
  BlogPostContainer,
  CommentContainer,
  GoBackBtn,
  PublishDetailsContainer,
  TitleText,
} from "@/styles/blogPost.style";
import { PortableText } from "@portabletext/react";
import { GetStaticPaths, GetStaticProps } from "next";

import Image from "next/image";
import { useRouter } from "next/router";

interface IBlogPostPageProps {
  post: Posts;
}

const BlogPost = ({ post }: IBlogPostPageProps) => {
  const router = useRouter();

  return (
    <Layout
      title={post.title || "Blog Post"}
      description={post.summary || "Description"}
    >
      <BlogPostContainer>
        <TitleText>
          <ClipArt>{post.title.toUpperCase()}</ClipArt>
        </TitleText>

        <PublishDetailsContainer>
          <p> {dateFormat(post.date_created)}</p>-<p>{post.author} </p>
        </PublishDetailsContainer>

        <BlogImageContainer>
          <Image src={post.image} alt={post.title} fill />
        </BlogImageContainer>

        <BlogBodyContainer>
          <PortableText value={post.post} components={RichTextComponents} />
        </BlogBodyContainer>

        <ShareToSocialMedia
          title={post.title}
          url={post.slug}
          media={post.image}
          description={post.summary}
          author={post.author}
        />

        <CommentContainer>
          <p>Comments ({post.comments.length}) </p>

          <div>
            {post.comments.length <= 0 ? (
              <p>Be the first to comment</p>
            ) : (
              <div>
                {post.comments.map((comment: CommentInterface) => {
                  return (
                    <CommentCard
                      key={comment._id}
                      name={comment.name}
                      comment={comment.comment}
                      date={getTimeAgoString(comment._createdAt)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </CommentContainer>

        <CommentContainer>
          <p>Leave a comment</p>
          <CommentForm _id={post._id} />
        </CommentContainer>

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

export const getStaticPaths: GetStaticPaths = async () => {
  if (!client) {
    return { paths: [], fallback: 'blocking' };
  }

  const paths: string[] = await client.fetch(currentPath);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};


export const getStaticProps: GetStaticProps<IBlogPostPageProps | { posts: null }> = async ({ params }) => {
  if (!client) {
    return {
      props: {
        post: null,
      },
    };
  }

  const slug = params?.slug;



  const post = await client.fetch(postQuery, { slug });

  return {
    props: {
      post,
    },
  };
}
