import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { success, errorChange } from "../../../../commons/libraries/modal";
import AttendebceWriteUI from "./AttendanceWrite.presenter";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { firebaseapp } from "../../../../commons/libraries/firebase";

export default function AttendebceWrite(): JSX.Element {
  const router = useRouter();

  const [writer, setwriter] = useState("");
  const [errwriter, setErrwriter] = useState("");
  const [title, setTitle] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [contents, setContents] = useState("");
  const [errContent, setErrContent] = useState("");

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>): void {
    setwriter(event.target.value);
    setErrwriter("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
    setErrTitle("");
  }

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>): void {
    setContents(event.target.value);
    setErrContent("");
  }

  const onClickSubmit = (): void => {
    if (writer === "") {
      setErrwriter("이름이 올바르지 않습니다");
      // errorEmpty("이름");
    }
    if (contents === "") {
      setErrContent("내용이 없습니다");
      // errorEmpty("내용");
    }
    if (title === "") {
      setErrTitle("제목이 올바르지 않습니다");
      // errorEmpty("제목");
    }
    if (writer !== "" && title !== "" && contents !== "") {
      const board = collection(getFirestore(firebaseapp), "board");

      void addDoc(board, {
        writer,
        title,
        contents,
      });
      success("출책");
      void router.push("/attendance");
    } else {
      errorChange();
    }
  };
  return (
    <AttendebceWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickSubmit={onClickSubmit}
      err_content={errContent}
      err_writer={errwriter}
      err_title={errTitle}
    />
  );
}
