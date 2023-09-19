import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";

const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      price
      images
      pickedCount
    }
  }
`;

export const useQueryUsedFetchItemsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEMS_OF_THE_BEST
  );
  return query;
};
