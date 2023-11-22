import type { MouseEvent } from "react";

export interface IPagination {
  refetch: any;
  count?: number
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
