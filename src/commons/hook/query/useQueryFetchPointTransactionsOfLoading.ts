import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchPointTransactionsOfLoadingArgs } from "../../types/generated/types";

const FETCH_POINT_LOADING = gql`
    query fetchPointTransactionsOfLoading($search:String, $page:Int){
        fetchPointTransactionsOfLoading(search:$search, page:$page){
            _id
            amount
            createdAt
            balance
            impUid
        }
    }
`

export default function useQueryFetchPointTransactionsOfLoading(){
    const query = useQuery<Pick<IQuery, "fetchPointTransactionsOfLoading">, IQueryFetchPointTransactionsOfLoadingArgs>(FETCH_POINT_LOADING)
    return query
}