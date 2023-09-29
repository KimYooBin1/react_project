import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../types/generated/types";

export const UPDATE_BOARD = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItem = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_BOARD);

  return mutation;
};
