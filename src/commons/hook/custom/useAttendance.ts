import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { success } from "../../libraries/modal";
import { firebaseapp } from "../../libraries/firebase";
import { useRouter } from "next/router";

interface IUseAttendance {
  writer: string;
  title: string;
  contents: string;
}

export const useAttendance = () => {
  const router = useRouter();
  const onClickSubmit = (data: IUseAttendance): void => {
    const board = collection(getFirestore(firebaseapp), "board");

    void addDoc(board, {
      writer: data.writer,
      title: data.title,
      contents: data.contents,
    });
    success("출책");
    void router.push("/attendance");
  };
  return { onClickSubmit };
};
