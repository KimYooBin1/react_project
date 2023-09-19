import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 400px;
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
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;
`;

export const BestBoardWrapper = styled.div`
  border: 1px solid lightgray;
  width: 23%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s;

  box-shadow: 0px 4px 50px 0px #00000033;
  cursor: pointer;

  :hover {
    box-shadow: 0px 4px 10px 0px orange;
    scale: 1.05;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
export const BoardTextInfoBox = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BoardPickCount = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BestBoardName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const BestBoardPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
