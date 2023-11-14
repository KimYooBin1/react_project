import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../types/generated/types";

const LOGOUT = gql`
    mutation{
        logoutUser
    }
`

export function useMutationLogoutUser() {
    const mutation = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT);
    return mutation;
}