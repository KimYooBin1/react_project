import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
} from "../../types/generated/types";

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const useLikeBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return mutation;
};
