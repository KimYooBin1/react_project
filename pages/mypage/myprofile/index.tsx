import styled from "@emotion/styled";
import MyPageMainMenu from "../../../src/components/units/mypage/mainMenu/mainMenu.index";
import MyProfilePage from "../../../src/components/units/mypage/myProfile/myProfile.index";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function MyProfile() {
  return (
    <Body>
      <MyPageMainMenu />
      <MyProfilePage />
    </Body>
  );
}
