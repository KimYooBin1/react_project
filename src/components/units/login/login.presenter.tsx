import * as info from "./login.styles";
import type { ILoginPageUI } from "./login.type";
export default function LoginPageUI(props: ILoginPageUI): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.Form>
          <info.TitleBox>
            <info.Title>Sign in</info.Title>
            <div>
              or{" "}
              <info.SignUpSpan onClick={props.onClickSignup}>
                create an account
              </info.SignUpSpan>
            </div>
          </info.TitleBox>
          <info.InputBoxs>
            <info.InputBox
              type="text"
              onChange={props.onChangeEmail}
              placeholder="Email"
              defaultValue={props.userId}
            />
            <info.InputBox
              type="password"
              onChange={props.onChangePassword}
              placeholder="password"
            />
          </info.InputBoxs>
          <info.SaveInfo>
            <info.SaveInfoCheck
              type="checkbox"
              onChange={props.onChangeCheckBox}
            />
            <span>remember me</span>
          </info.SaveInfo>
          <info.SubmitBtn
            type="button"
            onClick={props.onClickSubmit}
            disabled={!props.isSubmit}
            isSubmit={props.isSubmit}
          >
            sign in
          </info.SubmitBtn>
        </info.Form>
      </info.Wrapper>
    </info.Body>
  );
}
