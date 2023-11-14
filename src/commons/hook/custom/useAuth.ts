import { useRouter } from "next/router";
import { useEffect } from "react";
import {   useRecoilState, useRecoilValueLoadable } from "recoil";
import {   accessTokenState, isLoginState, restoreAccessTokenLoadable } from "../../stores";
import { alertError } from "../../libraries/modal";

export const useAuth = (): void => {
  const router = useRouter();
  const accessTokenCheck = useRecoilValueLoadable(restoreAccessTokenLoadable)
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [isLogin, ] = useRecoilState(isLoginState);
  useEffect(() => {
    if(!isLogin){
      alertError("로그인 먼저 해주세요!");
      void router.push("/login");
    }
    void accessTokenCheck.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    })
  }, [isLogin]);
};