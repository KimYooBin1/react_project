import * as info from "./search.styled";
import type { ISearchUI } from "./search.type";
import { Space } from "antd";
export default function SearchUI(props: ISearchUI): JSX.Element {
  return (
    <info.Wrapper>
      <info.SearchInput
        type="text"
        placeholder=" 제목을 검색해주세요."
        onChange={props.onChangeInput}
      />

      <Space direction="vertical" size={12}>
        <info.SearchDate
          presets={props.rangePresets}
          onChange={props.onRangeChange}
        />
      </Space>
    </info.Wrapper>
  );
}
