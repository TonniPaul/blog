import styled from "styled-components";

export const ErrorMainContainer = styled.section`
  margin: auto;
  text-align: center;
  padding: 3rem 2rem;

  & > img {
    @media (min-width: 768px) {
      width: 900px;
    }
  }

  & > h1 {
    font-size: 6rem;
    margin: -2rem auto 5px;
  }

  & > p {
    font-size: 1rem;
    max-width: 60rem;
    margin: auto;
    padding-bottom: 2rem;
  }

  & > a {
    border: none;
    background: var(--purple);
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 5px;
    color: var(--white);
  }
`;
