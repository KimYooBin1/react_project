import styled from "@emotion/styled";
import { useAuth } from "../../../src/commons/hook/custom/useAuth";
import MyPageMain from "../../../src/components/units/mypage/main/main.index";
import ISellPage from "../../../src/components/units/mypage/iSell/iSell.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyChargePageBoard(): JSX.Element {
  useAuth();
  return (
    <Body>
      <MyPageMain />
      <ISellPage />
    </Body>
  );
}
