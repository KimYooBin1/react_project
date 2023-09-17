import * as info from "./Comment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { ICommentItem } from "./Comment.type";
import { Rate } from "antd";
import { useState } from "react";
import BoardCommentWriter from "./commentWrite/CommentWrite.index";
import { useComment } from "../../../../commons/hook/custom/useComment";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";

export default function BoardCommentItem(props: ICommentItem): JSX.Element {
  const { id: boardId } = useIdChecker("boardId");
  const [isEdit, setIsEdit] = useState(false);

  const {
    onCancel,
    onClickDelete,
    onClickEditComment,
    onClickOpenDeleteModal,
    onChangeDeletePw,
    isOpen,
  } = useComment({
    boardId,
    boardCommentId: props.el._id,
    setIsEdit,
  });
  return (
    <>
      {isOpen && (
        <info.PasswordModal
          open={isOpen}
          onOk={onClickDelete}
          onCancel={onCancel}
        >
          비밀번호:
          <info.PasswordInput type="password" onChange={onChangeDeletePw} />
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
