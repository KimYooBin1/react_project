import { useMutation } from "@apollo/client";
import { checkValidationFile } from "../../../../commons/libraries/validation";
import UpLoadBtnItemUI from "./Upload01.presenter";
import { useRef, type ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./Upload01.queries";
import type { IUpLoadBtnItem } from "./Upload01.type";

export default function UpLoadBtnItem(props: IUpLoadBtnItem): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [loadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onClickImageInput = (): void => {
    fileRef.current?.click();
  };
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if (!checkValidationFile(file)) {
      return;
    }

    const result = await loadFile({
      variables: {
        file,
      },
    });
    props.onChangeFileUrl(result.data?.uploadFile.url ?? "", props.index);
  };
  return (
    <UpLoadBtnItemUI
      onClickImageInput={onClickImageInput}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      url={props.url}
    />
  );
}
