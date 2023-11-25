import { useForm } from "react-hook-form";
import * as info from "./myProfile.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./myfile.yup";
import useResetUserPassword from "../../../../commons/hook/custom/useResetUserPassword";

export default function MyProfilePage(): JSX.Element {
  const { onClickChangePW } = useResetUserPassword();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <info.Body>
      <info.BoardsWrapper>
        <div>
          <div>현재 비밀번호</div>
          <input type="text" {...register("password")}></input>
          <div>{formState.errors.password?.message}</div>
        </div>
        <div>
          <div>새 비밀번호</div>
          <input type="text" {...register("new_password")}></input>
          <div>{formState.errors.new_password?.message}</div>
        </div>
        <div>
          <div>새 비밀번호 확인</div>
          <input type="text" {...register("check_new_password")}></input>
          <div>{formState.errors.check_new_password?.message}</div>
        </div>
        <button onClick={handleSubmit(onClickChangePW)}>비밀번호 변경</button>
      </info.BoardsWrapper>
    </info.Body>
  );
}
