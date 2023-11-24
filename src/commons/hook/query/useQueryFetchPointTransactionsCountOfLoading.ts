import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchPointTransactionsOfLoadingArgs } from "../../types/generated/types";

const FETCH_POINT_LOADING_COUNT = gql`
    query{
        fetchPointTransactionsCountOfLoading
    }
`

export default function useQueryFetchPointTransactionsCountOfLoading(){
    const query = useQuery<Pick<IQuery,"fetchPointTransactionsCountOfLoading">>(FETCH_POINT_LOADING_COUNT);
    return query
}