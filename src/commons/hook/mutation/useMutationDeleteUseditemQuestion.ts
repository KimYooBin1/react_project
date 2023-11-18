import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemQuestionArgs } from "../../types/generated/types";

const CREATE_QUESTION = gql`
    mutation deleteUseditemQuestion($useditemQuestionId:ID!){
        deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId)
    }
`

export default function useMutationDeleteUseditemQuestion(){
    const mutation = useMutation<Pick<IMutation,"deleteUseditemQuestion">, IMutationDeleteUseditemQuestionArgs>(CREATE_QUESTION)
    return mutation
}