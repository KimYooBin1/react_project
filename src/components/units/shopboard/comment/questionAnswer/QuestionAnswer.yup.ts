import * as yup from "yup";
export const schema = yup.object({
  contents: yup.string().required("answer을 입력해주세요"),
});
