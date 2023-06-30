import Image from "next/image";
import { useState } from "react";
import {
  NewsletterContainer,
  NewsletterForm,
  NewsletterImageContainer,
  FormInput,
  FormButton,
} from "./newsletter.style";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
import { ErrorText, RelativeContainer } from "../commentForm/commentForm.style";

import Confetti from "react-confetti";

interface NewsletterProps {
  name: string;
  email: string;
}

const resolver: Resolver<NewsletterProps> = async (values) => {
  const errors: FieldErrors<NewsletterProps> = {};

  if (!values.name) {
    errors.name = {
      type: "required",
      message: "This field is required.",
    };
  }

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "This field is required.",
    };
  }

  return {
    values: errors ? {} : values,
    errors: errors,
  };
};

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<NewsletterProps>({ resolver });

  const [submitted, setSubmitted] = useState(false);

  const submitForm = async (data: NewsletterProps) => {
    data = getValues();
    try {
      await Promise.all([
        fetch("/api/createMailList", {
          method: "POST",
          body: JSON.stringify({ ...data }),
        }),
        fetch("/api/sendToUser", {
          method: "POST",
          body: JSON.stringify({ ...data }),
        }),
        fetch("/api/sendToOwner", {
          method: "POST",
          body: JSON.stringify({ ...data }),
        }),
      ]);
      reset();
      setSubmitted(true);
      // setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return (
    <NewsletterContainer>
      {submitted ? (
        <>
          <Confetti />
          <p>Thank you for subscribing!</p>
        </>
      ) : (
        <>
          <NewsletterImageContainer>
            <Image
              src="/assets/newsletter.png"
              alt="newsletter-icon"
              width={30}
              height={30}
            />
          </NewsletterImageContainer>
          <p>Newsletter Sign Up</p>

          <NewsletterForm onSubmit={onSubmit}>
            <RelativeContainer>
              {errors?.name && <ErrorText>{errors.name.message}</ErrorText>}
              <FormInput
                error={errors?.name != null}
                type="text"
                {...register("name")}
                name="name"
                placeholder="Enter name"
              />
            </RelativeContainer>

            <RelativeContainer>
              {errors?.email && <ErrorText>{errors.email.message}</ErrorText>}
              <FormInput
                error={errors?.email != null}
                type="email"
                {...register("email")}
                name="email"
                placeholder="Enter your email address"
              />
            </RelativeContainer>

            <FormButton
              disabled={(errors?.email || errors?.name) != null}
              type="submit"
            >
              Sign me up!
            </FormButton>
          </NewsletterForm>
        </>
      )}
    </NewsletterContainer>
  );
};

export default NewsLetter;
