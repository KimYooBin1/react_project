import type { ChangeEvent } from "react";

export interface IAttendanceWrite {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  err_content: string;
  err_writer: string;
  err_title: string;
}
