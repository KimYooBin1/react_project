import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../types/generated/types";
export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      contents
      createdAt
      price
      images
    }
  }
`;
export const useQueryFetchUsedItems = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchBoardsArgs>(
    FETCH_USED_ITEMS
  );

  return query;
};
