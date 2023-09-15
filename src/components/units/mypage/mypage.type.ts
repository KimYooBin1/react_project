import type { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageUI {
  data?: Pick<IQuery, "fetchBoardsOfMine">;
  userData?: Pick<IQuery, "fetchUserLoggedIn">;
}
