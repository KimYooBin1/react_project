import * as yup from "yup";
export const schema = yup.object({
  password: yup.string().required("패스워드를 입력해주세요"),
  new_password: yup
    .string()
    .min(4, "최소4자리 이상 입력해주세요")
    .max(15, "최대 15자리까지 입력가능합니다")
    .required("패스워드를 입력해주세요"),
  check_new_password: yup
    .string()
    .min(4, "최소4자리 이상 입력해주세요")
    .max(15, "최대 15자리까지 입력가능합니다")
    .required("패스워드를 입력해주세요"),
});
