import { checkValidationFile } from "../../../../commons/libraries/validation";
import UpLoadBtnItemUI from "./Upload01.presenter";
import { useRef, type ChangeEvent } from "react";
import type { IUpLoadBtnItem } from "./Upload01.type";

export default function UpLoadBtnItem(props: IUpLoadBtnItem): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImageInput = (): void => {
    fileRef.current?.click();
  };
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if (!checkValidationFile(file) || !file) {
      return;
    }

    // const result = await loadFile({
    //   variables: {
    //     file,
    //   },
    // });
    props.onChangeFileUrl(file, props.index);
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
