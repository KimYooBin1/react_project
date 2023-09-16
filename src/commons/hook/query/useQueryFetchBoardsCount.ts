import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../types/generated/types";
export const FETCH_BOARD_COUNTS = gql`
  query fetchBoardsCount(
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoardsCount(search: $search, endDate: $endDate, startDate: $startDate)
  }
`;

export const useQueryFetchBoardsCount = () => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNTS);

  return query;
};
