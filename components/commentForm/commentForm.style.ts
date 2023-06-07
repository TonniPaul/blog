import styled from "styled-components";

export const CommentFormStyle = styled.div`
  @media (max-width: 768px) {
    padding: 1rem;
  }
  padding: 1rem 2rem;
  background: var(--transparent-purple-bg);
  box-shadow: var(--box-shadow);
  border-radius: 8px;

  & * {
    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }
    display: block;
    margin: 1rem 0;
    width: 100%;
  }

  & form {
    & input,
    textarea {
      padding: 1rem;
      outline: none;
      resize: none;
      border: 2px solid var(--white);
      background: none;
      border-radius: 8px;
      font-size: 1rem;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: var(--black);
      }

      &::-webkit-scrollbar-thumb {
        background: var(--yellow);
      }
    }
    & label {
      color: var(--purple);
      font-size: 1rem;
      font-weight: 600;
    }
    & button {
      width: max-content;
      padding: 0.7rem 2rem;
      background: var(--purple);
      box-shadow: var(--purple-box-shadow);
      margin-top: 1rem;
      color: var(--white);

      & span {
        display: inline;
      }
    }
  }
`;

export const ErrorText = styled.small`
  color: red;
  font-weight: 700;
`;
