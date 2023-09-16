import { useRouter } from "next/router";
import { useMutationUserInput } from "../mutation/useMutationCreateUser";

interface IOnClickSubmitArgs {
  name: string;
  email: string;
  password: string;
}

export const useSignUp = () => {
  const router = useRouter();

  const [signup] = useMutationUserInput();

  const onClickSubmit = async (data: IOnClickSubmitArgs): Promise<void> => {
    if (data.email === "" || data.password === "" || data.name === "") {
      alert("입력이 잘못되었습니다");
      return;
    }
    try {
      const result = await signup({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(result);
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return { onClickSubmit };
};
