import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import LoginPageUI from "./login.presenter";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../../commons/stores";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { success } from "../../../commons/libraries/modal";

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsLogin] = useRecoilState(isLoginState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const [userId, setUserId] = useState("");
  useEffect(() => {
    const ID = localStorage.getItem("UserID");
    if (ID !== undefined && ID !== null) {
      setUserId(ID);
      setEmail(ID);
    }
  }, []);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  }, [email, password]);

  const [login] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event?.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event?.currentTarget.value);
  };
  const onClickSubmit = async (): Promise<void> => {
    if (email === "" || password === "") {
      alert("이메일 또는 비밀번호가 올바르제 않습니다");
      return;
    }
    try {
      const result = await login({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해라");
        return;
      }
      setIsLogin(true);
      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);
      void router.push("/boards/page");
      success("로그인");
      if (isCheck) {
        localStorage.setItem("UserID", email);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickSignup = (): void => {
    void router.push("/signup");
  };

  const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>): void => {
    const checked = event.currentTarget.checked;
    setIsCheck(checked);
  };

  return (
    <LoginPageUI
      isSubmit={isSubmit}
      userId={userId}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
      onClickSignup={onClickSignup}
      onChangeCheckBox={onChangeCheckBox}
    />
  );
}
