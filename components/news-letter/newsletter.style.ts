import styled from "styled-components";

export const NewsletterContainer = styled.div`
  background: var(--transparent-purple-bg);
  margin: 6rem auto 2rem;
  position: relative;
  padding: 2rem;
  padding-top: 3rem;
  width: 50rem;
  border-radius: 7px;

  & > p {
    text-align: center;
    font-weight: 700;
    font-size: 1.9rem;
    text-transform: capitalize;
  }
`;

export const NewsletterForm = styled.form`
  display: block;
  padding: 2rem 0;

  & > * {
    border-radius: 8px;
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
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: -3.5rem;
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

export const FormInput = styled.input<{ error?: boolean }>`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--purple);
  background: var(--transparent-purple-bg);
  margin-bottom: 1rem;
  padding: 1rem;
  font-family: inherit;
  font-weight: 1rem;
  border-radius: 7px;

  ${({ error }) =>
    error &&
    `
    background: var(--error-bg);
    border-color: var(--red);
    margin-bottom: 1.5rem;
  `}
`;

export const FormTextarea = styled.textarea<{ error?: boolean }>`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--purple);
  background: var(--transparent-purple-bg);
  margin-bottom: 1rem;
  padding: 1rem;
  font-family: inherit;
  font-weight: 1rem;
  resize: none;
  border-radius: 7px;

  ${({ error }) =>
    error &&
    `
    background: var(--error-bg);
    border-color: var(--red);
  `}
`;

export const FormButton = styled.button`
  background: var(--purple);
  color: var(--white);
  width: max-content;
  padding: 1rem 2rem;
  float: right;
`;

