import styled from "styled-components";

export const NewsletterContainer = styled.div`
  background: var(--transparent-purple-bg);
  margin: 6rem auto 2rem;
  position: relative;
  padding: 2rem;
  padding-top: 3rem;
  width: 500px;
  border-radius: 7px;

  & > p {
    text-align: center;
    font-weight: 700;
    font-size: 19.2px;
    text-transform: capitalize;
  }
`;

export const NewsletterForm = styled.form`
  display: block;
  padding: 2rem 0;

  & > * {
    border-radius: 7px;
  }

  & > input {
    display: block;
    width: 100%;
    outline: none;
    border: 1px solid var(--purple);
    background: var(--transparent-purple-bg);
    margin-bottom: 1rem;
    padding: 1rem;
    font-family: inherit;
    font-weight: 1rem;
  }

  & > button {
    background: var(--purple);
    color: var(--white);
    width: max-content;
    padding: 0.8rem 2rem;
    float: right;
  }
`;

export const NewsletterImageContainer = styled.div`
  padding: 0.5rem;
  /* border-radius: 50%; */
  position: absolute;
  left: 50%;
  top: -35px;
  transform: translateX(-50%);
  border-color: var(--purple);
  border-width: 2px 0 0 0;
  border-style: solid;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;

  & > img {
    filter: var(--purple-filter);
  }
`;
