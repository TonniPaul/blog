import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 5rem 2rem 0;
  text-align: center;
  max-width: 700px;
  margin: auto;
  position: relative;
`;

export const TransparentBg = styled.div`
  background: var(--transparent-purple-bg);
  width: max-content;
  padding: 1rem 2rem;
  margin: 1rem auto;
`;

export const ClipArt = styled.div`
  background: linear-gradient(
    to right,
    var(--purple),
    var(--sky-blue),
    var(--yellow),
    var(--purple)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const WelcomeText = styled.p`
  font-weight: 700;
  color: var(--purple);
`;