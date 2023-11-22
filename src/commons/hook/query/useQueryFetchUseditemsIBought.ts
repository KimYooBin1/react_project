import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemsIBoughtArgs } from "../../types/generated/types";

const FETCH_I_BOUGHT = gql`
    query fetchUseditemsIBought($page:Int, $search:String){
        fetchUseditemsIBought(page:$page, search:$search){
            _id
            name
            remarks
            price
        }
    }
`

export default function useQueryFetchUseditemsIBought(){
    const query = useQuery<Pick<IQuery, "fetchUseditemsIBought">,IQueryFetchUseditemsIBoughtArgs>(FETCH_I_BOUGHT)
    return query
}