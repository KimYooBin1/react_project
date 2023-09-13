import * as info from "./signup.styles";
import type { ISignUpPageUI } from "./signup.type";
export default function SignUpPageUI(props: ISignUpPageUI): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <form>
          <input type="text" onChange={props.onChangeEmail} />
          <input type="text" onChange={props.onChangePassword} />
          <input type="text" onChange={props.onChangeName} />
          <button type="button" onClick={props.onClickSubmit}>
            등록하기
          </button>
        </form>
      </info.Wrapper>
    </info.Body>
  );
}
