import Image from "next/image";
import {
  NewsletterContainer,
  NewsletterForm,
  NewsletterImageContainer,
} from "./newsletter.style";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
import { useEffect, useState } from "react";
import { ErrorText } from "../commentForm/commentForm.style";

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

  const submitForm = async (data: NewsletterProps) => {
    data = getValues();
    // setIsSubmitting(true);
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
      // setIsSubmitting(false);
      // setHasSubmitted(true);
      reset();
      // setTimeout(() => setHasSubmitted(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return (
    <NewsletterContainer>
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
        {errors?.name && <ErrorText>{errors.name.message}</ErrorText>}
        <input
          type="text"
          {...register("name")}
          name="name"
          placeholder="Enter name"
        />

        {errors?.email && <ErrorText>{errors.email.message}</ErrorText>}
        <input
          type="email"
          {...register("email")}
          name="email"
          placeholder="Enter your email address"
        />

        <button onClick={onSubmit}>Sign me up!</button>
      </NewsletterForm>
    </NewsletterContainer>
  );
};

export default NewsLetter;
