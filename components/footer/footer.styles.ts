import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: block;
  padding: 1rem;
  text-align: center;
  color: var(--purple);

  & p {
    text-transform: capitalize;
  }

  & a span {
    color: var(--sky-blue);
    font-weight: 600;
  }
`;
