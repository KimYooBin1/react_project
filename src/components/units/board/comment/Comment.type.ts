import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentWrite {
  onClickSubmit: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setRating: (event: any) => void;
  onLoadFunc: () => void;
  writer: string;
  password: string;
  contents: string;
  data?: Pick<IQuery, "fetchBoardComments">;
  length: string;
}

export interface IBoardCommentItem {
  el: any;
}
