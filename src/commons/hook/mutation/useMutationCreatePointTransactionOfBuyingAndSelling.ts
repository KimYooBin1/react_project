import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs } from "../../types/generated/types";

const CREATE_POINT_TRANSACTION_BUY = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId:ID!){
        createPointTransactionOfBuyingAndSelling(useritemId:$useritemId){
            _id
        }
    }
`

export default function useMutationCreatePointTransactionOfBuyingAndSelling(){
    const mutation = useMutation<Pick<IMutation,"createPointTransactionOfBuyingAndSelling">, IMutationCreatePointTransactionOfBuyingAndSellingArgs>(CREATE_POINT_TRANSACTION_BUY);
    return mutation;
}