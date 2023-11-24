import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsIPickedArgs } from "../../types/generated/types";

const FETCH_USED_ITEM_I_PICK = gql`
    query fetchUseditemsIPicked($search: String, $page: Int){
        fetchUseditemsIPicked(search: $search, page: $page){
            _id
            name
            price
            seller{
                name
            }
            createdAt
        }
    }
`

interface IQueryFetchUseditemIPick{
    keyword:string
}

export default function useQueryFetchUseditemsIPicked(props:IQueryFetchUseditemIPick){
    const query = useQuery<Pick<IQuery, "fetchUseditemsIPicked">, IQueryFetchUseditemsIPickedArgs>(FETCH_USED_ITEM_I_PICK, {
        variables:{
            search:props.keyword
        }
    });
    return query
}