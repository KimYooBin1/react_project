import Search from "../../../src/components/commons/search/search.index";
import { useState } from "react";
import BestBoard from "../../../src/components/commons/bestBoard/bestBoard.index";
import ShopListPage from "../../../src/components/units/shopboard/list/List.index";
import { useQueryFetchUsedItems } from "../../../src/commons/hook/query/useQueryFetchUsedItems";

export default function NewBoard(): JSX.Element {
  const { data, refetch, fetchMore } = useQueryFetchUsedItems();

  const [keyword, SetKeyword] = useState("");
  return (
    <>
      <BestBoard />
      <Search SetKeyword={SetKeyword} refetch={refetch} />
      <ShopListPage data={data} keyword={keyword} fetchMore={fetchMore} />
    </>
  );
}
