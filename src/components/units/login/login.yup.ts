import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다")
    .required("이메일을 입력해 주세요"),
  password: yup
    .string()
    .min(4, "4자리 이상 입력해주세요")
    .max(15, "15자리가 최대 길이입니다")
    .required("비밀번호를 입력해주세요"),
  isCheck: yup.boolean(),
});
