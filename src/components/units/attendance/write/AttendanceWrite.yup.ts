import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required("작성자를 입력해주세요"),
  contents: yup.string().required("작성자를 입력해주세요"),
});
