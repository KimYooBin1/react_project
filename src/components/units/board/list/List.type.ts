import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IListPageUI {
  data?: Pick<IQuery, "fetchBoards">;
  onClickList: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickBtn: () => void;
}

export interface IListPage {
  data?: Pick<IQuery, "fetchBoards">;
}
