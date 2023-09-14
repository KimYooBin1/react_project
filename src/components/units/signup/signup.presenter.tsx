import * as info from "./signup.styles";
import type { ISignUpPageUI } from "./signup.type";
export default function SignUpPageUI(props: ISignUpPageUI): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.Form>
          <info.TitleBox>
            <info.Title>Sign up</info.Title>
          </info.TitleBox>
          <info.InputBoxs>
            <info.InputBox
              type="text"
              onChange={props.onChangeName}
              placeholder="Name"
            />
            <info.InputBox
              type="text"
              onChange={props.onChangeEmail}
              placeholder="Email"
            />
            <info.InputBox
              type="password"
              onChange={props.onChangePassword}
              placeholder="password"
            />
          </info.InputBoxs>
          <info.SubmitBtn type="button" onClick={props.onClickSubmit}>
            sign up
          </info.SubmitBtn>
        </info.Form>
      </info.Wrapper>
    </info.Body>
  );
}
