import Link from "next/link";
import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  box-shadow: var(--box-shadow);
  transition: 0.5s ease-in-out;
  background: var(--white);
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    max-width: 700px;
    justify-content: space-between;
    gap: 20px;
    margin: auto;
    padding: 0.5rem 1rem;

    &:hover {
      transform: scale(1);
    }
  }

  & small {
    color: var(--grey);
    padding-bottom: 0.2rem;
    display: block;
    width: 100%;
  }
`;
export const PostCardPostTextContainer = styled.div`
  flex-basis: 70%;

  @media (max-width: 600px) {
    padding-top: 1rem;
  }
`;

export const PostCardImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  position: relative;
  align-self: center;
  order: 1;
  background-color: rgb(214, 201, 214,0.5);

  @media (min-width: 768px) {
    height: 22rem;
    width: 28rem;
  }
`;

export const ProductCardTitle = styled.p`
  font-weight: 700;
  color: var(--yellow);
  font-size: 1.8rem;
  padding: 0.5rem 0;
  margin-top: 1rem;
  border-top: 1px solid var(--primary-bg);

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const PostCardSummary = styled.p`
  font-weight: 400 !important;
  padding-top: 0 !important;
`;

export const ContinueReading = styled(Link)`
  font-style: italic;
  box-shadow: var(--box-shadow);
  margin: 1rem;
  padding: 0.5rem 1rem;
  float: right;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--primary-bg);
  color: var(--purple);
  border-radius: 8px;

  & img {
    transform: rotate(180deg);
  }
`;