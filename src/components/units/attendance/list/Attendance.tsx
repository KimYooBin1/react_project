import type { DocumentData } from "firebase/firestore/lite";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import * as info from "./Attendance.styles";
import { firebaseapp } from "../../../../commons/libraries/firebase";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FireBasePage(): JSX.Element {
  //   const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);
  const [count, setCount] = useState(0);
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseapp), "board");

    void addDoc(board, {
      writer: "철수",
      title: "안녕",
      contents: "반갑습니다",
    });
    setCount(count + 1);
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
  }, [count]);
  return (
    <info.Body>
      <info.Wrapper>
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>제목 </info.HeaderTitle>
          <info.HeaderContent>내용</info.HeaderContent>
          <info.HeaderWriter>작성자</info.HeaderWriter>
        </info.Post>
        {dataBoards.map((el: any, index: number) => (
          <info.PostList key={el?._id} id={el?._id}>
            <info.Num>{index + 1}</info.Num>
            <info.Title>{el?.title}</info.Title>{" "}
            <info.Content>{el?.contents}</info.Content>
            <info.Writer>{el?.writer}</info.Writer>{" "}
          </info.PostList>
        ))}
      </info.Wrapper>
      <info.BtnWrapper>
        <info.RegBtn onClick={onClickSubmit}>출책 남기기</info.RegBtn>
      </info.BtnWrapper>
    </info.Body>
  );
}
