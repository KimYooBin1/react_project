import { useAuth } from "../../../../commons/hook/custom/useAuth";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hook/query/useQueryFetchUserLoggedIn";
import * as info from "./mainMenu.styles";
export default function MyPageMainMenu() {
  useAuth();
  const { data: userData } = useQueryFetchUserLoggedIn();
  const { onClickMoveToPage } = useMoveToPage();

  const onErrorImg = (e: any) => {
    e.target.src = "/img/profile.png";
  };

  return (
    <>
      <info.InfoWrapper>
        <info.UserInfoTitle>MYPAGE</info.UserInfoTitle>
        <info.InfoImg
          onError={onErrorImg}
          src={userData?.fetchUserLoggedIn.picture ?? ""}
          onClick={onClickMoveToPage("/mypage/edit")}
        />
        <info.InfoName>{userData?.fetchUserLoggedIn.name}</info.InfoName>
        <info.InfoPoint>
          {userData?.fetchUserLoggedIn.userPoint?.amount} 원
        </info.InfoPoint>
        <info.InfoMyShop onClick={onClickMoveToPage("/mypage/isold")}>
          내 장터
        </info.InfoMyShop>
        <info.InfoMyPoint onClick={onClickMoveToPage("/mypage")}>
          내 포인트
        </info.InfoMyPoint>
        <info.InfoMyProfile onClick={onClickMoveToPage("/mypage/myprofile")}>
          내 프로필
        </info.InfoMyProfile>
      </info.InfoWrapper>
    </>
  );
}
