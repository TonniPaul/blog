"use client";
import Link from "next/link";
import { CloseButton, Headr, NavStyle } from "./navbar.style";
import Logo from "../logo/Logo";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

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
    <Headr>
      <NavStyle open={isOpen}>
        <Logo />

        <ul>
          <li>
            <a href="https://tonnipaul.com/#contact">CONTACT</a>
          </li>

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
          width={25}
          height={25}
          onClick={handleClick}
        />
      </NavStyle>
    </Headr>
  );
};

export default Navbar;
