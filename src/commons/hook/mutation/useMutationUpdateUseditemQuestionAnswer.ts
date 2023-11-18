import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemQuestionAnswerArgs } from "../../types/generated/types";

const UPDATE_QUESTION_ANSWER = gql`
    mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput:UpdateUseditemQuestionAnswerInput!,$useditemQuestionAnswerId:ID!){
        updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput:$updateUseditemQuestionAnswerInput, useditemQuestionAnswerId:$useditemQuestionAnswerId){
            _id
            user{
                _id
                name
            }
            contents
        }
    }
`

export default function useMutationUpdateUseditemQuestionAnswer(){
    const mutation = useMutation<Pick<IMutation,"updateUseditemQuestionAnswer">, IMutationUpdateUseditemQuestionAnswerArgs>(UPDATE_QUESTION_ANSWER)
    return mutation
}