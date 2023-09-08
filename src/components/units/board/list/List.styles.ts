import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const PostList = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  cursor: pointer;

  &:hover span {
    color: red;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Num = styled.span`
  width: 10%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const HeaderNum = styled.span`
  width: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Title = styled.span`
  width: 45%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const HeaderTitle = styled.span`
  width: 45%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Writer = styled.span`
  width: 20%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const HeaderWriter = styled.span`
  width: 20%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Date = styled.span`
  width: 25%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const HeaderDate = styled.span`
  width: 25%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const BtnWrapper = styled.div`
  width: 1200px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const RegBtn = styled.button`
  padding: 10px 20px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  font-size: 16px;
  font-weight: bold;
`;
