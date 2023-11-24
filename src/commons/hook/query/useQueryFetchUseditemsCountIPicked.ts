import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";

const FETCH_USED_ITEM_COUNT_I_PICK = gql`
    query{
        fetchUseditemsCountIPicked
    }
`

export default function useQueryFetchUseditemsCountIPicked(){
    const query = useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(FETCH_USED_ITEM_COUNT_I_PICK);
    return query;
}