import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function useMutationUploadFile() {
  const mutation = useMutation(UPLOAD_FILE);
  return mutation;
}
