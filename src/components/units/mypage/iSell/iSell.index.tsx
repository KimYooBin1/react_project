import * as info from "./iSell.styles";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/index.index";
import Search from "../../../commons/search/search.index";
import { useState } from "react";
import MoveMyPage from "../../../commons/moveMyPage/moveMyPointInfoPage.index";
import useFetchPointTransactionsOfSelling from "../../../../commons/hook/custom/useFetchPointTransactionsOfSelling";
import ISellPageItem from "./iSellItem.index";

export default function ISellPage(): JSX.Element {
  const {count,data,refetch} = useFetchPointTransactionsOfSelling();
  const [, SetKeyword] = useState("");
  return (
    <info.Body>
      <info.BoardsWrapper>
        <MoveMyPage />
        <Search refetch={refetch} SetKeyword={SetKeyword} />
        <info.Post>
          <info.HeaderNum>거래일</info.HeaderNum>
          <info.HeaderTitle>상품명</info.HeaderTitle>
          <info.HeaderPrice>거래내역</info.HeaderPrice>
          <info.HeaderDate>거래 후 잔액</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof data === "undefined" ? (
            <>
              <div>충전내역이 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {data.fetchPointTransactionsOfSelling.map((el) => (
                <ISellPageItem key={uuidv4()} el={el} />
              ))}
            </div>
          )}
        </info.PostList>
        <Pagination refetch={refetch} count={count?.fetchPointTransactionsCountOfSelling} />
      </info.BoardsWrapper>
    </info.Body>
  );
}
