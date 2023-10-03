import { useState } from "react";
import { useQueryFetchUseditemsISold } from "../../src/commons/hook/query/useQueryFetchBoardsOfMine";
import Search from "../../src/components/commons/search/search.index";
import MyPage from "../../src/components/units/mypage/mypage.index";
import Pagination from "../../src/components/commons/pagination/index.index";
import UseQueryFetchUseditemsCountISold from "../../src/commons/hook/query/useQueryFetchUseditemsCountISold";

export default function MyPageBoard(): JSX.Element {
  const { data, refetch } = useQueryFetchUseditemsISold();
  const { data: dataUsedISoldCount } = UseQueryFetchUseditemsCountISold();
  console.log(data);
  const [, SetKeyword] = useState("");
  return (
    <>
      <Search refetch={refetch} SetKeyword={SetKeyword} />
      <MyPage data={data} />
      <Pagination refetch={refetch} dataUsedISoldCount={dataUsedISoldCount} />
    </>
  );
}
