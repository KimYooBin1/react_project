import { errorEmpty, errorInput, success } from "../../libraries/modal";
import { useMutationCreateBoardComment } from "../mutation/useMutationCreateBoardComment";
import { useMutationUpdateBoardComment } from "../mutation/useMutationUpdateBoardComment";
import { useState, type Dispatch, type SetStateAction } from "react";
import { FETCH_COMMENT } from "../query/useQueryfetchBoardComments";
import type { IUpdateBoardCommentInput } from "../../types/generated/types";

interface IUseCommentArg {
  boardId: string;
  boardCommentId?: string;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  reset: any;
}

export const useComment = (arg: IUseCommentArg) => {
  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const [rating, setRating] = useState(0);
  const onClickSubmit = async (data: any): Promise<void> => {
    if (data.writer === "") {
      errorEmpty("작성자");
      return;
    }
    if (data.password === "") {
      errorEmpty("비밀번호");
      return;
    }
    if (data.ontents === "") {
      errorEmpty("댓글");
      return;
    }
    await createBoardComment({
      variables: {
        boardId: arg.boardId,
        createBoardCommentInput: {
          writer: data.writer,
          password: data.password,
          contents: data.contents,
          rating,
        },
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT,
          variables: {
            boardId: arg.boardId,
          },
        },
      ],
    });
    success("댓글");
    setRating(0);
    arg.reset();
  };

  const onClickUpdateComment = async (data: any): Promise<void> => {
    if (data.contents === "") {
      errorEmpty("댓글");
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents !== "") {
        updateBoardCommentInput.contents = data.contents;
      }
      if (rating !== 0) {
        updateBoardCommentInput.rating = rating;
      }
      if (arg.boardCommentId === undefined) {
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: arg.boardCommentId,
        },
      });
      arg.setIsEdit?.(false);
      success("댓글 수정");
      arg.reset();
    } catch (error) {
      errorInput("비밀번호");
    }
  };
  const onClickClose = (): void => {
    arg.setIsEdit?.(false);
  };
  return {
    onClickSubmit,
    onClickUpdateComment,
    onClickClose,
    setRating,
    rating,
  };
};
