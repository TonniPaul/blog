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
    width: 90vw;
    background: var(--primary-bg);
    height: 100vh;
    z-index: 2;
    padding-top: 9rem;

    &::before {
      content: "";
      width: 10vw;
      height: 100vh;
      top: 0;
      background: rgba(0, 0, 0, 0.75);
      position: fixed;
      right: -10vw;
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

      &::before {
        display: none;
      }
    }

    & li {
      box-shadow: var(--box-shadow);
      padding: 0.5rem 1rem;
      border-radius: 8px;

      @media (max-width: 900px) {
        margin: 1rem;
      }
    }
  }
  & > img {
    cursor: pointer;
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
  top: 0;
  right: 50%;
  transform: translateX(50%);
  box-shadow: none !important;
  padding-left: 2rem !important;

  & > img {
    border-radius: 50%;
    padding: 0.2rem;
    box-shadow: var(--box-shadow);

    background: var(--primary-bg);
    cursor: pointer;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
