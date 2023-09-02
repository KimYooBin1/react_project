import * as info from "./Comment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentItem } from "./Comment.type";
import { Rate } from "antd";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";

import {
  DELETE_COMMENT,
  FETCH_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./Comment.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { errorInput, success } from "../../../../commons/libraries/modal";

export default function BoardCommentItem(
  props: IBoardCommentItem
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [commentPW, setCommentPw] = useState("");
  const [commentContents, setCommentContents] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [deletePW, setPW] = useState("");
  const [deleteId, setDeletId] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeDeletePW = (event: ChangeEvent<HTMLInputElement>): void => {
    setPW(event.target.value);
  };

  const onChangePW = (event: ChangeEvent<HTMLInputElement>): void => {
    setCommentPw(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCommentContents(event.target.value);
  };

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

  const onClickUpdateComment = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: commentContents,
            rating,
          },
          password: commentPW,
          boardCommentId: event.currentTarget.id,
        },
      });
      setIsEdit(false);
      success("댓글 수정");
    } catch (error) {
      errorInput("비밀번호");
    }
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
          <info.WriteWrapper>
            <info.WriteInfo>
              <info.WriteInfoInput
                type="text"
                placeholder="작성자"
                readOnly
                value={props?.el.writer}
              />
              <info.WriteInfoInput
                type="password"
                placeholder="비밀번호"
                onChange={onChangePW}
              />
              <info.StarInput
                allowHalf
                defaultValue={props.el.rating}
                onChange={setRating}
              />
            </info.WriteInfo>
            <info.WriteCommentBox>
              <info.WriteComment
                placeholder="개인정보를 공유 및 요청하거나, 
                  명예 훼손, 무단 광고, 불법 정보 유
                  포시 모니터링 후 삭제되 수 있으며,
                  이에 대한 민형사상 책임은 게시자에게 있습니다."
                // onChange={props.onChangeContents}
                maxLength={100}
                defaultValue={props?.el.contents}
                onChange={onChangeContents}
              />
              <info.WriteCommentInfoBox>
                <info.WriteCommentInfoText>
                  <span>
                    {commentContents === ""
                      ? props?.el.contents.length
                      : commentContents.length}
                  </span>
                  /100
                </info.WriteCommentInfoText>
                <info.WriteCommentInfoBtn
                  style={{ backgroundColor: "orange", border: "none" }}
                  id={props.el?._id}
                  onClick={onClickUpdateComment}
                >
                  수정하기
                </info.WriteCommentInfoBtn>
              </info.WriteCommentInfoBox>
            </info.WriteCommentBox>
          </info.WriteWrapper>
        </>
      )}
    </>
  );
}
