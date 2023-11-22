import useQueryFetchUseditemsCountIBought from "../query/useQueryFetchUseditemsCountIBought";
import useQueryFetchUseditemsIBought from "../query/useQueryFetchUseditemsIBought";

export default function useFetchIBought(){
    const {data, refetch} = useQueryFetchUseditemsIBought();
    const {data:count} = useQueryFetchUseditemsCountIBought();

    return {data, count, refetch}
}