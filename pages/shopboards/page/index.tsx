import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { FETCH_BOARD_COUNTS } from "../../../src/components/units/board/list/List.queries";
import Pagination from "../../../src/components/commons/pagination/index.container";
import Search from "../../../src/components/commons/search/search.container";
import { useState } from "react";
import BestBoard from "../../../src/components/commons/bestBoard/bestBoard.container";
import { FETCH_USED_ITEMS } from "../../../src/components/units/shopboard/list/List.queries";
import ShopListPage from "../../../src/components/units/shopboard/list/List.container";

export default function NewBoard(): JSX.Element {
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNTS);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchBoardsArgs
  >(FETCH_USED_ITEMS);

  const [keyword, SetKeyword] = useState("");
  return (
    <>
      <BestBoard />
      <Search
        SetKeyword={SetKeyword}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
      />
      <ShopListPage data={data} keyword={keyword} />
      <Pagination refetch={refetch} dataBoardsCount={dataBoardsCount} />
    </>
  );
}
