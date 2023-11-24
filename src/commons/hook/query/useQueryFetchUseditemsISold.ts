import type { IQuery } from "../../types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEM_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      remarks
      price
      createdAt
    }
  }
`;

export const useQueryFetchUseditemsISold = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsISold">>(
    FETCH_USED_ITEM_ISOLD
  );
  return query;
};
