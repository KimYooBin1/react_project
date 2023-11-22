import Pagination from "../../../src/components/commons/pagination/index.index";
import { useState } from "react";
import { useQueryFetchBoards } from "../../../src/commons/hook/query/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../src/commons/hook/query/useQueryFetchBoardsCount";
import ListPage from "../../../src/components/units/board/list/List.index";
import BestBoard from "../../../src/components/commons/bestBoard/bestBoard.index";
import Search from "../../../src/components/commons/search/search.index";

export default function NewBoard(): JSX.Element {
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();
  const { data, refetch } = useQueryFetchBoards();
  const [keyword, SetKeyword] = useState("");
  return (
    <>
      <BestBoard />
      <Search
        SetKeyword={SetKeyword}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
      />
      <ListPage data={data} keyword={keyword} />
      <Pagination refetch={refetch} count={dataBoardsCount?.fetchBoardsCount} />
    </>
  );
}
