import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardArgs } from "../../types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      createdAt
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const useQueryFetchBoard = (variables: IQueryFetchBoardArgs) => {
  const query = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables }
  );
  return query;
};
