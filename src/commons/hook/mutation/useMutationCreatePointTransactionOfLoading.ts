import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreatePointTransactionOfLoadingArgs } from "../../types/generated/types";

const LOADING_POINT_TRANSACTION = gql`
    mutation createPointTransactionOfLoading($impUid:ID!){
        createPointTransactionOfLoading(impUid:$impUid){
            _id
            amount
            createdAt
        }
    }
`

export default function useMutationCreatePointTransactionOfLoading(){
    const mutation = useMutation<Pick<IMutation, "createPointTransactionOfLoading">, IMutationCreatePointTransactionOfLoadingArgs>(LOADING_POINT_TRANSACTION)
    return mutation
}