import useQueryFetchPointTransactionsCountOfLoading from "../query/useQueryFetchPointTransactionsCountOfLoading";
import useQueryFetchPointTransactionsOfLoading from "../query/useQueryFetchPointTransactionsOfLoading";

export default function useFetchPointTransactionsOfLoading() {
    const {data, refetch} = useQueryFetchPointTransactionsOfLoading();
    const {data : count} = useQueryFetchPointTransactionsCountOfLoading();
    return {data, count, refetch}
}