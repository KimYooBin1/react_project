import styled from "@emotion/styled";
import type { IPageProps } from "./index.type";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 100px;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageCursor = styled.span`
  cursor: pointer;
  font-size: 18px;
  :hover {
    color: orange;
  }
`;

export const PageNumber = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  font-size: 18px;
  color: ${(props: IPageProps) => (props.isActive ? "orange" : "black")};
  text-decoration: ${(props: IPageProps) =>
    props.isActive ? "underline" : ""};
  font-weight: ${(props: IPageProps) => (props.isActive ? "700" : "")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
`;

export const CurrentPageNumber = styled.span`
  margin: 0px 10px;
  font-size: 18px;
  color: orange;
  text-decoration: underline;
  font-weight: 700;
`;
