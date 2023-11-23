import useQueryFetchPointTransactionsCountOfSelling from "../query/useQueryFetchPointTransactionsCountOfSelling";
import useQueryFetchPointTransactionsOfSelling from "../query/useQueryFetchPointTransactionsOfSelling";

export default function useFetchPointTransactionsOfSelling(){
    const {data, refetch} = useQueryFetchPointTransactionsOfSelling();
    const {data:count} = useQueryFetchPointTransactionsCountOfSelling();

    return {data, count, refetch}
}