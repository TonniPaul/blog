import styled from "styled-components";

export const BlogPostContainer = styled.div`
  max-width: var(--max-width);
  max-width: 700px;
  margin: auto;
  padding: 2rem;

  & > h1 {
    font-size: 18px;
    text-align: center;
    padding: 1rem 0;

    @media (min-width: 700px) {
      text-align: left;
      font-size: 20px;
    }
  }

  & > img {
    display: flex;
    justify-content: center!;
  }
`;

export const BlogImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 250px;

  @media (min-width: 700px) {
    height: 400px;
  }
`;

export const PublishDetailsContainer = styled.div`
  & > p {
    font-weight: 600;
    padding: 0.5rem 0;
  }
`;

export const PortableTextContainer = styled.div`
  & h1,
  & h2,
  & h3,
  & h3,
  & h5,
  & h6 {
    padding: 1rem 0;
  }

  & code {
    background: var(--purple);
    color: var(--white);
  }

  & ol,
  ul {
    list-style-position: inside;

    li {
      padding: 0.5rem 0;
    }
  }
`;
