import SearchUI from "./search.presenter";
import _ from "lodash";
import type { ISearch } from "./search.type";
import type { ChangeEvent } from "react";
export default function Search(props: ISearch): JSX.Element {
  const getDebounce = _.debounce((value) => {
    props.SetKeyword(value);
    props.refetch({ page: 1, search: value });
    props.refetchBoardsCount({ search: value });
    console.log(value);
  }, 500);
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };
  return <SearchUI onChangeInput={onChangeInput} />;
}
