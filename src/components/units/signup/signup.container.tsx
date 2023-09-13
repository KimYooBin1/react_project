import { useState } from "react";
import type { ChangeEvent } from "react";
import LoginPageUI from "./signup.presenter";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "./signup.queries";

export default function SingUpPage(): JSX.Element {
  const [signup] = useMutation(SIGN_UP);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event?.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event?.currentTarget.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event?.currentTarget.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    if (email === "" || password === "" || name === "") {
      alert("입력이 잘못되었습니다");
      return;
    }
    try {
      const result = await signup({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <LoginPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickSubmit={onClickSubmit}
    />
  );
}
