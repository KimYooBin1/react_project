import styled from "@emotion/styled";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`;
export const SearchInput = styled.input`
  width: 70%;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 0px 20px;
  font-size: 16px;
`;

export const SearchDate = styled(RangePicker)`
  margin-left: 50px;
  height: 50px;
`;
