import { GithubOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
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

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const onClickLogo = (): void => {
    void router.push("/boards/page");
  };
  const onClickLogin = (): void => {
    void router.push("/boards/login");
  };
  const onClickSign = (): void => {
    void router.push("/boards/sign");
  };

  return (
    <Wrapper>
      <GithubOutlined
        rev={""}
        style={{ fontSize: "50px" }}
        onClick={onClickLogo}
      />
      <LoginWrapper>
        <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
        <SignBtn onClick={onClickSign}>회원가입</SignBtn>
      </LoginWrapper>
    </Wrapper>
  );
}
