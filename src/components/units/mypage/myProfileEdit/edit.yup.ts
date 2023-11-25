import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요"),
});
