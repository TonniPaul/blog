import { CommentFormStyle, ErrorText } from "./commentForm.style";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
import { useEffect, useState } from "react";

type FormValues = {
  name: string;
  comment: string;
  email: string;
  approved: boolean;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: FieldErrors<FormValues> = {};

  if (!values.name) {
    values.approved = true;
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

  if (!values.comment) {
    errors.comment = {
      type: "required",
      message: "This field is required.",
    };
  }

  return {
    values: errors ? {} : values,
    errors: errors,
  };
};

const CommentForm = ({ _id }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormValues>({ resolver });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const submitForm = async (data: FormValues) => {
    data = getValues();
    setIsSubmitting(true);
    try {
      await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify({ ...data, _id }),
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
      reset();
      setTimeout(() => setHasSubmitted(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  useEffect(() => {
    if (isSubmitting) {
      setButtonText("Submitting");
    } else if (hasSubmitted) {
      setButtonText("Submitted ");
    } else {
      setButtonText("Submit");
    }
  }, [isSubmitting, hasSubmitted]);

  return (
    <CommentFormStyle>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input {...register("name")} name="name" />
        {errors?.name && <ErrorText>{errors.name.message}</ErrorText>}

        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} name="email" />
        {errors?.email && <ErrorText>{errors.email.message}</ErrorText>}

        <label htmlFor="comment">Comment</label>
        <textarea {...register("comment")} rows={5} name="comment" />
        {errors?.comment && <ErrorText>{errors.comment.message}</ErrorText>}

        <button disabled={isSubmitting}>
          {buttonText} {hasSubmitted && <span>&#9989;</span>}
        </button>
      </form>
    </CommentFormStyle>
  );
};

export default CommentForm;
