import * as info from "./iCharge.styles";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../../commons/pagination/index.index";
import Search from "../../../commons/search/search.index";
import { useState } from "react";
import IBoughtPageItem from "./iChargeItem.index";
import MoveMyPage from "../../../commons/moveMyPage/moveMyPage.index";
import useFetchPointTransactionsOfLoading from "../../../../commons/hook/custom/useFetchPointTransactionsOfLoading";

export default function IChargePage(): JSX.Element {
  const {count,data,refetch} = useFetchPointTransactionsOfLoading();
  const [, SetKeyword] = useState("");
  return (
    <info.Body>
      <info.BoardsWrapper>
        <MoveMyPage />
        <Search refetch={refetch} SetKeyword={SetKeyword} />
        <info.Post>
          <info.HeaderNum>충전일</info.HeaderNum>
          <info.HeaderTitle>결재 ID</info.HeaderTitle>
          <info.HeaderPrice>충전내역</info.HeaderPrice>
          <info.HeaderDate>충전후 잔액</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof data === "undefined" ? (
            <>
              <div>충전내역이 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {data.fetchPointTransactionsOfLoading.map((el) => (
                <IBoughtPageItem key={uuidv4()} el={el} />
              ))}
            </div>
          )}
        </info.PostList>
        <Pagination refetch={refetch} count={count?.fetchPointTransactionsCountOfLoading} />
      </info.BoardsWrapper>
    </info.Body>
  );
}
