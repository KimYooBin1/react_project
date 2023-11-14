import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import * as info from "./Attendance.styles";
import { EditOutlined } from "@ant-design/icons";
import {
  type DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseapp } from "../../../../commons/libraries/firebase";
export default function AttendacePage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);
  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseapp), "board");

      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    };
    void fetchBoards();
  }, []);
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
          <info.PostList key={el._id}>
            <info.Num>{index + 1}</info.Num>
            <info.Title>{el?.title}</info.Title>{" "}
            <info.Content>{el?.contents}</info.Content>
            <info.Writer>{el?.writer}</info.Writer>{" "}
          </info.PostList>
        ))}
      </info.Wrapper>
      <info.BtnWrapper>
        <info.RegBtn onClick={onClickMoveToPage("/attendance/write")}>
          <EditOutlined rev={""} style={{ marginRight: "20px" }} />
          출책하기
        </info.RegBtn>
      </info.BtnWrapper>
    </info.Body>
  );
}
