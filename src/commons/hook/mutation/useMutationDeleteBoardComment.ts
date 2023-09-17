import { gql, useMutation } from "@apollo/client";

export const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const useMutationDeleteBoardComment = () => {
  const mutation = useMutation(DELETE_COMMENT);

  return mutation;
};
