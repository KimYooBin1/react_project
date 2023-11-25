import styled from "@emotion/styled";
import MyPageMain from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import ISellPage from "../../../src/components/units/mypage/iSell/iSell.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyChargePageBoard(): JSX.Element {
  return (
    <Body>
      <MyPageMain />
      <ISellPage />
    </Body>
  );
}
