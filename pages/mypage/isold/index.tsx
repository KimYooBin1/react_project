import styled from "@emotion/styled";
import MyPageMain from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import ISoldPage from "../../../src/components/units/mypage/iSold/ISold.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyPageBoard(): JSX.Element {
  return (
    <Body>
      <MyPageMain />
      <ISoldPage />
    </Body>
  );
}
