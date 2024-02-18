import styled from "styled-components";

export const CommentFormStyle = styled.div`
  @media (max-width: 768px) {
    padding: 1rem;
  }
  padding: 1rem 2rem;
  background: var(--transparent-purple-bg);
  box-shadow: var(--box-shadow);
  border-radius: 8px;

  & > * {
    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }
    display: block;
    margin: 1rem 0;
    width: 100%;
  }

  & form {
    & button {
      padding: 1rem 2rem;
      background: var(--purple);
      box-shadow: var(--purple-box-shadow);
      margin-top: 1rem;
      color: var(--white);
      position: relative;
      width: 100%;

      & span {
        display: inline;
      }
    }
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const ErrorText = styled.small`
  color: var(--red);
  font-weight: 700;
  position: absolute;
  padding: 0 1rem;
  right: -5px;
  bottom: 2px;
`;
