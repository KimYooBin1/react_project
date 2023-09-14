import type { ChangeEvent } from "react";

export interface ILoginPageUI {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickSignup: () => void;
  isSubmit: boolean;
  userId: string;
}

export interface ILoginSubmitBtn {
  isSubmit: boolean;
}
