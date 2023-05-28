import { ClipArt, HeroContainer, TransparentBg } from "./hero.style";

const Hero = () => {
  return (
    <HeroContainer>
      <p>Welcome To:</p>
      <TransparentBg>
        <ClipArt>{`TonniPaul's Blog`}</ClipArt>
      </TransparentBg>
      <p>
        {`Keep up with the latest industry updates, tips, and tutorials with TonniPaul's 
        Blog Stay ahead of the curve and unlock your full potential in the world of 
        frontend development`}
      </p>
    </HeroContainer>
  );
};

export default Hero;
