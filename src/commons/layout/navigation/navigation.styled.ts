import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  background-color: orange;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: orange;
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-left: 1px solid white;
  border-right: 1px solid white;

  transition: all 0.5s;

  :hover {
    background-color: #ff9900;
    font-size: 20px;
  }
`;
