import type { DocumentData } from "firebase/firestore/lite";

export interface IAttendancePage {
  onClickSubmit: () => void;
  dataBoards: DocumentData[];
}
