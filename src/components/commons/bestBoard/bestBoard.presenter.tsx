import * as info from "./bestBoard.styled";
import type { IBestBoardUI } from "./bestBoard.type";
// import { v4 as uuidv4 } from "uuid";
export default function BestBoardUI(props: IBestBoardUI): JSX.Element {
  return (
    <info.Wrapper>
      <info.Title>💕 인기글</info.Title>
      <info.BestBoardsWrapper>
        {props.data?.fetchBoardsOfTheBest.map((el, index) => (
          <info.BestBoardWrapper
            key={el._id}
            onClick={props.onClickBestBoard(el._id)}
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
