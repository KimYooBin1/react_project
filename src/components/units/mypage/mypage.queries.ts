import { gql } from "@apollo/client";

export const FETCH_BOARDS_OF_MINE = gql`
  query {
    fetchBoardsOfMine {
      _id
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;
