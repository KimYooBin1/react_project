import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemQuestionArgs } from "../../types/generated/types";

const CREATE_QUESTION = gql`
    mutation createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput!,$useditemId:ID!){
        createUseditemQuestion(createUseditemQuestionInput:$createUseditemQuestionInput, useditemId:$useditemId){
            _id
            user{
                _id
                name
            }
            contents
        }
    }
`

export default function useMutationCreateUseditemQuestion(){
    const mutation = useMutation<Pick<IMutation,"createUseditemQuestion">, IMutationCreateUseditemQuestionArgs>(CREATE_QUESTION)
    return mutation
}