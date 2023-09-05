import styled from "@emotion/styled";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
const Wrapper = styled.div`
  height: 50px;
  background-color: orange;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BtnWrapper = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: orange;
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-left: 1px solid white;
  border-right: 1px solid white;

  transition: all 0.5s;

  :hover {
    background-color: #ff9900;
    font-size: 20px;
  }
`;
const NAVIGATION_MENUS = [
  { name: "출석부", page: "/attendance" },
  { name: "라이브게시판", page: "/boards/page" },
  { name: "라이브상품", page: "/boards/product" },
  { name: "마이페이지", page: "/boards/mypage" },
  { name: "시바시바", page: "/openapi" },
];
export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const onClick = (event: MouseEvent<HTMLButtonElement>): void => {
    void router.push(`${event.currentTarget.id}`);
  };
  return (
    <Wrapper>
      <BtnWrapper>
        {NAVIGATION_MENUS.map((el) => (
          <MenuBtn key={el.page} id={el.page} onClick={onClick}>
            {el.name}
          </MenuBtn>
        ))}
      </BtnWrapper>
    </Wrapper>
  );
}
