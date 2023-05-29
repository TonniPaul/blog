import styled from "styled-components";

export const GoBackBtn = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  color: var(--purple);

  @media (min-width: 700px) {
    margin: 2rem 0;
  }
`;

export const BlogPostContainer = styled.div`
  max-width: var(--max-width);
  max-width: 700px;
  margin: auto;
  padding: 2rem 0;

  & > img {
    display: flex;
    justify-content: center!;
  }
`;

export const TitleText = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 1rem;

  @media (min-width: 700px) {
    padding: 2rem;
    font-size: 20px;
  }
`;

export const BlogImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 250px;
  margin: 1rem 0;

  @media (min-width: 700px) {
    height: 400px;
  }
`;

export const PublishDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  padding-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;

  & > p:nth-of-type(1) {
    color: var(--grey);
  }
`;

export const PortableTextContainer = styled.div`
  padding: 1rem;

  @media (min-width: 700px) {
    padding: 0;
  }

  & h1,
  & h2,
  & h3,
  & h3,
  & h5,
  & h6 {
    padding: 1rem 0;
  }

  & code {
    background: var(--white);
  }

  & ol,
  ul {
    list-style-position: inside;

    li {
      padding: 0.5rem 0;
    }
  }
`;
