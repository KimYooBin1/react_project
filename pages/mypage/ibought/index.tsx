import styled from "@emotion/styled";
import MyPageMain from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import IBoughtPage from "../../../src/components/units/mypage/iBought/iBought.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyBoughtPageBoard(): JSX.Element {
  return (
    <Body>
      <MyPageMain />
      <IBoughtPage />
    </Body>
  );
}
