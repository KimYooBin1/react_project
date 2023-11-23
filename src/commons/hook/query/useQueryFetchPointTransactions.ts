import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchPointTransactionsArgs } from "../../types/generated/types";

const FETCH_POINTS = gql`
    query fetchPointTransactions($search:String, $page:Int){
        fetchPointTransactions(search:$search, page:$page){
            amount
            balance
            status
            createdAt
        }
    }
`

export default function useQueryFetchPointTransactions(){
    const query = useQuery<Pick<IQuery, "fetchPointTransactions">, IQueryFetchPointTransactionsArgs>(FETCH_POINTS);
    return query
}