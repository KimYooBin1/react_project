import useQueryFetchPointTransactionsCountOfBuying from "../query/useQueryFetchPointTransactionsCountOfBuying";
import useQueryFetchPointTransactionsOfBuying from "../query/useQueryFetchPointTransactionsOfBuying";
import useQueryFetchUseditemsCountIBought from "../query/useQueryFetchUseditemsCountIBought";
import useQueryFetchUseditemsIBought from "../query/useQueryFetchUseditemsIBought";

export default function useFetchIBought(){
    const {data, refetch} = useQueryFetchUseditemsIBought();
    const {data:count} = useQueryFetchUseditemsCountIBought();

    const {data: data_tmp} = useQueryFetchPointTransactionsOfBuying()
    const {data: count_tmp} = useQueryFetchPointTransactionsCountOfBuying()

    return {data, count, refetch}
}