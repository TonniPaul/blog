import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
	box-sizing: border-box;
	/* 1rem = 10px */
	font-size: 62.5%;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}
  :root {
   --primary-bg: #e0e0e0;
   --purple: #7d44a8;
   --sky-blue: #76B0EF;
   --yellow : #fabb37;
   --black : #636363;
   --error-bg: #f8e8eb;
   --red: #ff0000;
   --transparent-purple-bg : rgba(128, 0, 128, 0.1);
   --box-shadow: 5px 5px 10px #b5b5b5, -2px -2px 10px #fff;
   --inset-box: inset 5px 10px 8px #b5b5b5, inset -5px -5px 8px #fff;
   --transition: .5s ease-in-out;
   --grey: #667085;
   --purple-box-shadow: 1px 1px 2px #301645, -1px -1px 2px #7e45aa;
   --purple-inset-box: inset 1px 1px 10px #44255c, inset -1px -1px 10px #7e45aa;
   --purple-filter: invert(33%) sepia(49%) saturate(821%) hue-rotate(231deg) brightness(92%) contrast(94%);
   --white: #ffffff;
   --max-width : 1200px;
}

body {
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1.5;
  background: var(--primary-bg);
  color: var(--black);
	-webkit-font-smoothing: antialiased;
  
  &::-webkit-scrollbar {
    width: 1px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--black);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--yellow);
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
  opacity: 0.5;
}

@media only screen and (max-width: 20em) {
	html {
		font-size: 50%;
	}
}

@media (prefers-reduced-motion: no-preference) {
	html {
		scroll-behavior: smooth;
	}
}


`;

export default GlobalStyles;
