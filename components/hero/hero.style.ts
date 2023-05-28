import styled from "styled-components";

export const HeroContainer = styled.section`
  color: var(--purple);
  padding: 3rem 2rem;
  text-align: center;
  max-width: 700px;
  margin: auto;
`;

export const TransparentBg = styled.div`
  background: rgba(0, 0, 0, 0.25);
  width: max-content;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
`;

export const ClipArt = styled.div`
  background: linear-gradient(to right, #8b5cd6, #4ea4a7, #000, #7d44a8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  font-weight: 700;
`;