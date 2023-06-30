import {
  CommentFormStyle,
  ErrorText,
  RelativeContainer,
} from "./commentForm.style";
import { useForm, Resolver, FieldErrors } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  FormButton,
  FormInput,
  FormTextarea,
} from "../news-letter/newsletter.style";

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
      await Promise.all([
        fetch("/api/createComment", {
          method: "POST",
          body: JSON.stringify({ ...data, _id }),
        }),
        fetch("/api/sendEmail", {
          method: "POST",
          body: JSON.stringify({ ...data }),
        }),
      ]);
      setIsSubmitting(false);
      setHasSubmitted(true);
      reset();
      // setTimeout(() => setHasSubmitted(false), 2000);
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
        <RelativeContainer>
          <FormInput
            error={errors?.name != null}
            {...register("name")}
            name="name"
            placeholder="Name"
          />
          {errors?.name && <ErrorText>{errors.name.message}</ErrorText>}
        </RelativeContainer>

        <RelativeContainer>
          <FormInput
            error={errors?.email != null}
            type="email"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          {errors?.email && <ErrorText>{errors.email.message}</ErrorText>}
        </RelativeContainer>

        <RelativeContainer>
          <FormTextarea
            error={errors?.comment != null}
            {...register("comment")}
            rows={5}
            name="comment"
            placeholder="Comment"
          />
          {errors?.comment && <ErrorText>{errors.comment.message}</ErrorText>}
        </RelativeContainer>

        <button
          disabled={(errors.comment || errors.email || errors.name) != null}
        >
          {buttonText} {hasSubmitted && <span>&#9989;</span>}
        </button>
      </form>
    </CommentFormStyle>
  );
};

export default CommentForm;
