import type { IQuery } from "../../types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARDS_OF_MINE = gql`
  query {
    fetchBoardsOfMine {
      _id
    }
  }
`;

export const useQueryFetchBoardsOfMine = () => {
  const result =
    useQuery<Pick<IQuery, "fetchBoardsOfMine">>(FETCH_BOARDS_OF_MINE);
  return result;
};
