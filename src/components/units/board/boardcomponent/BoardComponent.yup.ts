import * as yup from "yup";
export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  password: yup
    .string()
    .min(4, "최소4자리 이상 입력해주세요")
    .max(15, "최대 15자리까지 입력가능합니다")
    .required("패스워드를 입력해주세요"),
  title: yup.string().required("제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  addressDetail: yup.string().required("주소를 입력해주세요"),
  youtubeUrl: yup.string().required("유튜브 주소를 입력해주세요"),
});
