import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";

const FETCH_POINT_TRANSACTIONS_BUYING_COUNT = gql`
    query{
        fetchPointTransactionsCountOfBuying
    }
`

export default function useQueryFetchPointTransactionsCountOfBuying(){
    const query = useQuery<Pick<IQuery,"fetchPointTransactionsCountOfBuying">>(FETCH_POINT_TRANSACTIONS_BUYING_COUNT)
    return query
}