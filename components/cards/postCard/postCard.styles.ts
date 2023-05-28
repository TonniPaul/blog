import Link from "next/link";
import styled from "styled-components";

export const PostCardContainer = styled(Link)`
  width: 100%;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: 0.5s ease-in-out;
  padding: 0.5rem;
  border-radius: 8px;

  @media (min-width: 900px) {
    max-width: 400px;
  }

  &:hover {
    transform: scale(1.05);
  }

  & p {
    padding: 1rem 2rem 0.5rem;
  }
`;
