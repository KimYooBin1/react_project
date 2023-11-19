import { useQueryFetchUserLoggedIn } from "../../../../commons/hook/query/useQueryFetchUserLoggedIn";
import * as info from "./mypage.styles";
export default function MyPageMain() {
  const { data: userData } = useQueryFetchUserLoggedIn();
  return (
    <>
      <info.InfoWrapper>
        <info.UserInfoTitle>MYPAGE</info.UserInfoTitle>
        <info.InfoImg src="/img/profile.png" />
        <info.InfoName>{userData?.fetchUserLoggedIn.name}</info.InfoName>
        <info.InfoPoint>
          {userData?.fetchUserLoggedIn.userPoint?.amount} 원
        </info.InfoPoint>
        <info.InfoMyShop>내 장터</info.InfoMyShop>
        <info.InfoMyPoint>내 포인트</info.InfoMyPoint>
        <info.InfoMyProfile>내 프로필</info.InfoMyProfile>
      </info.InfoWrapper>
    </>
  );
}
