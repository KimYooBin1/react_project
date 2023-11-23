import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchPointTransactionsOfSellingArgs } from "../../types/generated/types";

const FETCH_I_SELLING_COUNT = gql`
    query{
        fetchPointTransactionsCountOfSelling
    }
`

export default function useQueryFetchPointTransactionsCountOfSelling(){
    const query = useQuery<Pick<IQuery, "fetchPointTransactionsCountOfSelling">, IQueryFetchPointTransactionsOfSellingArgs>(FETCH_I_SELLING_COUNT)
    return query;
}