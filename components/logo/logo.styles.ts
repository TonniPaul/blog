import styled from "styled-components";
import Link from "next/link";

export const LogoContainer = styled(Link)`
  display: flex;
  font-weight: 600;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  font-size: 0.875rem;
  & img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    z-index: 2;
    object-fit: contain;
    background-color: var(--primary-bg);
    aspect-ratio: 1;
    box-shadow: var(--box-shadow);
  }

  & span {
    padding: 0.2rem 5px 0.2rem 3rem;
    box-shadow: var(--box-shadow);
    z-index: 1;
    margin-left: -3rem;
    border-radius: 5px;
  }

  @media (min-width: 600px) {
    font-size: 2rem;

    & img {
      height: 5rem;
      width: 5rem;
    }
  }
`;
