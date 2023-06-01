import Image from "next/image";
import { CommentCardStyles } from "./commentCard.style";

interface CommentCardProps {
  name: string;
  comment: string;
  date: string;
}

const CommentCard = ({ name, comment, date }: CommentCardProps) => {
  return (
    <CommentCardStyles>
      <div>
        <Image
          src={"/assets/icon-1.png"}
          alt="user-icon"
          width={30}
          height={30}
        />
        <div>
          <div>
            <p> {name} </p>
            <small> {date} </small>
          </div>
          <p> {comment} </p>
        </div>
      </div>
    </CommentCardStyles>
  );
};

export default CommentCard;
