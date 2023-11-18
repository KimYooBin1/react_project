import * as info from "./Comment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { useState } from "react";
import BoardCommentWriter from "./commentWrite/CommentWrite.index";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import type { IUseditemQuestionItemArgs } from "./UseditemQuestion.type";
import { useUseditemQuestion } from "../../../../commons/hook/custom/useUseditemQuestion";
import useQueryFetchUseditemQuestionAnswers from "../../../../commons/hook/query/useQueryFetchUseditemQuestionAnswers";
import QuestionAnswer from "./questionAnswer/QuestionAnswer.index";
import QuestionWrite from "./questionAnswer/questionWrite/QuestionWrite.index";

export default function UseditemQuestionItem(props:IUseditemQuestionItemArgs): JSX.Element {

  const {data} = useQueryFetchUseditemQuestionAnswers({useditemQuestionId:props.el._id});

  const { id: useditemId } = useIdChecker("useditemId");
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const onClickAnswer = () =>{setIsAnswer((prev) => !prev)};

  const {
    onClickDelete,
    onClickEdit,
  } = useUseditemQuestion({
    useditemId,
    questionId: props.el._id,
    setIsEdit,
  });
  return (
    <>
      {!isEdit ? (
        <info.CommentBoxs>
          <info.CommentBox>
            <info.CommentBoxInfo>
              <info.CommentBoxImg src="/img/profile.png" />
              <info.CommentInfo>
                <info.CommentProfile>
                  <info.CommentProfileName>
                    {props.el?.user.name}
                  </info.CommentProfileName>
                </info.CommentProfile>
                <info.Comment>{props.el?.contents}</info.Comment>
              </info.CommentInfo>
              <info.CommentControl>
                <img
                  src="/img/edit.png"
                  id={props.el?._id}
                  onClick={onClickEdit}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src="/img/delete.png"
                  id={props.el?._id}
                  onClick={onClickDelete}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src="/img/Answer.png"
                  id={props.el?._id}
                  onClick={onClickAnswer}
                  style={{ cursor: "pointer" }}
                />
                
              </info.CommentControl>
            </info.CommentBoxInfo>
            <info.CommentDate>{getDate(props.el?.createdAt)}</info.CommentDate>
            {isAnswer && <QuestionWrite setIsAnswer={setIsAnswer} isEdit={false} useditemQuestionId={props.el._id}/>}
            {data?.fetchUseditemQuestionAnswers.map((el) => (
              <QuestionAnswer key={el._id} el={el} useditemQuestionId={props.el._id}/> 
              ))
            }
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
