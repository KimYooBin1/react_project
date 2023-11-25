import { useForm } from "react-hook-form";
import * as info from "./edit.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./edit.yup";
import UpLoadBtnItem from "../../../commons/uploads/02/Upload02.index";
import useUpdateUser from "../../../../commons/hook/custom/useUpdateUser";

export default function MyProfileEditPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    userData: data,
    onClickUpdateUser,
    onChangeFileUrl,
    images,
  } = useUpdateUser();
  if (!data) return <></>;

  return (
    <info.Body>
      <info.BoardsWrapper>
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="이름을 입력해주세요"
          />
          <div>{formState.errors.name?.message}</div>
        </div>
        <UpLoadBtnItem url={images[0]} onChangeFileUrl={onChangeFileUrl} />
        <button onClick={handleSubmit(onClickUpdateUser)}>수정하기</button>
      </info.BoardsWrapper>
    </info.Body>
  );
}
