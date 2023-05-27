import styled from "styled-components";
import Link from "next/link";

export const LogoContainer = styled(Link)`
  display: flex;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  font-size: 0.875rem;
  & img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    z-index: 2;
    object-fit: contain;
    aspect-ratio: 1/1;
    box-shadow: var(--box-shadow);
  }

  & span {
    padding: 0.2rem 5px 0.2rem 30px;
    box-shadow: var(--box-shadow);
    z-index: 1;
    margin-left: -30px;
    border-radius: 5px;
  }

  @media (min-width: 600px) {
    font-size: 20px;

    & img {
      height: 50px;
      width: 50px;
    }
  }
`;
