import { useMutation, useQuery } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import BoardWriteUI from "./Comment.presenter";
import { useRouter } from "next/router";
import { CREATE_COMMENT, FETCH_COMMENT } from "./Comment.queries";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { success, errorEmpty } from "../../../../commons/libraries/modal";

export default function BoardWrite(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [length, setLength] = useState("");
  const [rating, setRating] = useState(0);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const onLoadFunc = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoardComments === undefined) {
          console.log("1");
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
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

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      setRating={setRating}
      onLoadFunc={onLoadFunc}
      writer={writer}
      password={password}
      contents={contents}
      data={data}
      length={length}
    />
  );
}
