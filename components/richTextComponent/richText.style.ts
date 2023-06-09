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
  padding-bottom: 0.5rem;
  color: var(--yellow);
`;

export const P = styled.p`
  padding-bottom: 0.5rem;
`;

export const H2Style = styled.h4`
  font-weight: 700;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  color: var(--yellow);
`;
export const H3Style = styled.h4`
  font-weight: 700;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  color: var(--yellow);
`;

export const H4Style = styled.h4`
  font-weight: 700;
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
  color: var(--yellow);
`;

export const H5Style = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  color: var(--yellow);
`;

export const H6Style = styled.h4`
  font-weight: 700;
  font-size: 0.9375rem;
  padding-bottom: 0.5rem;
  color: var(--yellow);
`;

export const BlockQuote = styled.blockquote`
  background: var(--transparent-purple-bg);
  border-left: 2px solid var(--yellow);
  padding: 1rem;
  margin: 1rem;
  font-style: italic;
`;

export const ULStyle = styled.ul`
  list-style-type: square;
  list-style-position: inside;

  & li {
    padding-bottom: 0.5rem;
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
