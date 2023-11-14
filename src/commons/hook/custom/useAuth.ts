import { useRouter } from "next/router";
import { useEffect } from "react";
import {  useRecoilValueLoadable } from "recoil";
import {  restoreAccessTokenLoadable } from "../../stores";
import { alertError } from "../../libraries/modal";

export const useAuth = (): void => {
  const router = useRouter();
  const accessTokenCheck = useRecoilValueLoadable(restoreAccessTokenLoadable)
  useEffect(() => {
    void accessTokenCheck.toPromise().then((newAccessToken) => {
      console.log(newAccessToken);
      if(!newAccessToken){
        alertError("로그인 먼저 해주세요!");
        void router.push("/login");
      }
    })
  }, []);
};
