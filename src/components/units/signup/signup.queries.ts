import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation createUser($email: String!, $password: String!, $name: Stinrg!) {
    createUser(email: $email, password: $password, name: $name) {
      _id
      email
      name
      createdAt
    }
  }
`;
