import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as info from "./signup.styles";
import { schema } from "./signup.yup";
import { useSignUp } from "../../../commons/hook/custom/useSignup";
export default function SignUpPage(): JSX.Element {
  const { onClickSubmit } = useSignUp();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <info.Body>
      <info.Wrapper>
        <info.Form>
          <info.TitleBox>
            <info.Title>Sign up</info.Title>
          </info.TitleBox>
          <info.InputBoxs>
            <info.InputBox
              type="text"
              {...register("name")}
              placeholder="Name"
            />
            <info.ErrorMessage>
              {formState.errors.name?.message}
            </info.ErrorMessage>
            <info.InputBox
              type="text"
              {...register("email")}
              placeholder="Email"
            />
            <info.ErrorMessage>
              {formState.errors.email?.message}
            </info.ErrorMessage>
            <info.InputBox
              type="password"
              {...register("password")}
              placeholder="password"
              maxLength={16}
            />
            <info.ErrorMessage>
              {formState.errors.password?.message}
            </info.ErrorMessage>
          </info.InputBoxs>
          <info.SubmitBtn
            type="button"
            onClick={handleSubmit(onClickSubmit)}
            isSubmit={formState.isValid}
          >
            sign up
          </info.SubmitBtn>
        </info.Form>
      </info.Wrapper>
    </info.Body>
  );
}
