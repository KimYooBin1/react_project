import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemQuestionAnswerArgs } from "../../types/generated/types";

const CREATE_QUESTION_ANSWER = gql`
    mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput!,$useditemQuestionId:ID!){
        createUseditemQuestionAnswer(createUseditemQuestionAnswerInput:$createUseditemQuestionAnswerInput, useditemQuestionId:$useditemQuestionId){
            _id
            user{
                _id
                name
            }
            contents
        }
    }
`

export default function useMutationCreateUseditemQuestionAnswer(){
    const mutation = useMutation<Pick<IMutation,"createUseditemQuestionAnswer">, IMutationCreateUseditemQuestionAnswerArgs>(CREATE_QUESTION_ANSWER)
    return mutation
}