import type { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWrite {
  onLoadFunc: () => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}

export interface ICommentItem {
  el: any;
}
