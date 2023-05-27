import Image from "next/image";
import { LogoContainer } from "./logo.styles";

const Logo = () => {
  return (
    <LogoContainer href={"/"}>
      <Image
        src={"/assets/tonnipaul.png"}
        alt="paul"
        width={300}
        height={300}
      />
      <span>{`TonniPaul's Blog`}</span>
    </LogoContainer>
  );
};

export default Logo;
