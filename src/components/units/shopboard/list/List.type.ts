import type { IQuery } from "../../../../commons/types/generated/types";

export interface IShopListPage {
  fetchMore: any;
  data?: Pick<IQuery, "fetchUseditems">;
  keyword: string;
}
