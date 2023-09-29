import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  remarks: yup.string().required("상품명을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  price: yup
    .string()
    .required("가격을 입력해주세요")
    .matches(/^[1-9][0-9]*$/, "가격이 올바르지 않습니다"),
  zipcode: yup.string().required("zipcode가 올바르지 않습니다"),
  address: yup.string().required("address가 올바르지 않습니다"),
  addressDetail: yup.string().required("상세주소를 입력해주세요"),
  lat: yup.string().required("address가 올바르지 않습니다"),
  lng: yup.string().required("address가 올바르지 않습니다"),
});
