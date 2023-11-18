import type { Dispatch, SetStateAction } from "react";
import type {  IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriter {
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IUseditemQuestion;
}
