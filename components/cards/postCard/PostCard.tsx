import Image from "next/image";
import { PostCardContainer } from "./postCard.styles";

interface PostCardProps {
  slug: string;
  image: string;
  title: string;
}

const PostCard = ({ slug, image, title }: PostCardProps) => {
  return (
    <PostCardContainer href={`/blog/${slug}`}>
      <Image src={image} alt={title} height={250} width={400} />
      <p> {title} </p>
    </PostCardContainer>
  );
};

export default PostCard;
