import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required("작성자를 입력해주세요"),
  password: yup.string().required("패스워드를 입력해주세요"),
  title: yup.string().required("제목을 입력해주세요"),
  content: yup.string().required("내용을 입력해주세요"),
});
