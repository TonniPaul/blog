import { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollToTopContainer } from "./scrollToTop.styles";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 200) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <ScrollToTopContainer>
          <Image
            src="/assets/next.png"
            alt="scroll-to-top icon"
            width={25}
            height={25}
            onClick={scrollToTop}
          />
        </ScrollToTopContainer>
      )}
    </>
  );
};

export default ScrollToTop;
