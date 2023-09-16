import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../types/generated/types";
import { useQuery, gql } from "@apollo/client";

export const FETCH_COMMENT = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
export const useQueryFetchBoardComments = (
  variables: IQueryFetchBoardCommentsArgs
) => {
  const query = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables,
  });
  return query;
};
