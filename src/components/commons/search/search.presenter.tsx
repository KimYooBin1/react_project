import * as info from "./search.styled";
import type { ISearchUI } from "./search.type";
export default function SearchUI(props: ISearchUI): JSX.Element {
  return (
    <info.Wrapper>
      <info.SearchInput
        type="text"
        placeholder=" 제목을 검색해주세요."
        onChange={props.onChangeInput}
      />
    </info.Wrapper>
  );
}
