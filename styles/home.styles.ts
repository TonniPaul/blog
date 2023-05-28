import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-width);
  margin: auto;
  padding: 2rem;

  & h3 {
    font-size: 18px;

    @media (min-width: 900px) {
      font-size: 20px;
      text-align: center;
      padding: 2rem;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
