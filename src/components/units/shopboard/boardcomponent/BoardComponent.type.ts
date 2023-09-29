import type { IQuery } from "../../../../commons/types/generated/types";

export interface IShopBoardComponent {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
