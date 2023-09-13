import * as info from "./login.styles";
import type { ILoginPageUI } from "./login.type";
export default function LoginPageUI(props: ILoginPageUI): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <form>
          <input type="text" onChange={props.onChangeEmail} />
          <input type="text" onChange={props.onChangePassword} />
          <button type="button" onClick={props.onClickSubmit}>
            등록하기
          </button>
        </form>
      </info.Wrapper>
    </info.Body>
  );
}
