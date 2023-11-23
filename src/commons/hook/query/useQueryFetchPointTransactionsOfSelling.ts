import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchPointTransactionsOfSellingArgs } from "../../types/generated/types";

const FETCH_I_SELLING = gql`
    query fetchPointTransactionsOfSelling($search:String, $page:Int){
        fetchPointTransactionsOfSelling(search:$search, page:$page){
            _id
            createdAt
            balance
            amount
            useditem{
              name
            }
        }
    }
`

export default function useQueryFetchPointTransactionsOfSelling(){
    const query = useQuery<Pick<IQuery, "fetchPointTransactionsOfSelling">,IQueryFetchPointTransactionsOfSellingArgs>(FETCH_I_SELLING);
    return query
}