import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($useditemId:ID!){
        fetchUseditemQuestions(useditemId:$useditemId){
            _id
            contents
            createdAt
            user{
                name
            }
        }
    }
`

interface IUseQueryFetchUsedItemQuestionsArg{
    useditemId:string
}

export default function useQueryFetchUsedItemQuestions(arg:IUseQueryFetchUsedItemQuestionsArg){
    const query = useQuery<Pick<IQuery,"fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS,{
        variables:{
            useditemId:arg.useditemId
        }
    });
    return query;
}