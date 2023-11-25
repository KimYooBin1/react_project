import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUserArgs,
} from "../../types/generated/types";

const UPDATE_USER_INFO = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;

export default function useMutationUpdateUser() {
  const mutation = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER_INFO);
  return mutation;
}
