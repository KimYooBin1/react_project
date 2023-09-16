import { useMoveToPage } from "../../../commons/hook/custom/useMoveToPage";
import { useQueryFetchBoardsOfTheBest } from "../../../commons/hook/query/useQueryFetchBoardsOfTheBest";
import * as info from "./bestBoard.styled";
// import { v4 as uuidv4 } from "uuid";
export default function BestBoard(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQueryFetchBoardsOfTheBest();
  return (
    <info.Wrapper>
      <info.Title>💕 인기글</info.Title>
      <info.BestBoardsWrapper>
        {data?.fetchBoardsOfTheBest.map((el, index) => (
          <info.BestBoardWrapper
            key={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            <info.BestBoardImg
              src={
                el.images !== undefined && el.images !== null
                  ? el.images[0] !== undefined
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/img/image.png"
                  : "/img/image.png"
              }
            />
            <info.BoardInfoBox>
              <info.BestBoardTitle>{el.title}</info.BestBoardTitle>
              <info.BestBoardWriter>{el.writer}</info.BestBoardWriter>
            </info.BoardInfoBox>
          </info.BestBoardWrapper>
        ))}
      </info.BestBoardsWrapper>
    </info.Wrapper>
  );
}
