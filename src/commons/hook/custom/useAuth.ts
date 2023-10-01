import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    console.log(accessToken);
    if (accessToken === undefined || accessToken === "") {
      alert("로그인을 먼저 해주세요!!!");
      void router.push("/login");
    }
  }, [accessToken]);
};
