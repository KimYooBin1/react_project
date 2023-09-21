import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../types/generated/types";

export const DELETE_BOARD = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useMutationDeleteUsedItem = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_BOARD);

  return mutation;
};
