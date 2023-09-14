import styled from "@emotion/styled";
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 600px;
  /* height: 1715px; */
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
  box-shadow: 0px 4px 50px 0px #00000033;
  margin-bottom: 150px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`;

export const TitleBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const SignUpSpan = styled.span`
  color: blue;
  cursor: pointer;
`;

export const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  padding: 0px 20px;
  font-size: 18px;
`;

export const SaveInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const SaveInfoCheck = styled.input`
  margin-right: 10px;
`;

export const SubmitBtn = styled.button`
  width: 300px;
  height: 50px;
  background-color: orange;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 5px;
`;
