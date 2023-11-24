import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchPointTransactionsOfBuyingArgs } from "../../types/generated/types";

const FETCH_POINT_TRANSACTIONS_BUYING = gql`
    query fetchPointTransactionsOfBuying($search: String, $page: Int){
        fetchPointTransactionsOfBuying(page: $page, search: $search){
            _id
            createdAt
            amount
            useditem{
                _id
                name
                price
            }
        }
    }
`

export default function useQueryFetchPointTransactionsOfBuying(){
    const query = useQuery<Pick<IQuery,"fetchPointTransactionsOfBuying">,IQueryFetchPointTransactionsOfBuyingArgs>(FETCH_POINT_TRANSACTIONS_BUYING)
    return query
}