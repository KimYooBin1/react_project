import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff4f4;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LoginBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: orange;
  border: 2px solid orange;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

export const SignBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: orange;
  border: 2px solid orange;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

export const UserBox = styled.div`
  width: 260px;
  aspect-ratio: 1;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

export const ProfileImg = styled.img`
  scale: 0.8;
`;

export const ProfileInfoBox = styled.div`
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileInfoText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ProfileBtn = styled.div`
  height: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: lightgray;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  transition: all 0.4s;

  :hover {
    background-color: orange;
    color: white;
  }
`;
