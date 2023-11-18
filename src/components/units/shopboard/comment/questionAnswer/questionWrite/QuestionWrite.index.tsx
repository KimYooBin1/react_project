import useQuestionAnswer from "../../../../../../commons/hook/custom/useQuestionAnswer"
import * as info from "./QuestionWrite.styles"


interface IQuestionWrite{
    setIsAnswer:any
    useditemQuestionId:string
    useditemQuestionAnswerId?:string
    isEdit:boolean
}

export default function QuestionWrite(props:IQuestionWrite){
    const {register, handleSubmit, onClickCreateQuestionAnswer, onClickUpdateQuestionAnswer} = useQuestionAnswer({
        useditemQuestionId:props.useditemQuestionId,
        useditemQuestionAnswerId:props.useditemQuestionAnswerId,
        setIsAnwer:props.setIsAnswer    
    })
    return(
        <info.AnswerBoxInfo>
            <info.AnswerImg src="/img/answers.png" />
            <info.WriteCommentBox>
        <info.WriteComment
          placeholder="답글을 등록해주세요"
          {...register("contents")}
          maxLength={100}
        //   onChange={CheckLength}
        />
        <info.WriteCommentInfoBox>
          <info.WriteCommentInfoText>
            <span>{length}</span>
            /100
          </info.WriteCommentInfoText>
          <info.WriteCommentInfoBtn
            onClick={
              props.isEdit //댓글 부분 수정 요망
                ? handleSubmit(onClickUpdateQuestionAnswer)
                : handleSubmit(onClickCreateQuestionAnswer)
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
        </info.AnswerBoxInfo>
    )
}