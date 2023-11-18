import { useState } from "react"
import useQuestionAnswer from "../../../../../commons/hook/custom/useQuestionAnswer"
import type { IUseditemQuestionAnswer } from "../../../../../commons/types/generated/types"
import * as info from "./QuestionAnswer.styles"
import QuestionWrite from "./questionWrite/QuestionWrite.index"

interface IQuestionAnswerArgs{
    el:IUseditemQuestionAnswer
    useditemQuestionId:string
}

export default function QuestionAnswer(props:IQuestionAnswerArgs):JSX.Element{
    const {
        onClickDeleteQuestionAnswer
    } = useQuestionAnswer({useditemQuestionId:props.useditemQuestionId, useditemQuestionAnswerId : props.el._id})

    const [isAnswer, setIsAnswer] = useState(false);

    const onClickEdit = () =>{
      setIsAnswer(true)
    }

    return(
      <>
        {isAnswer ? (
          <>
            <QuestionWrite setIsAnswer={setIsAnswer} useditemQuestionAnswerId={props.el._id} useditemQuestionId={props.useditemQuestionId} isEdit={true} />
          </>
        ) : (
        <info.AnswerBoxInfo>
            <info.AnswerImg src="/img/answers.png" />
            <info.CommentBoxImg src="/img/profile.png" />
            <info.CommentInfo>
              <info.CommentProfile>
                <info.CommentProfileName>
                  {props.el?.user.name}
                </info.CommentProfileName>
              </info.CommentProfile>
             <info.Comment>{props.el?.contents}</info.Comment>
            </info.CommentInfo>
            <info.CommentControl >
            <img
              src="/img/edit.png"
              onClick={onClickEdit}
              style={{ cursor: "pointer" }}
            />
            <img
              src="/img/delete.png"
              onClick={onClickDeleteQuestionAnswer}
              style={{ cursor: "pointer" }}
            />

            </info.CommentControl>
        </info.AnswerBoxInfo>)}
      </>
    )
}