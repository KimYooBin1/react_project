import useQueryFetchUseditemsCountIPicked from "../query/useQueryFetchUseditemsCountIPicked";
import useQueryFetchUseditemsIPicked from "../query/useQueryFetchUseditemsIPicked";

interface IFetchUseditemIPick{
    keyword:string
}

export default function useFetchUseditemsIPicked(props:IFetchUseditemIPick){
    const {data, refetch} = useQueryFetchUseditemsIPicked({keyword:props.keyword});
    const {data: count} = useQueryFetchUseditemsCountIPicked()
    return {data, count, refetch}
}