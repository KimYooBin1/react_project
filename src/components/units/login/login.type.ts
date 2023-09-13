import type { ChangeEvent } from "react";

export interface ILoginPageUI {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
