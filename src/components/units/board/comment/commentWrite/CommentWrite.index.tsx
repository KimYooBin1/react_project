import type { IBoardCommentWriter } from "./CommentWrite.type";
import * as info from "./CommentWrite.styles";
import { useForm } from "react-hook-form";
import { useComment } from "../../../../../commons/hook/custom/useComment";
import { useIdChecker } from "../../../../../commons/hook/custom/useIdChecker";
export default function BoardCommentWrite(
  props: IBoardCommentWriter
): JSX.Element {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      writer: props.isEdit ? props.el?.writer : "",
      contents: props.isEdit ? props.el?.contents : "",
      password: "",
    },
  });
  const { id: boardId } = useIdChecker("boardId");
  const {
    onClickSubmit,
    onClickUpdateComment,
    onClickClose,
    setRating,
    rating,
  } = useComment({
    boardId,
    boardCommentId: props.el?._id,
    setIsEdit: props.setIsEdit,
    reset,
  });

  return (
    <info.WriteWrapper>
      {!props.isEdit && (
        <info.WriteTitle>
          <info.WriteImg src="/img/title_img.png" />
          <info.WriteSpan>댓글</info.WriteSpan>
        </info.WriteTitle>
      )}

      <info.WriteInfo>
        <info.WriteInfoInput
          type="text"
          placeholder="작성자"
          {...register("writer")}
          readOnly={props.isEdit}
        />
        <info.WriteInfoInput
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <info.StarInput
          allowHalf
          onChange={setRating}
          value={rating !== 0 ? rating : props.el?.rating ?? 0}
        />

        {props.isEdit && (
          <info.CloseCommentEditBtn onClick={onClickClose}>
            x
          </info.CloseCommentEditBtn>
        )}
      </info.WriteInfo>
      <info.WriteCommentBox>
        <info.WriteComment
          placeholder="개인정보를 공유 및 요청하거나, 
                  명예 훼손, 무단 광고, 불법 정보 유
                  포시 모니터링 후 삭제되 수 있으며,
                  이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
          maxLength={100}
        />
        <info.WriteCommentInfoBox>
          <info.WriteCommentInfoText>
            <span>
              {props.el?.contents !== "" //댓글 부분 수정 요망
                ? props.el?.contents.length
                : props.el?.contents.length ?? 0}
            </span>
            /100
          </info.WriteCommentInfoText>
          <info.WriteCommentInfoBtn
            onClick={
              props.isEdit //댓글 부분 수정 요망
                ? handleSubmit(onClickUpdateComment)
                : handleSubmit(onClickSubmit)
            }
            style={
              props.isEdit
                ? { backgroundColor: "orange", border: "none" }
                : { backgroundColor: "black" }
            }
          >
            {props.isEdit ? "수정" : "등록"}하기
          </info.WriteCommentInfoBtn>
        </info.WriteCommentInfoBox>
      </info.WriteCommentBox>
    </info.WriteWrapper>
  );
}
