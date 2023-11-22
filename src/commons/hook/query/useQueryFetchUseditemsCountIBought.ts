import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../types/generated/types";

const FETCH_I_BOUGHT_COUNT = gql`
    query{
        fetchUseditemsCountIBought
    }
`

export default function useQueryFetchUseditemsCountIBought() {
    const query = useQuery<Pick<IQuery, "fetchUseditemsCountIBought">>(FETCH_I_BOUGHT_COUNT)
    return query
}