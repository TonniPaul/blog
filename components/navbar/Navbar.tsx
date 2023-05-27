import Link from "next/link";
import { CloseButton, NavStyle } from "./navbar.style";
import Logo from "../logo/Logo";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // disable scrolling if mobile nav is opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <NavStyle open={isOpen}>
      <Logo />

      <ul>
        <li>HOME</li>
        <li>HOME</li>
        <li>HOME</li>
        <li>HOME</li>
        <CloseButton>
          <Logo />
          <Image
            src={"/assets/close.png"}
            alt="nav-menu"
            width={30}
            height={30}
            onClick={handleClick}
          />
        </CloseButton>
      </ul>

      <Image
        src={"/assets/menu.png"}
        alt="nav-menu"
        width={20}
        height={20}
        onClick={handleClick}
      />
    </NavStyle>
  );
};

export default Navbar;
