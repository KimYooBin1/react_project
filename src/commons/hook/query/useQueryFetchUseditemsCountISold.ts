import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";

const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`;

export default function UseQueryFetchUseditemsCountISold() {
  const query = useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(
    FETCH_USED_ITEMS_COUNT_I_SOLD
  );

  return query;
}
