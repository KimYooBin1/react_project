import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IShopListPageUI {
  onClickList: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickBtn: () => void;
  data?: Pick<IQuery, "fetchUseditems">;
  keyword: string;
}

export interface IShopListPage {
  data?: Pick<IQuery, "fetchUseditems">;
  keyword: string;
}
