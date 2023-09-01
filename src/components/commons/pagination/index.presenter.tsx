import type { IPaginationUI } from "./index.type";
import * as S from "./index.styled";
export default function PaginationUI(props: IPaginationUI): JSX.Element {
  return (
    <S.Wrapper>
      <S.PageNumberWrapper>
        <S.PageCursor onClick={props.onClickDownPage}>{"<"}</S.PageCursor>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.PageNumber
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPageNumber}
                isActive={props.startPage + index === props.currentPage}
              >
                {index + props.startPage}
              </S.PageNumber>
            )
        )}
        <S.PageCursor onClick={props.onClickUpPage}>{">"}</S.PageCursor>
      </S.PageNumberWrapper>
    </S.Wrapper>
  );
}
