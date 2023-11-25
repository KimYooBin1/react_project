import styled from "@emotion/styled";
import MyPageMainMenu from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import MyProfileEditPage from "../../../src/components/units/mypage/myProfileEdit/edit.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyProfileEdit() {
  return (
    <Body>
      <MyPageMainMenu />
      <MyProfileEditPage />
    </Body>
  );
}
