import { ClipArt, HeroContainer, TransparentBg } from "./hero.style";

const Hero = () => {
  return (
    <HeroContainer>
      <p>Welcome To:</p>
      <TransparentBg>
        <ClipArt>{`TonniPaul's Blog`}</ClipArt>
      </TransparentBg>
      <p>
        {` Explore the world of frontend and web development with our informative
        and insightful articles. Whether you're a beginner looking to learn the
        basics or an experienced developer seeking the latest trends and
        techniques, our blog is your go-to resource. Discover valuable tips,
        tutorials, and industry updates that will empower you to create
        exceptional web experiences. Stay ahead of the curve and unlock your
        full potential in the world of frontend development with Tonnipaul Blog.`}
      </p>
    </HeroContainer>
  );
};

export default Hero;
