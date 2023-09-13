import styled from "@emotion/styled";
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

export const ImgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImgDog = styled.img`
  width: 33%;
  height: 300px;
  object-fit: cover;
`;

export const Btn = styled.button`
  width: 200px;
  height: 50px;
  margin: auto;
  margin-top: 50px;
  background-color: orange;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: darkorange;
    width: 210px;
    height: 60px;
  }
`;
