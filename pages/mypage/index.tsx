import styled from "@emotion/styled";
import { useAuth } from "../../src/commons/hook/custom/useAuth";
import MyPageMain from "../../src/components/units/mypage/mainMenu/mainMenu.index";
import MainPage from "../../src/components/units/mypage/main/main.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyPageBoard(): JSX.Element {
  useAuth();
  return (
    <Body>
      <MyPageMain />
      <MainPage />
    </Body>
  );
}
