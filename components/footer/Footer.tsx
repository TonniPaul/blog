import { FooterStyle } from "./footer.styles";

const Footer = () => {
  return (
    <FooterStyle>
      <p> &copy; {new Date().getFullYear()}, all rights reserved</p>
      <a href="https://tonnipaul.com">
        Designed & Built by <span>TonniPaul&#xae;</span>
      </a>
    </FooterStyle>
  );
};

export default Footer;
