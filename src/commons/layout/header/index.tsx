import { GithubOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../stores";
import { Popover, Space } from "antd";
import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";
import { success } from "../../libraries/modal";

const FETCH_USER = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const Wrapper = styled.div`
  height: 80px;
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff4f4;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: orange;
  border: 2px solid orange;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const SignBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: orange;
  border: 2px solid orange;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const UserBox = styled.div`
  width: 260px;
  aspect-ratio: 1;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const ProfileImg = styled.img`
  scale: 0.8;
`;

const ProfileInfoBox = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProfileInfoText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const ProfileBtn = styled.div`
  height: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: lightgray;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  transition: all 0.4s;

  :hover {
    background-color: orange;
    color: white;
  }
`;

export default function LayoutHeader(): JSX.Element {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const onClickLogo = (): void => {
    void router.push("/boards/page");
  };
  const onClickLogin = (): void => {
    void router.push("/login");
  };
  const onClickSign = (): void => {
    void router.push("/signup");
  };

  const onClickLogout = (): void => {
    setIsLogin(false);
    setAccessToken("");
    localStorage.removeItem("accessToken");
    success("로그아웃");
  };
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  console.log(data);

  const content = (
    <UserBox>
      <ProfileBox>
        <ProfileImg src="/img/profile.png" />
        <ProfileInfoBox>
          <ProfileInfoText>{data?.fetchUserLoggedIn.name}</ProfileInfoText>
          <ProfileInfoText>{data?.fetchUserLoggedIn.email}</ProfileInfoText>
        </ProfileInfoBox>
      </ProfileBox>
      <ProfileBtn>충전하기</ProfileBtn>
      <ProfileBtn onClick={onClickLogout}>로그아웃</ProfileBtn>
    </UserBox>
  );

  return (
    <Wrapper>
      <GithubOutlined
        rev={""}
        style={{ fontSize: "50px" }}
        onClick={onClickLogo}
      />
      <LoginWrapper>
        {isLogin ? (
          <Space wrap>
            <Popover
              content={content}
              trigger="hover"
              style={{ backgroundColor: "blue" }}
            >
              <img src="/img/profile.png" />
            </Popover>
          </Space>
        ) : (
          <>
            <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
            <SignBtn onClick={onClickSign}>회원가입</SignBtn>
          </>
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
