import { useForm } from "react-hook-form";
import * as info from "./login.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./login.yup";
import { useMoveToPage } from "../../../commons/hook/custom/useMoveToPage";
import { useLogin } from "../../../commons/hook/custom/useLogin";

export default function LoginPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email:
        typeof window !== "undefined"
          ? localStorage?.getItem("UserID") ?? ""
          : "",
      password: "",
    },
    mode: "onChange",
  });
  const { onChangeCheckBox, onClickSubmit } = useLogin();

  return (
    <info.Body>
      <info.Wrapper>
        <info.Form>
          <info.TitleBox>
            <info.Title>Sign in</info.Title>
            <div>
              or{" "}
              <info.SignUpSpan onClick={onClickMoveToPage("/signup")}>
                create an account
              </info.SignUpSpan>
            </div>
          </info.TitleBox>
          <info.InputBoxs>
            <info.InputBox
              type="text"
              placeholder="Email"
              {...register("email")}
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
          <info.SaveInfo>
            <info.SaveInfoCheck type="checkbox" onChange={onChangeCheckBox} />
            <span>remember me</span>
          </info.SaveInfo>
          <info.SubmitBtn
            type="button"
            onClick={handleSubmit(onClickSubmit)}
            disabled={!formState.isValid}
            isSubmit={formState.isValid}
          >
            sign in
          </info.SubmitBtn>
        </info.Form>
      </info.Wrapper>
    </info.Body>
  );
}
