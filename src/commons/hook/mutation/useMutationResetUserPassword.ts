import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationResetUserPasswordArgs,
} from "../../types/generated/types";
const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function useMutationResetUserPassword() {
  const mutation = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);
  return mutation;
}
