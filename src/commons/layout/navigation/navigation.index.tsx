import * as S from "./navigation.styled";
import { useMoveToPage } from "../../hook/custom/useMoveToPage";
import { memo } from "react";

const NAVIGATION_MENUS = [
  { name: "출석부", page: "/attendance" },
  { name: "라이브게시판", page: "/boards/page" },
  { name: "라이브상품", page: "/shopboards/page" },
  { name: "마이페이지", page: "/mypage" },
  { name: "시바갤러리", page: "/openapi" },
];
function LayoutNavigation(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.BtnWrapper>
        {NAVIGATION_MENUS.map((el) => (
          <S.MenuBtn
            key={el.page}
            onClick={onClickMoveToPage(el.page)}
            className={el.name}
          >
            {el.name}
          </S.MenuBtn>
        ))}
      </S.BtnWrapper>
    </S.Wrapper>
  );
}
export default memo(LayoutNavigation);
