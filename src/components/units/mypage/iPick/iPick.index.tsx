import * as info from "./iPick.styles";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/index.index";
import Search from "../../../commons/search/search.index";
import { useState } from "react";
import MoveMyPage from "../../../commons/moveMyPage/moveMyPointInfoPage.index";
import useFetchUseditemsIPicked from "../../../../commons/hook/custom/useFetchUseditemsIPicked";
import IPickPageItem from "./iPickItem.index";
import { IUseditem } from "../../../../commons/types/generated/types";
import MoveMySellInfoPage from "../../../commons/moveMyPage/moveMySellInfoPage.index";
// import Search from "../../commons/search/search.index";

export default function IPickPage(): JSX.Element {
  const [keyword, SetKeyword] = useState("");
  const {count,data,refetch} = useFetchUseditemsIPicked({keyword});
  return (
    <info.Body>
      <info.BoardsWrapper>
        <MoveMySellInfoPage />
        <Search refetch={refetch} SetKeyword={SetKeyword} />
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>상품명</info.HeaderTitle>
          <info.HeaderPrice>판매가격</info.HeaderPrice>
          <info.HeaderDate>판매자</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof data === "undefined" ? (
            <>
              <div>찜 목록이 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {data.fetchUseditemsIPicked.map((el: IUseditem, index: number) => (
                <IPickPageItem key={uuidv4()} el={el} index={index} />
              ))}
            </div>
          )}
        </info.PostList>
        <Pagination refetch={refetch} count={count?.fetchUseditemsCountIPicked} />
      </info.BoardsWrapper>
    </info.Body>
  );
}
