import { useEffect, useState } from "react";
import useQueryFetchPointTransactions from "../query/useQueryFetchPointTransactions";
import useQueryFetchPointTransactionsCountOfSelling from "../query/useQueryFetchPointTransactionsCountOfSelling";
import useQueryFetchPointTransactionsCountOfLoading from "../query/useQueryFetchPointTransactionsCountOfLoading";
import useQueryFetchUseditemsCountIBought from "../query/useQueryFetchUseditemsCountIBought";

export default function useFetchPointTransactions(){
    const [count, setCount] = useState(0);
    
    const {data, refetch} = useQueryFetchPointTransactions();
    const {data:sellCount} = useQueryFetchPointTransactionsCountOfSelling();
    const {data:chargeCount} = useQueryFetchPointTransactionsCountOfLoading();
    const {data:boughtCount} = useQueryFetchUseditemsCountIBought();
    useEffect(() => {
        setCount(Number(sellCount?.fetchPointTransactionsCountOfSelling) + Number(chargeCount?.fetchPointTransactionsCountOfLoading) + Number(boughtCount?.fetchUseditemsCountIBought));
    },[sellCount, chargeCount, boughtCount])
    return {data,count, refetch}
}