import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ISearch {
  SetKeyword: Dispatch<SetStateAction<string>>;
  refetchBoardsCount: any;
  refetch: any;
}

export interface ISearchUI {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
