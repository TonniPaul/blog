import Link from "next/link";
import styled from "styled-components";

export const PostCardContainer = styled(Link)`
  width: 100%;
  box-shadow: var(--box-shadow);
  transition: 0.5s ease-in-out;
  background: var(--white);
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    max-width: 700px;
    justify-content: space-between;
    gap: 20px;
    margin: auto;

    &:hover {
      transform: scale(1);
    }

    & > div:first-child {
      flex-basis: 70%;
    }
  }

  & small {
    color: var(--grey);
    padding-bottom: 0.2rem;
    border-bottom: 1px solid var(--primary-bg);
    display: block;
    width: 100%;
  }

  & p {
    font-weight: 700;
    padding: 1rem 0;
  }
`;

export const PostCardImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;

  @media (min-width: 768px) {
    height: 220px;
    width: 280px;
    aspect-ratio: 1/1;
  }
`;

export const PostCardSummary = styled.p`
  font-weight: 400 !important;
  padding-top: 0 !important;
  font-style: italic;

  & > span {
    display: block;
  }

  & span:last-child {
    float: right;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;