import styled from "@emotion/styled";
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  width: 300px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 100px;
  margin-bottom: 150px;
`;

export const UserInfoTitle = styled.h2`
  margin-bottom: 30px;
`;

export const InfoImg = styled.img`
  height: 100px;
  aspect-ratio: 1;
  margin-bottom: 30px;
`;

export const InfoName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const InfoPoint = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: gray;
  margin-bottom: 60px;
`;

export const InfoMyShop = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;

export const InfoMyPoint = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;

export const InfoMyProfile = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;

export const BoardsWrapper = styled.div`
  width: 1200px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 100px;
  margin-bottom: 150px;
  border-left: 1px solid gray;
`;

export const HeaderNum = styled.span`
  width: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
export const HeaderTitle = styled.span`
  width: 45%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
export const HeaderPrice = styled.span`
  width: 20%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
export const HeaderDate = styled.span`
  width: 25%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
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
    color: orange;
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
  transition: all 0.4s;
`;
export const Title = styled.div`
  width: 45%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const Price = styled.span`
  width: 20%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  transition: all 0.4s;
`;
export const Date = styled.span`
  width: 25%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  transition: all 0.4s;
`;
