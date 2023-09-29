import { Modal } from "antd";
export const success = (type: string): void => {
  Modal.success({
    content: `${type}(이/가) 되었습니다`,
  });
};
export const alertError = (error: string): void => {
  Modal.error({
    content: error,
  });
};
export const errorEmpty = (type: string): void => {
  Modal.error({
    content: `${type}(을/를) 입력해주세요`,
  });
};

export const errorInput = (type: string): void => {
  Modal.error({
    content: `${type}(이/가) 틀렸습니다`,
  });
};

export const errorChange = (): void => {
  Modal.error({
    content: `수정된 내용이 없습니다`,
  });
};
