import styled from "@emotion/styled";import { useAuth } from "../../../src/commons/hook/custom/useAuth";
import MyPageMain from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import ISoldPage from "../../../src/components/units/mypage/iSold/ISold.index";

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
      <ISoldPage />
    </Body>
  );
}
