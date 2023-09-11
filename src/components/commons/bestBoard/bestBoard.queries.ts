import { gql } from "@apollo/client";

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
