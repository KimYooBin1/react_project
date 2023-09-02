import * as info from "./Comment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentItem } from "./Comment.type";
import { Rate } from "antd";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";

import { DELETE_COMMENT, FETCH_COMMENT } from "./Comment.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { errorInput, success } from "../../../../commons/libraries/modal";
import BoardCommentWriter from "./commentWrite/CommentWrite.container";

export default function BoardCommentItem(
  props: IBoardCommentItem
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  // const [commentPW, setCommentPw] = useState("");
  // const [commentContents, setCommentContents] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [deletePW, setPW] = useState("");
  const [deleteId, setDeletId] = useState("");
  // const [rating, setRating] = useState(0);

  const onChangeDeletePW = (event: ChangeEvent<HTMLInputElement>): void => {
    setPW(event.target.value);
  };

  // const onChangePW = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setCommentPw(event.target.value);
  // };
  // const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
  //   setCommentContents(event.target.value);
  // };

  const toggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    toggleModal();
    setDeletId(event.currentTarget.id);
  };
  const onCancel = (): void => {
    toggleModal();
  };
  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: { boardCommentId: deleteId, password: deletePW },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      toggleModal();
      success("삭제");
    } catch (error) {
      errorInput("비밀번호");
    }
  };
  const onClickEditComment = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {isOpen && (
        <info.PasswordModal
          open={isOpen}
          onOk={onClickDelete}
          onCancel={onCancel}
        >
          비밀번호:
          <info.PasswordInput type="password" onChange={onChangeDeletePW} />
        </info.PasswordModal>
      )}
      {!isEdit ? (
        <info.CommentBoxs>
          <info.CommentBox>
            <info.CommentBoxInfo>
              <info.CommentBoxImg src="/img/profile.png" />
              <info.CommentInfo>
                <info.CommentProfile>
                  <info.CommentProfileName>
                    {props.el.writer}
                  </info.CommentProfileName>
                  <Rate disabled defaultValue={props.el.rating} />
                </info.CommentProfile>
                <info.Comment>{props.el?.contents}</info.Comment>
              </info.CommentInfo>
              <div>
                <img
                  src="/img/edit.png"
                  id={props.el?._id}
                  onClick={onClickEditComment}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src="/img/delete.png"
                  id={props.el?._id}
                  onClick={onClickOpenDeleteModal}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </info.CommentBoxInfo>
            <info.CommentDate>{getDate(props.el?.createdAt)}</info.CommentDate>
          </info.CommentBox>
        </info.CommentBoxs>
      ) : (
        <>
          <BoardCommentWriter
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
          />
        </>
      )}
    </>
  );
}
