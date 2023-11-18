import styled from "@emotion/styled";
import { Rate } from "antd";

export const WriteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WriteTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 25px 0px;
`;

export const WriteImg = styled.img`
  padding-right: 10px;
`;

export const WriteSpan = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const WriteInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
`;

export const WriteInfoInput = styled.div`
  width: 180px;
  height: 30px;
  margin-right: 20px;
  text-align: center;
  font-size: 18px;
`;

export const WriteCommentBox = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WriteComment = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const WriteCommentInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WriteCommentInfoText = styled.div`
  padding-left: 20px;
  color: gray;
`;

export const WriteCommentInfoBtn = styled.button`
  width: 90px;
  height: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const StarInput = styled(Rate)`
  margin-bottom: 9px;
`;

export const CloseCommentEditBtn = styled.button`
  cursor: pointer;
  margin-left: 640px;
  border: none;
  text-align: center;
  background-color: gray;
  color: white;
  padding: 5px;
  border-radius: 10px;

  transition: all 0.5s;

  :hover {
    background-color: orange;
    color: black;
  }
`;
