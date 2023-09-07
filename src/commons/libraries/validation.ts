export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다!");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB");
    return false;
  }

  // if (!(file.type.includes("jpeg") || file.type.includes("png"))) {
  //   alert("jpg, png 파일만 입력할 수 있습니다");
  //   return false;
  // }
  return true;
};
