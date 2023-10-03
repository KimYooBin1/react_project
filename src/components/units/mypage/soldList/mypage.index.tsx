import * as info from "./mypage.styles";
import { v4 as uuidv4 } from "uuid";
import MyPageItem from "./mypageItem.index";
import Pagination from "../../../commons/pagination/index.index";
import Search from "../../../commons/search/search.index";
import { useQueryFetchUseditemsISold } from "../../../../commons/hook/query/useQueryFetchBoardsOfMine";
import UseQueryFetchUseditemsCountISold from "../../../../commons/hook/query/useQueryFetchUseditemsCountISold";
import { useState } from "react";
// import Search from "../../commons/search/search.index";

export default function MyPage(): JSX.Element {
  const { data, refetch } = useQueryFetchUseditemsISold();
  const { data: dataUsedISoldCount } = UseQueryFetchUseditemsCountISold();
  const [, SetKeyword] = useState("");
  return (
    <info.Body>
      <info.BoardsWrapper>
        <Search refetch={refetch} SetKeyword={SetKeyword} />
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>상품명 </info.HeaderTitle>
          <info.HeaderPrice>판매가격</info.HeaderPrice>
          <info.HeaderDate>날짜</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof data === "undefined" ? (
            <>
              <div>작성하신 판매글이 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {data.fetchUseditemsISold.map((el: any, index: number) => (
                <MyPageItem key={uuidv4()} el={el} index={index} />
              ))}
            </div>
          )}
        </info.PostList>
        <Pagination refetch={refetch} dataUsedISoldCount={dataUsedISoldCount} />
      </info.BoardsWrapper>
    </info.Body>
  );
}
