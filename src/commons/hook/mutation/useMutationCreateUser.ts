import { gql, useMutation } from "@apollo/client";

const SIGN_UP = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      createdAt
    }
  }
`;
export const useMutationUserInput = () => {
  const mutation = useMutation(SIGN_UP);
  return mutation;
};
