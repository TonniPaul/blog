import { CommentFormStyle, ErrorText } from "./commentForm.style";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  name: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: FieldErrors<FormValues> = {};

  if (!values.name) {
    errors.name = {
      type: "required",
      message: "This field is required.",
    };
  }

  if (!values.message) {
    errors.message = {
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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    data = getValues();
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify({ ...data, _id }),
    });

    setIsLoading(true);

    alert(
      `Dear ${data.name}, we are still working on this section to u[date your comments to the database`
    );
    // Reset form fields on successful submit
    reset();
    setIsLoading(false);
  });

  return (
    <CommentFormStyle>
      <form onSubmit={onSubmit}>
        <label htmlFor="name"> Name</label>
        <input {...register("name")} name="name" />
        {errors?.name && <ErrorText>{errors.name.message}</ErrorText>}
        <label htmlFor="message">Comment</label>
        <textarea {...register("message")} rows={5} name="message" />
        {errors?.message && <ErrorText>{errors.message.message}</ErrorText>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </CommentFormStyle>
  );
};

export default CommentForm;
