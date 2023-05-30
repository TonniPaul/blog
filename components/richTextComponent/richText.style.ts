import styled from "styled-components";

export const RichTextImageContainer = styled.div`
  width: 90%;
  margin: 1rem auto 0.5rem;
  position: relative;
  aspect-ratio: 4/4;
`;

export const H1Style = styled.h4`
  font-weight: 700;
  font-size: 1.4rem;
  padding: 0.5rem 0;
  color: var(--yellow);
`;
export const H2Style = styled.h4`
  font-weight: 700;
  font-size: 1.3rem;
  padding: 0.5rem 0;
  color: var(--yellow);
`;
export const H3Style = styled.h4`
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  color: var(--yellow);
`;
export const H4Style = styled.h4`
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  color: var(--yellow);
`;
export const H5Style = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 0;
  color: var(--yellow);
`;
export const H6Style = styled.h4`
  font-weight: 700;
  font-size: 0.9375rem;
  padding: 0.5rem 0;
  color: var(--yellow);
`;
export const BlockQuote = styled.blockquote`
  background: var(--white);
  border-left: 2px solid var(--yellow);
  padding: 0 1rem;
  margin: 2rem;
  font-style: italic;

  & > span {
    display: block;
  }
`;

export const ULStyle = styled.ul`
  list-style-type: square;
  list-style-position: inside;

  & li {
    padding: 0.5rem 0;
  }
`;

export const OLStyle = styled.ol`
  list-style-position: inside;

  & li {
    padding: 0.5rem 0;
  }
`;

export const CodeStyle = styled.code`
  background: var(--white);
`;

export const RichTextLinks = styled.a`
  text-decoration: underline;
  text-decoration-color: var(--purple);
`;
