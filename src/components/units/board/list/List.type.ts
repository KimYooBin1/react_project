import type { IQuery } from "../../../../commons/types/generated/types";

export interface IListPage {
  data?: Pick<IQuery, "fetchBoards">;
  keyword: string;
}
