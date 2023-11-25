import { alertError, success } from "../../libraries/modal";
import useMutationResetUserPassword from "../mutation/useMutationResetUserPassword";

interface IResetPWArgs {
  password: string;
  new_password: string;
  check_new_password: string;
}

export default function useResetUserPassword() {
  const [resetPW] = useMutationResetUserPassword();

  const onClickChangePW = async (data: IResetPWArgs): Promise<void> => {
    try {
      await resetPW({
        variables: {
          password: data.password,
        },
      });
      success("비밀번호 초기화");
    } catch (error) {
      if (error instanceof Error) {
        alertError(error.message);
      }
    }
  };

  return { onClickChangePW };
}
