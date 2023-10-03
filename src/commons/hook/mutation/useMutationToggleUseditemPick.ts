import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../types/generated/types";

const USE_MUTATION_TOGGLE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export default function useMutationToggleUseditemPick() {
  const mutation = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(USE_MUTATION_TOGGLE_PICK);
  return mutation;
}
