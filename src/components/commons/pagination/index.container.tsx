import { useState, type MouseEvent } from "react";
import type { IPagination } from "./index.type";
import PaginationUI from "./index.presenter";

export default function Pagination(props: IPagination): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(
    (props.dataBoardsCount?.fetchBoardsCount ?? 10) / 10
  );
  const [currentPage, setCurrentPage] = useState(1);
  const onClickPageNumber = (event: MouseEvent<HTMLSpanElement>): void => {
    props.refetch({ page: Number(event.currentTarget.id) });
    setCurrentPage(Number(event.currentTarget.id));
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
    <PaginationUI
      onClickPageNumber={onClickPageNumber}
      onClickUpPage={onClickUpPage}
      onClickDownPage={onClickDownPage}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
    />
  );
}
