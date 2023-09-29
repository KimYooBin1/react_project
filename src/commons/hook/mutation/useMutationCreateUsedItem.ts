import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../types/generated/types";

export const CREATE_BOARD = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;
export const useMutationCreateUsedItem = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_BOARD);

  return mutation;
};
