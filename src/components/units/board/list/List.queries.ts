import { gql } from "@apollo/client";

export const fetchBoard = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARD_COUNTS = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
