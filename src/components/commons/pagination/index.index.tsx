import type { IPagination } from "./index.type";
import * as S from "./index.styled";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
export default function Pagination(props: IPagination): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [lastPage, setLastPage] = useState(10);
  useEffect(() => {
    if (typeof props.count !== "undefined") {
      setLastPage(
        Math.ceil((props.count ?? 10) / 10)
      );
    }
  }, [props]);

  const [currentPage, setCurrentPage] = useState(1);
  const onClickPageNumber =
    (currentPage: number) =>
    (event: MouseEvent<HTMLSpanElement>): void => {
      props.refetch({ page: currentPage });
      setCurrentPage(currentPage);
    };

  const onClickUpPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setCurrentPage(startPage + 10);
      props.refetch({ page: startPage + 10 });
    }
  };
  const onClickDownPage = (): void => {
    if (startPage !== 1) {
      setStartPage((prev) => prev - 10);
      setCurrentPage(startPage - 10);
      props.refetch({ page: startPage - 10 });
    }
  };

  return (
    <S.Wrapper>
      <S.PageNumberWrapper>
        <S.PageCursor onClick={onClickDownPage}>{"<"}</S.PageCursor>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <S.PageNumber
                key={index + startPage}
                onClick={onClickPageNumber(index + startPage)}
                isActive={startPage + index === currentPage}
              >
                {index + startPage}
              </S.PageNumber>
            )
        )}
        <S.PageCursor onClick={onClickUpPage}>{">"}</S.PageCursor>
      </S.PageNumberWrapper>
    </S.Wrapper>
  );
}
