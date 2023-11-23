import * as info from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/index.index";
import Search from "../../../commons/search/search.index";
import { useState } from "react";
import MoveMyPage from "../../../commons/moveMyPage/moveMyPage.index";
import useFetchPointTransactions from "../../../../commons/hook/custom/useFetchPointTransactions";
import MainPageItem from "./mainItem.index";
import type { IPointTransaction } from "../../../../commons/types/generated/types";
// import Search from "../../commons/search/search.index";

export default function MainPage(): JSX.Element {
  const {count,data,refetch} = useFetchPointTransactions();
  const [, SetKeyword] = useState("");
  return (
    <info.Body>
      <info.BoardsWrapper>
        <MoveMyPage />
        <Search refetch={refetch} SetKeyword={SetKeyword} />
        <info.Post>
          <info.HeaderNum>날짜</info.HeaderNum>
          <info.HeaderTitle>내용 </info.HeaderTitle>
          <info.HeaderPrice>거래 및 충전 내역</info.HeaderPrice>
          <info.HeaderDate>잔액</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof data === "undefined" ? (
            <>
              <div>내역 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {data.fetchPointTransactions.map((el:IPointTransaction, index: number) => (
                <MainPageItem key={uuidv4()} el={el} />
              ))}
            </div>
          )}
        </info.PostList>
        <Pagination refetch={refetch} count={count} />
      </info.BoardsWrapper>
    </info.Body>
  );
}
