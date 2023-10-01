import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
  box-shadow: 0px 4px 50px 0px #00000033;
`;

export const Box = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

export const Box1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextBox = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid lightgray;
  margin-bottom: 15px;
  padding-left: 10px;
`;

export const TextBox2 = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid lightgray;
  margin: 0px 10px 10px 0px;
  text-align: center;
`;

export const CheckBox = styled.input`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  accent-color: red;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
`;

export const TextBox1 = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid lightgray;
  margin-bottom: 15px;
  padding: 10px;
`;

export interface IBtnValid {
  isValid: boolean;
}

export const Btn = styled.button`
  background-color: ${(props: IBtnValid) =>
    props.isValid ? "#ffd600" : "lightgray"};
  font-weight: 700;
  color: ${(props: IBtnValid) => (props.isValid ? "white" : "")};
  cursor: ${(props: IBtnValid) => (props.isValid ? "pointer" : "")};
  font-weight: 700;
  width: 180px;
  height: 50px;
  border: none;
  margin-top: 20px;
`;

export const Btn1 = styled.button`
  background-color: black;
  color: white;
  font-weight: 700;
  width: 125px;
  height: 52px;
`;

export const Btn2 = styled.button`
  background-color: lightgray;
  width: 80px;
  height: 80px;
  font-size: 18px;
  margin-right: 10px;
  border: none;
`;

export const Test = styled.div`
  border: 1px solid red;
`;

export const ErrText = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 700;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
