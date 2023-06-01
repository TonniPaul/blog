import styled from "styled-components";

export const GoBackBtn = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  color: var(--purple);

  @media (min-width: 768px) {
    margin: 2rem 0;
  }
`;

export const BlogPostContainer = styled.div`
  max-width: var(--max-width);
  max-width: 700px;
  margin: auto;
  padding: 2rem 0;

  & > img {
    display: flex;
    justify-content: center!;
  }
`;

export const TitleText = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
    font-size: 20px;
  }
`;

export const BlogImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 250px;
  margin: 1rem 0;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

export const PublishDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  padding-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;

  & > p:nth-of-type(1) {
    color: var(--grey);
  }
`;

export const BlogBodyContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0 1.5rem 1rem;
  }
`;
export const CommentContainer = styled.div`
  @media (max-width: 768px) {
    margin: 1rem;
  }
  max-width: 500px;
  margin: 1rem 0;
  padding: 1rem 0;
  & > p {
    font-weight: 700;
    font-size: 1.06rem;
    margin-bottom: 1rem;
  }
`;