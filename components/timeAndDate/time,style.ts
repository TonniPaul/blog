import styled from "styled-components";

export const TimeContainer = styled.div`
  position: absolute;
  width: max-content;
  text-align: right;
  font-size: 0.775rem;
  right: 2rem;
  top: 20px;

  & > p:nth-of-type(2) {
    position: relative;
    right: -10px;
  }
`;
