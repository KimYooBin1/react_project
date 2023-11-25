import styled from "@emotion/styled";
import MyPageMain from "../../src/components/units/mypage/mainMenu/mainMenu.index";
import MainPage from "../../src/components/units/mypage/main/main.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyPageBoard(): JSX.Element {
  return (
    <Body>
      <MyPageMain />
      <MainPage />
    </Body>
  );
}
