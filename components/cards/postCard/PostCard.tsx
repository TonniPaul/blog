import Image from "next/image";
import {
  ContinueReading,
  PostCardContainer,
  PostCardImageContainer,
  PostCardPostTextContainer,
  PostCardSummary,
  ProductCardTitle,
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
    <PostCardContainer>
      <PostCardImageContainer>
        <Image src={image} alt={title} fill />
      </PostCardImageContainer>
      <PostCardPostTextContainer>
        <small> {date}</small>
        <ProductCardTitle> {title} </ProductCardTitle>
        <PostCardSummary>{summary}</PostCardSummary>
        <ContinueReading href={`${slug}`}>
          continue reading
          <Image
            src={"/assets/back-icon.png"}
            alt="forward-icon"
            width={20}
            height={20}
          />
        </ContinueReading>
      </PostCardPostTextContainer>
    </PostCardContainer>
  );
};

export default PostCard;
