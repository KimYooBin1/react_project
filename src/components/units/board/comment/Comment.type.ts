import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentWrite {
  onLoadFunc: () => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}

export interface IBoardCommentItem {
  el: any;
}
