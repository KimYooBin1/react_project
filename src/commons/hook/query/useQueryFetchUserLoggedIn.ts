import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";

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

export const useQueryFetchUserLoggedIn = () => {
  const query =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return query;
};
