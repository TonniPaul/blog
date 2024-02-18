import Link from "next/link";
import styled, { css } from "styled-components";

const headerStyle = css`
  margin-bottom: 1rem;
  color: var(--purple);
`

const listStyle = css`
  list-style-position: inside;

  & li {
    padding-bottom: 1rem;
    line-height: 1.5;

  }
`

export const RichTextImageContainer = styled.div`
  width: 90%;
  margin: 1rem auto 0.5rem;
  position: relative;
  min-width: 19rem;
  max-width: 100%;
  min-height: 40rem;

  & > img {
    object-fit: contain;
  }
`;

export const H1Style = styled.h4`
  ${headerStyle}
`;

export const P = styled.p`
  padding-bottom: 0.5rem;
  line-height: 1.5;
`;

export const H2Style = styled.h4`
  ${headerStyle}
`;
export const H3Style = styled.h4`
  ${headerStyle}
`;

export const H4Style = styled.h4`
  ${headerStyle}
`;

export const H5Style = styled.h4`
  ${headerStyle}
`;

export const H6Style = styled.h4`
  ${headerStyle}
`;

export const BlockQuote = styled.blockquote`
  background: var(--transparent-purple-bg);
  border-left: 2px solid var(--yellow);
  padding: 1rem;
  margin: 1rem;
  line-height: 1.5;
`;

export const ULStyle = styled.ul`
  ${listStyle}
  list-style-type: square;
`;

export const OLStyle = styled.ol`
  ${listStyle}
`;

export const CodeStyle = styled.code`
  background: rgb(0, 0, 0, 0.1);
  color: var(--purple);
  font-weight: 600;
  padding: 0.5rem;
`;

export const RichTextLinks = styled(Link)`
  text-decoration: underline;
  text-decoration-color: var(--purple);
`;
