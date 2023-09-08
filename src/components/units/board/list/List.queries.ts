import { gql } from "@apollo/client";

export const fetchBoard = gql`
  query fetchBoards(
    $page: Int
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoards(
      page: $page
      search: $search
      endDate: $endDate
      startDate: $startDate
    ) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARD_COUNTS = gql`
  query fetchBoardsCount(
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoardsCount(search: $search, endDate: $endDate, startDate: $startDate)
  }
`;
