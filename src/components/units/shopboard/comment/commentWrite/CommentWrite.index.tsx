import type { IBoardCommentWriter } from "./CommentWrite.type";
import * as info from "./CommentWrite.styles";
import { useForm } from "react-hook-form";
import { useIdChecker } from "../../../../../commons/hook/custom/useIdChecker";
import { type ChangeEvent, useState } from "react";
import { useUseditemQuestion } from "../../../../../commons/hook/custom/useUseditemQuestion";
export default function UseditemQuestionWrite(
  props: IBoardCommentWriter
): JSX.Element {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      contents: props.isEdit ? props.el?.contents : "",
    },
  });


  const { id: useditemId } = useIdChecker("useditemId");
  const [length, setLength] = useState(
    props.el?.contents !== "" ? props.el?.contents.length : 0
  );
  const CheckLength = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const str = event.currentTarget.value;
    setLength(str.length);
  };
  const {
    onClickSubmit,
    onClickClose,
    onClickUpdate
  } = useUseditemQuestion({
    useditemId,
    questionId: props.el?._id,
    setIsEdit: props.setIsEdit,
    reset
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
          onChange={CheckLength}
        />
        <info.WriteCommentInfoBox>
          <info.WriteCommentInfoText>
            <span>{length}</span>
            /100
          </info.WriteCommentInfoText>
          <info.WriteCommentInfoBtn
            onClick={
              props.isEdit //댓글 부분 수정 요망
                ? handleSubmit(onClickUpdate)
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
