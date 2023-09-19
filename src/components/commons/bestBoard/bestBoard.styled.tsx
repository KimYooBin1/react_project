import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const BestBoardsWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;
`;

export const BestBoardWrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 20px;
  width: 20%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    border: 2px solid orange;
    scale: 1.1;
  }
  :hover div {
    color: orange;
  }
`;

export const BestBoardImg = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
export const BoardInfoBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const BestBoardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const BestBoardWriter = styled.div`
  font-size: 14px;
  color: gray;
`;
