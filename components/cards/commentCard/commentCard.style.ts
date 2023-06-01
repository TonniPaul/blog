import styled from "styled-components";

export const CommentCardStyles = styled.div`
  margin: 1rem 0;
  background-color: var(--white);
  padding: 1rem;

  & > div {
    display: flex;
    gap: 10px;

    & > div {
      & div p {
        font-weight: 700;
        font-size: 1.08rem;
      }
    }
  }
`;
