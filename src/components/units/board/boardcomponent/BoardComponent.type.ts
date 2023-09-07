import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode/lib/loadPostcode";
export interface IBoardComponentUI {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAdd1: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAdd2: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAdd3: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeLink: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  onToggleModal: () => void;
  handleComplete: (data: Address) => void;
  onClickAddress: () => void;
  onChangeFileUrl: (url: string, index: number) => void;
  err_add: string;
  err_content: string;
  err_link: string;
  err_name: string;
  err_pw: string;
  err_title: string;
  isOpen: boolean;
  isEdit: boolean;
  zoneCode: string;
  address: string;
  data?: Pick<IQuery, "fetchBoard">;
  images: string[];
}

export interface IBoardComponent {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
