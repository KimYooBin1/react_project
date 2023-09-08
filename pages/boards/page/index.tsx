import { useQuery } from "@apollo/client";
import ListPage from "../../../src/components/units/board/list/List.container";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import {
  FETCH_BOARD_COUNTS,
  fetchBoard,
} from "../../../src/components/units/board/list/List.queries";
import Pagination from "../../../src/components/commons/pagination/index.container";
import Search from "../../../src/components/commons/search/search.container";
import { useState } from "react";

export default function NewBoard(): JSX.Element {
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNTS);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(fetchBoard);

  const [keyword, SetKeyword] = useState("");
  return (
    <>
      <Search
        SetKeyword={SetKeyword}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
      />
      <ListPage data={data} keyword={keyword} />
      <Pagination refetch={refetch} dataBoardsCount={dataBoardsCount} />
    </>
  );
}
