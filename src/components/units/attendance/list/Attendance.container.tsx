import type { DocumentData } from "firebase/firestore/lite";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { firebaseapp } from "../../../../commons/libraries/firebase";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AttendanceUI from "./Attendance.presenter";
import { useRouter } from "next/router";

export default function FireBasePage(): JSX.Element {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);
  const onClickSubmit = (): void => {
    void router.push("/attendance/write");
  };

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseapp), "board");

      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
      console.log(boards);
    };
    void fetchBoards();
  }, []);
  return <AttendanceUI dataBoards={dataBoards} onClickSubmit={onClickSubmit} />;
}
