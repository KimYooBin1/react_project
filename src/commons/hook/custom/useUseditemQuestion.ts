import { alertError, errorEmpty, success } from "../../libraries/modal";
import {
  type Dispatch,
  type SetStateAction,
} from "react";
import type { IUpdateUseditemQuestionInput } from "../../types/generated/types";
import useMutationCreateUseditemQuestion from "../mutation/useMutationCreateUseditemQuestion";
import useMutationDeleteUseditemQuestion from "../mutation/useMutationDeleteUseditemQuestion";
import useMutationUpdateUseditemQuestion from "../mutation/useMutationUpdateUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";

interface IUseditemQuestionArgs {
  useditemId: string;
  questionId?: string;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  reset?:any
}

export const useUseditemQuestion = (arg: IUseditemQuestionArgs) => {
  const [createQuestion] = useMutationCreateUseditemQuestion();
  const [updateQuestion] = useMutationUpdateUseditemQuestion();
  const [deleteQuestion] = useMutationDeleteUseditemQuestion();

  const onClickClose = (): void => {
    arg.setIsEdit?.(false);
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      if (arg.questionId === undefined) {
        return;
      }
      await deleteQuestion({
        variables: {
          useditemQuestionId: arg.questionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: arg.useditemId,
            },
          },
        ],
      });
      success("삭제");
    } catch (error) {
      if(error instanceof Error){
        alertError(error.message)
      }
    }
  };
  const onClickEdit = (): void => {
    arg.setIsEdit?.(true);
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    if (data.contents === "") {
      errorEmpty("댓글");
      return;
    }
    try{
      await createQuestion({
      variables: {
        useditemId: arg.useditemId,
        createUseditemQuestionInput: {
          contents: data.contents,
        },
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: {
            useditemId: arg.useditemId,
          },
        },
      ],
    })
    success("댓글");
    arg.reset();
  }
    catch(error){
      if(error instanceof Error){
        alertError(error.message);
      }
    }
  };

  const onClickUpdate = async (data: any): Promise<void> => {
    if (data.contents === "") {
      errorEmpty("댓글");
      return;
    }
    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {...data};
      if (data.contents !== "") {
        updateUseditemQuestionInput.contents = data.contents;
      }
      if (arg.questionId === undefined) {
        return;
      }
      await updateQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: arg.questionId,
        },
      });
      arg.setIsEdit?.(false);
      success("댓글 수정");
    } catch (error) {
      if(error instanceof Error){
        alertError(error.message)
      }
    }
  };
  return {
    onClickSubmit,
    onClickUpdate,
    onClickClose,
    onClickDelete,
    onClickEdit,
  };
};
