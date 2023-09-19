import type { ChangeEvent } from "react";
import * as info from "./search.styled";
import type { ISearch } from "./search.type";
import _ from "lodash";
import { Calendar } from "../calendar/calendar";

export default function Search(props: ISearch): JSX.Element {
  const getDebounce = _.debounce((value) => {
    props.SetKeyword(value);
    void props.refetch({ page: 1, search: value });
    void props.refetchBoardsCount?.({ search: value });
  }, 500);
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <info.Wrapper>
      <info.SearchInput
        type="text"
        placeholder=" 제목을 검색해주세요."
        onChange={onChangeInput}
      />
      {typeof props.refetchBoardsCount !== "undefined" ? (
        <Calendar
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
        />
      ) : (
        <></>
      )}
    </info.Wrapper>
  );
}
