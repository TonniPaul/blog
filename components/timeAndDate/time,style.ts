import styled from "styled-components";

export const TimeContainer = styled.time`
  position: absolute;
  width: max-content;
  text-align: right;
  font-size: 1.2rem;
  right: 2rem;
  top: 2rem;

  & > p:nth-of-type(2) {
    position: relative;
    right: -1rem;
  }
`;
