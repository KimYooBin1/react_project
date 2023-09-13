import type { ChangeEvent } from "react";
import { useState } from "react";
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
    try {
      const result = await login({
        variables: {
          email,
          password,
        },
      });
      console.log(result);
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
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <LoginPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSubmit={onClickSubmit}
    />
  );
}
