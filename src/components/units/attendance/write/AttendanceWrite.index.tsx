import { useForm } from "react-hook-form";
import * as info from "./AttendanceWrite.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./AttendanceWrite.yup";
import { useAttendance } from "../../../../commons/hook/custom/useAttendance";
export default function AttendebceWrite(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { onClickSubmit } = useAttendance();

  return (
    <info.Body>
      <info.Wrapper>
        <h1>출책</h1>
        <info.Box1>
          <info.Box>
            <info.Title>작성자</info.Title>
            <info.TextBox
              type="text"
              placeholder="이름을 적어주세요."
              {...register("writer")}
            ></info.TextBox>
            <info.ErrText>{formState.errors.writer?.message}</info.ErrText>
          </info.Box>
        </info.Box1>
        <info.Box>
          <info.Title>제목</info.Title>
          <info.TextBox
            type="text"
            placeholder="제목을 입력해주세요."
            {...register("title")}
          ></info.TextBox>
          <info.ErrText>{formState.errors.title?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>내용</info.Title>
          <info.TextBox1
            placeholder="내용을 입력해주세요."
            {...register("contents")}
          ></info.TextBox1>
          <info.ErrText>{formState.errors.contents?.message}</info.ErrText>
        </info.Box>

        <info.Btn
          onClick={handleSubmit(onClickSubmit)}
          disabled={!formState.isValid}
        >
          등록하기
        </info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
