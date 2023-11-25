import styled from "@emotion/styled";
import MyPageMain from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import IChargePage from "../../../src/components/units/mypage/iCharge/iCharge.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyChargePageBoard(): JSX.Element {
  return (
    <Body>
      <MyPageMain />
      <IChargePage />
    </Body>
  );
}
