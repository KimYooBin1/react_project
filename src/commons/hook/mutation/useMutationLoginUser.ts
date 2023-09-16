import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../types/generated/types";

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useMutationLoginUser = () => {
  const mutation = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN);
  return mutation;
};
