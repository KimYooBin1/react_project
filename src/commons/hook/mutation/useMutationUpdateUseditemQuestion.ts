import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemQuestionArgs } from "../../types/generated/types";

const UPDATE_QUESTION = gql`
    mutation updateUseditemQuestion($updateUseditemQuestionInput:UpdateUseditemQuestionInput!,$useditemQuestionId:ID!){
        updateUseditemQuestion(updateUseditemQuestionInput:$updateUseditemQuestionInput, useditemQuestionId:$useditemQuestionId){
            _id
            user{
                _id
                name
            }
            contents
        }
    }
`

export default function useMutationUpdateUseditemQuestion(){
    const mutation = useMutation<Pick<IMutation,"updateUseditemQuestion">, IMutationUpdateUseditemQuestionArgs>(UPDATE_QUESTION)
    return mutation
}