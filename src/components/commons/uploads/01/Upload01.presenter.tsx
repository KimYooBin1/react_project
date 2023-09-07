import type { IUpLoadBtnItemPage } from "./Upload01.type";
import * as info from "./Upload01.styled";
export default function UpLoadBtnItemUI(
  props: IUpLoadBtnItemPage
): JSX.Element {
  return (
    <>
      {props.url !== "" ? (
        <info.Img
          onClick={props.onClickImageInput}
          src={`https://storage.googleapis.com/${props.url}`}
        ></info.Img>
      ) : (
        <info.Btn2 onClick={props.onClickImageInput}>
          +<br></br>upload
        </info.Btn2>
      )}

      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpeg,image/png"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
