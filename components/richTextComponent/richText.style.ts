import Link from "next/link";
import styled from "styled-components";

export const RichTextImageContainer = styled.div`
  width: 90%;
  margin: 1rem auto 0.5rem;
  position: relative;
  min-width: 19rem;
  max-width: 100%;
  min-height: 400px;

  & > img {
    object-fit: contain;
  }
`;

export const H1Style = styled.h4`
  font-weight: 700;
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  color: var(--purple);
`;

export const P = styled.p`
  padding-bottom: 0.5rem;
  line-height: 1.5rem;
`;

export const H2Style = styled.h4`
  font-weight: 700;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  color: var(--purple);
`;
export const H3Style = styled.h4`
  font-weight: 700;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  color: var(--purple);
`;

export const H4Style = styled.h4`
  font-weight: 700;
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
  color: var(--purple);
`;

export const H5Style = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  color: var(--purple);
`;

export const H6Style = styled.h4`
  font-weight: 700;
  font-size: 0.9375rem;
  padding-bottom: 0.5rem;
  color: var(--purple);
`;

export const BlockQuote = styled.blockquote`
  background: var(--transparent-purple-bg);
  border-left: 2px solid var(--yellow);
  padding: 1rem;
  margin: 1rem;
  line-height: 1.5rem;
`;

export const ULStyle = styled.ul`
  list-style-type: square;
  list-style-position: inside;

  & li {
    padding-bottom: 0.5rem;
      line-height: 1.5rem;

  }
`;

export const OLStyle = styled.ol`
  list-style-position: inside;

  & li {
    padding: 0.5rem 0;
      line-height: 1.5rem;

  }
`;

export const CodeStyle = styled.code`
  background: rgb(0, 0, 0, 0.1);
  color: var(--purple);
  font-weight: 600;
  padding: 0.2rem;
`;

export const RichTextLinks = styled(Link)`
  text-decoration: underline;
  text-decoration-color: var(--purple);
`;
