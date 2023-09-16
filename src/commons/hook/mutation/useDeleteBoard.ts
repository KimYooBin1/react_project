import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../types/generated/types";

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const useDeleteBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  return mutation;
};
