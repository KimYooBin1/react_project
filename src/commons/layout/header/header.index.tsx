import { GithubOutlined } from "@ant-design/icons";
import * as S from "./header.styled";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../stores";
import { Popover, Space } from "antd";
import { success } from "../../libraries/modal";
import { useMoveToPage } from "../../hook/custom/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../hook/query/useQueryFetchUserLoggedIn";
import { useMutationLogoutUser } from "../../hook/mutation/useMutationLogout";

export default function LayoutHeader(): JSX.Element {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutationLogoutUser();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = (): void => {
    setIsLogin(false);
    setAccessToken("");
    void logout();
    success("로그아웃");
  };
  const { data } = useQueryFetchUserLoggedIn();

  const content = (
    <S.UserBox>
      <S.ProfileBox>
        <S.ProfileImg src="/img/profile.png" />
        <S.ProfileInfoBox>
          <S.ProfileInfoText>{data?.fetchUserLoggedIn.name}</S.ProfileInfoText>
          <S.ProfileInfoText>{data?.fetchUserLoggedIn.email}</S.ProfileInfoText>
        </S.ProfileInfoBox>
      </S.ProfileBox>
      <S.ProfileBtn onClick={onClickMoveToPage("/mypage/payment")}>
        충전하기
      </S.ProfileBtn>
      <S.ProfileBtn onClick={onClickLogout}>로그아웃</S.ProfileBtn>
    </S.UserBox>
  );

  return (
    <S.Wrapper>
      <GithubOutlined
        rev={""}
        style={{ fontSize: "50px" }}
        onClick={onClickMoveToPage("/boards/page")}
      />
      <S.LoginWrapper>
        {isLogin ? (
          <Space wrap>
            <Popover
              content={content}
              trigger="hover"
              style={{ backgroundColor: "blue" }}
            >
              <img
                src="/img/profile.png"
                style={{ cursor: "pointer" }}
                onClick={onClickMoveToPage("/mypage")}
              />
            </Popover>
          </Space>
        ) : (
          <>
            <S.LoginBtn onClick={onClickMoveToPage("/login")}>
              로그인
            </S.LoginBtn>
            <S.SignBtn onClick={onClickMoveToPage("/signup")}>
              회원가입
            </S.SignBtn>
          </>
        )}
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
