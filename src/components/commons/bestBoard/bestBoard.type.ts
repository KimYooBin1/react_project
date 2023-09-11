import type { MouseEvent } from "react";
import type { IQuery } from "../../../commons/types/generated/types";

export interface IBestBoardUI {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickBestBoard: (
    value: string
  ) => (event: MouseEvent<HTMLDivElement>) => void;
}
