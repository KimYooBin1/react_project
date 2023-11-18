import { useForm } from "react-hook-form";
import useMutationCreateUseditemQuestionAnswer from "../mutation/useMutationCreateUseditemQuestionAnswer";
import useMutationDeleteUseditemQuestionAnswer from "../mutation/useMutationDeleteUseditemQuestionAnswer";
import useMutationUpdateUseditemQuestionAnswer from "../mutation/useMutationUpdateUseditemQuestionAnswer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../components/units/shopboard/comment/questionAnswer/QuestionAnswer.yup";
import { alertError, success } from "../../libraries/modal";
import { FETCH_USED_ITEM_QUESTIONS_ANSWER } from "../query/useQueryFetchUseditemQuestionAnswers";
interface IQuestionAnswer{
    contents:string
}
interface IUsedQuestionAnswerArgs{
    useditemQuestionId:string
    useditemQuestionAnswerId?:string
    setIsAnwer?:any
}
export default function useQuestionAnswer(props:IUsedQuestionAnswerArgs){

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [createQuestionAnswer] = useMutationCreateUseditemQuestionAnswer();
    const [updateQuestionAnswer] = useMutationUpdateUseditemQuestionAnswer();
    const [deleteQuestionAnswer] = useMutationDeleteUseditemQuestionAnswer();

    const onClickCreateQuestionAnswer = async (data:IQuestionAnswer):Promise<void> =>{
        await createQuestionAnswer({
            variables:{
                createUseditemQuestionAnswerInput:{
                    contents:data.contents
                },
                useditemQuestionId:props.useditemQuestionId
            },
            refetchQueries: [
                {
                  query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
                  variables: {
                    useditemQuestionId: props.useditemQuestionId,
                  },
                },
              ],
        })
        props.setIsAnwer(false);
        success("답글 등록")
    }
    const onClickUpdateQuestionAnswer = async (data:IQuestionAnswer):Promise<void> =>{
        try{
            if(!props.useditemQuestionAnswerId) return;
            await updateQuestionAnswer({
                variables:{
                    updateUseditemQuestionAnswerInput:{
                        contents:data.contents
                    },
                    useditemQuestionAnswerId:props.useditemQuestionAnswerId
                },
                refetchQueries: [
                    {
                      query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
                      variables: {
                        useditemQuestionId: props.useditemQuestionId,
                      },
                    },
                  ],
            })
            success("답글 수정")
            props.setIsAnwer(false);
        }catch(error){
            if(error instanceof Error){
                alertError(error.message)
            }
        }
    }
    const onClickDeleteQuestionAnswer = async () : Promise<void> =>{
        if(!props.useditemQuestionAnswerId) return;
        try{
            await deleteQuestionAnswer({
            variables:{
                useditemQuestionAnswerId:props.useditemQuestionAnswerId
            },
            refetchQueries: [
                {
                  query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
                  variables: {
                    useditemQuestionId: props.useditemQuestionId,
                  },
                },
              ],
        })
        success("답글 삭제")
        }catch(error){
            if(error instanceof Error){
                alertError(error.message)
            }
        }

    }
    return({register, handleSubmit, formState, onClickCreateQuestionAnswer, onClickDeleteQuestionAnswer, onClickUpdateQuestionAnswer})
}