import { checkValidationFile } from "../../../../commons/libraries/validation";
import * as info from "./Upload02.styled";
import { useRef, type ChangeEvent } from "react";
import type { IUpLoadBtnItem } from "./Upload02.type";

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
    console.log(file);

    props.onChangeFileUrl(file);
  };
  return (
    <>
      {props.url !== "" ? (
        <info.Img onClick={onClickImageInput} src={props.url}></info.Img>
      ) : (
        <info.Btn2 onClick={onClickImageInput}>
          +<br></br>upload
        </info.Btn2>
      )}

      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpeg,image/png"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </>
  );
}
