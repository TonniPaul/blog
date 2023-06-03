import styled from "styled-components";

export const CommentCardStyles = styled.div`
  margin: 1rem 0;
  background-color: var(--transparent-purple-bg);
  padding: 1rem;

  & > div {
    display: flex;
    gap: 10px;
  }
`;

export const CommentNameAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 0.5rem;

  & > p {
    font-weight: 700;
    font-size: 1.08rem;
  }
`;
