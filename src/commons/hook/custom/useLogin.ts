import { useMutationLoginUser } from "../mutation/useMutationLoginUser";
import { success } from "../../libraries/modal";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../stores";
import { useState } from "react";
import { useRouter } from "next/router";

interface IUseLoginArgs {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [login] = useMutationLoginUser();
  const [isCheck, setIsCheck] = useState(false);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsLogin] = useRecoilState(isLoginState);

  const router = useRouter();

  const onClickSubmit = async (data: IUseLoginArgs): Promise<void> => {
    if (data.email === "" || data.password === "") {
      alert("이메일 또는 비밀번호가 올바르제 않습니다");
      return;
    }
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result);
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해라");
        return;
      }
      setIsLogin(true);
      setAccessToken(accessToken);
      void router.push("/boards/page");
      success("로그인");
      if (isCheck) {
        localStorage.setItem("UserID", data.email);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onChangeCheckBox = (): void => {
    setIsCheck((prev) => !prev);
  };

  return { onClickSubmit, onChangeCheckBox };
};
