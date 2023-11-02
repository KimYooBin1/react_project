import type { ChangeEvent, RefObject } from "react";

export interface IUpLoadBtnItemPage {
  onClickImageInput: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
  url: string;
}

export interface IUpLoadBtnItem {
  onChangeFileUrl: (file: File, index: number) => void;
  index: number;
  url: string;
}
