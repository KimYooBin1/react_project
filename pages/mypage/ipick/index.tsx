import styled from "@emotion/styled";
import { useAuth } from "../../../src/commons/hook/custom/useAuth";
import MyPageMain from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import IPickPage from "../../../src/components/units/mypage/iPick/iPick.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyPickPageBoard(): JSX.Element {
  useAuth();
  return (
    <Body>
      <MyPageMain />
      <IPickPage />
    </Body>
  );
}
