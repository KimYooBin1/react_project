import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IBoardCommentWriterUI {
  onClickSubmit: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  onClickClose: () => void;
  setRating: (event: any) => void;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  length: string;
  isEdit: boolean;
  el?: IBoardComment;
}

export interface IBoardCommentWriter {
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}
