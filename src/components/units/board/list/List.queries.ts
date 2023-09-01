import { gql } from "@apollo/client";

export const fetchBoard = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARD_COUNTS = gql`
  query {
    fetchBoardsCount
  }
`;
