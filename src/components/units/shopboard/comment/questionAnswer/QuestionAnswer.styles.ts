import styled from "@emotion/styled";
import { Rate, Modal } from "antd";
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  margin-top: 35px;
`;

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

export const WriteInfoInput = styled.input`
  width: 180px;
  height: 30px;
  margin-right: 20px;
  text-align: center;
  font-size: 18px;
`;

export const CheckScoreBox = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckStat = styled.span`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: orange;
  }
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

export const CommentBoxs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
`;

export const CommentBoxInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export const AnswerBoxInfo = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const CommentBoxImg = styled.img`
  scale: 0.85;
  margin-right: 15px;
`;

export const AnswerImg = styled.img`
  margin:0px 30px 0px 50px
`

export const CommentInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const CommentProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 5px;
`;

export const CommentProfileName = styled.div`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const Comment = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

export const CommentControl = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  margin-right: 20px;
  `

export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
  margin-left: 75px;
  margin-top: 20px;
`;

export const StarInput = styled(Rate)`
  margin-bottom: 9px;
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  display: flex;
  flex-direction: column;
`;

