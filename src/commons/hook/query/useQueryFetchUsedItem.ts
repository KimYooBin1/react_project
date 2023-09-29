import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      remarks
      name
      contents
      createdAt
      pickedCount
      images
      price
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        _id
        email
      }
    }
  }
`;

export const useQueryFetchUsedItem = (useditemId: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId,
    },
  });
  return query;
};
