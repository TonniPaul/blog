import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-width);
  margin: auto;
  padding: 2rem;

  & h3 {
    font-size: 18px;
    padding: 2rem 0;
    width: 700px;
    margin: auto;

    @media (min-width: 900px) {
      font-size: 20px;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
