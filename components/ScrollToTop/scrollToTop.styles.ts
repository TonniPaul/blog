import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  50% {transform : translateY(-20px);}
`;

export const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 30px;
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--short-transition);
  animation: ${bounce} 3s infinite;

  & > img {
    transform: rotate(-90deg);
    filter: var(--white-filter);
  }
`;
