import { useMoveToPage } from "../../../commons/hook/custom/useMoveToPage";
import { useQueryUsedFetchItemsOfTheBest } from "../../../commons/hook/query/useQueryFetchUsedItemsOfTheBest";
import * as info from "./bestItems.styled";
// import { v4 as uuidv4 } from "uuid";
export default function BestBoard(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQueryUsedFetchItemsOfTheBest();
  return (
    <info.Wrapper>
      <info.Title>💕 인기글</info.Title>
      <info.BestBoardsWrapper>
        {data?.fetchUseditemsOfTheBest.map((el, index) => (
          <info.BestBoardWrapper
            key={el._id}
            onClick={onClickMoveToPage(`/shopboards/${el._id}`)}
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
              <info.BoardTextInfoBox>
                <info.BestBoardName>{el.name}</info.BestBoardName>
                <info.BestBoardPrice>{el.price} 원</info.BestBoardPrice>
              </info.BoardTextInfoBox>
              <info.BoardPickCount>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "orange",
                    fontSize: "22px",
                  }}
                >
                  ❤
                </div>
                {el.pickedCount}
              </info.BoardPickCount>
            </info.BoardInfoBox>
          </info.BestBoardWrapper>
        ))}
      </info.BestBoardsWrapper>
    </info.Wrapper>
  );
}
