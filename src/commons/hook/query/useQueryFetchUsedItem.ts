import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      contents
      createdAt
      pickedCount
      images
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const useQueryFetchUsedItem = (boardId: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: boardId,
    },
  });
  return query;
};
