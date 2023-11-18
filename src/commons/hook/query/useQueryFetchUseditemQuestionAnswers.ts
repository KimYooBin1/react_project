import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemQuestionAnswersArgs } from "../../types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS_ANSWER = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId:ID!){
        fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId){
            _id
            user{
                name
            }
            createdAt
            contents
        }
    }
`
interface IUseditemQuestionAnswers{
    useditemQuestionId:string
}
export default function useQueryFetchUseditemQuestionAnswers(props:IUseditemQuestionAnswers){
    const query = useQuery<Pick<IQuery,"fetchUseditemQuestionAnswers">,IQueryFetchUseditemQuestionAnswersArgs>(FETCH_USED_ITEM_QUESTIONS_ANSWER,
        {variables:{
            useditemQuestionId:props.useditemQuestionId
        }}    
    )
    return query;
}