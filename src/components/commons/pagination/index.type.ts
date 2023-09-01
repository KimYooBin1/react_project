import type { MouseEvent } from "react";
import type { IQuery } from "../../../commons/types/generated/types";

export interface IPagination {
  refetch: any;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
}

export interface IPaginationUI {
  onClickPageNumber: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickUpPage: () => void;
  onClickDownPage: () => void;
  startPage: number;
  lastPage: number;
  currentPage: number;
}

export interface IPageProps {
  isActive: boolean;
}
