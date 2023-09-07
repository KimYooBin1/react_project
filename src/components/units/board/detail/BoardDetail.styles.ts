import styled from "@emotion/styled";
import ReactPlayer from "react-player";

import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
  box-shadow: 0px 4px 50px 0px #00000033;
`;

export const Info = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin-bottom: 50px;
`;
export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  scale: 0.8;
`;

export const Writer = styled.div`
  font-weight: 700;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #828282;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: "hidden";
`;

export const Title = styled.h1`
  width: 100%;
  text-align: start;
  margin-bottom: 50px;
`;

export const ContentImg = styled.img`
  margin-bottom: 50px;
  max-width: 100%;
  object-fit: none;
`;

export const Content = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 50px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const Btn = styled.button`
  width: 180px;
  height: 45px;
  border-radius: 5px;
  margin: 0px 10px;
  background-color: white;
  font-size: 16px;
  font-weight: 400;
  /* box-shadow: 1px 1px 1px 1px; */
`;

export const YouTube = styled(ReactPlayer)`
  margin: auto;
`;
export const LikeBoxs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 150px;
`;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;
export const Like = styled(LikeOutlined)`
  color: #ffd600;
  font-size: 28px;
  cursor: pointer;
  :hover {
    font-size: 30px;
  }
`;
export const DisLike = styled(DislikeOutlined)`
  color: #828282;
  font-size: 28px;
  cursor: pointer;
  :hover {
    font-size: 30px;
  }
`;
export const LikeBoxText = styled.span`
  text-align: center;
`;
