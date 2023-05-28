import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
   --primary-bg: #e0e0e0;
   --purple: #7d44a8;
   --sky-blue: #76B0EF;
   --box-shadow: 5px 5px 10px #b5b5b5, -2px -2px 10px #fff;
   --inset-box: inset 5px 10px 8px #b5b5b5, inset -5px -5px 8px #fff;
   --transition: .5s ease-in-out;
   --grey: #667085;
   --purple-box-shadow: 1px 1px 10px #301645, -1px -1px 10px #7e45aa;
   --purple-inset-box: inset 1px 1px 10px #44255c, inset -1px -1px 10px #7e45aa;
   --white: #ffffff;
   --max-width : 1200px;
}

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  appearance: none;
  -webkit-appearance: none;
}

body {
background: var(--primary-bg);
font-size: 0.875rem;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: var(--black);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--yellow);
  }

  @media (min-width : 768px) {
    font-size: 1rem;
  }
}

a {
  text-decoration: none;
  color: inherit;
  background: none;
}

button {
  background: inherit;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

button:disabled {
  cursor: not-allowed !important;
}


`;

export default GlobalStyles;
