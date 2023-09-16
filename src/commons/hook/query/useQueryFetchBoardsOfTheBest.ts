import { useQuery, gql } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";

export const BEST_BOARDS = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      images
      likeCount
    }
  }
`;

export const useQueryFetchBoardsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(BEST_BOARDS);
  return query;
};
