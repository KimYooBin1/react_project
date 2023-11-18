import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemQuestionAnswerArgs } from "../../types/generated/types";

const DELETE_QUESTION_ANSWER = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId:ID!){
        deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
    }
`

export default function useMutationDeleteUseditemQuestionAnswer(){
    const mutation = useMutation<Pick<IMutation,"deleteUseditemQuestionAnswer">, IMutationDeleteUseditemQuestionAnswerArgs>(DELETE_QUESTION_ANSWER)
    return mutation
}