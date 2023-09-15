import { useQuery } from "@apollo/client";
import MyPageUI from "./mypage.presenter";
import { FETCH_BOARDS_OF_MINE, FETCH_USER_LOGGED_IN } from "./mypage.queries";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { IQuery } from "../../../commons/types/generated/types";
export default function MyPage(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인을 먼저 해주세요!!!");
      void router.push("/login");
    }
  });
  const { data } =
    useQuery<Pick<IQuery, "fetchBoardsOfMine">>(FETCH_BOARDS_OF_MINE);
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return <MyPageUI data={data} userData={userData} />;
}
