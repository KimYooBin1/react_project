import { useState, type ChangeEvent, type MouseEvent } from "react";
import BoardCommentWriteUI from "./CommentWrite.presenter";
import {
  CREATE_COMMENT,
  FETCH_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { useMutation } from "@apollo/client";
import {
  errorEmpty,
  errorInput,
  success,
} from "../../../../../commons/libraries/modal";
import { useRouter } from "next/router";
import type { IBoardCommentWriter } from "./CommentWrite.type";

export default function BoardCommentWriter(
  props: IBoardCommentWriter
): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [length, setLength] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
    setLength(String(event.target.value.length));
  };

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const onClickSubmit = async (): Promise<void> => {
    if (writer === "") {
      errorEmpty("작성자");
      return;
    }
    if (password === "") {
      errorEmpty("비밀번호");
      return;
    }
    if (contents === "") {
      errorEmpty("댓글");
      return;
    }
    await createBoardComment({
      variables: {
        boardId: router.query.boardId,
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating,
        },
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
    success("댓글");
    setWriter("");
    setContents("");
    setPassword("");
  };
  const onClickClose = (): void => {
    props.setIsEdit?.(false);
  };
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onClickUpdateComment = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (contents === "") {
      errorEmpty("댓글");
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: props.el?._id,
        },
      });
      props.setIsEdit?.(false);
      success("댓글 수정");
    } catch (error) {
      errorInput("비밀번호");
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      setRating={setRating}
      onClickUpdateComment={onClickUpdateComment}
      onClickClose={onClickClose}
      writer={writer}
      password={password}
      contents={contents}
      length={length}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
