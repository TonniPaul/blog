import styled from "styled-components";

interface NavLinkStyleProp {
  open: boolean;
}

export const NavStyle = styled.nav<NavLinkStyleProp>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1rem 1.5rem;
  user-select: none;
  position: fixed;
  top: 0;
  background: var(--primary-bg);
  left: 0;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  z-index: 3;
  color: var(--purple);
  position: relative;

  & ul {
    list-style: none;
    position: fixed;
    transform: translateX(${(prop) => (prop.open ? "0" : "-130%")});
    transition: 0.5s ease-in-out;
    top: 0;
    left: 0;
    width: 80vw;
    background: var(--primary-bg);
    height: 100vh;
    z-index: +2;
    padding-top: 9rem;
    border-top-right-radius: 50%;

    &::before,
    &::after {
      content: "";
      width: 80vw;
      height: 100vh;
      top: 0;
      background: var(--primary-bg);
      position: absolute;
    }

    &::before {
      background: rgba(0, 0, 0, 0.75);
      right: -20vw;
      z-index: -1;
    }

    &::after {
      left: 0vw;
      z-index: -1;
      border-top-right-radius: 20%;
    }
    @media (min-width: 900px) {
      position: relative;
      display: flex;
      align-items: center;
      gap: 20px;
      height: auto;
      width: auto;
      padding: 0;
      transform: translateX(0);

      &::before,
      &::after {
        display: none;
      }
    }

    & li {
      box-shadow: var(--box-shadow);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      background-color: var(--primary-bg);

      @media (max-width: 900px) {
        margin: 1rem;
      }
    }
  }
  & > img {
    cursor: pointer;
    box-shadow: var(--box-shadow);
    padding: 0.2rem;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

export const CloseButton = styled.li`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none !important;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  box-shadow: none !important;
  padding-left: 2rem !important;

  & > img {
    border-radius: 50%;
    padding: 0.2rem;
    box-shadow: var(--box-shadow);
    position: absolute;
    right: -20vw;

    background: var(--primary-bg);
    cursor: pointer;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
