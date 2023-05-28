import Image from "next/image";
import {
  PostCardContainer,
  PostCardImageContainer,
  PostCardSummary,
} from "./postCard.styles";

interface PostCardProps {
  slug: string;
  image: string;
  title: string;
  date: string;
  summary: string;
}

const PostCard = ({ slug, image, title, date, summary }: PostCardProps) => {
  return (
    <PostCardContainer href={`/blog/${slug}`}>
      <div>
        <small> {date}</small>
        <p> {title} </p>
        <PostCardSummary>
          <span>{summary}</span>
          <span>continue reading.....</span>
        </PostCardSummary>
      </div>
      <PostCardImageContainer>
        <Image src={image} alt={title} fill />
      </PostCardImageContainer>
    </PostCardContainer>
  );
};

export default PostCard;
