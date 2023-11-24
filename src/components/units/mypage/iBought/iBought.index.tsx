import * as info from "./iBought.styles";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/index.index";
import Search from "../../../commons/search/search.index";
import { useState } from "react";
import IBoughtPageItem from "./iBoughtItem.index";
import useFetchIBought from "../../../../commons/hook/custom/useFetchIBought";
import MoveMyPage from "../../../commons/moveMyPage/moveMyPointInfoPage.index";
// import Search from "../../commons/search/search.index";

export default function IBoughtPage(): JSX.Element {
  const {count,data,refetch} = useFetchIBought();
  const [, SetKeyword] = useState("");
  return (
    <info.Body>
      <info.BoardsWrapper>
        <MoveMyPage />
        <Search refetch={refetch} SetKeyword={SetKeyword} />
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>name </info.HeaderTitle>
          <info.HeaderPrice>remarks</info.HeaderPrice>
          <info.HeaderDate>price</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof data === "undefined" ? (
            <>
              <div>구매하신 상품이 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {data.fetchUseditemsIBought.map((el: any, index: number) => (
                <IBoughtPageItem key={uuidv4()} el={el} index={index} />
              ))}
            </div>
          )}
        </info.PostList>
        <Pagination refetch={refetch} count={count?.fetchUseditemsCountIBought} />
      </info.BoardsWrapper>
    </info.Body>
  );
}
