import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IListPageUI {
  onClickList: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickBtn: () => void;
  data?: Pick<IQuery, "fetchBoards">;
  keyword: string;
}

export interface IListPage {
  data?: Pick<IQuery, "fetchBoards">;
  keyword: string;
}
