import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hook/query/useQueryFetchUserLoggedIn";
import * as info from "./mainMenu.styles";
export default function MyPageMainMenu() {
  const { data: userData } = useQueryFetchUserLoggedIn();
  const {onClickMoveToPage} = useMoveToPage()
  return (
    <>
      <info.InfoWrapper>
        <info.UserInfoTitle>MYPAGE</info.UserInfoTitle>
        <info.InfoImg src="/img/profile.png" />
        <info.InfoName>{userData?.fetchUserLoggedIn.name}</info.InfoName>
        <info.InfoPoint>
          {userData?.fetchUserLoggedIn.userPoint?.amount} 원
        </info.InfoPoint>
        <info.InfoMyShop onClick={onClickMoveToPage("/mypage/isold")}>내 장터</info.InfoMyShop>
        <info.InfoMyPoint>내 포인트</info.InfoMyPoint>
        <info.InfoMyProfile>내 프로필</info.InfoMyProfile>
      </info.InfoWrapper>
    </>
  );
}
